<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive } from 'vue'
import bailuAvatar from '../assets/game/img/bailu-avatar.png'
import bailuBack from '../assets/game/img/bailu-back.png'
import bailuFront from '../assets/game/img/bailu-front.png'
import marchFront from '../assets/game/img/march-front.png'
import marchAvatar from '../assets/game/img/march-avatar.png'
import marchBack from '../assets/game/img/march-back.png'
import flameSpawnImage from '../assets/game/img/flamespawn.png'
import fireShadewalkerImage from '../assets/game/img/fire_shadewalker.png'
import frostSpawnImage from '../assets/game/img/frostspawn.png'
import stelleAvatar from '../assets/game/img/stelle-avatar.png'
import stelleBack from '../assets/game/img/stelle-back.png'
import stelleFront from '../assets/game/img/stelle-front.png'
import { useBreakpoints } from '../util/dimensions'
import {
  BASIC_ATTACK_ENERGY_GAIN,
  CameraMode,
  Character,
  CharacterType,
  ENEMY_BETWEEN_PADDING,
  ENEMY_CENTER_Y,
  ENEMY_SIZE,
  Elements,
  Enemy,
  HIT_ENERGY_REGEN,
  MAX_SKILLPOINTS,
  MULTIHIT_DELAY,
  PLAYER_BETWEEN_PADDING,
  PLAYER_IMAGE_WIDTH,
  PlayerButton,
  PlayerCharacter,
  SkillEffect,
  SubTurnType,
  TIMELINE_DISTANCE,
  TURN_TIME,
  TargetType,
  TurnStateEnum,
  type CameraState,
  type DamageNumber,
  type FocusedTarget,
  type PlayerInput,
  type SubTurn,
  type TargetMarkers,
  type TimelineTurn,
  type TurnState
} from '../util/starrail/consts'
import { delay, getElementColor, getRandomInt } from '../util/starrail/utils'
import EnemyView from './components/EnemyView.vue'
import PlayerView from './components/PlayerView.vue'
import TargetMarkerComponent from './components/TargetMarkerComponent.vue'
import TimelineComponent from './components/TimelineComponent.vue'
const { type } = useBreakpoints()

const BREAK_DAMAGE = 20
const BREAK_DELAY = 50

