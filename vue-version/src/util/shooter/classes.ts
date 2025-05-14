import {
  type AttackPattern,
  BASE_PLAYER_ATTACK_INTERVAL,
  BULLET_SCREEN_PADDING,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  type ControlsPressed,
  type MovePattern,
  PLAYER_HEIGHT,
  PLAYER_SPEED,
  PLAYER_WIDTH,
  POWERUP_ACC,
  POWERUP_BASE_SIZE,
  POWERUP_INITIAL_SPEED,
  POWERUP_SIZE_FACTOR,
  POWERUP_TERMINAL_VEL,
  Target,
} from './const'
import { getPowerLevel, rotate } from './helpers'

export class Player {
  cx: number
  cy: number
  maxHp: number
  hp: number
  power = 0
  invulTimer = 0
  homingFireTrigger = 0
  playerAttackCounter = 0
  constructor(maxHp: number, x: number, y: number) {
    this.maxHp = maxHp
    this.hp = maxHp
    this.cx = x
    this.cy = y
  }
  getAttackInterval(powerLevel: number) {
    return BASE_PLAYER_ATTACK_INTERVAL - powerLevel * 5
  }
  attack(playerBullets: Bullet[]) {
    const powerLevel = getPowerLevel(this.power)
    this.playerAttackCounter += 1
    if (this.playerAttackCounter < this.getAttackInterval(powerLevel)) {
      return
    }
    this.playerAttackCounter = 0
    this.homingFireTrigger -= 1
    const straightPattern: MovePattern[] = [{ duration: -1, xVel: 0, yVel: -2 }]
    if (powerLevel !== 2) {
      const centerBullet = new Bullet(
        this.cx,
        this.cy,
        2,
        2,
        straightPattern,
        'white',
        Date.now(),
        0
      )
      playerBullets.push(centerBullet)
    } else {
      // Add 1 more bullet
      const centerBullet = new Bullet(
        this.cx - 1,
        this.cy,
        2,
        2,
        straightPattern,
        'white',
        Date.now(),
        0
      )
      const centerBullet2 = new Bullet(
        this.cx + 1,
        this.cy,
        2,
        2,
        straightPattern,
        'white',
        Date.now(),
        1
      )
      playerBullets.push(centerBullet)
      playerBullets.push(centerBullet2)
    }
    if (this.homingFireTrigger <= 0) {
      // Add 1 homing missle
      const homingBullet = new Bullet(
        this.cx,
        this.cy,
        3,
        3,
        straightPattern,
        'gold',
        Date.now() + 1,
        0,
        true,
        Target.ENEMY
      )
      playerBullets.push(homingBullet)
      this.homingFireTrigger = 3 - powerLevel
    }
  }
  isAlive() {
    return this.hp > 0
  }
  reset() {
    this.hp = this.maxHp
  }
  handleMovement(controlsPressed: ControlsPressed) {
    if (controlsPressed.up && this.cy - PLAYER_SPEED - PLAYER_HEIGHT / 2 > 0) {
      this.cy -= PLAYER_SPEED
    }
    if (controlsPressed.down && this.cy + PLAYER_SPEED + PLAYER_HEIGHT / 2 < CANVAS_HEIGHT) {
      this.cy += PLAYER_SPEED
    }
    if (controlsPressed.left && this.cx - PLAYER_SPEED - PLAYER_WIDTH / 2 > 0) {
      this.cx -= PLAYER_SPEED
    }
    if (controlsPressed.right && this.cx + PLAYER_SPEED + PLAYER_WIDTH / 2 < CANVAS_WIDTH) {
      this.cx += PLAYER_SPEED
    }
  }
}

export class Enemy {
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
  attack(cx: number, cy: number, enemyBullets: Bullet[], player: Player) {
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
      currentAttack.attack(cx, cy, enemyBullets, this.attackTimer, player)
      this.attackIntervalTimer = currentAttack.interval
    }
    this.attackTimer++
    this.attackIntervalTimer--
  }

  spawnPowerUp(powerups: Powerup[]) {
    if (this.powerupSize !== 0) {
      const powerup = new Powerup(this.cx, this.cy, this.powerupSize)
      powerups.push(powerup)
    }
  }
}

export class Bullet {
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

  update(enemies: Enemy[], player: Player) {
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
      if (this.target === Target.ENEMY && enemies.length > 0) {
        target = enemies[0]
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
      this.cx - this.width > CANVAS_WIDTH + BULLET_SCREEN_PADDING ||
      this.cx + this.width < -BULLET_SCREEN_PADDING
    ) {
      this.delete = true
    } else if (
      this.cy - this.height > CANVAS_HEIGHT + BULLET_SCREEN_PADDING ||
      this.cy + this.height < -BULLET_SCREEN_PADDING
    ) {
      this.delete = true
    }
    this.moveTimer++
  }
}

export class Powerup {
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
  collidesWithPlayer(playerX: number, playerY: number) {
    if (
      this.cy + (this.size * POWERUP_SIZE_FACTOR + POWERUP_BASE_SIZE) >
        playerY - PLAYER_HEIGHT / 2 &&
      this.cy < playerY + PLAYER_HEIGHT / 2
    ) {
      // check x
      if (
        this.cx + (this.size * POWERUP_SIZE_FACTOR + POWERUP_BASE_SIZE) >
          playerX - PLAYER_WIDTH / 2 &&
        this.cx < playerX + PLAYER_WIDTH / 2
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
    if (this.cx - this.size / 2 > CANVAS_WIDTH || this.cx + this.size / 2 < 0) {
      this.delete = true
    } else if (this.cy - this.size > CANVAS_HEIGHT || this.cy + this.size < 0) {
      this.delete = true
    }
  }
}
