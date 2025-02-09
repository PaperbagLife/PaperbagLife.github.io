import { reactive, ref } from 'vue'
import {
  type Card,
  CARD_SCORE_ANIMATION_DURATION,
  CardColor,
  type CardInstance,
  Operations,
  type PointCard,
  Scene
} from './consts'

// Target is a score range, e.g Target = 5, range = +- 1.
// Some blessings work on range some work on target.
// Example onNewQuestion can change the target/range, onBattleStart can draw more cards.
// onCalculation can change the result of the calculated value
export type Blessing = {
  name: string
  description: string
  rarity: number // from 0 to 3, N, R, SR, SSR.
  onBattleStart: (state: BattleState) => void
  onNewQuestion: (state: BattleState) => void
  onCalculation: (state: BattleState) => void
  onBattleEnd: (state: BattleState) => void
}

// Enemies will have a list of targets and ranges.
// Falling within the range is considered a hit, -1 hp
// Exact target is considered a critical hit, -2 hp
// Player has to deplete hp within a certain number of questions.
// Make sure questionCount >= health.
export class Enemy {
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
  currentQuestionIndex: number = 0
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
    this.currentQuestionIndex = 0
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

export class Shop {
  id: string
  cards: Card[]
  blessings: Blessing[]
  constructor(id: string, cards: Card[], blessings: Blessing[]) {
    this.id = id
    this.cards = cards
    this.blessings = blessings
  }
}

export type Floor = Enemy | Shop

export class BattleState {
  currentDeck: CardInstance[]
  hand: CardInstance[]
  discard: CardInstance[]
  animationStack: number[] = []
  blessings: Blessing[] = []
  enemy: Enemy
  battleEnd: boolean = false
  constructor(currentDeck: CardInstance[], enemy: Enemy) {
    this.currentDeck = currentDeck
    this.hand = []
    this.discard = []
    this.enemy = enemy
  }

  drawCards(this: BattleState, count: number) {
    for (let i = 0; i < count; i++) {
      if (this.currentDeck.length == 0) {
        this.currentDeck = this.discard
        this.discard = []
      }
      const card = this.currentDeck.pop()
      if (card) {
        this.hand.push(card)
      }
    }
  }

  startBattle(this: BattleState, blessings: Blessing[]) {
    this.enemy.nextTarget()
    this.blessings = blessings
    this.currentDeck.sort(() => Math.random() - 0.5)
    this.battleEnd = false
    this.drawCards(5)
  }

  resolveQuestion(this: BattleState, cards: PointCard[]) {
    // Based on the operators, calculate the result
    let result = cards[0].value * (cards[0].color === CardColor.DARK ? -1 : 1)
    for (let i = 0; i < this.enemy.currentOperators.length; i++) {
      const value = cards[i + 1].value * (cards[i + 1].color === CardColor.DARK ? -1 : 1)
      switch (this.enemy.currentOperators[i]) {
        case Operations.ADD:
          result += value
          break
        case Operations.SUBTRACT:
          result -= value
          break
        case Operations.MULTIPLY:
          result *= value
          break
      }
      this.animationStack.push(CARD_SCORE_ANIMATION_DURATION)
    }
    // blessing
    this.blessings.forEach((blessing) => {
      blessing.onCalculation(this)
    })
    // Check if the result is within the range
    const exactHit = result === this.enemy.currentTarget
    const hit = Math.abs(result - this.enemy.currentTarget) <= this.enemy.range
    if (exactHit) {
      this.enemy.health -= 2
    } else if (hit) {
      this.enemy.health -= 1
    }
    this.enemy.questionCount--
    // Check gameover
    if (this.enemy.questionCount == 0 && this.enemy.health > 0) {
      // Game over
      gameOver(this.enemy)
    }

    // Check if enemy is dead

    if (this.enemy.health <= 0) {
      // Enemy is dead
      this.battleEnd = true
      return
    }
    this.nextQuestion()
  }

  nextQuestion(this: BattleState) {
    if (this.animationStack.length !== 0) {
      const animationTime = this.animationStack.shift()
      setTimeout(() => {
        this.nextQuestion()
      }, animationTime)
    } else {
      this.enemy.nextTarget()
      this.drawCards(3)
      this.enemy.currentQuestionIndex++
    }
  }
}

export class GameState {
  scene = Scene.TITLE
  gold = 0
  deck: CardInstance[] = []
  blessings: Blessing[] = []
  currentBattle: BattleState | null = null
  floors: Floor[] = []
  lastEnemy: Enemy | null = null
  idCounter: number = 0
}

export const enemies = [
  new Enemy('Slime', 3, 3, 5, 3, 1, 3, [Operations.ADD, Operations.SUBTRACT], [0.5, 1])
]

const gameState = reactive(new GameState())

function gameOver(enemy: Enemy) {
  // Show game over screen
  console.log('Game over')
  gameState.lastEnemy = enemy
  gameState.scene = Scene.GAME_OVER
}

function initializeGame(deck: Card[]) {
  gameState.gold = 0
  gameState.blessings = []
  // Generate a list of floors
  gameState.floors = []
  for (let i = 0; i < 10; i++) {
    gameState.floors.push(enemies[0])
  }
  gameState.idCounter = 0
  deck.forEach((card) => {
    gameState.deck.push({ ...card, instanceID: gameState.idCounter++ })
  })

  // Temporary for testing
  const currentEnemy = gameState.floors.pop()
  if (currentEnemy instanceof Enemy) {
    gameState.currentBattle = new BattleState(gameState.deck, currentEnemy)
    gameState.currentBattle.startBattle(gameState.blessings)
  }
}

export function useGameState() {
  return { gameState, initializeGame }
}