// Combat, Damage related logic
class CombatManager {
  static async resolveEnemyMove() {
    const enemy = gameState.turnCharacter as Enemy
    if (enemy.toughness <= 0) {
      enemy.toughness = enemy.maxToughness
    }
    const damage = enemy.attack
    const target = getRandomInt(gameState.playerCharacters.length)
    gameState.cameraState.focus = target
    await delay(TURN_TIME)
    gameState.playerCharacters[target].hp -= damage
    gameState.playerCharacters[target].energy = Math.min(
      gameState.playerCharacters[target].energy + HIT_ENERGY_REGEN,
      gameState.playerCharacters[target].maxEnergy
    )
  }
  static resolveDamageOnEnemy(
    enemyIdx: number,
    damage: number,
    breakEfficiency: number,
    element: Elements
  ) {
    const enemy = gameState.enemies[enemyIdx]
    enemy.hp -= damage
    makeDamageNumber(damage, CharacterType.ENEMY, enemyIdx, element)
    if (enemy.weakness.includes(element) && enemy.toughness != 0) {
      enemy.toughness -= breakEfficiency
      if (enemy.toughness <= 0) {
        // a break happened. TODO: Depending on what the element that broke it, apply debuff
        enemy.hp -= BREAK_DAMAGE
        makeDamageNumber(damage, CharacterType.ENEMY, enemyIdx, element, true)
        const enemyTurnIdx = gameState.queue.findIndex(
          (turnEntry) => turnEntry.character?.name === enemy.name
        )
        if (enemyTurnIdx === -1) {
          console.log('impossible, no enemy turn on timeline')
          return
        }
        gameState.queue[enemyTurnIdx].timeUntil += BREAK_DELAY
        Timeline.sortTimeline()
      }
    }
  }
  static async resolvePlayerSkill() {
    const player = gameState.turnCharacter as PlayerCharacter
    await delay(TURN_TIME)
    gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_DEFAULT
    gameState.focusedTarget.targetType = TargetType.SINGLE_ENEMY
    if (player.skill.effect === SkillEffect.DAMAGE) {
      const damage = player.attack * player.skill.modifier
      const target = gameState.focusedTarget.mainTarget
      // Depending on the type of the skill do differnt calculations here
      switch (player.skill.targetType) {
        case TargetType.SINGLE_ENEMY: {
          this.resolveDamageOnEnemy(target, damage, player.skill.breakEfficiency, player.element)
          break
        }
        case TargetType.SPLASH_ENEMY: {
          this.resolveDamageOnEnemy(target, damage, player.skill.breakEfficiency, player.element)
          if (target > 0) {
            this.resolveDamageOnEnemy(
              target - 1,
              damage,
              player.skill.breakEfficiency,
              player.element
            )
          }
          if (target < gameState.enemies.length - 1) {
            this.resolveDamageOnEnemy(
              target + 1,
              damage,
              player.skill.breakEfficiency,
              player.element
            )
          }
          break
        }
        case TargetType.ALL_ENEMIES:
        case TargetType.RANDOM_ENEMY: {
          for (let i = 0; i < (player.skill.hits ?? 1); i += 1) {
            const enemyIdx = getRandomInt(gameState.enemies.length)
            this.resolveDamageOnEnemy(
              enemyIdx,
              damage,
              player.skill.breakEfficiency,
              player.element
            )
          }
        }
      }
    } else if (player.skill.effect === SkillEffect.HEAL) {
      switch (player.skill.targetType) {
        case TargetType.SINGLE_ALLY: {
          const target = gameState.focusedTarget.mainTarget
          const hp = gameState.playerCharacters[target].hp
          gameState.playerCharacters[target].hp = Math.min(
            hp + player.skill.modifier,
            gameState.playerCharacters[target].maxHp
          )
          break
        }
        case TargetType.ALL_ALLIES: {
          gameState.playerCharacters.forEach(
            (pc) => (pc.hp = Math.min(pc.maxHp, pc.hp + player.skill.modifier))
          )
        }
      }
      gameState.cameraState.mode = CameraMode.DEFAULT
    }
    await delay(1000)
  }

  static async resolvePlayerAttack() {
    const player = gameState.turnCharacter as PlayerCharacter
    await delay(TURN_TIME)
    player.energy = Math.min(player.energy + BASIC_ATTACK_ENERGY_GAIN, player.maxEnergy)
    const damage = player.attack
    const target = gameState.focusedTarget.mainTarget
    // Assume basic attack always single target (TODO p2: change this paradigm later)
    this.resolveDamageOnEnemy(target, damage, 1, player.element)
    await delay(1000)
  }

