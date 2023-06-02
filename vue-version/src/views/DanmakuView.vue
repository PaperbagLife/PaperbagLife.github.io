<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import { getPowerLevel, rotate } from '../util/helpers'
import {
  BASE_PLAYER_ATTACK_INTERVAL,
  BASIC_ENEMY_BULLET_SPEED,
  BLUE,
  BULLET_SCREEN_PADDING,
  GREEN,
  NUM_CENTER_SPRAY,
  NUM_CENTER_SPREAD,
  NUM_ROTATED,
  PLAYER_HEIGHT,
  PLAYER_HIT_HEIGHT,
  PLAYER_HIT_WIDTH,
  PLAYER_SPEED,
  PLAYER_WIDTH,
  POWERUP_ACC,
  POWERUP_INITIAL_SPEED,
  RED,
  Target,
  type AttackPattern,
  type Canvas,
  type ControlsPressed,
  type MovePattern
} from '../util/const'
const { type } = useBreakpoints()
const canvas: Canvas = { width: 300, height: 400 }

class Player {
  cx: number
  cy: number
  maxHp: number
  hp: number
  power = 0
  invulTimer = 0
  homingFireTrigger = 0
  constructor(maxHp: number, x: number, y: number) {
    this.maxHp = maxHp
    this.hp = maxHp
    this.cx = x
    this.cy = y
  }
  attack(cx: number, cy: number) {
    this.homingFireTrigger -= 1
    const powerLevel = getPowerLevel(this.power)
    const straightPattern: MovePattern[] = [{ duration: -1, xVel: 0, yVel: -2 }]
    if (powerLevel !== 2) {
      const centerBullet = new Bullet(cx, cy, 2, 2, straightPattern, 'white', Date.now(), 0)
      playerBullets.value.push(centerBullet)
    } else {
      // Add 1 more bullet
      const centerBullet = new Bullet(cx - 1, cy, 2, 2, straightPattern, 'white', Date.now(), 0)
      const centerBullet2 = new Bullet(cx + 1, cy, 2, 2, straightPattern, 'white', Date.now(), 1)
      playerBullets.value.push(centerBullet)
      playerBullets.value.push(centerBullet2)
    }
    if (this.homingFireTrigger <= 0) {
      // Add 1 homing missle
      const homingBullet = new Bullet(
        cx,
        cy,
        2,
        2,
        straightPattern,
        'gold',
        Date.now() + 1,
        0,
        true,
        Target.ENEMY
      )
      playerBullets.value.push(homingBullet)
      this.homingFireTrigger = 3 - powerLevel
    }
  }
  isAlive() {
    return this.hp > 0
  }
  reset() {
    this.hp = this.maxHp
    setInterval(() => {
      if (!paused.value) {
        this.attack(this.cx, this.cy)
      }
    }, BASE_PLAYER_ATTACK_INTERVAL - this.power * 80)
  }
  handleMovement() {
    if (controlsPressed.value.up && this.cy - PLAYER_SPEED - PLAYER_HEIGHT / 2 > 0) {
      this.cy -= PLAYER_SPEED
    }
    if (controlsPressed.value.down && this.cy + PLAYER_SPEED + PLAYER_HEIGHT / 2 < canvas.height) {
      this.cy += PLAYER_SPEED
    }
    if (controlsPressed.value.left && this.cx - PLAYER_SPEED - PLAYER_WIDTH / 2 > 0) {
      this.cx -= PLAYER_SPEED
    }
    if (controlsPressed.value.right && this.cx + PLAYER_SPEED + PLAYER_WIDTH / 2 < canvas.width) {
      this.cx += PLAYER_SPEED
    }
  }
}

class Enemy {
  cx: number
  cy: number
  width: number
  height: number
  name: string
  maxHp: number
  hp: number
  attackPatterns: AttackPattern[]
  attackIndex = 0
  attackTimer = 0
  attackIntervalTimer = 0
  speed: number
  movePatterns: MovePattern[]
  moveIndex = 0
  moveTimer = 0

  constructor(
    name: string,
    maxHp: number,
    x: number,
    y: number,
    width: number,
    height: number,
    attacks: AttackPattern[],
    speed: number,
    movePatterns: MovePattern[]
  ) {
    this.name = name
    this.maxHp = maxHp
    this.hp = maxHp
    this.cx = x
    this.cy = y
    this.width = width
    this.height = height
    this.attackPatterns = attacks
    this.movePatterns = movePatterns
    this.speed = speed
  }

