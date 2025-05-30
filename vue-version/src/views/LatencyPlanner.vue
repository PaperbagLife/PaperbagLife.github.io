<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const SVG_WIDTH = 1200
const SVG_HEIGHT = 800

function stringToSeed(str: string) {
  let hash = 2176
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

function randomInt(min: number, max: number, seed: string): number {
  const seedValue = stringToSeed(seed)
  const range = max - min + 1
  console.log(
    `Generating random number with seed: ${seed}`,
    Math.floor(((seedValue % range) + range) % range) + min
  )
  return Math.floor(((seedValue % range) + range) % range) + min
}

function generateRandomNumber(min: number, max: number) {
  const seed = `${new Date().toDateString()}`
  return randomInt(min, max, seed)
}

interface Switch {
  id: string
  layer: number
  x: number
  y: number
  slots: (Machine | null)[]
}

interface Machine {
  id: string
  name: string
  x: number
  y: number
  switchId?: string
  slotIndex?: number
}

interface Edge {
  from: string
  to: string
  latency: number
}

interface RequiredDelay {
  from: string
  to: string
  expectedDelay: number
  actualDelay?: number
}

// Game state
const switches = ref<Switch[]>([])
const availableMachines = ref<Machine[]>([])
const placedMachines = ref<Machine[]>([])
const edges = ref<Edge[]>([])
const requiredDelays = ref<RequiredDelay[]>([])
const solutionDelays = ref<RequiredDelay[]>([])

const svgElement = ref<SVGElement | null>(null)
const background = ref<SVGRectElement | null>(null)

// Drag state
const isDragging = ref(false)
const draggedMachine = ref<Machine | null>(null)
const dragOffset = ref({ x: 0, y: 0 })

// Game configuration
const LAYERS = generateRandomNumber(2, 3) // Randomly choose between 2 or 3 layers
const SWITCHES_PER_LAYER = [
  generateRandomNumber(3, 4), // Bottom layer
  generateRandomNumber(2, 4), // Middle layer (if exists)
  generateRandomNumber(1, 3), // Top layer (if exists)
].slice(0, LAYERS) // Ensure we only take as many layers as defined
const SLOTS_PER_SWITCH = 2
const LAYER_HEIGHT = 200
const SWITCH_WIDTH = 200
const SWITCH_HEIGHT = 80
const MACHINE_SIZE = 40

// Initialize game
onMounted(() => {
  generateNewPuzzle()
})

function generateNewPuzzle() {
  generateNetwork()
  generateAndSolvePuzzle()
  resetToUnsolved()
}

function generateNetwork() {
  switches.value = []
  edges.value = []

  let switchId = 0

  // Generate switches layer by layer (bottom to top)
  for (let layer = 0; layer < LAYERS; layer++) {
    const switchCount = SWITCHES_PER_LAYER[layer]
    const layerY = 500 - layer * LAYER_HEIGHT
    const spacing = (SVG_WIDTH - 200) / (switchCount + 1)

    for (let i = 0; i < switchCount; i++) {
      const x = 100 + spacing * (i + 1)
      switches.value.push({
        id: `switch-${switchId++}`,
        layer,
        x,
        y: layerY,
        slots: new Array(layer === 0 ? SLOTS_PER_SWITCH : 0).fill(null),
      })
    }
  }

  // Generate edges between adjacent layers
  for (let layer = 0; layer < LAYERS - 1; layer++) {
    const currentLayerSwitches = switches.value.filter((s) => s.layer === layer)
    const nextLayerSwitches = switches.value.filter((s) => s.layer === layer + 1)

    currentLayerSwitches.forEach((currentSwitch, i) => {
      nextLayerSwitches.forEach((nextSwitch, j) => {
        edges.value.push({
          from: currentSwitch.id,
          to: nextSwitch.id,
          latency: randomInt(
            10,
            59,
            `${generateRandomNumber(i, 1000)}-${generateRandomNumber(j, 1000)}`
          ), // 10-59ms
        })
      })
    })
  }
}

function generateAndSolvePuzzle() {
  const machineCount = generateRandomNumber(3, 5)
  const bottomSwitches = switches.value.filter((s) => s.layer === 0)

  // Create machines
  const machines: Machine[] = []
  for (let i = 0; i < machineCount; i++) {
    machines.push({
      id: `machine-${i}`,
      name: `M${i + 1}`,
      x: 0,
      y: 0,
    })
  }

  // Randomly place machines in slots to create a solution
  const allSlots: { switchId: string; slotIndex: number }[] = []
  bottomSwitches.forEach((sw) => {
    for (let i = 0; i < sw.slots.length; i++) {
      allSlots.push({ switchId: sw.id, slotIndex: i })
    }
  })

  let shuffledSlots: { switchId: string; slotIndex: number }[] = []

  if (machines.length === 2 && allSlots.length > 2) {
    // Try to pick two slots that are not adjacent (not same switch and not adjacent slotIndex)
    let found = false
    for (let i = 0; i < allSlots.length; i++) {
      for (let j = i + 1; j < allSlots.length; j++) {
        const a = allSlots[i]
        const b = allSlots[j]
        // Not same switch, or if same switch, not adjacent slot
        if (a.switchId !== b.switchId || Math.abs(a.slotIndex - b.slotIndex) > 1) {
          shuffledSlots = [a, b]
          found = true
          break
        }
      }
      if (found) break
    }
    // Fallback: if not found, just pick any two
    if (!found) {
      shuffledSlots = [allSlots[0], allSlots[1]]
    }
  } else {
    shuffledSlots = [...allSlots].sort(() => generateRandomNumber(0, 100))
  }

  // --- TEMPORARILY PLACE MACHINES ---
  machines.forEach((machine, index) => {
    if (index < shuffledSlots.length) {
      const slot = shuffledSlots[index]
      const switchObj = switches.value.find((s) => s.id === slot.switchId)!
      const slotX =
        switchObj.x -
        SWITCH_WIDTH / 2 +
        (SWITCH_WIDTH / (SLOTS_PER_SWITCH + 1)) * (slot.slotIndex + 1)
      const slotY = switchObj.y + SWITCH_HEIGHT / 2 + 30

      machine.x = slotX
      machine.y = slotY
      machine.switchId = slot.switchId
      machine.slotIndex = slot.slotIndex

      switchObj.slots[slot.slotIndex] = { ...machine }
    }
  })
  // Store the solution machines as available for the player
  availableMachines.value = machines
  // --- CALCULATE DELAYS WHILE MACHINES ARE "PLACED" ---
  requiredDelays.value = []
  solutionDelays.value = []
  // Generate all possible unique machine pairs (i < j)
  const allPairs: { from: string; to: string; actualDelay: number }[] = []
  for (let i = 0; i < machines.length; i++) {
    for (let j = i + 1; j < machines.length; j++) {
      const fromMachine = machines[i]
      const toMachine = machines[j]
      const actualDelay = calculateActualDelay(fromMachine.id, toMachine.id)
      if (actualDelay !== null && actualDelay !== Infinity && actualDelay > 0) {
        allPairs.push({
          from: fromMachine.id,
          to: toMachine.id,
          actualDelay,
        })
      }
    }
  }

  // Shuffle allPairs and pick 3-5 pairs
  const shuffledPairs = allPairs.sort(() => generateRandomNumber(0, 100))
  const numPairs = generateRandomNumber(3, 5)
  const selectedPairs = shuffledPairs.slice(0, numPairs)

  selectedPairs.forEach((pair) => {
    const delayReq = {
      from: pair.from,
      to: pair.to,
      expectedDelay: pair.actualDelay,
    }
    requiredDelays.value.push(delayReq)
    solutionDelays.value.push({ ...delayReq })
  })

  // --- REMOVE MACHINES FROM SLOTS (RESET TO UNSOLVED) ---
  bottomSwitches.forEach((sw) => {
    sw.slots.fill(null)
  })
  machines.forEach((machine, index) => {
    machine.x = 100 + index * 80
    machine.y = 50
    delete machine.switchId
    delete machine.slotIndex
  })

  // Store the solution machines as available for the player
  availableMachines.value = machines.map((m) => ({
    id: m.id,
    name: m.name,
    x: m.x,
    y: m.y,
  }))
}

function resetToUnsolved() {
  // Clear all machine placements
  switches.value.forEach((sw) => {
    if (sw.layer === 0) {
      sw.slots.fill(null)
    }
  })

  placedMachines.value = []

  // Reset available machines to top area
  availableMachines.value.forEach((machine, index) => {
    machine.x = 100 + index * 80
    machine.y = 50
    delete machine.switchId
    delete machine.slotIndex
  })
}

function calculateActualDelay(fromMachineId: string, toMachineId: string): number | null {
  const fromMachine = [...availableMachines.value, ...placedMachines.value].find(
    (m) => m.id === fromMachineId
  )
  const toMachine = [...availableMachines.value, ...placedMachines.value].find(
    (m) => m.id === toMachineId
  )

  if (!fromMachine?.switchId || !toMachine?.switchId) return null

  const fromSwitch = switches.value.find((s) => s.id === fromMachine.switchId)
  const toSwitch = switches.value.find((s) => s.id === toMachine.switchId)

  if (!fromSwitch || !toSwitch) return null

  return findShortestPath(fromSwitch.id, toSwitch.id)
}

function findShortestPath(fromSwitchId: string, toSwitchId: string): number {
  if (fromSwitchId === toSwitchId) return 0

  const distances = new Map<string, number>()
  const visited = new Set<string>()
  const queue = [{ switchId: fromSwitchId, distance: 0 }]

  distances.set(fromSwitchId, 0)

  while (queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance)
    const { switchId: currentId, distance } = queue.shift()!

    if (visited.has(currentId)) continue
    visited.add(currentId)

    if (currentId === toSwitchId) return distance

    const connectedEdges = edges.value.filter((e) => e.from === currentId || e.to === currentId)

    for (const edge of connectedEdges) {
      const neighborId = edge.from === currentId ? edge.to : edge.from
      const newDistance = distance + edge.latency

      if (!distances.has(neighborId) || newDistance < distances.get(neighborId)!) {
        distances.set(neighborId, newDistance)
        queue.push({ switchId: neighborId, distance: newDistance })
      }
    }
  }

  return Infinity
}

