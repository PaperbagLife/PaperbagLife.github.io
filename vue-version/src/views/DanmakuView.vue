<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
const { type } = useBreakpoints()

// constants
const PLAYER_WIDTH = 10
const PLAYER_HEIGHT = 30
const PLAYER_HIT_WIDTH = 2
const PLAYER_HIT_HEIGHT = 2
const PLAYER_ATTACK_INTERVAL = 120
const PLAYER_SPEED = 1
const PLAYER_INVUL_TIMER = 80

const BASIC_ENEMY_BULLET_SPEED = 1

// type and class defs
type ControlsPressed = {
  up: boolean
  down: boolean
  left: boolean
  right: boolean
}

type Canvas = {
  width: number
  height: number
}
const canvas: Canvas = { width: 300, height: 400 }

type MovePattern = {
  duration: number
  xVel: number
  yVel: number
}

type AttackPattern = {
  duration: number
  interval: number
  attack: (cx: number, cy: number) => void
}

class Player {
  cx: number
  cy: number
  maxHp: number
  hp: number
  power = 0
  invulTimer = 0
  constructor(maxHp: number, x: number, y: number) {
    this.maxHp = maxHp
    this.hp = maxHp
    this.cx = x
    this.cy = y
  }
  attack(cx: number, cy: number) {
    const straightPattern: MovePattern[] = [{ duration: -1, xVel: 0, yVel: -1.8 }]
    const centerBullet = new Bullet(cx, cy, 2, 2, straightPattern, 'white', Date.now())
    playerBullets.value.push(centerBullet)
  }
  isAlive() {
    return this.hp > 0
  }
  reset() {
    this.hp = this.maxHp
    setInterval(this.attack, PLAYER_ATTACK_INTERVAL)
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
  }

  handleMovement() {
    //update a bullets coordinates
    const currentMoveCap = this.movePatterns[this.moveIndex].duration
    if (currentMoveCap !== -1 && this.moveTimer > currentMoveCap) {
      // Go to the next pattern
      this.moveTimer = 0
      this.moveIndex = (this.moveIndex + 1) % this.movePatterns.length
    }
    const deltaX = this.movePatterns[this.moveIndex].xVel
    const deltaY = this.movePatterns[this.moveIndex].yVel
    this.cx = this.cx + deltaX
    this.cy = this.cy + deltaY

    this.moveTimer++
  }
  attack(cx: number, cy: number) {
    //update a bullets coordinates
    const currentAttackCap = this.attackPatterns[this.attackIndex].duration
    if (currentAttackCap !== -1 && this.attackTimer > currentAttackCap) {
      // Go to the next pattern
      this.attackTimer = 0
      this.attackTimer = (this.attackTimer + 1) % this.attackPatterns.length
      this.attackIntervalTimer = 0
    }
    const currentAttack = this.attackPatterns[this.attackIndex]
    if (this.attackIntervalTimer <= 0) {
      currentAttack.attack(cx, cy)
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
  homing?: boolean
  target?: Enemy | Player
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    movePatterns: MovePattern[],
    color: string,
    createdTimestamp: number,
    homing?: boolean,
    target?: Enemy
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
  }

  update() {
    //update a bullets coordinates
    const currentMoveCap = this.movePatterns[this.moveIndex].duration
    if (currentMoveCap !== -1 && this.moveTimer > currentMoveCap) {
      // Go to the next pattern
      this.moveTimer = 0
      this.moveIndex = (this.moveIndex + 1) % this.movePatterns.length
    }
    const deltaX = this.movePatterns[this.moveIndex].xVel
    const deltaY = this.movePatterns[this.moveIndex].yVel
    this.cx = this.cx + deltaX
    this.cy = this.cy + deltaY

    //Check whether or not a bullet is off-screen
    if (this.cx - this.width > canvas.width || this.cx + this.width < 0) {
      this.delete = true
    } else if (this.cy - this.height > canvas.height || this.cy + this.height < 0) {
      this.delete = true
    }
    this.moveTimer++
  }
}

// consts for attacks
function basicDirectedAttack(cx: number, cy: number) {
  const deltaX = player.cx - cx
  const deltaY = player.cy - cy
  const hypo = Math.hypot(deltaX, deltaY)
  const xVel = (deltaX / hypo) * BASIC_ENEMY_BULLET_SPEED
  const yVel = (deltaY / hypo) * BASIC_ENEMY_BULLET_SPEED
  const patternTowards: MovePattern = { duration: -1, xVel, yVel }
  const bullet = new Bullet(cx, cy, 2, 2, [patternTowards], 'red', Date.now())
  enemyBullets.value.push(bullet)
}

// const for gamestate
const paused = ref(false)
const gameOver = ref(false)

watch(gameOver, () => {
  if (gameOver.value) paused.value = true
})
const player = reactive(new Player(5, canvas.width / 2, canvas.height - 30))
const playerScore = ref(0)
const enemy1 = new Enemy(
  'shit',
  500,
  canvas.width / 2,
  40,
  20,
  20,
  [{ duration: -1, interval: 100, attack: basicDirectedAttack }],
  [{ duration: -1, xVel: 0, yVel: 0 }]
)
const enemies = ref<Enemy[]>([enemy1])

const playerBullets = ref<Bullet[]>([])
const enemyBullets = ref<Bullet[]>([])

const controlsPressed = ref<ControlsPressed>({ up: false, down: false, left: false, right: false })
const controlKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'])

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
  setInterval(() => {
    if (!paused.value) player.attack(player.cx, player.cy - PLAYER_HEIGHT / 2)
  }, PLAYER_ATTACK_INTERVAL)
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === ' ') {
    enemies.value[0].hp -= 1
    paused.value = !paused.value
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
            :key="`${bullet.createdTimestamp}+${bullet.cx}`"
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
            :key="`${bullet.createdTimestamp}+${bullet.cx}`"
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
  fill: red;
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
