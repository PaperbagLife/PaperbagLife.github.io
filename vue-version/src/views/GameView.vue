<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { onMounted, ref, onUnmounted, watch } from 'vue'
const { type } = useBreakpoints()

const live = ref(true)
const gameOver = ref(false)

const playerWidth = 20
const playerHeight = 30
const playerSpeed = 1
const playerAttackInterval = 40
const playerBulletSpeed = 1.3
const playerInvulInterval = 80
let playerAttackCounter = 0

let enemySpawnInterval = 300
let enemySpawnTimer = 0
type Player = {
  x: number
  y: number
  hp: number
  invulTimer: number
}

type Canvas = {
  width: number
  height: number
}

type Enemy = {
  x: number
  y: number
  ySpeed: number
  hp: number
  width: number
  height: number
  color: string
  attackInterval: number
  attackCounter: number
}

type Bullet = {
  x: number
  y: number
  xVel: number
  yVel: number
  color: string
  timestamp: number
}

// Objects in game
const liveEnemies = ref<Enemy[]>([])
const playerBullets = ref<Bullet[]>([])
const enemyBullets = ref<Bullet[]>([])

let playerScore = 0

const canvas: Canvas = { width: 300, height: 400 }

const player = ref<Player>({
  x: (canvas.width - playerWidth) / 2,
  y: canvas.height - playerHeight - 10,
  hp: 5,
  invulTimer: 0
})

type ControlsPressed = {
  up: boolean
  down: boolean
  left: boolean
  right: boolean
}
const controlsPressed = ref<ControlsPressed>({ up: false, down: false, left: false, right: false })
const controlKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'])