const actualDelays = computed(() => {
  return requiredDelays.value.map((req) => ({
    ...req,
    actualDelay: calculateActualDelay(req.from, req.to),
  }))
})

const gameWon = computed(() => {
  return actualDelays.value.every(
    (delay) => delay.actualDelay !== null && delay.actualDelay === delay.expectedDelay
  )
})

function onPointerDown(event: PointerEvent) {
  const target = event.target as Element
  const machineElement = target.closest('.draggable-machine')

  if (!machineElement) return

  const machineId = machineElement.getAttribute('data-machine-id')
  if (!machineId) return

  // Find the machine
  let machine = availableMachines.value.find((m) => m.id === machineId)

  if (!machine) {
    machine = placedMachines.value.find((m) => m.id === machineId)

    if (machine) {
      // Remove from placed machines and switch slot
      placedMachines.value = placedMachines.value.filter((m) => m.id !== machineId)
      const switchObj = switches.value.find((s) => s.id === machine!.switchId)
      if (switchObj && machine!.slotIndex !== undefined) {
        switchObj.slots[machine!.slotIndex] = null
      }

      // Add to available machines
      availableMachines.value.push({
        id: machine.id,
        name: machine.name,
        x: machine.x,
        y: machine.y,
      })
    }
  }

  if (machine) {
    const rect = (event.target as SVGElement).closest('svg')!.getBoundingClientRect()
    const mouseX = (event.clientX - rect.left) * (SVG_WIDTH / rect.width)
    const mouseY = (event.clientY - rect.top) * (SVG_HEIGHT / rect.height)

    isDragging.value = true
    draggedMachine.value = { ...machine }
    dragOffset.value = { x: mouseX - machine.x, y: mouseY - machine.y }
  }
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging.value || !draggedMachine.value || !background.value) return

  const rect = background.value.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  const scaleX = SVG_WIDTH / rect.width
  const scaleY = SVG_HEIGHT / rect.height

  draggedMachine.value.x = mouseX * scaleX
  draggedMachine.value.y = mouseY * scaleY
}

