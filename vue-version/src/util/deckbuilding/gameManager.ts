import { reactive, ref } from 'vue'
import mathmanTachie from '@/assets/game/deckbuilding/mathman.png'
import {
  type Card,
  CARD_SCORE_ANIMATION_DURATION,
  CardColor,
  type CardInstance,
  ENEMY_DAMAGE_ANIMATION_DURATION,
  Operations,
  type PointCard,
  Scene
} from './consts'

// Target is a score range, e.g Target = 5, range = +- 1.
// Some blessings work on range some work on target.
// Example onNewQuestion can change the target/range, onBattleStart can draw more cards.
// onCalculation can change the result of the calculated value
// Some blessings are in the form of increasing attack, revival, etc.
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
// Falling within the range is considered a hit, -player.attack hp
// Exact target is considered a critical hit, -2x player.attack hp
// Player has to deplete hp within a certain number of questions.
// Make sure questionCount >= hp.
export class Enemy {
  name: string
  tachie: string
  hp: number
  maxHp: number
  questionCount: number
  currentTarget: number
  cardCount: number
  targetMax: number
  targetMin: number
  range: number
  operators: Operations[]
  operatorsCDF: number[]
  currentOperators: Operations[]
  currentQuestionIndex: number
  reward: number
  damaged: boolean = false
  crit: boolean = false
  constructor(
    name: string,
    tachie: string,
    maxHp: number,
    questionCount: number,
    targetMax: number,
    targetMin: number,
    range: number, // always +- same value
    cardCount: number,
    operators: Operations[],
    operatorCDF: number[],
    reward: number
  ) {
    this.name = name
    this.tachie = tachie
    this.hp = maxHp
    this.maxHp = maxHp
    this.questionCount = questionCount
    this.cardCount = cardCount // operator count = card count - 1
    this.range = range
    this.currentTarget = 0
    this.targetMax = targetMax
    this.targetMin = targetMin
    this.operators = operators
    this.operatorsCDF = operatorCDF
    this.currentOperators = []
    this.currentQuestionIndex = -1
    this.reward = reward
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

  hit(this: Enemy, delay: number, damage: number) {
    setTimeout(() => {
      this.damaged = true
      setTimeout(() => {
        this.hp -= damage
        setTimeout(() => {
          this.damaged = false
        }, ENEMY_DAMAGE_ANIMATION_DURATION / 2)
      }, ENEMY_DAMAGE_ANIMATION_DURATION / 2)
    }, delay)
  }

  exactHit(this: Enemy, delay: number, damage: number) {
    setTimeout(() => {
      this.crit = true
      this.damaged = true
      setTimeout(() => {
        this.hp -= damage * 2
        setTimeout(() => {
          this.crit = false
          this.damaged = false
        }, ENEMY_DAMAGE_ANIMATION_DURATION / 2)
      }, ENEMY_DAMAGE_ANIMATION_DURATION / 2)
    }, delay)
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

export class Player {
  revival: number
  attack: number
  blessing: Blessing[]
  constructor(revival: number, attack: number, blessing: Blessing[]) {
    this.revival = revival
    this.attack = attack
    this.blessing = blessing
  }
}

export type Floor = Enemy | Shop

export type ScoreAnimation = {
  duration: number
  value?: number
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export class BattleState {
  currentDeck: CardInstance[]
  hand: CardInstance[]
  discard: CardInstance[]
  animationStack: ScoreAnimation[] = []
  currentValue: number = 0
  blessings: Blessing[] = []
  enemy: Enemy
  battleEnd: boolean = false
  player: Player
  constructor(currentDeck: CardInstance[], enemy: Enemy, player: Player) {
    this.currentDeck = currentDeck
    this.hand = []
    this.discard = []
    this.enemy = enemy
    this.player = player
  }

  drawCards(this: BattleState, count: number) {
    for (let i = 0; i < count; i++) {
      if (this.currentDeck.length == 0) {
        this.currentDeck = this.discard
        this.discard = []
      }
      const card = this.currentDeck.pop()
      if (card) {
        this.hand.splice(0, 0, card)
      }
    }
  }

  startBattle(this: BattleState, blessings: Blessing[]) {
    this.enemy.nextTarget()
    this.blessings = blessings
    this.currentDeck.sort(() => Math.random() - 0.5)
    this.battleEnd = false
    this.drawCards(5)
    this.enemy.currentQuestionIndex = 0
    this.player.blessing.forEach((blessing) => {
      blessing.onBattleStart(this)
    })
  }

  resolveQuestion(this: BattleState, cards: PointCard[]) {
    // Based on the operators, calculate the result
    let totalAnimationTime = 0
    let result = cards[0].value * (cards[0].color === CardColor.DARK ? -1 : 1)
    this.animationStack.push({ duration: CARD_SCORE_ANIMATION_DURATION, value: result })
    totalAnimationTime += CARD_SCORE_ANIMATION_DURATION
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
      this.animationStack.push({ duration: CARD_SCORE_ANIMATION_DURATION, value: result })
      totalAnimationTime += CARD_SCORE_ANIMATION_DURATION
    }
    // blessing
    this.blessings.forEach((blessing) => {
      blessing.onCalculation(this)
    })
    // Check if the result is within the range
    const exactHit = result === this.enemy.currentTarget
    const hit = Math.abs(result - this.enemy.currentTarget) <= this.enemy.range
    this.animationStack.push({ duration: ENEMY_DAMAGE_ANIMATION_DURATION })
    if (exactHit) {
      this.enemy.exactHit(totalAnimationTime, this.player.attack)
    } else if (hit) {
      this.enemy.hit(totalAnimationTime, this.player.attack)
    }
    this.enemy.questionCount--
    // Check gameover
    if (this.enemy.questionCount == 0 && this.enemy.hp > 0) {
      // Game over
      gameOver(this.enemy)
      return true
    }

    if (this.enemy.hp <= 0) {
      // Enemy is dead
      console.log('Enemy is dead')
      return true
    }
    this.nextQuestion()
    return false
  }

  async endBattle(this: BattleState): Promise<number> {
    while (this.animationStack.length !== 0) {
      await sleep(1000)
    }
    this.battleEnd = true
    this.blessings.forEach((blessing) => {
      blessing.onBattleEnd(this)
    })

    return this.enemy.reward
  }

  nextQuestion(this: BattleState) {
    if (this.animationStack.length !== 0) {
      const animation = this.animationStack.shift()
      if (animation && animation.value != undefined) {
        this.currentValue = animation.value
      }
      setTimeout(() => {
        this.nextQuestion()
      }, animation?.duration)
    } else {
      this.currentValue = 0
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
  player: Player | null = null
  floorIndex: number = 0
  currentShop: Shop | null = null
}

export const enemies = [
  new Enemy(
    'mathman',
    mathmanTachie,
    15,
    3,
    5,
    3,
    1,
    3,
    [Operations.ADD, Operations.SUBTRACT],
    [0.5, 1],
    5
  )
]

const gameState = reactive(new GameState())

function gameOver(enemy: Enemy) {
  // Show game over screen
  console.log('Game over')
  gameState.lastEnemy = enemy
  gameState.scene = Scene.GAME_OVER
}

function climbNextFloor() {
  gameState.floorIndex++
  const floor = gameState.floors[gameState.floorIndex]
  if (floor instanceof Enemy) {
    gameState.currentBattle = new BattleState(gameState.deck, floor, gameState.player!)
    gameState.currentBattle.startBattle(gameState.blessings)
  }
  if (floor instanceof Shop) {
    gameState.currentShop = floor
  }
}

function initializeGame(deck: Card[]) {
  const player = new Player(1, 5, [])
  gameState.gold = 0
  gameState.blessings = []
  gameState.player = player
  // Generate a list of floors
  gameState.floorIndex = 0
  gameState.floors = []
  for (let i = 0; i < 8; i++) {
    gameState.floors.push(enemies[0])
  }
  gameState.idCounter = 0
  deck.forEach((card) => {
    gameState.deck.push({ ...card, instanceID: gameState.idCounter++ })
  })

  // // Temporary for testing
  // const currentEnemy = gameState.floors.shift()
  // if (currentEnemy instanceof Enemy) {
  //   gameState.currentBattle = new BattleState(gameState.deck, currentEnemy, gameState.player)
  //   gameState.currentBattle.startBattle(gameState.blessings)
  // }
}

export function useGameState() {
  return { gameState, initializeGame, climbNextFloor }
}
