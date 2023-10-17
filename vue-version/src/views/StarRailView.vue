<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { onMounted, ref, reactive, onUnmounted } from 'vue'
import mainCharacterImage from '../assets/game/img/mc.png'
import bailuImage from '../assets/game/img/bailu.png'
import frostSpawnImage from '../assets/game/img/frostspawn.png'
import fireShadewalkerImage from '../assets/game/img/fire_shadewalker.png'
const { type } = useBreakpoints()

const MAX_SKILLPOINTS = 5
const TURN_TIME = 1000

const TIMELINE_DISTANCE = 10000

enum CameraMode {
  DEFAULT = 'default view',
  ALLIES = 'allies view'
}

// focus for now is always friendly character, the one getting hit or the one attacking
type CameraState = {
  mode: CameraMode
  focus: number // For who the main focus of camera is
}

// Notes: the focus is on player 1 if player 1 has a damage skill of single target.
// In that case the FocusedTarget variable is who is targeted for a hit but not the focus of camera

enum TurnStateEnum {
  EMPTY = 'empty',
  ENEMY_TURN = 'enemy_turn',
  PLAYER_TURN_DEFAULT = 'default',
  PLAYER_TURN_SKILL_PENDING = 'skill pending',
  PLAYER_ULT_PENDING = 'ult pending'
}

type TurnState = {
  stateEnum: TurnStateEnum
  resolvingSubTurn: boolean
}

enum CharacterType {
  PLAYER,
  ENEMY
}

enum TargetType {
  SINGLE_ALLY = 'single ally',
  ALL_ALLIES = 'all allies',
  SINGLE_ENEMY = 'single enemy',
  SPLASH_ENEMY = 'splash enemy',
  ALL_ENEMIES = 'all enemies',
  RANDOM_ENEMY = 'random enemy'
}

type FocusedTarget = {
  mainTarget: number
}

enum SkillEffect {
  DAMAGE,
  HEAL
}

type Skill = {
  targetType: TargetType
  modifier: number
  hits?: number
  effect: SkillEffect
}

class Character {
  type: CharacterType
  name: string
  portrait: string
  maxHp: number
  hp: number
  attack: number
  speed: number

