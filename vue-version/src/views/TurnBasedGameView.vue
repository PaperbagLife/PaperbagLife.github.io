<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { onMounted, reactive, ref } from 'vue'
import mainCharacterImage from '../assets/game/img/stelle-avatar.png'
import bailuImage from '../assets/game/img/bailu-avatar.png'
import frostSpawnImage from '../assets/game/img/frostspawn.png'
import fireShadewalkerImage from '../assets/game/img/fire_shadewalker.png'
const { type } = useBreakpoints()

const ATTACK_TIMEOUT = 1000
const MAX_SKILLPOINTS = 5

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
  damage: number
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
  skillIcon: string | undefined
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
    skillIcon?: string,
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
    this.skillIcon = skillIcon
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
  skillPoints = 0
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
    this.sortTimeline()
    game.skillPoints = 3
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

  handleEnemyDeath() {
    if (game.timeline && game.team2) {
      game.timeline = game.timeline.filter((ev) => ev.character.isAlive())
      game.team2 = game.team2.filter((enemy) => enemy.isAlive())
    }
  }
}

const skill0Visible = ref(false)
function show0Skillpoint() {
  skill0Visible.value = true
  setTimeout(() => (skill0Visible.value = false), 2000)
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
  game.handleEnemyDeath()
  game.timeline.forEach((ev, i) => console.log('event:', i, ev.character.name, ev.timeUntil))
  game.checkGameOver()
  if (game.gameOver) {
    console.log('game finished')
    if (game.playerWon) console.log('you win')
    else console.log('enemy win')
    clearInterval(updateIntervalCode)
    return
  }
  const currentActor = game.getNextCharacter()
  if (!currentActor) return
  if (currentActor.isPlayer1) {
    console.log('player1 turn')
    game.inAnimation = true
    activeActor.value = currentActor
    console.log('active actor', activeActor.value)

    // Wait for an action to happen
    const playerAction = resolvePlayerAction()
    playerAction.then((action: PlayerAction) => {
      console.log(action)
      if (action.type === PlayerActionType.SKILL) {
        game.skillPoints -= 1
      }

      setTimeout(() => {
        switch (action.type) {
          case PlayerActionType.ATTACK: {
            const target = game.team2[action.target]
            target.hp -= currentActor.attack
            game.timeline.push({
              character: currentActor,
              timeUntil: Math.floor(game.lapLength / currentActor.speed),
            })
            console.log('you hit enemy!', target.name, target.hp)
            if (game.skillPoints < MAX_SKILLPOINTS) game.skillPoints += 1
            break
          }
          case PlayerActionType.SKILL: {
            if (!currentActor.skill) return
            switch (currentActor.skill.target) {
              case SkillTarget.ALLY: {
                const healAmount = currentActor.skill.heal
                if (currentActor.skill.aoe) {
                  game.team1.forEach((character) => {
                    character.hp = Math.min(healAmount + character.hp, character.maxHp)
                  })
                } else {
                  const target = game.team1[action.target]
                  target.hp = Math.min(healAmount + target.hp, target.maxHp)
                }
                break
              }
              case SkillTarget.ENEMY: {
                const damage = currentActor.skill.damage
                if (currentActor.skill.aoe) {
                  game.team1.forEach((character) => {
                    character.hp -= damage
                  })
                } else {
                  console.log('here')
                  const target = game.team2[action.target]
                  console.log('target hp', target.hp, 'skilldamage', currentActor.skill?.damage)
                  target.hp -= damage
                }
              }
            }
            game.timeline.push({
              character: currentActor,
              timeUntil: Math.floor(game.lapLength / currentActor.speed),
            })
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
    game.inAnimation = true
    activeActor.value = null
    setTimeout(() => {
      target.hp -= currentActor.attack
      game.inAnimation = false
      game.timeline.push({
        character: currentActor,
        timeUntil: game.lapLength / currentActor.speed,
      })
      console.log('enemy attacked you!', target.name, target.hp)
      game.inAnimation = false
    }, ATTACK_TIMEOUT)
  }
}

const focusedEnemyCharcter = ref(0) // Index of enemy, i guess
const focusedAllyCharcter = ref(0) // Index of ally, i guess

const playerTeam: Character[] = [
  new Character(
    'mc',
    mainCharacterImage,
    true,
    30,
    150,
    10,
    {
      target: SkillTarget.ENEMY,
      aoe: false,
      damage: 20,
    },
    'outbound'
  ),
  new Character(
    'bailu',
    bailuImage,
    true,
    30,
    150,
    10,
    {
      target: SkillTarget.ALLY,
      aoe: false,
      heal: 10,
    },
    'local_hospital'
  ),
]
const enemyTeam: Character[] = [
  new Character('enemy', frostSpawnImage, false, 40, 100, 10),
  new Character('enemy2', fireShadewalkerImage, false, 40, 100, 10),
]
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
        <div class="skill-points-container">
          <span v-for="i in [...Array(5).keys()]" :key="i" class="material-icons-outlined">{{
            i < game.skillPoints ? 'star' : 'star_outline'
          }}</span>
        </div>
        <div
          class="attack-button d-flex justify-content-center align-items-center"
          @click="actionResolve({ type: PlayerActionType.ATTACK, target: focusedEnemyCharcter })"
        >
          <div class="material-icons-outlined">sports_cricket</div>
        </div>
        <div v-if="skill0Visible">Not enough skill points</div>

        <div
          v-if="activeActor"
          class="skill-button d-flex justify-content-center align-items-center"
        >
          <div
            v-if="game.skillPoints > 0"
            class="d-flex align-items-center"
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
            <div class="material-icons-outlined">{{ activeActor.skillIcon }}</div>
          </div>
          <div
            v-if="game.skillPoints === 0"
            class="d-flex align-items-center"
            @click="show0Skillpoint"
          >
            <div class="material-icons-outlined">{{ activeActor.skillIcon }}</div>
          </div>
        </div>

        <svg :height="canvas.height" :width="canvas.width">
          <g v-if="activeActor">
            <text x="20" y="30">Current turn:{{ activeActor.name }}</text>
          </g>
          <g v-for="(actor, i) in game.timeline" :key="actor.character.name">
            <text x="20" :y="i * 30 + 60">{{ `${actor.character.name} ${actor.timeUntil}` }}</text>
          </g>
          <g v-for="(character, i) in game.team1" :key="character.name + character.hp">
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
          <g v-for="(character, i) in game.team2" :key="character.name + character.hp">
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
        </svg>
      </div>
    </div>
  </main>
</template>

<style scoped>
.skill-points-container {
  position: absolute;
  bottom: 20px;
  right: 25%;
}
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