  static async resolvePlayerUlt() {
    const player = gameState.turnCharacter as PlayerCharacter
    await delay(TURN_TIME)
    if (player.ult.effect === SkillEffect.DAMAGE) {
      const damage = player.attack * player.ult.modifier
      const target = gameState.focusedTarget.mainTarget
      // Depending on the type of the skill do differnt calculations here
      switch (player.ult.targetType) {
        case TargetType.SINGLE_ENEMY: {
          gameState.enemies[target].hp -= damage
          break
        }
        case TargetType.SPLASH_ENEMY: {
          gameState.enemies[target].hp -= damage
          if (target > 0) {
            gameState.enemies[target - 1].hp -= damage
          }
          if (target < gameState.enemies.length - 1) {
            gameState.enemies[target + 1].hp -= damage
          }
          break
        }
        case TargetType.ALL_ENEMIES: {
          gameState.enemies.forEach((enemy, i) => {
            this.resolveDamageOnEnemy(i, damage, player.ult.breakEfficiency, player.element)
          })
          break
        }
        case TargetType.RANDOM_ENEMY: {
          for (let i = 0; i < (player.ult.hits ?? 1); i += 1) {
            const enemyIdx = getRandomInt(gameState.enemies.length)
            await delay(MULTIHIT_DELAY)
            this.resolveDamageOnEnemy(enemyIdx, damage, player.ult.breakEfficiency, player.element)
          }
        }
      }
    } else if (player.ult.effect === SkillEffect.HEAL) {
      switch (player.ult.targetType) {
        case TargetType.SINGLE_ALLY: {
          const target = gameState.focusedTarget.mainTarget
          const hp = gameState.playerCharacters[target].hp
          gameState.playerCharacters[target].hp = Math.min(
            hp + player.skill.modifier,
            gameState.playerCharacters[target].maxHp
          )
          break
        }
        case TargetType.ALL_ALLIES: {
          gameState.playerCharacters.forEach(
            (pc) => (pc.hp = Math.min(pc.maxHp, pc.hp + player.skill.modifier))
          )
        }
      }
      gameState.cameraState.mode = CameraMode.DEFAULT
    }
    await delay(1000)
    player.energy += 5
  }
}

// Class for organizing functions to do with turns
class TurnManager {
  static async resolveTurn(turn: TimelineTurn) {
    gameState.currentTurn = turn
    gameState.focusedTarget.targetType = TargetType.SINGLE_ENEMY
    gameState.currentResolvingSubTurn = null
    if (!turn.character) return
    if (turn.character.type === CharacterType.ENEMY) {
      const enemy = turn.character as Enemy
      gameState.turnState = { resolvingSubTurn: false, stateEnum: TurnStateEnum.ENEMY_TURN }
      gameState.turnCharacter = enemy
      await CombatManager.resolveEnemyMove()
    } else {
      // player turn
      const player = turn.character as PlayerCharacter
      gameState.cameraState.focus = turn.index
      gameState.turnCharacter = player
      gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_DEFAULT
      // Block until an action is taken
      let turnTaken = false
      while (!turnTaken) {
        // Check for insert ult
        if (gameState.ultSignaled != null) {
          // put the current turn back
          gameState.queue.unshift(turn)
          gameState.currentTurn = {
            character: undefined,
            index: gameState.ultSignaled,
            timeUntil: 0,
            subTurns: [
              {
                type: SubTurnType.ULT,
                character: gameState.playerCharacters[gameState.ultSignaled]
              }
            ]
          }
          gameState.turnCharacter = null
          gameState.ultSignaled = null
          gameState.playerInput = null
          break
        }
        if (gameState.playerInput != null) {
          switch (gameState.playerInput.type) {
            case PlayerButton.ATTACK: {
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT) {
                // Fire basic attack
                gameState.skillPoints = Math.min(gameState.skillPoints + 1, MAX_SKILLPOINTS)
                await CombatManager.resolvePlayerAttack()
                turnTaken = true
                break
              }
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_SKILL_PENDING) {
                // Go to default state
                gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_DEFAULT
                gameState.cameraState.mode = CameraMode.DEFAULT
                gameState.cameraState.focus = turn.index
                gameState.focusedTarget.targetType = TargetType.SINGLE_ENEMY
              }
              break
            }
            case PlayerButton.SKILL: {
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_SKILL_PENDING) {
                // Fire skill
                gameState.skillPoints -= 1
                await CombatManager.resolvePlayerSkill()
                turnTaken = true
                break
              }
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT) {
                // Go to skill ready state
                gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_SKILL_PENDING
                gameState.focusedTarget.targetType = player.skill.targetType
                if (
                  player.skill.targetType === TargetType.SINGLE_ALLY ||
                  player.skill.targetType === TargetType.ALL_ALLIES
                ) {
                  gameState.focusedTarget.mainTarget = gameState.currentTurn.index
                }
                if (
                  player.skill.targetType === TargetType.ALL_ALLIES ||
                  player.skill.targetType === TargetType.SINGLE_ALLY
                ) {
                  gameState.cameraState.mode = CameraMode.ALLIES
                  gameState.cameraState.focus = turn.index
                }
              }
              break
            }
          }
          gameState.playerInput = null
        }
        await delay(200)
      }
    }

    if (!gameState.currentTurn) return
    if (gameState.turnCharacter) {
      Timeline.enqueue(gameState.turnCharacter, turn.index)
    }
    gameState.turnCharacter = null

    let currentSubTurn = null
    while (gameState.currentTurn.subTurns.length > 0) {
      gameState.currentTurn.subTurns.sort((a, b) =>
        a.type === b.type ? 0 : a.type === SubTurnType.REACTION ? -1 : 1
      )
      currentSubTurn = gameState.currentTurn.subTurns.shift()
      // handle ult and reactions here, kinda need to sort them
      if (!currentSubTurn) break
      gameState.currentResolvingSubTurn = currentSubTurn
      gameState.turnCharacter = currentSubTurn.character
      if (currentSubTurn.type === SubTurnType.REACTION) {
        // TODO: Reaction subturns
      }
      if (currentSubTurn.type === SubTurnType.ULT) {
        gameState.turnState.stateEnum = TurnStateEnum.PLAYER_ULT_PENDING
        let ultFired = false
        // Adjust camera state
        const player = gameState.turnCharacter as PlayerCharacter
        gameState.cameraState.focus = gameState.playerCharacters.findIndex(
          (c) => c.name === player.name
        )
        if (
          player.ult.targetType === TargetType.ALL_ALLIES ||
          player.ult.targetType === TargetType.SINGLE_ALLY
        ) {
          gameState.cameraState.mode = CameraMode.ALLIES
          gameState.cameraState.focus = turn.index
        }
        gameState.focusedTarget.targetType = player.ult.targetType
        while (!ultFired) {
          if (gameState.playerInput != null && gameState.playerInput.type === PlayerButton.ATTACK) {
            ultFired = true
            gameState.playerInput = null
            await CombatManager.resolvePlayerUlt()
          }
          await delay(200)
        }
      }
    }
  }
}