function onPointerUp(event: PointerEvent) {
  if (!isDragging.value || !draggedMachine.value || !background.value) return

  const rect = background.value.getBoundingClientRect()
  const mouseX = event.clientX - rect.left
  const mouseY = event.clientY - rect.top
  const scaleX = SVG_WIDTH / rect.width
  const scaleY = SVG_HEIGHT / rect.height

  const x = mouseX * scaleX
  const y = mouseY * scaleY

  // Check if dropping on a switch slot
  let placed = false

  for (const switchObj of switches.value.filter((s) => s.layer === 0)) {
    for (let slotIndex = 0; slotIndex < switchObj.slots.length; slotIndex++) {
      const slotX =
        switchObj.x -
        SWITCH_WIDTH / 2 +
        (SWITCH_WIDTH / (switchObj.slots.length + 1)) * (slotIndex + 1)
      const slotY = switchObj.y + SWITCH_HEIGHT / 2 + 30

      if (Math.abs(x - slotX) < 40 && Math.abs(y - slotY) < 40) {
        // Remove machine from available machines
        availableMachines.value = availableMachines.value.filter(
          (m) => m.id !== draggedMachine.value!.id
        )

        // If slot is occupied, move existing machine back to available
        if (switchObj.slots[slotIndex]) {
          const existingMachine = switchObj.slots[slotIndex]!
          availableMachines.value.push({
            id: existingMachine.id,
            name: existingMachine.name,
            x: 100 + availableMachines.value.length * 80,
            y: 50,
          })
          placedMachines.value = placedMachines.value.filter((m) => m.id !== existingMachine.id)
        }

        // Place machine in slot
        const placedMachine = {
          id: draggedMachine.value.id,
          name: draggedMachine.value.name,
          x: slotX,
          y: slotY,
          switchId: switchObj.id,
          slotIndex,
        }

        switchObj.slots[slotIndex] = placedMachine
        placedMachines.value.push(placedMachine)

        placed = true
        break
      }
    }
    if (placed) break
  }

  // If not placed on a slot, return to available machines
  if (!placed) {
    const machine = availableMachines.value.find((m) => m.id === draggedMachine.value!.id)
    if (machine) {
      machine.x = 100 + availableMachines.value.indexOf(machine) * 80
      machine.y = 50
      delete machine.switchId
      delete machine.slotIndex
    }
  }

  isDragging.value = false
  draggedMachine.value = null
}
</script>

