<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import powerupPNG from '../assets/game/img/powerup.png'

import {
  BOSS_COLOR,
  BULLET_SCREEN_PADDING,
  GENERIC_ENEMY_COLOR,
  PLAYER_HEIGHT,
  PLAYER_HIT_HEIGHT,
  PLAYER_HIT_WIDTH,
  PLAYER_WIDTH,
  POWERUP_BASE_SIZE,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  POWERUP_SIZE_FACTOR,
  type ControlsPressed
} from '../util/const'

import { leftWave, rightWave, bossWave } from '../util/levels'

import { Player, Bullet, Enemy, Powerup } from '../util/classes'

const { type } = useBreakpoints()
let ctx: null | CanvasRenderingContext2D = null

const powerupImage = new Image()
powerupImage.src = powerupPNG

export type Spawn = {
  interval: number
  enemies: Enemy[]
}

function collides(x: number, y: number, width: number, height: number, bullet: Bullet) {
  if (
    y + height / 2 > bullet.cy - bullet.height / 2 &&
    y - height / 2 < bullet.cy + bullet.height / 2
  ) {
    // check for x:
    if (
      x + width / 2 > bullet.cx - bullet.width / 2 &&
      x - width / 2 < bullet.cx + bullet.width / 2
    ) {
      return true
    }
  }
  return false
}

// const for gamestate
const paused = ref(false)
const gameOver = ref(false)

watch(gameOver, () => {
  if (gameOver.value) paused.value = true
})
const player = reactive(new Player(200, CANVAS_WIDTH / 2, CANVAS_HEIGHT - 30))
const playerScore = ref(0)

const enemies = ref<Enemy[]>([])

const playerBullets = ref<Bullet[]>([])
const enemyBullets = ref<Bullet[]>([])
const powerups = ref<Powerup[]>([])

const controlsPressed = ref<ControlsPressed>({ up: false, down: false, left: false, right: false })
const controlKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'])

const currentLevel = ref<Spawn[]>([...leftWave, ...rightWave, bossWave])
const currentInterval = ref(200)

function handleSpawn() {
  if (currentLevel.value.length === 0) return
  currentInterval.value -= 1
  if (currentInterval.value > 0) return
  const currentSpawn = currentLevel.value.shift()
  if (!currentSpawn) return
  currentInterval.value = currentSpawn.interval
  enemies.value.push(...currentSpawn.enemies)
}