class UIElements {
  show0SkillPoint = false
  showWinMessage = true
}

// Class for organizing functions to do with timeline
class Timeline {
  static sortTimeline() {
    gameState.queue.sort((a, b) => a.timeUntil - b.timeUntil)
  }
  static enqueue(character: Character, index: number) {
    gameState.queue.push({
      character,
      index,
      timeUntil: TIMELINE_DISTANCE / character.speed,
      subTurns: []
    })
  }

  static getNextTurn() {
    const turn = gameState.queue.shift()
    gameState.queue.forEach((futureTurn) => (futureTurn.timeUntil -= turn?.timeUntil ?? 0))
    if (turn) {
      turn.timeUntil = 0
      return turn
    }
  }

  static ult(index: number) {
    if (index > gameState.playerCharacters.length) return
    const character = gameState.playerCharacters[index]
    if (character.energy === character.maxEnergy) {
      character.energy = 0
      // Either append ult turn at the end of subTurn or immediately resolve ult turn
      if (
        gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT ||
        gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_SKILL_PENDING
      ) {
        // Immediately resolve ult turn
        gameState.ultSignaled = index
      } else {
        gameState.currentTurn?.subTurns.push({
          type: SubTurnType.ULT,
          character: gameState.playerCharacters[index]
        })
      }
    }
  }
}