<template>
  <div class="overflow-auto">
    <!-- Control Panel -->
    <div class="p-4 bg-gray-100 border-b">
      <div class="flex gap-4 items-center">
        <div v-if="gameWon" class="px-4 py-2 bg-green-500 text-white rounded font-bold">
          🎉 SOLVED! 🎉
        </div>
      </div>

      <!-- Required Delays -->
      <div class="mt-4">
        <h3 class="font-bold mb-2">Required Delays:</h3>
        <div class="space-y-1">
          <div
            v-for="delay in actualDelays"
            :key="`${delay.from}-${delay.to}`"
            :class="[
              'p-2 rounded',
              delay.actualDelay === delay.expectedDelay ? 'bg-green-100' : 'bg-red-100',
            ]"
          >
            {{
              availableMachines.find((m) => m.id === delay.from)?.name ||
              placedMachines.find((m) => m.id === delay.from)?.name
            }}
            →
            {{
              availableMachines.find((m) => m.id === delay.to)?.name ||
              placedMachines.find((m) => m.id === delay.to)?.name
            }}: {{ delay.expectedDelay }}ms
            <span v-if="delay.actualDelay !== null" class="ml-2">
              (actual: {{ delay.actualDelay === Infinity ? '∞' : delay.actualDelay }}ms)
            </span>
            <span v-else class="ml-2 text-gray-500"> (not connected) </span>
          </div>
        </div>
      </div>
    </div>

    <svg
      ref="svgElement"
      class="svg-container mx-auto my-auto"
      :viewBox="`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`"
      preserveAspectRatio="xMidYMid meet"
      @pointerdown.prevent="onPointerDown"
      @pointermove.prevent="onPointerMove"
      @pointerup.prevent="onPointerUp"
    >
      <!-- White background -->
      <rect ref="background" width="100%" height="100%" fill="white" />
      <!-- Grid lines for layers -->
      <g stroke="#e2e8f0" stroke-width="1" opacity="0.5">
        <line
          v-for="layer in LAYERS"
          :key="layer"
          :y1="SVG_WIDTH / 2 - (layer - 1) * LAYER_HEIGHT"
          :y2="SVG_WIDTH / 2 - (layer - 1) * LAYER_HEIGHT"
          :x1="50"
          :x2="SVG_WIDTH - 50"
        />
      </g>

      <!-- Edges -->
      <g stroke="#94a3b8" stroke-width="2" opacity="0.6">
        <line
          v-for="edge in edges"
          :key="`${edge.from}-${edge.to}`"
          :x1="switches.find((s) => s.id === edge.from)?.x"
          :y1="switches.find((s) => s.id === edge.from)?.y"
          :x2="switches.find((s) => s.id === edge.to)?.x"
          :y2="switches.find((s) => s.id === edge.to)?.y"
        />
      </g>

      <!-- Edge labels -->
      <g fill="#64748b" text-anchor="middle" dominant-baseline="middle" font-size="12">
        <text
          v-for="edge in edges"
          :key="`label-${edge.from}-${edge.to}`"
          :x="(switches.find(s => s.id === edge.from)!.x + switches.find(s => s.id === edge.to)!.x) / 2"
          :y="(switches.find(s => s.id === edge.from)!.y + switches.find(s => s.id === edge.to)!.y) / 2 - 10"
        >
          {{ edge.latency }}ms
        </text>
      </g>

      <!-- Switches -->
      <g v-for="switchObj in switches" :key="switchObj.id">
        <rect
          :x="switchObj.x - SWITCH_WIDTH / 2"
          :y="switchObj.y - SWITCH_HEIGHT / 2"
          :width="SWITCH_WIDTH"
          :height="SWITCH_HEIGHT"
          fill="#3b82f6"
          stroke="#1e40af"
          stroke-width="2"
          rx="8"
        />
        <text
          :x="switchObj.x"
          :y="switchObj.y"
          fill="white"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="14"
          font-weight="bold"
        >
          {{ switchObj.id.replace('switch-', 'S') }}
        </text>

        <!-- Machine slots for bottom layer switches -->
        <g v-if="switchObj.layer === 0">
          <circle
            v-for="(slot, index) in switchObj.slots"
            :key="index"
            :cx="
              switchObj.x -
              SWITCH_WIDTH / 2 +
              (SWITCH_WIDTH / (switchObj.slots.length + 1)) * (index + 1)
            "
            :cy="switchObj.y + SWITCH_HEIGHT / 2 + 30"
            r="25"
            fill="#e2e8f0"
            stroke="#94a3b8"
            stroke-width="2"
          />
          <text
            :x="
              switchObj.x -
              SWITCH_WIDTH / 2 +
              (SWITCH_WIDTH / (switchObj.slots.length + 1)) * (index + 1)
            "
            :y="switchObj.y + SWITCH_HEIGHT / 2 + 60"
            v-for="(slot, index) in switchObj.slots"
            :key="`slot-label-${index}`"
            fill="#64748b"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="10"
          >
            Slot {{ index + 1 }}
          </text>
        </g>
      </g>

      <!-- Available machines -->
      <g
        v-for="machine in availableMachines"
        :key="machine.id"
        class="draggable-machine"
        :data-machine-id="machine.id"
      >
        <circle
          :cx="machine.x"
          :cy="machine.y"
          :r="MACHINE_SIZE / 2"
          fill="#10b981"
          stroke="#047857"
          stroke-width="2"
          cursor="grab"
        />
        <text
          :x="machine.x"
          :y="machine.y"
          fill="white"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="14"
          font-weight="bold"
        >
          {{ machine.name }}
        </text>
      </g>

      <!-- Placed machines -->
      <g
        v-for="machine in placedMachines"
        :key="`placed-${machine.id}`"
        class="draggable-machine"
        :data-machine-id="machine.id"
      >
        <circle
          :cx="machine.x"
          :cy="machine.y"
          :r="MACHINE_SIZE / 2"
          fill="#10b981"
          stroke="#047857"
          stroke-width="2"
          cursor="grab"
        />
        <text
          :x="machine.x"
          :y="machine.y"
          fill="white"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="14"
          font-weight="bold"
        >
          {{ machine.name }}
        </text>
      </g>

      <!-- Dragged machine -->
      <g v-if="isDragging && draggedMachine" class="dragged-machine">
        <circle
          :cx="draggedMachine.x"
          :cy="draggedMachine.y"
          :r="MACHINE_SIZE / 2"
          fill="#10b981"
          stroke="#047857"
          stroke-width="2"
          opacity="0.8"
        />
        <text
          :x="draggedMachine.x"
          :y="draggedMachine.y"
          fill="white"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="14"
          font-weight="bold"
        >
          {{ draggedMachine.name }}
        </text>
      </g>

      <!-- Instructions -->
      <text x="50" y="1050" fill="#374151" font-size="16">
        Drag machines to switch slots to match the required delays
      </text>
    </svg>
  </div>
</template>

<style scoped>
svg text {
  pointer-events: none;
  user-select: none;
}

.draggable-machine {
  cursor: grab;
}

.draggable-machine:active {
  cursor: grabbing;
}
</style>
