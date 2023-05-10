<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { onMounted, ref, onUnmounted, watch } from 'vue'
const { type } = useBreakpoints()

const playerWidth = 20
const playerHeight = 30
const playerSpeed = 1
type Player = {
  x: number
  y: number
  hp: number
}

type Canvas = {
  width: number
  height: number
}

const canvas: Canvas = { width: 300, height: 400 }

const player = ref<Player>({
  x: (canvas.width - playerWidth) / 2,
  y: canvas.height - playerHeight - 10,
  hp: 5
})

const live = ref(true)
type ControlsPressed = {
  up: boolean
  down: boolean
  left: boolean
  right: boolean
}
const controlsPressed = ref<ControlsPressed>({ up: false, down: false, left: false, right: false })
const controlKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'])

function onKeyDown(event: KeyboardEvent) {
  console.log('event ahppening', event)
  if (event.key in controlKeys) {
    event.preventDefault()
  }
  if (event.key === 'ArrowUp' || event.key === 'w') {
    controlsPressed.value.up = true
  }
  if (event.key === 'ArrowDown' || event.key === 's') {
    controlsPressed.value.down = true
  }
  if (event.key === 'ArrowLeft' || event.key === 'a') {
    controlsPressed.value.left = true
  }
  if (event.key === 'ArrowRight' || event.key === 'd') {
    controlsPressed.value.right = true
  }
}

function onKeyUp(event: KeyboardEvent) {
  if (event.key in controlKeys) {
    event.preventDefault()
  }
  if (event.key === 'ArrowUp' || event.key === 'w') {
    controlsPressed.value.up = false
  }
  if (event.key === 'ArrowDown' || event.key === 's') {
    controlsPressed.value.down = false
  }
  if (event.key === 'ArrowLeft' || event.key === 'a') {
    controlsPressed.value.left = false
  }
  if (event.key === 'ArrowRight' || event.key === 'd') {
    controlsPressed.value.right = false
  }
}

function update() {
  if (controlsPressed.value.up && player.value.y - playerSpeed > 0) {
    player.value.y -= playerSpeed
  }
  if (controlsPressed.value.down && player.value.y + playerSpeed + playerHeight < canvas.height) {
    player.value.y += playerSpeed
  }
  if (controlsPressed.value.left && player.value.x - playerSpeed > 0) {
    player.value.x -= playerSpeed
  }
  if (controlsPressed.value.right && player.value.x + playerSpeed + playerWidth < canvas.width) {
    player.value.x += playerSpeed
  }
}

let updateHandler = ref<number | null>(null)
watch(live, () => {
  if (!live.value) {
    if (!updateHandler.value) return
    clearInterval(updateHandler.value)
  } else {
    updateHandler.value = setInterval(update, 10)
  }
})

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
  updateHandler.value = setInterval(update, 10)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('keyup', onKeyUp)
  if (updateHandler.value) clearInterval(updateHandler.value)
})
</script>

<template>
  <main :class="type">
    <div class="col d-flex justify-content-center">
      <div class="game-viewport">
        <svg :height="canvas.height" :width="canvas.width">
          <rect
            class="player"
            :x="player.x"
            :y="player.y"
            :width="playerWidth"
            :height="playerHeight"
          ></rect>
        </svg>
      </div>
    </div>
    <div class="col controls">
      <div class="row d-flex justify-content-center">
        <div
          @mousedown="controlsPressed.up = true"
          @mouseup="controlsPressed.up = false"
          @touchstart.prevent="controlsPressed.up = true"
          @touchend.prevent="controlsPressed.up = false"
          class="justify-content-center align-items-center d-flex material-icons-outlined"
        >
          expand_less
        </div>
      </div>
      <div class="mx-2 d-flex justify-content-center">
        <div
          @mousedown="controlsPressed.left = true"
          @mouseup="controlsPressed.left = false"
          @touchstart.prevent="controlsPressed.left = true"
          @touchend.prevent="controlsPressed.left = false"
          class="mx-3 justify-content-center align-items-center d-flex material-icons-outlined"
        >
          chevron_left
        </div>
        <div
          @mousedown="controlsPressed.right = true"
          @mouseup="controlsPressed.right = false"
          @touchstart.prevent="controlsPressed.right = true"
          @touchend.prevent="controlsPressed.right = false"
          class="mx-3 justify-content-center align-items-center d-flex material-icons-outlined"
        >
          chevron_right
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div
          @mousedown="controlsPressed.down = true"
          @mouseup="controlsPressed.down = false"
          @touchstart.prevent="controlsPressed.down = true"
          @touchend.prevent="controlsPressed.down = false"
          class="justify-content-center align-items-center d-flex material-icons-outlined"
        >
          expand_more
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.controls .material-icons-outlined {
  cursor: pointer;
  user-select: none;
  border: 1px solid #66ccff;
  border-radius: 50%;
  width: 30px;
  font-size: 30px;
  height: 30px;
}
.game-viewport {
  background-color: black;
  border: 2px solid #66ccff;
  border-radius: 4px;
  width: 302px;
  height: 402px;
}
.player {
  fill: white;
}
</style>