  handleMovement() {
    //update a bullets coordinates
    const currentMoveCap = this.movePatterns[this.moveIndex].duration
    if (currentMoveCap !== -1 && this.moveTimer > currentMoveCap) {
      // Go to the next pattern
      this.moveTimer = 0
      this.moveIndex = (this.moveIndex + 1) % this.movePatterns.length
    }
    this.moveTimer++
    const deltaX = this.movePatterns[this.moveIndex].xVel
    const deltaY = this.movePatterns[this.moveIndex].yVel
    const mag = Math.hypot(deltaX, deltaY)
    if (mag === 0) return
    this.cx = this.cx + (deltaX / mag) * this.speed
    this.cy = this.cy + (deltaY / mag) * this.speed
  }
  attack(cx: number, cy: number) {
    const currentAttackCap = this.attackPatterns[this.attackIndex].duration
    if (currentAttackCap !== -1 && this.attackTimer > currentAttackCap) {
      // Go to the next pattern
      this.attackTimer = 0
      this.attackIndex = (this.attackIndex + 1) % this.attackPatterns.length
      this.attackIntervalTimer = 0
    }
    const currentAttack = this.attackPatterns[this.attackIndex]
    if (this.attackIntervalTimer <= 0) {
      currentAttack.attack(cx, cy, this.attackTimer)
      this.attackIntervalTimer = currentAttack.interval
    }
    this.attackTimer++
    this.attackIntervalTimer--
  }
}

class Bullet {
  cx: number
  cy: number
  width: number
  height: number
  movePatterns: MovePattern[]
  color: string
  createdTimestamp: number
  delete = false
  moveTimer = 0
  moveIndex = 0
  id: number
  homing?: boolean
  target?: Target
  lastDeltaX = 0
  lastDeltaY = 0
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    movePatterns: MovePattern[],
    color: string,
    createdTimestamp: number,
    id: number,
    homing?: boolean,
    target?: Target
  ) {
    this.cx = x
    this.cy = y
    this.width = width
    this.height = height
    this.movePatterns = movePatterns
    this.color = color
    this.createdTimestamp = createdTimestamp
    this.homing = homing
    this.target = target
    this.id = id
  }

  update() {
    //update a bullets coordinates
    const currentMoveCap = this.movePatterns[this.moveIndex].duration
    if (currentMoveCap !== -1 && this.moveTimer > currentMoveCap) {
      // Go to the next pattern
      this.moveTimer = 0
      this.moveIndex = (this.moveIndex + 1) % this.movePatterns.length
    }
    const currentMovePattern = this.movePatterns[this.moveIndex]
    let deltaX = currentMovePattern.xVel
    let deltaY = currentMovePattern.yVel
    if (this.homing) {
      let target = null
      if (this.target === Target.ENEMY && enemies.value.length > 0) {
        target = enemies.value[0]
      }
      if (this.target === Target.PLAYER) {
        target = player
      }
      if (target) {
        const diffX = target.cx - this.cx
        const diffY = target.cy - this.cy
        const hypo = Math.hypot(diffX, diffY)
        const xVel = diffX / hypo
        const yVel = diffY / hypo
        this.cx += xVel
        this.cy += yVel
        this.lastDeltaX = xVel
        this.lastDeltaY = yVel
      } else {
        this.cx += this.lastDeltaX
        this.cy += this.lastDeltaY
      }
    } else {
      if (currentMovePattern.rotation) {
        const rotated = rotate(
          deltaX,
          deltaY,
          currentMovePattern.rotationDuration
            ? (currentMovePattern.rotation * this.moveTimer) / currentMovePattern.rotationDuration
            : currentMovePattern.rotation
        )
        deltaX = rotated.x
        deltaY = rotated.y
      }
      this.cx = this.cx + deltaX
      this.cy = this.cy + deltaY
    }

    //Check whether or not a bullet is off-screen
    if (
      this.cx - this.width > canvas.width + BULLET_SCREEN_PADDING ||
      this.cx + this.width < -BULLET_SCREEN_PADDING
    ) {
      this.delete = true
    } else if (
      this.cy - this.height > canvas.height + BULLET_SCREEN_PADDING ||
      this.cy + this.height < -BULLET_SCREEN_PADDING
    ) {
      this.delete = true
    }
    this.moveTimer++
  }
}