  constructor(
    characterType: CharacterType,
    name: string,
    portrait: string,
    hp: number,
    attack: number,
    speed: number
  ) {
    this.type = characterType
    this.name = name
    this.portrait = portrait
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

class PlayerCharacter extends Character {
  skill: Skill
  energy: number
  maxEnergy: number
  ult: Skill
  constructor(
    name: string,
    portrait: string,
    hp: number,
    attack: number,
    skill: Skill,
    speed: number,
    energy: number,
    maxEnergy: number,
    ult: Skill
  ) {
    super(CharacterType.PLAYER, name, portrait, hp, attack, speed)
    this.skill = skill
    this.energy = energy
    this.maxEnergy = maxEnergy
    this.ult = ult
  }
}

class Enemy extends Character {
  constructor(name: string, portrait: string, hp: number, attack: number, speed: number) {
    super(CharacterType.ENEMY, name, portrait, hp, attack, speed)
  }
}

type TimelineTurn = {
  character?: Character // A subturn where you ult from player turn, this will be undefined
  index: number
  timeUntil: number
  subTurns: SubTurn[]
}

// A smaller unit, usually an reaction, in the form of damage to enemy
type SubTurn = {
  type: SubTurnType
  character: Character
}

enum PlayerButton {
  ATTACK,
  SKILL
}

type PlayerInput = {
  type: PlayerButton
  ult?: number // for cut-in ult
}

enum SubTurnType {
  REACTION,
  ULT
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function getRandomInt(max: number) {
  max = Math.floor(max)
  return Math.floor(Math.random() * max)
}

// Combat, Damage related logic
class CombatManager {
  static async resolveEnemyMove() {
    const enemy = gameState.turnCharacter as Enemy
    await delay(TURN_TIME)
    const damage = enemy.attack
    const target = getRandomInt(gameState.playerCharacters.length)
    gameState.playerCharacters[target].hp -= damage
  }
  static async resolvePlayerSkill() {
    const player = gameState.turnCharacter as PlayerCharacter
    await delay(TURN_TIME)
    if (player.skill.effect === SkillEffect.DAMAGE) {
      const damage = player.attack * player.skill.modifier
      const target = gameState.focusedTarget.mainTarget
      // Depending on the type of the skill do differnt calculations here
      switch (player.skill.targetType) {
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
        case TargetType.ALL_ENEMIES:
        case TargetType.RANDOM_ENEMY: {
          for (let i = 0; i < (player.skill.hits ?? 1); i += 1) {
            const enemyIdx = getRandomInt(gameState.enemies.length)
            gameState.enemies[enemyIdx].hp -= damage
          }
        }
      }
    }
    // TODO: Healing skill here
  }

  static async resolvePlayerAttack() {
    const player = gameState.turnCharacter as PlayerCharacter
    await delay(TURN_TIME)
    const damage = player.attack
    const target = gameState.focusedTarget.mainTarget
    // Assume basic attack always single target (TODO p2: change this paradigm later)
    gameState.enemies[target].hp -= damage
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
        case TargetType.ALL_ENEMIES:
        case TargetType.RANDOM_ENEMY: {
          for (let i = 0; i < (player.ult.hits ?? 1); i += 1) {
            const enemyIdx = getRandomInt(gameState.enemies.length)
            gameState.enemies[enemyIdx].hp -= damage
          }
        }
      }
    }
    // TODO: Healing skill here
  }
}

// Class for organizing functions to do with turns
class TurnManager {
  static async resolveTurn(turn: TimelineTurn) {
    gameState.currentTurn = turn
    if (!turn.character) return
    if (turn.character.type === CharacterType.ENEMY) {
      const enemy = turn.character as Enemy
      gameState.turnCharacter = enemy
      await CombatManager.resolveEnemyMove()
    } else {
      // player turn
      const player = turn.character as PlayerCharacter
      gameState.turnCharacter = player
      gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_DEFAULT
      // Block until an action is taken
      let turnTaken = false
      while (!turnTaken) {
        // Check for insert ult
        if (gameState.ultSignaled != null) {
          console.log('ult triggered in player turn', turn.timeUntil)
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
          gameState.ultSignaled = null
          break
        }
        if (gameState.playerInput != null) {
          switch (gameState.playerInput.type) {
            case PlayerButton.ATTACK: {
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT) {
                // Fire basic attack
                console.log('fire basic attack')
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
              }
              break
            }
            case PlayerButton.SKILL: {
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_SKILL_PENDING) {
                if (gameState.skillPoints > 0) {
                  // Fire skill
                  gameState.skillPoints -= 1
                  await CombatManager.resolvePlayerSkill()
                  turnTaken = true
                  break
                } else {
                  uiElements.show0SkillPoint = true
                  setTimeout(() => (uiElements.show0SkillPoint = false), 1000)
                }
              }
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT) {
                // Go to skill ready state
                gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_SKILL_PENDING
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

    Timeline.enqueue(gameState.turnCharacter, turn.index)
    gameState.turnCharacter = null

    let currentSubTurn = null
    while (gameState.currentTurn.subTurns.length > 0) {
      gameState.currentTurn.subTurns.sort((a, b) =>
        a.type === b.type ? 0 : a.type === SubTurnType.REACTION ? -1 : 1
      )
      currentSubTurn = turn.subTurns.shift()
      // handle ult and reactions here, kinda need to sort them
      if (!currentSubTurn) break
      gameState.turnCharacter = currentSubTurn.character
      if (currentSubTurn.type === SubTurnType.REACTION) {
        // TODO: Reaction subturns
      }
      if (currentSubTurn.type === SubTurnType.ULT) {
        gameState.turnState.stateEnum = TurnStateEnum.PLAYER_ULT_PENDING
        let ultFired = false
        // Adjust camera state
        const player = gameState.turnCharacter as PlayerCharacter
        if (
          player.ult.targetType === TargetType.ALL_ALLIES ||
          player.ult.targetType === TargetType.SINGLE_ALLY
        ) {
          gameState.cameraState.mode = CameraMode.ALLIES
          gameState.cameraState.focus = turn.index
        }
        while (!ultFired) {
          if (gameState.playerInput != null && gameState.playerInput.type === PlayerButton.ATTACK) {
            ultFired = true
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
}

// Class for organizing functions to do with timeline
class Timeline {
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
  focusedTarget: FocusedTarget = { mainTarget: 0 }
  currentTurn: TimelineTurn | null = null
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
    while (!this.gameOver) {
      const nextTurn = Timeline.getNextTurn()
      if (!nextTurn) {
        console.log('no more turns??')
        return
      }
      await TurnManager.resolveTurn(nextTurn)
    }
  }
}

const canvas = { width: 740, height: 360 }
const mainCharacter = new PlayerCharacter(
  'main character',
  mainCharacterImage,
  10,
  1,
  {
    targetType: TargetType.SPLASH_ENEMY,
    effect: SkillEffect.DAMAGE,
    modifier: 1.2
  },

  100,
  100,
  100,
  {
    targetType: TargetType.RANDOM_ENEMY,
    hits: 3,
    effect: SkillEffect.DAMAGE,
    modifier: 2
  }
)
const simpleEnemy = new Enemy('frostspawn', frostSpawnImage, 10, 1, 90)
const simpleEnemy2 = new Enemy('frostspawn2', frostSpawnImage, 10, 1, 90)
const gameState = reactive(new GameState([mainCharacter], [simpleEnemy, simpleEnemy2]))
const uiElements = reactive(new UIElements())

function attackButton() {
  gameState.playerInput = { type: PlayerButton.ATTACK }
}

function skillButton() {
  gameState.playerInput = { type: PlayerButton.SKILL }
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
      const currentFocus = gameState.focusedTarget.mainTarget
      gameState.focusedTarget.mainTarget = Math.min(currentFocus + 1, gameState.enemies.length - 1)
      break
    }
    case 'space': {
      gameState.playerInput = { type: PlayerButton.ATTACK }
      break
    }
    case 'e': {
      gameState.playerInput = { type: PlayerButton.SKILL }
      break
    }
    case '1': {
      console.log('ulting 0')
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
      <div class="game-viewport">
        <div class="skill-points-container">
          <span v-for="i in [...Array(5).keys()]" :key="i" class="material-icons-outlined">{{
            i < gameState.skillPoints ? 'star' : 'star_outline'
          }}</span>
        </div>
        <div
          v-if="gameState.turnCharacter?.type === CharacterType.PLAYER"
          class="action-buttons d-flex justify-content-center align-items-center"
        >
          <div
            @click="attackButton"
            class="attack-button d-flex justify-content-center align-items-center"
          >
            <div class="material-icons-outlined">sports_cricket</div>
          </div>
          <div
            v-if="gameState.skillPoints > 0"
            @click="skillButton"
            class="skill-button d-flex justify-content-center align-items-center"
          >
            <div class="material-icons-outlined">{{ 'close' }}</div>
          </div>
        </div>
        <div>
          {{ gameState.cameraState.mode === CameraMode.DEFAULT ? 'Default view' : 'Allies view' }}
        </div>
        <svg :height="canvas.height" :width="canvas.width">
          <g
            v-for="(character, i) in gameState.playerCharacters"
            :key="character.name + character.hp"
          >
            <image
              :href="character.portrait"
              height="80"
              width="80"
              :x="30 + i * 100"
              y="250"
            ></image>
            <rect
              class="health-bar-outline"
              :x="30 + i * 100"
              y="330"
              width="80"
              height="10"
            ></rect>
            <rect
              class="health-bar"
              :x="32 + i * 100"
              y="332"
              :width="(character.hp / character.maxHp) * 76"
              height="6"
            ></rect>
          </g>
          <!--Enemy characters-->
          <g v-for="(character, i) in gameState.enemies" :key="character.name + character.hp">
            <image
              :href="character.portrait"
              height="80"
              width="80"
              :x="580 - i * 100"
              y="30"
            ></image>
            <rect
              class="health-bar-outline"
              :x="580 - i * 100"
              y="18"
              width="80"
              height="10"
            ></rect>
            <rect
              class="health-bar"
              :x="582 - i * 100"
              y="20"
              :width="(character.hp / character.maxHp) * 76"
              height="6"
            ></rect>
          </g>

          <g
            v-for="(turn, i) in gameState.queue"
            :key="turn.character?.name ?? '' + turn.timeUntil"
          >
            <text class="turn-entries" x="20" :y="i * 30 + 60">
              {{ `${turn.character?.name} ${turn.timeUntil}` }}
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
        <div>Players:</div>
        <div
          v-for="character in gameState.playerCharacters"
          :key="`${character.name + character.hp}`"
        >
          {{ '[name: ' + character.name + ' hp:' + character.hp + ']' }}
        </div>
        <div>Enemies:</div>
        <div v-for="character in gameState.enemies" :key="`${character.name + character.hp}`">
          {{ '[name: ' + character.name + ' hp:' + character.hp + ']' }}
        </div>
      </div>
      <div class="row justify-content-center d-flex">
        <div>Timeline:</div>
        <div
          v-for="turn in gameState.queue"
          :key="`${turn.character?.name ?? '' + turn.timeUntil}`"
        >
          {{ '[char: ' + turn.character?.name + ' timeUntil:' + turn.timeUntil + ']' }}
        </div>
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
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.game-viewport {
  background-color: black;
  border: 2px solid #66ccff;
  border-radius: 4px;
  width: var(width);
  height: var(height);
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
    .material-icons-outlined {
      font-size: 30px;
      color: white;
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

.health-bar {
  fill: white;
  stroke: black;
}
.health-bar-outline {
  fill: transparent;
  stroke: white;
}
.character-portrait {
  fill: white;
}

.skill-points-container {
  position: absolute;
  bottom: 20px;
  right: 25%;
}
</style>
