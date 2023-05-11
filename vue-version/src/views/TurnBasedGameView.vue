<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { onMounted, ref, onUnmounted, watch } from 'vue'
const { type } = useBreakpoints()

type Heal = {
  aoe: boolean
  target?: Character
  heal: number
}

type Damage = {
  aoe: boolean
  target?: Character
  dmg: number
}

type Skill = Heal | Damage //TODO: | Buff | Debuff

class Character {
  maxHp: number
  hp: number
  speed: number
  attack: number
  skill: Skill
  ultimate: Skill
  energy: number
  maxEnergy: number
  constructor(
    maxHp: number,
    speed: number,
    attack: number,
    skill: Skill,
    ultimate: Skill,
    maxEnergy: number
  ) {
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

class GameState {
  team1: Character[]
  team2: Character[]
  gameOver: boolean
  playerWon: boolean
  inAnimation: boolean
  lapLength = 10000
  constructor(team1: Character[], team2: Character[]) {
    this.team1 = team1
    this.team2 = team2
    this.gameOver = false
    this.playerWon = false
    this.inAnimation = false
  }

  // method for checking if the game is over
  checkGameOver() {
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
}

const game = new GameState()

function update() {
  if (game.inAnimation) {
    return
  }
  game.checkGameOver()
}
const canvas = { width: 740, height: 360 }
</script>

<template>
  <main :class="type">
    <div class="col mt-2 d-flex justify-content-center">
      <div class="game-viewport">
        <svg :height="canvas.height" :width="canvas.width"></svg>
      </div>
    </div>
  </main>
</template>

<style>
.game-viewport {
  background-color: black;
  border: 2px solid #66ccff;
  border-radius: 4px;
  width: 740px;
  height: 360px;
}
</style>
