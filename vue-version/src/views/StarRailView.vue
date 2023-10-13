<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { onMounted, ref, reactive } from 'vue'
import mainCharacterImage from '../assets/game/img/mc.png'
import bailuImage from '../assets/game/img/bailu.png'
import frostSpawnImage from '../assets/game/img/frostspawn.png'
import fireShadewalkerImage from '../assets/game/img/fire_shadewalker.png'
const { type } = useBreakpoints()

const MAX_SKILLPOINTS = 5
const TURN_TIME = 4000

const TIMELINE_DISTANCE = 10000

enum CameraMode {
  DEFAULT,
  ALLIES
}

type CameraState = {
  mode: CameraMode
  focus: TargetType
  focusModifier: number | null // 0-4 for enemies, 0-3 for allies, -1 for all targets based on target type
}

enum TurnStateEnum {
  EMPTY,
  ENEMY_TURN,
  PLAYER_TURN_DEFAULT,
  PLAYER_TURN_SKILL_PENDING,
  PLAYER_ULT_PENDING
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
  SINGLE_ALLY,
  ALL_ALLIES,
  SINGLE_ENEMY,
  ALL_ENEMIES,
  RANDOM_ENEMY
}

enum SkillEffect {
  DAMAGE,
  HEAL
}

type Skill = {
  target: TargetType
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
  constructor(
    name: string,
    portrait: string,
    hp: number,
    attack: number,
    skill: Skill,
    speed: number
  ) {
    super(CharacterType.PLAYER, name, portrait, hp, attack, speed)
    this.skill = skill
  }
}

class Enemy extends Character {
  constructor(name: string, portrait: string, hp: number, attack: number, speed: number) {
    super(CharacterType.ENEMY, name, portrait, hp, attack, speed)
  }
}

type TimelineTurn = {
  character: Character
  timeUntil: number
  subTurns: SubTurn[]
}

// A smaller unit, usually an reaction
type SubTurn = {
  type: SubTurnType
  character: Character
  cb: () => void
}

enum SubTurnType {
  REACTION,
  ULT
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

class CombatManager {}

// Class for organizing functions to do with turns
class TurnManager {
  static resolveTurn(turn?: TimelineTurn) {
    if (!turn) return
    if (turn.character.type === CharacterType.ENEMY) {
      const enemy = turn.character as Enemy
      gameState.turnCharacter = enemy
    } else {
      // player turn
      const player = turn.character as PlayerCharacter
      gameState.turnCharacter = player
      // Block until an action is taken
    }

    let currentSubTurn = null
    while (turn.subTurns.length > 0) {
      currentSubTurn = turn.subTurns.shift()
    }
  }

  static playerInputSkill() {
    switch (gameState.turnState.stateEnum) {
      case TurnStateEnum.PLAYER_TURN_DEFAULT: {
        gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_SKILL_PENDING
        // Change cameraMode to Allies if skill targets allies
        const player = gameState.turnCharacter as PlayerCharacter
        if (
          player.skill.target === TargetType.ALL_ALLIES ||
          player.skill.target === TargetType.SINGLE_ALLY
        ) {
          gameState.cameraState.mode = CameraMode.ALLIES
          gameState.cameraState.focus = player.skill.target
          gameState.cameraState.focusModifier =
            player.skill.target === TargetType.SINGLE_ALLY ? 0 : -1
        }
        break
      }

      case TurnStateEnum.PLAYER_TURN_SKILL_PENDING:
        // Handle player Skill
        break
      default:
        return
    }
  }
}

// Class for organizing functions to do with timeline
class Timeline {
  static enqueue(character: Character) {
    gameState.queue.push({
      character,
      timeUntil: TIMELINE_DISTANCE / character.speed,
      subTurns: []
    })
  }

  static getNextTurn() {
    const turn = gameState.queue.shift()
    gameState.queue.forEach((futureTurn) => (futureTurn.timeUntil -= turn?.timeUntil ?? 0))
    return turn
  }
}

// Class for maintaining the main gamestate
class GameState {
  cameraState: CameraState
  turnManager: TurnManager
  turnState: TurnState = { stateEnum: TurnStateEnum.EMPTY, resolvingSubTurn: false }
  turnCharacter: Character | null = null
  queue: TimelineTurn[]
  playerCharacters: PlayerCharacter[]
  enemies: Enemy[]
  skillPoints: number

  constructor(playerCharacters: PlayerCharacter[], enemies: Enemy[]) {
    this.cameraState = {
      mode: CameraMode.DEFAULT,
      focus: TargetType.SINGLE_ENEMY,
      focusModifier: null
    }
    this.turnManager = new TurnManager()
    this.queue = []
    this.playerCharacters = playerCharacters
    this.enemies = enemies
    this.skillPoints = 3
  }
  initGame() {
    this.playerCharacters.forEach((char) => Timeline.enqueue(char))
    this.enemies.forEach((char) => Timeline.enqueue(char))
    const nextTurn = Timeline.getNextTurn()
    TurnManager.resolveTurn(nextTurn)
  }
}

const canvas = { width: 740, height: 360 }
const mainCharacter = new PlayerCharacter(
  'main character',
  mainCharacterImage,
  10,
  1,
  {
    target: TargetType.SINGLE_ENEMY,
    effect: SkillEffect.DAMAGE
  },
  100
)
const simpleEnemy = new Enemy('frostspawn', frostSpawnImage, 10, 1, 90)
const gameState = reactive(new GameState([mainCharacter], [simpleEnemy]))

onMounted(() => {
  gameState.initGame()
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
          <div class="attack-button d-flex justify-content-center align-items-center">
            <div class="material-icons-outlined">sports_cricket</div>
          </div>
          <div
            v-if="gameState.skillPoints > 0"
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

          <g v-for="(actor, i) in gameState.queue" :key="actor.character.name">
            <text x="20" :y="i * 30 + 60">{{ `${actor.character.name} ${actor.timeUntil}` }}</text>
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
      </div>
      <div class="row justify-content-center d-flex">
        <div>Enemies:</div>
        <div v-for="character in gameState.enemies" :key="`${character.name + character.hp}`">
          {{ '[name: ' + character.name + ' hp:' + character.hp + ']' }}
        </div>
      </div>
      <div class="row justify-content-center d-flex">
        <div>Timeline:</div>
        <div v-for="turn in gameState.queue" :key="`${turn.character.name + turn.timeUntil}`">
          {{ '[char: ' + turn.character.name + ' timeUntil:' + turn.timeUntil + ']' }}
        </div>
      </div>
      <div class="row justify-content-center d-flex">
        <div>Current:</div>
        <div>{{ gameState.turnCharacter?.name }}</div>
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