// Class for maintaining the main gamestate
class GameState {
  cameraState: CameraState
  turnState: TurnState = { stateEnum: TurnStateEnum.EMPTY, resolvingSubTurn: false }
  turnCharacter: Character | null = null
  queue: TimelineTurn[]
  playerCharacters: PlayerCharacter[]
  enemies: Enemy[]
  skillPoints: number
  playerInput: PlayerInput | null = null
  focusedTarget: FocusedTarget = { mainTarget: 0, targetType: TargetType.SINGLE_ENEMY }
  currentTurn: TimelineTurn | null = null
  currentResolvingSubTurn: SubTurn | null = null
  ultSignaled: number | null = null
  gameOver = false

  constructor(playerCharacters: PlayerCharacter[], enemies: Enemy[]) {
    this.cameraState = {
      mode: CameraMode.DEFAULT,
      focus: 0
    }
    this.queue = []
    this.playerCharacters = playerCharacters
    this.enemies = enemies
    this.skillPoints = 3
  }
  async initGame() {
    this.playerCharacters.forEach((char, i) => Timeline.enqueue(char, i))
    this.enemies.forEach((char, i) => Timeline.enqueue(char, i))
    Timeline.sortTimeline()
    while (!this.gameOver) {
      const nextTurn = Timeline.getNextTurn()
      if (!nextTurn) {
        console.log('no more turns??')
        return
      }
      await TurnManager.resolveTurn(nextTurn)
      // Check deaths
      gameState.enemies = gameState.enemies.filter((enemy) => enemy.isAlive())
      gameState.playerCharacters = gameState.playerCharacters.filter((player) => player.isAlive())
      gameState.queue = gameState.queue.filter((turn) => turn.character?.isAlive())
      if (gameState.enemies.length === 0) {
        uiElements.showWinMessage = true
        this.gameOver = true
      }
    }
  }
}

const canvas = { width: 840, height: 360 }
const stelle = new PlayerCharacter(
  'main-character',
  stelleAvatar,
  stelleBack,
  stelleFront,
  100,
  10,
  {
    targetType: TargetType.SPLASH_ENEMY,
    effect: SkillEffect.DAMAGE,
    modifier: 1.2,
    breakEfficiency: 2
  },

  120,
  100,
  100,
  {
    targetType: TargetType.RANDOM_ENEMY,
    hits: 3,
    effect: SkillEffect.DAMAGE,
    modifier: 2,
    breakEfficiency: 1
  },
  Elements.PHYSICAL
)
const bailu = new PlayerCharacter(
  'bailu',
  bailuAvatar,
  bailuBack,
  bailuFront,
  100,
  10,
  {
    targetType: TargetType.SINGLE_ALLY,
    effect: SkillEffect.HEAL,
    modifier: 10,
    breakEfficiency: 0
  },
  110,
  100,
  100,
  {
    targetType: TargetType.ALL_ALLIES,
    hits: 3,
    effect: SkillEffect.HEAL,
    modifier: 20,
    breakEfficiency: 0
  },
  Elements.LIGHTNING
)

const march = new PlayerCharacter(
  'march',
  marchAvatar,
  marchBack,
  marchFront,
  100,
  10,
  {
    targetType: TargetType.SPLASH_ENEMY,
    effect: SkillEffect.DAMAGE,
    modifier: 1.2,
    breakEfficiency: 2
  },

  130,
  100,
  100,
  {
    targetType: TargetType.ALL_ENEMIES,
    effect: SkillEffect.DAMAGE,
    modifier: 2,
    breakEfficiency: 2
  },
  Elements.ICE
)

