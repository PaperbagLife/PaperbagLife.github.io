<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { onMounted, ref, reactive, onUnmounted, computed, watch, initCustomFormatter } from 'vue'
import mainCharacterImage from '../assets/game/img/mc.png'
import frostSpawnImage from '../assets/game/img/frostspawn.png'
const { type } = useBreakpoints()

const ATTACK_TIMEOUT = 1000

enum PlayerActionType {
  ATTACK = 'attack',
  SKILL = 'skill',
  ULTIMATE = 'ultimate'
}

type PlayerAction = {
  type: PlayerActionType
  target: number
}

enum SkillTarget {
  ALLY = 'ally',
  ENEMY = 'enemy'
}
type Heal = {
  target: SkillTarget.ALLY
  aoe: boolean
  heal: number
}

type Damage = {
  target: SkillTarget.ENEMY
  aoe: boolean
  dmg: number
}

type Skill = Heal | Damage //TODO: | Buff | Debuff

class Character {
  name: string
  portrait: string
  isPlayer1: boolean
  maxHp: number
  hp: number
  speed: number
  attack: number
  skill?: Skill
  ultimate?: Skill
  energy: number
  maxEnergy?: number
  constructor(
    name: string,
    portrait: string,
    isPlayer1: boolean,
    maxHp: number,
    speed: number,
    attack: number,
    skill?: Skill,
    ultimate?: Skill,
    maxEnergy?: number
  ) {
    this.name = name
    this.portrait = portrait
    this.isPlayer1 = isPlayer1
    this.maxHp = maxHp
    this.hp = maxHp
    this.speed = speed
    this.attack = attack
    this.skill = skill
    this.ultimate = ultimate
    this.maxEnergy = maxEnergy
    this.energy = 0
  }
  // check if the player is still alive
  isAlive() {
    return this.hp > 0
  }
}

type Event = {
  character: Character
  timeUntil: number
}

class GameState {
  team1: Character[]
  team2: Character[]
  gameOver: boolean
  playerWon: boolean
  inAnimation: boolean
  lapLength = 10000
  timeline: Event[] = []
  constructor(team1: Character[], team2: Character[]) {
    this.team1 = team1
    this.team2 = team2
    this.gameOver = false
    this.playerWon = false
    this.inAnimation = false
  }

  // method for checking if the game is over
  checkGameOver() {
    console.log('checking game over')
    if (
      !this.team1.some((character) => character.isAlive()) ||
      !this.team2.some((character) => character.isAlive())
    ) {
      this.gameOver = true
      if (this.team1.some((character) => character.isAlive())) {
        this.playerWon = true
      }
    }
  }

  sortTimeline() {
    this.timeline.sort((a, b) => a.timeUntil - b.timeUntil)
  }

  init() {
    this.team1.forEach((character) =>
      this.timeline.push({ character, timeUntil: Math.floor(this.lapLength / character.speed) })
    )
    this.team2.forEach((character) =>
      this.timeline.push({ character, timeUntil: Math.floor(this.lapLength / character.speed) })
    )
    this.sortTimeline
    this.timeline.forEach((ev) => console.log(ev))
    console.log('init finshed')
  }

  getNextCharacter() {
    this.sortTimeline()
    const currentEvent = this.timeline.shift()
    if (!currentEvent) return null
    this.timeline.forEach((e) => (e.timeUntil -= currentEvent.timeUntil))
    return currentEvent.character
  }
}

let actionResolve: (action: PlayerAction) => void

async function resolvePlayerAction() {
  const playerAction = await new Promise<PlayerAction>((resolve, reject) => {
    actionResolve = resolve
  })
  return playerAction
}

const activeActor = ref<Character | null>(null)

let updateIntervalCode = 0
function update() {
  if (game.inAnimation) {
    return
  }
  game.checkGameOver()
  if (game.gameOver) {
    console.log('game finished')
    if (game.playerWon) console.log('you win')
    else console.log('enemy win')
    clearInterval(updateIntervalCode)
    return
  }
  game.timeline.forEach((ev, i) => console.log('event:', i, ev.character.name, ev.timeUntil))
  const currentActor = game.getNextCharacter()
  if (!currentActor) return
  if (currentActor.isPlayer1) {
    console.log('player1 turn')
    game.inAnimation = true
    activeActor.value = currentActor
    // Wait for an action to happen
    const playerAction = resolvePlayerAction()
    playerAction.then((action: PlayerAction) => {
      console.log(action)
      const target = game.team2[action.target]
      setTimeout(() => {
        switch (action.type) {
          case PlayerActionType.ATTACK: {
            target.hp -= currentActor.attack
            game.timeline.push({
              character: currentActor,
              timeUntil: Math.floor(game.lapLength / currentActor.speed)
            })
            console.log('you hit enemy!', target.name, target.hp)
            break
          }
          default:
            console.log('unimple')
        }
        game.inAnimation = false
      }, ATTACK_TIMEOUT)
    })
  } else {
    console.log('enemy turn')
    // Randomly attack a player
    const target = game.team1[Math.floor(Math.random() * game.team1.length) % game.team1.length]
    // Set timeout for enemy attack animation
    activeActor.value = currentActor
    game.inAnimation = true
    setTimeout(() => {
      target.hp -= currentActor.attack
      game.inAnimation = false
      game.timeline.push({
        character: currentActor,
        timeUntil: game.lapLength / currentActor.speed
      })
      console.log('enemy attacked you!', target.name, target.hp)
      game.inAnimation = false
    }, ATTACK_TIMEOUT)
  }
}

