export const MAX_SKILLPOINTS = 5
export const TURN_TIME = 1000
export const MULTIHIT_DELAY = 300

export const HIT_ENERGY_REGEN = 5

export const PROFILE_PIC_HEIGHT = 70
export const PROFILE_PIC_WIDTH = 70
export const HP_BAR_HEIGHT = 10
export const HP_BAR_OFFSET = 2
export const PROFILE_PIC_SIDE_OFFSET = 110
export const PROFILE_PIC_BASE_OFFSET = 30
export const ULT_GAUGE_BASE_OFFSET = 100
export const BASIC_ATTACK_ENERGY_GAIN = 5

export const PLAYER_IMAGE_HEIGHT = 250
export const PLAYER_IMAGE_WIDTH = 80
export const PLAYER_BETWEEN_PADDING = 40

export const ALLY_VIEW_TOP_PADDING = 50

export const ENEMY_SIZE = PROFILE_PIC_WIDTH
export const ENEMY_TOP_PADDING = 30
export const ENEMY_BETWEEN_PADDING = 20
export const ENEMY_CENTER_Y = ENEMY_TOP_PADDING + ENEMY_SIZE / 2

export const TIMELINE_DISTANCE = 10000

export enum CameraMode {
  DEFAULT = 'default view',
  ALLIES = 'allies view'
}

// focus for now is always friendly character, the one getting hit or the one attacking
export type CameraState = {
  mode: CameraMode
  focus: number // For who the main focus of camera is
}

export type TargetMarkers = {
  main: number[]
  sub: number[]
}

export type DamageNumber = {
  damage: number
  x: number
  y: number
  type?: Elements
}

// Notes: the focus is on player 1 if player 1 has a damage skill of single target.
// In that case the FocusedTarget variable is who is targeted for a hit but not the focus of camera

export enum TurnStateEnum {
  EMPTY = 'empty',
  ENEMY_TURN = 'enemy_turn',
  PLAYER_TURN_DEFAULT = 'default',
  PLAYER_TURN_SKILL_PENDING = 'skill pending',
  PLAYER_ULT_PENDING = 'ult pending'
}

export type TurnState = {
  stateEnum: TurnStateEnum
  resolvingSubTurn: boolean
}

export enum CharacterType {
  PLAYER,
  ENEMY
}

export enum TargetType {
  SINGLE_ALLY = 'single ally',
  ALL_ALLIES = 'all allies',
  SINGLE_ENEMY = 'single enemy',
  SPLASH_ENEMY = 'splash enemy',
  ALL_ENEMIES = 'all enemies',
  RANDOM_ENEMY = 'random enemy'
}

export type FocusedTarget = {
  mainTarget: number
  targetType: TargetType
}

export enum SkillEffect {
  DAMAGE,
  HEAL
}

export type Skill = {
  targetType: TargetType
  modifier: number
  hits?: number
  breakEfficiency: number
  effect: SkillEffect
}

export enum Elements {
  FIRE = 'fire',
  ICE = 'ice',
  LIGHTNING = 'lightning',
  WIND = 'wind',
  QUANTUM = 'quantum',
  IMAGINARY = 'imaginary',
  PHYSICAL = 'physical'
}

export class Character {
  type: CharacterType
  name: string
  avatar: string
  maxHp: number
  hp: number
  attack: number
  speed: number

  constructor(
    characterType: CharacterType,
    name: string,
    avatar: string,
    hp: number,
    attack: number,
    speed: number
  ) {
    this.type = characterType
    this.name = name
    this.avatar = avatar
    this.maxHp = hp
    this.hp = hp
    this.attack = attack
    this.speed = speed
  }
  // check if the player is still alive
  isAlive() {
    return this.hp > 0
  }
}

export class PlayerCharacter extends Character {
  skill: Skill
  energy: number
  maxEnergy: number
  element: Elements
  ult: Skill
  backImage: string
  frontImage: string
  constructor(
    name: string,
    avatar: string,
    backImage: string,
    frontImage: string,
    hp: number,
    attack: number,
    skill: Skill,
    speed: number,
    energy: number,
    maxEnergy: number,
    ult: Skill,
    element: Elements
  ) {
    super(CharacterType.PLAYER, name, avatar, hp, attack, speed)
    this.skill = skill
    this.backImage = backImage
    this.frontImage = frontImage
    this.energy = energy
    this.maxEnergy = maxEnergy
    this.ult = ult
    this.element = element
  }
}

export class Enemy extends Character {
  weakness: Elements[]
  toughness: number
  maxToughness: number
  constructor(
    name: string,
    avatar: string,
    hp: number,
    attack: number,
    speed: number,
    weakness: Elements[],
    toughness: number
  ) {
    super(CharacterType.ENEMY, name, avatar, hp, attack, speed)
    this.weakness = weakness
    this.maxToughness = toughness
    this.toughness = toughness
  }
}

export type TimelineTurn = {
  character?: Character // A subturn where you ult from player turn, this will be undefined
  index: number
  timeUntil: number
  subTurns: SubTurn[]
}

// A smaller unit, usually an reaction, in the form of damage to enemy
export type SubTurn = {
  type: SubTurnType
  character: Character
}

export enum PlayerButton {
  ATTACK,
  SKILL
}

export type PlayerInput = {
  type: PlayerButton
  ult?: number // for cut-in ult
}

export enum SubTurnType {
  REACTION,
  ULT
}