function onKeyDown(event: KeyboardEvent) {
  if (event.key === ' ') {
    live.value = !live.value
  }
  if (controlKeys.has(event.key)) {
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
  if (controlKeys.has(event.key)) {
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

function handlePlayerMove() {
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

function takeDamage() {
  if (player.value.invulTimer > 0) {
    return
  }
  player.value.hp -= 1
  player.value.invulTimer = playerInvulInterval
}

function handlePlayerUpdate() {
  //Attack
  playerAttackCounter += 1
  if (playerAttackCounter > playerAttackInterval) {
    playerAttackCounter = 0
    playerBullets.value.push({
      x: player.value.x + playerWidth / 2,
      y: player.value.y,
      xVel: 0,
      yVel: -playerBulletSpeed,
      color: '#66ccff',
      timestamp: Date.now()
    })
  }
  if (player.value.invulTimer > 0) {
    player.value.invulTimer -= 1
  }
}

function handleEnemy() {
  // Spawn enemy?
  enemySpawnTimer += 1
  if (enemySpawnTimer >= enemySpawnInterval) {
    console.log('spawning enemy')
    const randomWidth = 20 + Math.random() * 10
    const randomEnemy: Enemy = {
      x: Math.max(randomWidth, Math.min(Math.random() * canvas.width, canvas.width - randomWidth)),
      y: -20,
      width: randomWidth,
      height: 20 + Math.random() * 10,
      ySpeed: 0.5 + Math.random() * 0.6,
      hp: 3 + Math.floor(Math.random() * 2),
      color: Math.random() > 0.5 ? '#a0d8b3' : '#9384d1',
      attackCounter: 0,
      attackInterval: 60 + Math.random() * 30
    }
    liveEnemies.value.push(randomEnemy)
    enemySpawnTimer = 0
    enemySpawnInterval = 250 + 200 * Math.random()
  }
  // Move enemy
  liveEnemies.value.forEach((enemy, i) => {
    const deadEnemy = new Set<number>()
    enemy.y += enemy.ySpeed
    enemy.attackCounter += 1
    if (enemy.attackCounter >= enemy.attackInterval) {
      const deltaX = player.value.x + playerWidth / 2 - (enemy.x + enemy.width / 2)
      const deltaY = player.value.y - (enemy.y + enemy.height)
      const hypo = Math.hypot(deltaX, deltaY)
      enemyBullets.value.push({
        x: enemy.x + enemy.width / 2,
        y: enemy.y + enemy.height,
        xVel: (deltaX / hypo) * playerBulletSpeed,
        yVel: (deltaY / hypo) * playerBulletSpeed,
        timestamp: Date.now(),
        color: '#ed2b2a'
      })
      enemy.attackCounter = 0
    }
    if (enemy.hp <= 0) {
      deadEnemy.add(i)
      playerScore += 1
    }
    if (enemy.y > canvas.height) {
      deadEnemy.add(i)
    }
    liveEnemies.value = liveEnemies.value.filter((_, i) => !deadEnemy.has(i))
  })
}

function collides(x: number, y: number, width: number, height: number, bullet: Bullet) {
  if (y + height > bullet.y - 1 && y < bullet.y + 1) {
    // check for x:
    if (x + width > bullet.x - 1 && x < bullet.x + 1) {
      return true
    }
  }
  return false
}

function handlePlayerBullets() {
  const deadBulletIdx = new Set<number>()
  playerBullets.value.forEach((bullet, i) => {
    bullet.x += bullet.xVel
    bullet.y += bullet.yVel
    if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
      deadBulletIdx.add(i)
      return
    }
    // Also handle collision
    liveEnemies.value.forEach((enemy) => {
      if (collides(enemy.x, enemy.y, enemy.width, enemy.height, bullet)) {
        deadBulletIdx.add(i)
        enemy.hp -= 1
      }
    })
  })
  playerBullets.value = playerBullets.value.filter((_, i) => !deadBulletIdx.has(i))
}

function handleEnemyBullets() {
  const deadBulletIdx = new Set()
  enemyBullets.value.forEach((bullet, i) => {
    bullet.x += bullet.xVel
    bullet.y += bullet.yVel
    if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
      deadBulletIdx.add(i)
    }
    if (collides(player.value.x, player.value.y, playerWidth, playerHeight, bullet)) {
      takeDamage()
      deadBulletIdx.add(i)
    }
  })
  enemyBullets.value = enemyBullets.value.filter((_, i) => !deadBulletIdx.has(i))
}

function update() {
  handlePlayerMove()
  handlePlayerUpdate()
  handleEnemy()
  handlePlayerBullets()
  handleEnemyBullets()
}

function resetGame() {
  player.value = {
    x: (canvas.width - playerWidth) / 2,
    y: canvas.height - playerHeight - 10,
    hp: 5,
    invulTimer: 0
  }
  playerScore = 0
  live.value = true
  gameOver.value = false
  liveEnemies.value = []
  playerBullets.value = []
  enemyBullets.value = []
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

watch(
  () => player.value.hp,
  (hp) => {
    if (hp <= 0) {
      live.value = false
      gameOver.value = true
    }
  }
)

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
    <div class="col d-flex justify-content-center player-score">
      Player Score: {{ playerScore }} Player HP: {{ player.hp }}
    </div>
    <div class="col justify-content-center restart-button-wrapper">
      <button
        v-if="gameOver"
        @click="resetGame"
        @touchend="resetGame"
        class="restart-button btn btn-dark"
      >
        Game Over! Start again?
      </button>
    </div>

    <div class="col d-flex justify-content-center">
      <div class="game-viewport">
        <svg :height="canvas.height" :width="canvas.width">
          <!--Player related-->
          <rect
            class="player"
            :class="player.invulTimer > 0 ? 'invulnerable' : ''"
            :x="player.x"
            :y="player.y"
            :width="playerWidth"
            :height="playerHeight"
          ></rect>
          <circle
            class="player-bullets"
            v-for="bullet in playerBullets"
            :key="`${bullet.timestamp}+${bullet.color}`"
            :style="{ '--color': bullet.color }"
            :cx="bullet.x"
            :cy="bullet.y"
            :r="2"
          ></circle>
          <!--Enemy Related-->
          <text x="10" y="10">hi</text>
          <g
            v-for="enemy in liveEnemies"
            :key="`${enemy.height} + ${enemy.width}`"
            :x="enemy.x"
            :y="enemy.y"
          >
            <rect
              :style="{ '--color': enemy.color }"
              class="enemy"
              :width="enemy.width"
              :height="enemy.height"
              :x="enemy.x"
              :y="enemy.y"
            ></rect>
            <text
              :x="enemy.x + enemy.width / 2"
              :y="enemy.y + enemy.height / 2"
              class="small hp-display"
            >
              {{ enemy.hp }}
            </text>
          </g>

          <circle
            class="player-bullets"
            v-for="bullet in enemyBullets"
            :key="`${bullet.timestamp}+${bullet.color}`"
            :style="{ '--color': bullet.color }"
            :cx="bullet.x"
            :cy="bullet.y"
            :r="2"
          ></circle>
        </svg>
      </div>
    </div>
    <div class="col controls" :class="type === 'xs' ? 'mt-2' : ''">
      <div v-if="type !== 'xs'" class="row d-flex justify-content-center hint">
        You can use WASD/Arrow Keys too
      </div>
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
          class="mx-5 justify-content-center align-items-center d-flex material-icons-outlined"
        >
          chevron_left
        </div>
        <div
          @mousedown="controlsPressed.right = true"
          @mouseup="controlsPressed.right = false"
          @touchstart.prevent="controlsPressed.right = true"
          @touchend.prevent="controlsPressed.right = false"
          class="mx-5 justify-content-center align-items-center d-flex material-icons-outlined"
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
.hp-display {
  dominant-baseline: middle;
  text-anchor: middle;
}
.restart-button-wrapper {
  display: flex;
  height: 0px;
}

.restart-button {
  z-index: 1;
  height: 40px;
  margin-top: 100px;
}

.player-bullets {
  fill: var(--color);
}
.enemy {
  fill: var(--color);
}
.player-score,
.hint {
  user-select: none;
}
.controls div {
  user-select: none;
}
.controls .material-icons-outlined {
  cursor: pointer;
  border: 1px solid #66ccff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 50px;
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
.player.invulnerable {
  stroke: gold;
  stroke-width: 3px;
}
</style>