const frostSpawn = new Enemy(
  'frostspawn',
  frostSpawnImage,
  50,
  6,
  90,
  [Elements.FIRE, Elements.WIND],
  1
)
const frostSpawn2 = new Enemy(
  'frostspawn2',
  frostSpawnImage,
  50,
  8,
  90,
  [Elements.FIRE, Elements.WIND],
  1
)
const fireShadeWalker = new Enemy(
  'fireshadewalker',
  fireShadewalkerImage,
  100,
  15,
  100,
  [Elements.ICE, Elements.WIND, Elements.IMAGINARY],
  2
)
const frostSpawn4 = new Enemy(
  'frostspawn4',
  frostSpawnImage,
  50,
  7,
  90,
  [Elements.FIRE, Elements.WIND],
  1
)
const flameSpawn = new Enemy(
  'flameSpawn',
  flameSpawnImage,
  50,
  5,
  90,
  [Elements.ICE, Elements.PHYSICAL],
  1
)
const gameState = reactive(
  new GameState(
    [stelle, bailu, march],
    [flameSpawn, frostSpawn2, fireShadeWalker, frostSpawn4, frostSpawn]
  )
)
const uiElements = reactive(new UIElements())

const playerXPositions = computed<number[]>(() => {
  const START_LOCATION = 200
  const space = canvas.width - START_LOCATION
  const sidePadding =
    (space -
      gameState.playerCharacters.length * (PLAYER_IMAGE_WIDTH + PLAYER_BETWEEN_PADDING) -
      PLAYER_BETWEEN_PADDING) /
    2
  const result: number[] = []
  for (let i = 0; i < gameState.playerCharacters.length; i++) {
    result.push(
      START_LOCATION +
        sidePadding +
        PLAYER_BETWEEN_PADDING +
        i * (PLAYER_IMAGE_WIDTH + PLAYER_BETWEEN_PADDING)
    )
  }
  return result
})

const enemyXPositions = computed<number[]>(() => {
  const START_LOCATION = 350
  const space = canvas.width - START_LOCATION

  const sidePadding =
    (space -
      gameState.enemies.length * (ENEMY_SIZE + ENEMY_BETWEEN_PADDING) -
      ENEMY_BETWEEN_PADDING) /
    2
  const result: number[] = []
  for (let i = 0; i < gameState.enemies.length; i++) {
    result.push(
      START_LOCATION +
        sidePadding +
        ENEMY_BETWEEN_PADDING +
        i * (ENEMY_SIZE + ENEMY_BETWEEN_PADDING)
    )
  }
  return result
})

const targetMarkers = computed<TargetMarkers>(() => {
  const mainTarget = gameState.focusedTarget.mainTarget
  switch (gameState.focusedTarget.targetType) {
    case TargetType.SINGLE_ALLY:
      return { main: [gameState.focusedTarget.mainTarget], sub: [] }
    case TargetType.ALL_ALLIES: {
      return {
        main: Array.from({ length: gameState.playerCharacters.length }, (_, index) => index),
        sub: []
      }
    }
    case TargetType.SINGLE_ENEMY:
      return { main: [mainTarget], sub: [] }
    case TargetType.SPLASH_ENEMY: {
      const targets = { main: [mainTarget], sub: [] as number[] }
      if (mainTarget - 1 >= 0) {
        targets.sub.push(mainTarget - 1)
      }
      if (mainTarget + 1 < gameState.enemies.length) {
        targets.sub.push(mainTarget + 1)
      }
      return targets
    }
    case TargetType.ALL_ENEMIES:
    case TargetType.RANDOM_ENEMY: {
      return {
        main: Array.from({ length: gameState.enemies.length }, (_, index) => index),
        sub: []
      }
    }
    default:
      return { main: [], sub: [] }
  }
})

function attackButton() {
  if (gameState.turnState.stateEnum === TurnStateEnum.ENEMY_TURN) {
    return
  }
  gameState.playerInput = { type: PlayerButton.ATTACK }
}

let last0SkillReset = 0
function skillButton() {
  if (gameState.skillPoints === 0) {
    clearTimeout(last0SkillReset)
    uiElements.show0SkillPoint = true
    last0SkillReset = setTimeout(() => {
      uiElements.show0SkillPoint = false
    }, 2000)
    return
  }
  if (gameState.turnState.stateEnum === TurnStateEnum.ENEMY_TURN) {
    return
  }
  gameState.playerInput = { type: PlayerButton.SKILL }
}