function update() {
  if (paused.value || ctx == null) {
    return
  }
  handleSpawn()
  if (!player.isAlive()) {
    gameOver.value = true
  }
  // Handle movement
  player.handleMovement(controlsPressed.value)
  player.attack(playerBullets.value)
  enemies.value.forEach((enemy) => {
    enemy.handleMovement()
  })
  playerBullets.value.forEach((bullet) => bullet.update(enemies.value, player))
  enemyBullets.value.forEach((bullet) => bullet.update(enemies.value, player))
  // Handle collision
  const deadBulletIdx = new Set<number>()
  playerBullets.value.forEach((bullet, i) => {
    enemies.value.forEach((enemy) => {
      if (collides(enemy.cx, enemy.cy, enemy.width, enemy.height, bullet)) {
        enemy.hp -= 1
        bullet.delete = true
      }
    })

    if (bullet.delete) {
      deadBulletIdx.add(i)
    }
  })
  playerBullets.value = playerBullets.value.filter((_, i) => !deadBulletIdx.has(i))

  const deadEnemyBullet = new Set<number>()
  enemyBullets.value.forEach((bullet, i) => {
    if (collides(player.cx, player.cy, PLAYER_HIT_WIDTH, PLAYER_HIT_HEIGHT, bullet)) {
      player.hp -= 1
      bullet.delete = true
    }
    if (bullet.delete) {
      deadEnemyBullet.add(i)
    }
  })
  enemyBullets.value = enemyBullets.value.filter((_, i) => !deadEnemyBullet.has(i))

  const deadEnemyIdx = new Set<number>()
  enemies.value.forEach((enemy, i) => {
    if (enemy.hp <= 0) {
      deadEnemyIdx.add(i)
      playerScore.value += 1
      enemy.spawnPowerUp(powerups.value)
    }
    if (
      enemy.cx - enemy.width > CANVAS_WIDTH + BULLET_SCREEN_PADDING ||
      enemy.cx + enemy.width < -BULLET_SCREEN_PADDING
    ) {
      deadEnemyIdx.add(i)
    } else if (
      enemy.cy - enemy.height > CANVAS_HEIGHT + BULLET_SCREEN_PADDING ||
      enemy.cy + enemy.height < -BULLET_SCREEN_PADDING
    ) {
      deadEnemyIdx.add(i)
    }
  })
  enemies.value = enemies.value.filter((_, i) => !deadEnemyIdx.has(i))
  enemies.value.forEach((enemy) => {
    enemy.attack(enemy.cx, enemy.cy, enemyBullets.value, player)
  })

  const deadPowerups = new Set<number>()
  powerups.value.forEach((powerup, i) => {
    powerup.update()
    if (powerup.collidesWithPlayer(player.cx, player.cy)) {
      player.power += powerup.size
      powerup.delete = true
    }
    if (powerup.delete) {
      deadPowerups.add(i)
    }
  })
  powerups.value = powerups.value.filter((_, i) => !deadPowerups.has(i))

  // Logic handled, now draw the frame
  ctx.clearRect(
    -BULLET_SCREEN_PADDING,
    -BULLET_SCREEN_PADDING,
    CANVAS_WIDTH + BULLET_SCREEN_PADDING,
    CANVAS_HEIGHT + BULLET_SCREEN_PADDING
  )
  ctx.save()
  ctx.fillStyle = 'white'
  ctx.fillRect(
    player.cx - PLAYER_WIDTH / 2,
    player.cy - PLAYER_HEIGHT / 2,
    PLAYER_WIDTH,
    PLAYER_HEIGHT
  )
  ctx.beginPath()
  ctx.fillStyle = 'red'
  ctx.arc(player.cx, player.cy, PLAYER_HIT_HEIGHT, 0, 2 * Math.PI)
  ctx.fill()
  ctx.restore()
  enemyBullets.value.forEach((bullet) => {
    if (ctx == null) return
    ctx.beginPath()
    ctx.fillStyle = bullet.color
    ctx.arc(bullet.cx, bullet.cy, bullet.width, 0, 2 * Math.PI)
    ctx.fill()
  })
  enemies.value.forEach((enemy) => {
    if (ctx == null) return
    ctx.fillStyle = enemy.name === 'generic' ? GENERIC_ENEMY_COLOR : BOSS_COLOR
    ctx.fillRect(enemy.cx - enemy.width / 2, enemy.cy - enemy.height / 2, enemy.width, enemy.height)
  })
  playerBullets.value.forEach((bullet) => {
    if (ctx == null) return
    ctx.beginPath()
    ctx.fillStyle = bullet.color
    ctx.arc(bullet.cx, bullet.cy, bullet.width, 0, 2 * Math.PI)
    ctx.fill()
  })
  powerups.value.forEach((powerup) => {
    ctx?.drawImage(
      powerupImage,
      powerup.cx,
      powerup.cy,
      powerup.size * POWERUP_SIZE_FACTOR + POWERUP_BASE_SIZE,
      powerup.size * POWERUP_SIZE_FACTOR + POWERUP_BASE_SIZE
    )
  })
}

function init() {
  updateHandler.value = setInterval(update, 10)
  player.reset()
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === ' ') {
    enemies.value[0].hp -= 1
    paused.value = !paused.value
  }
  if (event.key === 'p') {
    player.power += 5
  }
  if (event.key === 'x') {
    enemies.value[0].hp -= 100
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

const updateHandler = ref(0)

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
  window.addEventListener('blur', () => {
    paused.value = true
  })
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement
  ctx = canvas.getContext('2d')
  if (ctx == null) return
  init()
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
      <div class="stats col-1">
        <div class="row d-flex">{{ `HP: ${player.hp}` }}</div>
        <div class="row d-flex">{{ `Power: ${player.power}` }}</div>
      </div>
      <div class="game-viewport">
        <canvas id="game-canvas" :height="CANVAS_HEIGHT" :width="CANVAS_WIDTH"></canvas>
      </div>
    </div>
  </main>
</template>

<style scoped>
.game-viewport {
  background-color: black;
  border: 2px solid #66ccff;
  border-radius: 4px;
  width: 302px;
  height: 402px;
}
.stats {
  position: relative;
}
</style>