class Powerup {
  cx: number
  cy: number
  size: number
  speedX = POWERUP_INITIAL_SPEED
  accX = POWERUP_ACC
  constructor(cx: number, cy: number, size: number) {
    this.cx = cx
    this.cy = cy
    this.size = size
  }
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

// consts for attacks
function emptyAttack() {
  return
}
function basicDirectedAttack(cx: number, cy: number) {
  const deltaX = player.cx - cx
  const deltaY = player.cy - cy
  const hypo = Math.hypot(deltaX, deltaY)
  const xVel = (deltaX / hypo) * BASIC_ENEMY_BULLET_SPEED
  const yVel = (deltaY / hypo) * BASIC_ENEMY_BULLET_SPEED
  const patternTowards: MovePattern = { duration: -1, xVel, yVel }
  const bullet = new Bullet(cx, cy, 5, 5, [patternTowards], GREEN, Date.now(), 0)
  const patternTowards2: MovePattern = { duration: -1, xVel: xVel + 0.03, yVel }
  const bullet2 = new Bullet(cx + 5, cy, 5, 5, [patternTowards2], GREEN, Date.now(), 1)
  const patternTowards3: MovePattern = { duration: -1, xVel: xVel - 0.03, yVel }
  const bullet3 = new Bullet(cx - 5, cy, 5, 5, [patternTowards3], GREEN, Date.now(), 2)
  enemyBullets.value.push(bullet)
  enemyBullets.value.push(bullet2)
  enemyBullets.value.push(bullet3)
}

function basicCenterSpreadAttack(cx: number, cy: number) {
  const bulletSpeed = 0.8
  for (let i = 0; i < NUM_CENTER_SPREAD; i++) {
    const xVel =
      -Math.cos(((Math.PI * 2) / NUM_CENTER_SPREAD) * i) +
      Math.sin(((Math.PI * 2) / NUM_CENTER_SPREAD) * i)
    const yVel =
      Math.sin(((Math.PI * 2) / NUM_CENTER_SPREAD) * i) +
      Math.cos(((Math.PI * 2) / NUM_CENTER_SPREAD) * i)
    const patternDirectional: MovePattern = {
      duration: -1,
      xVel: xVel * bulletSpeed,
      yVel: yVel * bulletSpeed
    }
    const bullet = new Bullet(cx, cy, 2, 2, [patternDirectional], RED, Date.now(), i)
    enemyBullets.value.push(bullet)
  }
}
function basicCenterSprayAttack(cx: number, cy: number, timeLeft: number) {
  const bulletSpeed = 1
  const modifier = ((Math.sin(timeLeft / 80) >= 0 ? 1 : -1) * timeLeft) / 150
  for (let i = 0; i < NUM_CENTER_SPRAY; i++) {
    const dir = i + modifier
    const xVel =
      -Math.cos(((Math.PI * 2) / NUM_CENTER_SPRAY) * dir) +
      Math.sin(((Math.PI * 2) / NUM_CENTER_SPRAY) * dir)
    const yVel =
      Math.sin(((Math.PI * 2) / NUM_CENTER_SPRAY) * dir) +
      Math.cos(((Math.PI * 2) / NUM_CENTER_SPRAY) * dir)
    const patternDirectional: MovePattern = {
      duration: -1,
      xVel: xVel * bulletSpeed,
      yVel: yVel * bulletSpeed
    }
    const bullet = new Bullet(
      cx,
      cy,
      2,
      2,
      [patternDirectional],
      Math.sin(timeLeft / 80) >= 0 ? RED : BLUE,
      Date.now(),
      i
    )
    enemyBullets.value.push(bullet)
  }
}
function basicRotatedAttack(cx: number, cy: number, timeLeft: number) {
  let color = RED
  if (Math.floor(timeLeft / 100) % 2 === 1) {
    color = BLUE
  }
  const bulletSpeed = 0.6
  for (let i = 0; i < NUM_ROTATED; i++) {
    const xVel =
      -Math.cos(((Math.PI * 2) / NUM_ROTATED) * i) + Math.sin(((Math.PI * 2) / NUM_ROTATED) * i)
    const yVel =
      Math.sin(((Math.PI * 2) / NUM_ROTATED) * i) + Math.cos(((Math.PI * 2) / NUM_ROTATED) * i)
    const patternDirectional: MovePattern = {
      duration: 80,
      xVel: xVel * bulletSpeed,
      yVel: yVel * bulletSpeed
    }
    const patternStop: MovePattern = {
      duration: 100,
      xVel: xVel * 0.05,
      yVel: yVel * 0.05
    }
    const alternator = color === RED ? 1 : -1
    const rotated = rotate(xVel, yVel, (-Math.PI * alternator) / 2)
    const patternRotated: MovePattern = {
      duration: -1,
      xVel: rotated.x * (bulletSpeed * 1.4),
      yVel: rotated.y * (bulletSpeed * 1.4),
      rotation: (-Math.PI * alternator) / 4,
      rotationDuration: 400
    }

    const movePatterns = [patternDirectional, patternStop, patternRotated]
    const bullet = new Bullet(cx, cy, 2, 2, movePatterns, color, Date.now(), i)
    enemyBullets.value.push(bullet)
  }
}

// const for move patterns

const triangleMove = [
  { duration: 300, xVel: -1, yVel: 2 },
  { duration: 80, xVel: 0, yVel: 0 },
  { duration: 268, xVel: 1, yVel: 0 },
  { duration: 80, xVel: 0, yVel: 0 },
  { duration: 300, xVel: -1, yVel: -2 },
  { duration: 80, xVel: 0, yVel: 0 }
]

// const for gamestate
const paused = ref(false)
const gameOver = ref(false)

watch(gameOver, () => {
  if (gameOver.value) paused.value = true
})
const player = reactive(new Player(200, canvas.width / 2, canvas.height - 30))
const playerScore = ref(0)
const enemy1 = new Enemy(
  'shit',
  500,
  canvas.width / 2,
  40,
  20,
  25,
  [
    { duration: 1000, interval: 100, attack: basicRotatedAttack },
    { duration: 100, interval: 300, attack: emptyAttack },
    { duration: 800, interval: 10, attack: basicCenterSprayAttack },
    { duration: 100, interval: 300, attack: emptyAttack },
    { duration: 800, interval: 60, attack: basicCenterSpreadAttack },
    { duration: 100, interval: 300, attack: emptyAttack },
    { duration: 500, interval: 100, attack: basicDirectedAttack },
    { duration: 100, interval: 300, attack: emptyAttack }
  ],
  0.4,
  triangleMove
)
const enemies = ref<Enemy[]>([enemy1])

const playerBullets = ref<Bullet[]>([])
const enemyBullets = ref<Bullet[]>([])
const powerups = ref<Powerup[]>([])

const controlsPressed = ref<ControlsPressed>({ up: false, down: false, left: false, right: false })
const controlKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'])

function update() {
  if (paused.value) {
    return
  }
  if (!player.isAlive()) {
    gameOver.value = true
  }
  // Handle movement
  player.handleMovement()
  enemies.value.forEach((enemy) => {
    enemy.handleMovement()
  })
  playerBullets.value.forEach((bullet) => bullet.update())
  enemyBullets.value.forEach((bullet) => bullet.update())
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
    }
    if (enemy.cx - enemy.width > canvas.width || enemy.cx + enemy.width < 0) {
      deadEnemyIdx.add(i)
    } else if (enemy.cy - enemy.height > canvas.height || enemy.cy + enemy.height < 0) {
      deadEnemyIdx.add(i)
    }
  })
  enemies.value = enemies.value.filter((_, i) => !deadEnemyIdx.has(i))
  enemies.value.forEach((enemy) => {
    enemy.attack(enemy.cx, enemy.cy)
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
      <div class="game-viewport">
        <svg :height="canvas.height" :width="canvas.width">
          <!--Player related-->
          <g :x="player.cx" :y="player.cy">
            <rect
              class="player"
              :class="player.invulTimer > 0 ? 'invulnerable' : ''"
              :x="player.cx - PLAYER_WIDTH / 2"
              :y="player.cy - PLAYER_HEIGHT / 2"
              :width="PLAYER_WIDTH"
              :height="PLAYER_HEIGHT"
              rx="3"
            ></rect>
            <circle
              class="player-hit-target"
              :cx="player.cx"
              :cy="player.cy"
              :r="PLAYER_HIT_HEIGHT"
              fill="red"
              rx="3"
            ></circle>
          </g>

          <circle
            class="bullet"
            v-for="bullet in playerBullets"
            :class="{ homing: bullet.homing }"
            :key="`${bullet.createdTimestamp}+${bullet.id}`"
            :style="{ fill: bullet.color }"
            :cx="bullet.cx"
            :cy="bullet.cy"
            :r="bullet.width"
          ></circle>
          <!--Enemy Related-->
          <g
            v-for="enemy in enemies"
            :key="`${enemy.height} + ${enemy.width}`"
            :x="enemy.cx"
            :y="enemy.cy"
          >
            <rect
              class="enemy"
              :width="enemy.width"
              :height="enemy.height"
              :x="enemy.cx - enemy.width / 2"
              :y="enemy.cy - enemy.height / 2"
            ></rect>
            <text :x="enemy.cx" :y="enemy.cy" class="small hp-display">
              {{ enemy.hp }}
            </text>
          </g>
          <circle
            class="bullet"
            v-for="bullet in enemyBullets"
            :key="`${bullet.createdTimestamp}+${bullet.cx}+${bullet.id}`"
            :style="{ fill: bullet.color }"
            :cx="bullet.cx"
            :cy="bullet.cy"
            :r="bullet.width"
          ></circle>
        </svg>
      </div>
    </div>
  </main>
</template>

<style scoped>
.player {
  fill: white;
  stroke: #66ccff;
  stroke-width: 1.5px;
}

.enemy {
  fill: #ff9966;
}

.hp-display {
  dominant-baseline: middle;
  text-anchor: middle;
}
.game-viewport {
  background-color: black;
  border: 2px solid #66ccff;
  border-radius: 4px;
  width: 302px;
  height: 402px;
}
</style>
