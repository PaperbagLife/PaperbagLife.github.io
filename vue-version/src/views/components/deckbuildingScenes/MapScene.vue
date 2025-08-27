<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { useGameState } from '@/util/deckbuilding/gameManager'
import { SVG_HEIGHT, SVG_WIDTH } from '@/util/deckbuilding/consts'
import { type Enemy } from '@/util/deckbuilding/gameManager'
import OverlayComponent from '../deckbuildingComponents/OverlayComponent.vue'

const { gameState, climbNextFloor } = useGameState()

onMounted(() => {
  window.scrollTo(0, 1)
})

const svgElement = ref<SVGSVGElement | null>(null)
const playerX = ref(0)
const playerY = ref(0)
const playerVisible = ref(false)

const showDeckOverlay = ref(false)

const padding = 50
// Hexagon properties
const HEX_RADIUS = 50 // Radius of each hexagon
const HEX_HORIZONTAL_SCALE = 1.5 // Default scale factor for horizontal stretching

// Compute hexagon positions based on floors
const hexagons = computed(() => {
  const availableWidth = SVG_WIDTH - padding * 2
  const effectiveWidth = availableWidth / (gameState.floors.length + 1)
  const startX = effectiveWidth
  const availableHeight = SVG_HEIGHT * 0.8
  const effectiveHeight = availableHeight / (gameState.floors.length + 1)
  const startY = SVG_HEIGHT - effectiveHeight
  return gameState.floors.map((_, index) => {
    const x = startX + index * effectiveWidth
    const y = startY - index * effectiveHeight
    return { x, y }
  })
})

// Function to generate points for a hexagon
const generateHexPoints = (x: number, y: number, radius: number, horizontalScale: number) => {
  const points = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i
    const px = x + radius * horizontalScale * Math.cos(angle) // Scale x-coordinates
    const py = y + radius * Math.sin(angle)
    points.push(`${px},${py}`)
  }
  return points.join(' ')
}

function onMouseUp(e: PointerEvent) {
  if (!(e.target instanceof Element)) {
    return
  }
  const target = e.target.closest<SVGGElement>('.climb-button')
  if (target) {
    console.log('Climb button clicked')
    playerX.value = hexagons.value[gameState.floorIndex + 1].x
    playerY.value = hexagons.value[gameState.floorIndex + 1].y
    setTimeout(climbNextFloor, 2000)
  }
}

onMounted(() => {
  nextTick(() => {
    playerX.value = hexagons.value[gameState.floorIndex].x
    playerY.value = hexagons.value[gameState.floorIndex].y
    playerVisible.value = true
  })
})
</script>

<template>
  <svg
    ref="svgElement"
    class="svg-container mx-auto my-auto"
    :viewBox="`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`"
    preserveAspectRatio="xMidYMid meet"
    @pointerup.prevent="onMouseUp"
  >
    <!-- White background -->
    <rect ref="background" width="100%" height="100%" fill="white" />
    <!-- Render hexagonal tiles -->
    <g v-for="(hex, index) in hexagons" :key="index">
      <polygon
        :points="generateHexPoints(hex.x, hex.y, HEX_RADIUS, HEX_HORIZONTAL_SCALE)"
        fill="lightblue"
        stroke="black"
        stroke-width="2"
      />
      <circle :cx="hex.x" :cy="hex.y" r="5" fill="black"></circle>
      <text :x="hex.x" :y="hex.y" text-anchor="middle" dominant-baseline="middle" font-size="20">
        {{ (gameState.floors[index] as Enemy)?.name ?? 'bruh' }}
        {{ index }}
      </text>
    </g>
    <!-- Player tile-->
    <g
      class="player-icon"
      v-if="playerVisible"
      :style="{
        transform: `translate(${playerX}px, ${playerY}px)`,
        transition: 'transform 1s ease',
      }"
    >
      <circle r="10" fill="red" stroke="black" stroke-width="2" />
    </g>

    <g class="climb-button">
      <polygon
        :points="
          generateHexPoints(
            SVG_WIDTH / 2,
            SVG_HEIGHT - padding,
            HEX_RADIUS * 1,
            HEX_HORIZONTAL_SCALE * 2
          )
        "
        fill="lightgreen"
        stroke="black"
        stroke-width="2"
      />
      <text
        class="climb-button-text"
        :x="SVG_WIDTH / 2"
        :y="SVG_HEIGHT - padding"
        :font-size="HEX_RADIUS * 0.8"
        fill="black"
      >
        Climb
      </text>
    </g>
    <OverlayComponent
      @close-overlay="showDeckOverlay = false"
      @open-overlay="showDeckOverlay = true"
      :show-cards="showDeckOverlay"
      :cards="gameState.deck"
    />
  </svg>
</template>

<style lang="scss" scoped>
.svg-container {
  width: 100%;
  max-height: 100dvh;
  height: 100vh;
  display: block;
  touch-action: none;
}
.player-icon {
  transition: transform 1s ease;
}
.climb-button {
  cursor: pointer;
}
.climb-button-text {
  font-size: 40px;
  pointer-events: none;
  text-anchor: middle;
  dominant-baseline: middle;
}
</style>
