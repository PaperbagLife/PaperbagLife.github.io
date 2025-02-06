import { reactive, ref } from 'vue'

export enum CardColor {
  DARK,
  LIGHT
}

export enum CardType {
  POINT,
  UTILITY
}

export type PointCard = {
  type: CardType.POINT
  id: string
  color: CardColor
  value: number
}

export type Card = PointCard | UtilityCard

export type UtilityCard = {
  type: CardType.UTILITY
  name: string
  id: string
  description: string
  inputCount: number
  operation: (inputs: PointCard[]) => PointCard[]
}

export type RenderCard = {
  card: Card
  centerX: number
  centerY: number
}

// Target is a score range, e.g Target = 5, range = +- 1.
// Some blessings work on range some work on target.
// Example onNewQuestion can change the target/range, onBattleStart can draw more cards.
// onCalculation can change the result of the calculated value
export type Blessing = {
  name: string
  description: string
  onBattleStart: (state: BattleState) => void
  onNewQuestion: (state: BattleState) => void
  onCalculation: (state: BattleState) => void
  onBattleEnd: (state: BattleState) => void
}

export enum Operations {
  ADD,
  SUBTRACT,
  MULTIPLY
}

// Enemies will have a list of targets and ranges.
// Falling within the range is considered a hit, -1 hp
// Exact target is considered a critical hit, -2 hp
// Player has to deplete hp within a certain number of questions.
// Make sure questionCount >= health.
class Enemy {
  name: string
  health: number
  questionCount: number
  currentTarget: number
  cardCount: number
  targetMax: number
  targetMin: number
  range: number
  operators: Operations[]
  operatorsCDF: number[]
  currentOperators: Operations[]
  constructor(
    name: string,
    health: number,
    questionCount: number,
    targetMax: number,
    targetMin: number,
    range: number, // always +- same value
    cardCount: number,
    operators: Operations[],
    operatorCDF: number[]
  ) {
    this.name = name
    this.health = health
    this.questionCount = questionCount
    this.cardCount = cardCount // operator count = card count - 1
    this.range = range
    this.currentTarget = 0
    this.targetMax = targetMax
    this.targetMin = targetMin
    this.operators = operators
    this.operatorsCDF = operatorCDF
    this.currentOperators = []
  }
  nextTarget(this: Enemy) {
    this.currentTarget = Math.floor(
      Math.random() * (this.targetMax - this.targetMin) + this.targetMin
    )
    this.currentOperators = []
    for (let i = 0; i < this.cardCount - 1; i++) {
      const r = Math.random()
      let op = 0
      while (r > this.operatorsCDF[op]) {
        op++
      }
      this.currentOperators.push(this.operators[op])
    }
  }
}

export class BattleState {
  currentDeck: Card[]
  hand: Card[]
  discard: Card[]
  animationStack: string[] = []
  enemy: Enemy
  constructor(currentDeck: Card[], enemy: Enemy) {
    this.currentDeck = currentDeck
    this.hand = []
    this.discard = []
    this.enemy = enemy
  }
}

export enum Scene {
  TITLE,
  MAP,
  BATTLE,
  SHOP,
  GAME_OVER
}

export class GameState {
  scene = Scene.TITLE
  gold = 0
  deck: Card[] = []
  blessings: Blessing[] = []
  currentBattle: BattleState | null = null
}

export const enemies = [
  new Enemy('Slime', 3, 3, 5, 3, 1, 3, [Operations.ADD, Operations.SUBTRACT], [0.5, 1])
]

const gameState = reactive(new GameState())

function initializeGame(deck: Card[]) {
  gameState.gold = 0
  gameState.deck = deck
  gameState.blessings = []
  const firstBattle = new BattleState(deck, enemies[0])
  gameState.currentBattle = firstBattle
}

export function useGameState() {
  return { gameState, initializeGame }
}