let damageNumberIndex = 0
const damageNumbers = reactive(new Map<number, DamageNumber>())
function makeDamageNumber(
  damage: number,
  characterType: CharacterType,
  index: number,
  element?: Elements,
  differntLocation?: boolean
) {
  damageNumberIndex += 1
  if (characterType === CharacterType.ENEMY) {
    const damageNumber = {
      damage,
      x: enemyXPositions.value[index] + ENEMY_SIZE / 2,
      y: differntLocation ? ENEMY_CENTER_Y + 10 : ENEMY_CENTER_Y,
      type: element
    }
    damageNumbers.set(damageNumberIndex, damageNumber)
    const thisIdx = damageNumberIndex
    setTimeout(() => {
      damageNumbers.delete(thisIdx)
    }, 400)
  }
}

// Function to handle keyboard input
function onKeyPress(e: KeyboardEvent) {
  switch (e.key) {
    case 'a': {
      const currentFocus = gameState.focusedTarget.mainTarget
      gameState.focusedTarget.mainTarget = Math.max(currentFocus - 1, 0)
      break
    }
    case 'd': {
      if (gameState.cameraState.mode === CameraMode.ALLIES) {
        const currentFocus = gameState.focusedTarget.mainTarget
        gameState.focusedTarget.mainTarget = Math.min(
          currentFocus + 1,
          gameState.playerCharacters.length - 1
        )
        return
      }
      const currentFocus = gameState.focusedTarget.mainTarget
      gameState.focusedTarget.mainTarget = Math.min(currentFocus + 1, gameState.enemies.length - 1)
      break
    }
    case ' ': {
      e.preventDefault()
      attackButton()
      break
    }
    case 'f': {
      gameState.playerCharacters.map((pc) => (pc.hp -= 10))
      break
    }
    case 'e': {
      skillButton()
      break
    }
    case '1': {
      Timeline.ult(0)
      break
    }
    case '2': {
      Timeline.ult(1)
      break
    }
    case '3': {
      Timeline.ult(2)
      break
    }
    case '4': {
      Timeline.ult(3)
      break
    }
  }
}

function onGameTouch(e: MouseEvent | TouchEvent) {
  if (!(e.target instanceof Element)) {
    return
  }
  const button = e.target.closest<SVGGElement>('.ult-circle')
  if (button) {
    Timeline.ult(parseInt(button.dataset.index ?? ''))
  }

  const enemy = e.target.closest<SVGGElement>('.enemy-ui')
  if (enemy) {
    gameState.focusedTarget.mainTarget = parseInt(enemy.dataset.index ?? '')
  }

  const player = e.target.closest<SVGGElement>('.player-image')
  if (player) {
    gameState.focusedTarget.mainTarget = parseInt(player.dataset.index ?? '')
  }
}

onMounted(() => {
  gameState.initGame()
  document.addEventListener('keypress', onKeyPress)
})
onUnmounted(() => {
  document.removeEventListener('keypress', onKeyPress)
})

function printGameState() {
  console.log(gameState)
}
</script>

