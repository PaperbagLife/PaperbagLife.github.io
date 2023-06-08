<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import { getPowerLevel, rotate } from '../util/helpers'
import powerupImage from '../assets/game/img/powerup.png'

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
  POWERUP_BASE_SIZE,
  POWERUP_INITIAL_SPEED,
  POWERUP_SIZE_FACTOR,
  POWERUP_TERMINAL_VEL,
  RED,
  Target,
  type AttackPattern,
  type ControlsPressed,
  type MovePattern
} from '../util/const'
const { type } = useBreakpoints()
const canvasDimensions = { width: 300, height: 400 }
let ctx: null | CanvasRenderingContext2D = null

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
        3,
        3,
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
    if (
      controlsPressed.value.down &&
      this.cy + PLAYER_SPEED + PLAYER_HEIGHT / 2 < canvasDimensions.height
    ) {
      this.cy += PLAYER_SPEED
    }
    if (controlsPressed.value.left && this.cx - PLAYER_SPEED - PLAYER_WIDTH / 2 > 0) {
      this.cx -= PLAYER_SPEED
    }
    if (
      controlsPressed.value.right &&
      this.cx + PLAYER_SPEED + PLAYER_WIDTH / 2 < canvasDimensions.width
    ) {
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
  entrance: boolean
  attackPatterns: AttackPattern[]
  attackIndex = 0
  attackTimer = 0
  attackIntervalTimer = 0
  speed: number
  movePatterns: MovePattern[]
  moveIndex = 0
  moveTimer = 0
  powerupSize: number

  constructor(
    name: string,
    maxHp: number,
    x: number,
    y: number,
    width: number,
    height: number,
    attacks: AttackPattern[],
    speed: number,
    movePatterns: MovePattern[],
    powerupSize: number,
    entrance?: boolean
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
    this.powerupSize = powerupSize
    if (entrance) {
      this.entrance = true
    } else {
      this.entrance = false
    }
  }

  handleMovement() {
    if (this.entrance) {
      this.cy += 0.3
      if (this.cy > 50) {
        this.entrance = false
      }
      return
    }
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
    if (this.entrance) return
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

  spawnPowerUp() {
    if (this.powerupSize !== 0) {
      const powerup = new Powerup(this.cx, this.cy, this.powerupSize)
      powerups.value.push(powerup)
    }
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
  lastDeltaY = -1
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
      this.cx - this.width > canvasDimensions.width + BULLET_SCREEN_PADDING ||
      this.cx + this.width < -BULLET_SCREEN_PADDING
    ) {
      this.delete = true
    } else if (
      this.cy - this.height > canvasDimensions.height + BULLET_SCREEN_PADDING ||
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
  delete = false
  speedY = POWERUP_INITIAL_SPEED
  accY = POWERUP_ACC
  constructor(cx: number, cy: number, size: number) {
    this.cx = cx
    this.cy = cy
    this.size = size
  }
  collidesWithPlayer() {
    if (
      this.cy + (this.size * POWERUP_SIZE_FACTOR + POWERUP_BASE_SIZE) >
        player.cy - PLAYER_HEIGHT / 2 &&
      this.cy < player.cy + PLAYER_HEIGHT / 2
    ) {
      // check x
      if (
        this.cx + (this.size * POWERUP_SIZE_FACTOR + POWERUP_BASE_SIZE) >
          player.cx - PLAYER_WIDTH / 2 &&
        this.cx < player.cx + PLAYER_WIDTH / 2
      ) {
        return true
      }
    }
    return false
  }
  update() {
    this.cy += this.speedY
    if (this.speedY < POWERUP_TERMINAL_VEL) {
      this.speedY += this.accY
    }
    if (this.cx - this.size / 2 > canvasDimensions.width || this.cx + this.size / 2 < 0) {
      this.delete = true
    } else if (this.cy - this.size > canvasDimensions.height || this.cy + this.size < 0) {
      this.delete = true
    }
  }
}

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

// consts for attacks
function emptyAttack() {
  return
}

function basicSingleDirectedAttack(cx: number, cy: number) {
  const deltaX = player.cx - cx
  const deltaY = player.cy - cy
  const hypo = Math.hypot(deltaX, deltaY)
  const xVel = (deltaX / hypo) * BASIC_ENEMY_BULLET_SPEED
  const yVel = (deltaY / hypo) * BASIC_ENEMY_BULLET_SPEED
  const patternTowards: MovePattern = { duration: -1, xVel, yVel }
  const bullet = new Bullet(cx, cy, 4, 4, [patternTowards], GREEN, Date.now(), 0)
  enemyBullets.value.push(bullet)
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
    const bullet = new Bullet(cx, cy, 3, 3, [patternDirectional], RED, Date.now(), i)
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
      3,
      3,
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
    const bullet = new Bullet(cx, cy, 3, 3, movePatterns, color, Date.now(), i)
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
const player = reactive(new Player(200, canvasDimensions.width / 2, canvasDimensions.height - 30))
const playerScore = ref(0)
const boss1 = new Enemy(
  'boss1',
  500,
  canvasDimensions.width / 2,
  0,
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
  triangleMove,
  1,
  true
)
const enemies = ref<Enemy[]>([])

const playerBullets = ref<Bullet[]>([])
const enemyBullets = ref<Bullet[]>([])
const powerups = ref<Powerup[]>([])

const controlsPressed = ref<ControlsPressed>({ up: false, down: false, left: false, right: false })
const controlKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'])

const downRight: MovePattern[] = [
  { xVel: 0, yVel: 1, duration: 200 },
  { xVel: 1, yVel: 0.5, duration: -1 }
]
const downLeft: MovePattern[] = [
  { xVel: 0, yVel: 1, duration: 200 },
  { xVel: -1, yVel: 0.5, duration: -1 }
]

function getBasicEnemy(cx: number, move: MovePattern[]) {
  const basicLeftEnemey = {
    interval: 80,
    enemies: [
      new Enemy(
        'generic',
        5,
        cx,
        0,
        20,
        25,
        [{ duration: -1, interval: 300, attack: basicSingleDirectedAttack }],
        0.5,
        move,
        Math.random() > 0.5 ? 2 : 1
      )
    ]
  }
  return basicLeftEnemey
}

const leftWave = [
  getBasicEnemy(40, downRight),
  getBasicEnemy(40, downRight),
  getBasicEnemy(40, downRight),
  getBasicEnemy(40, downRight),
  getBasicEnemy(40, downRight),
  {
    interval: 500,
    enemies: []
  }
]

const rightWave = [
  getBasicEnemy(canvasDimensions.width - 40, downLeft),
  getBasicEnemy(canvasDimensions.width - 40, downLeft),
  getBasicEnemy(canvasDimensions.width - 40, downLeft),
  getBasicEnemy(canvasDimensions.width - 40, downLeft),
  getBasicEnemy(canvasDimensions.width - 40, downLeft),
  {
    interval: 500,
    enemies: []
  }
]

const bossWave = { enemies: [boss1], interval: 0 }
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
      enemy.spawnPowerUp()
    }
    if (
      enemy.cx - enemy.width > canvasDimensions.width + BULLET_SCREEN_PADDING ||
      enemy.cx + enemy.width < -BULLET_SCREEN_PADDING
    ) {
      deadEnemyIdx.add(i)
    } else if (
      enemy.cy - enemy.height > canvasDimensions.height + BULLET_SCREEN_PADDING ||
      enemy.cy + enemy.height < -BULLET_SCREEN_PADDING
    ) {
      deadEnemyIdx.add(i)
    }
  })
  enemies.value = enemies.value.filter((_, i) => !deadEnemyIdx.has(i))
  enemies.value.forEach((enemy) => {
    enemy.attack(enemy.cx, enemy.cy)
  })

  const deadPowerups = new Set<number>()
  powerups.value.forEach((powerup, i) => {
    powerup.update()
    if (powerup.collidesWithPlayer()) {
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
    canvasDimensions.width + BULLET_SCREEN_PADDING,
    canvasDimensions.height + BULLET_SCREEN_PADDING
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
  enemies.value.forEach((enemy) => {
    if (ctx == null) return
    ctx.fillStyle = enemy.name === 'generic' ? '#b24bf3' : '#ff9966'
    ctx.fillRect(enemy.cx - enemy.width / 2, enemy.cy - enemy.height / 2, enemy.width, enemy.height)
  })
  enemyBullets.value.forEach((bullet) => {
    if (ctx == null) return
    ctx.beginPath()
    ctx.fillStyle = bullet.color
    ctx.arc(bullet.cx, bullet.cy, bullet.width, 0, 2 * Math.PI)
    ctx.fill()
  })
  playerBullets.value.forEach((bullet) => {
    if (ctx == null) return
    ctx.beginPath()
    ctx.fillStyle = bullet.color
    ctx.arc(bullet.cx, bullet.cy, bullet.width, 0, 2 * Math.PI)
    ctx.fill()
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
        <canvas
          id="game-canvas"
          :height="canvasDimensions.height"
          :width="canvasDimensions.width"
        ></canvas>
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