const focusedEnemyCharcter = ref(0) // Index of enemy, i guess
const focusedAllyCharcter = ref(0) // Index of ally, i guess

const playerTeam: Character[] = [new Character('mc', mainCharacterImage, true, 30, 150, 10)]
const enemyTeam: Character[] = [new Character('enemy', frostSpawnImage, false, 40, 100, 10)]
const game = reactive(new GameState(playerTeam, enemyTeam))

onMounted(() => {
  game.init()
  updateIntervalCode = setInterval(update, 100)
})
const canvas = { width: 740, height: 360 }
</script>

<template>
  <main :class="type">
    <div class="col mt-2 d-flex justify-content-center">
      <div class="game-viewport">
        <div class="gameover-message" v-if="game.gameOver && game.playerWon">You Win</div>
        <div
          class="attack-button d-flex justify-content-center align-items-center"
          @click="actionResolve({ type: PlayerActionType.ATTACK, target: focusedEnemyCharcter })"
        >
          <div class="material-icons-outlined">sports_cricket</div>
        </div>
        <div
          class="skill-button d-flex justify-content-center align-items-center"
          @click="
            actionResolve({
              type: PlayerActionType.SKILL,
              target:
                activeActor?.skill?.target === SkillTarget.ALLY
                  ? focusedAllyCharcter
                  : focusedEnemyCharcter
            })
          "
        >
          <div class="material-icons-outlined">outbound</div>
        </div>
        <svg :height="canvas.height" :width="canvas.width">
          <g v-if="activeActor">
            <text x="20" y="30">Current turn:{{ activeActor.name }}</text>
          </g>
          <g v-for="actor in game.timeline" :key="actor.character.name">
            <text x="20" y="60">{{ `${actor.character.name} ${actor.timeUntil}` }}</text>
          </g>
          <g v-for="character in game.team1" :key="character.name + character.hp">
            <image :href="character.portrait" height="80" width="80" x="30" y="250"></image>
            <rect class="health-bar-outline" x="30" y="330" width="80" height="10"></rect>
            <rect
              class="health-bar"
              x="32"
              y="332"
              :width="(character.hp / character.maxHp) * 76"
              height="6"
            ></rect>
          </g>
          <g v-for="character in game.team2" :key="character.name + character.hp">
            <image :href="character.portrait" height="80" width="80" x="580" y="30"></image>
            <rect class="health-bar-outline" x="580" y="18" width="80" height="10"></rect>
            <rect
              class="health-bar"
              x="582"
              y="20"
              :width="(character.hp / character.maxHp) * 76"
              height="6"
            ></rect>
          </g>
        </svg>
      </div>
    </div>
  </main>
</template>

<style scoped>
.gameover-message {
  position: absolute;
  left: 50%;
  top: 50%;
  text-anchor: middle;
  background-color: white;
  border: 2px solid #66ccff;
  border-radius: 4px;
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

.attack-button .material-icons-outlined {
  font-size: 50px;
  color: white;
}
.skill-button .material-icons-outlined {
  font-size: 30px;
  color: white;
}
.game-viewport {
  background-color: grey;
  border: 2px solid #66ccff;
  border-radius: 4px;
  width: 740px;
  height: 360px;
}
.attack-button {
  z-index: 1;
  cursor: pointer;
  position: absolute;
  height: 80px;
  width: 80px;
  right: 80px;
  bottom: 10px;
  border-radius: 50%;
  background-color: transparent;
  border: solid 1px white;
}
.skill-button {
  z-index: 1;
  cursor: pointer;
  position: absolute;
  height: 40px;
  width: 40px;
  right: 30px;
  bottom: 60px;
  border-radius: 50%;
  background-color: transparent;
  border: solid 1px white;
}
</style>
