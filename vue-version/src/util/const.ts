// constants
export const PLAYER_WIDTH = 10
export const PLAYER_HEIGHT = 30
export const PLAYER_HIT_WIDTH = 2
export const PLAYER_HIT_HEIGHT = 2
export const BASE_PLAYER_ATTACK_INTERVAL = 400
export const PLAYER_SPEED = 1
export const PLAYER_INVUL_TIMER = 80

export const BASIC_ENEMY_BULLET_SPEED = 1
export const BULLET_SCREEN_PADDING = 30

export const GREEN = '#66ffb8'
export const RED = '#ff668e'
export const BLUE = '#2c80ff'

// consts for attacks
export const NUM_CENTER_SPREAD = 100
export const NUM_CENTER_SPRAY = 12
export const NUM_ROTATED = 60

export const POWERUP_INITIAL_SPEED = -1.3
export const POWERUP_ACC = 0.03
export const POWERUP_TERMINAL_VEL = 1.4
export const POWERUP_BASE_SIZE = 7
export const POWERUP_SIZE_FACTOR = 3

// type and class defs
export type ControlsPressed = {
  up: boolean
  down: boolean
  left: boolean
  right: boolean
}

export enum Target {
  PLAYER,
  ENEMY
}

export type MovePattern = {
  duration: number
  xVel: number
  yVel: number
  rotation?: number
  rotationDuration?: number
}

export type AttackPattern = {
  duration: number
  interval: number
  attack: (cx: number, cy: number, timeLeft: number) => void
}