<template>
  <main :class="type">
    <div class="col mt-2 d-flex justify-content-center">
      <div class="game-viewport" :style="{ '--width': canvas.width, '--height': canvas.height }">
        <div class="skill-points-container">
          <div class="no-skill-point-tip" v-if="uiElements.show0SkillPoint">
            Not enough skill points
          </div>
          <span v-for="i in [...Array(5).keys()]" :key="i" class="material-icons-outlined">{{
            i < gameState.skillPoints ? 'star' : 'star_outline'
          }}</span>
        </div>
        <div
          v-if="gameState.turnCharacter?.type === CharacterType.PLAYER"
          class="action-buttons d-flex justify-content-center align-items-center"
        >
          <button
            @click="attackButton"
            class="attack-button d-flex justify-content-center align-items-center"
          >
            <div class="material-icons-outlined">sports_cricket</div>
          </button>
          <button
            v-if="gameState.turnState.stateEnum != TurnStateEnum.PLAYER_ULT_PENDING"
            @click="skillButton"
            class="skill-button d-flex justify-content-center align-items-center"
          >
            <div class="material-icons-outlined">{{ 'close' }}</div>
          </button>
        </div>
        <svg
          class="game-svg"
          :height="canvas.height"
          @touchend="onGameTouch"
          @mouseup="onGameTouch"
          :width="canvas.width"
        >
          <rect class="background" :height="canvas.height + 10" :width="canvas.width"></rect>
          <PlayerView
            :player-characters="gameState.playerCharacters"
            :camera-state="gameState.cameraState"
            :player-x-positions="playerXPositions"
          />

          <!--Enemy characters-->
          <EnemyView
            v-if="gameState.cameraState.mode === CameraMode.DEFAULT"
            :enemies="gameState.enemies"
            :enemy-x-positions="enemyXPositions"
          />

          <!--Timeline-->
          <TimelineComponent
            :queue="gameState.queue"
            :current-resolving-sub-turn="gameState.currentResolvingSubTurn"
            :current-turn="gameState.currentTurn"
          />

          <TargetMarkerComponent
            :camera-state="gameState.cameraState"
            :turn-character="gameState.turnCharacter"
            :player-x-positions="playerXPositions"
            :enemy-x-positions="enemyXPositions"
            :target-markers="targetMarkers"
          />

          <g class="damage-numbers">
            <text
              v-for="[idx, damageNumber] in damageNumbers"
              :key="idx"
              :fill="getElementColor(damageNumber.type)"
              :x="damageNumber.x"
              :y="damageNumber.y"
            >
              {{ damageNumber.damage }}
            </text>
          </g>
        </svg>
      </div>
    </div>
    <div class="col mt-2">
      <div class="row justify-content-center d-flex">
        <button @click="printGameState" style="width: 130px; height: 30px">Print Console</button>
      </div>
      <div class="row justify-content-center d-flex">
        <div>Turn Character:</div>
        <div>{{ gameState.turnCharacter?.name }}</div>
        <div>|</div>
        <div>Turn state:</div>
        <div>{{ gameState.turnState.stateEnum }}</div>
      </div>
      <div class="row justify-content-center d-flex">
        <div>Focused Target:</div>
        <div>{{ gameState.focusedTarget.mainTarget }}</div>
        <div>{{ gameState.focusedTarget.targetType }}</div>
        <div>{{ targetMarkers }}</div>
      </div>
      <div class="row justify-content-center d-flex">
        <div>Camera Focus:</div>
        <div>
          {{ gameState.cameraState.mode === CameraMode.DEFAULT ? 'Default view' : 'Allies view' }}
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.game-viewport {
  background-color: black;
  border: 2px solid #66ccff;
  border-radius: 4px;
  width: var(--width);
  height: var(--height);
  overflow: hidden;
}

.game-svg {
  overflow: visible;
}

.background {
  fill: grey;
}

.no-skill-point-tip {
  position: absolute;
  width: 200px;
  top: 20px;
}

.attack-button .material-icons-outlined {
  font-size: 50px;
  color: white;
}

.turn-entries {
  fill: white;
}
.action-buttons {
  top: 320px;
  .attack-button,
  .skill-button {
    z-index: 1;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    background-color: transparent;
    border: solid 1px white;
    &:focus {
      outline: none;
    }
    .material-icons-outlined {
      font-size: 30px;
      color: white;
      user-select: none;
    }
  }
  .skill-button {
    height: 60px;
    width: 60px;
    right: 20px;
  }

  .attack-button {
    height: 80px;
    width: 80px;
    right: 90px;
  }
}

.damage-numbers {
  text-anchor: middle;
  font-size: 30px;
}

.skill-points-container {
  position: absolute;
  bottom: 20px;
  right: 25%;
  color: white;
  z-index: 1;
}
</style>
