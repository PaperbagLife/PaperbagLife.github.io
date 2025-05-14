<script setup lang="ts">
import { onMounted, onUnmounted, reactive, watch } from 'vue'
import {
  CameraMode,
  CharacterType,
  GAME_HEIGHT,
  GAME_WIDTH,
  PlayerButton,
  TurnStateEnum,
} from '../util/starrail/consts'
import { useGameState } from '../util/starrail/gameState'
import { getElementColor } from '../util/starrail/utils'
import EnemyView from './components/starrailComponents/EnemyView.vue'
import PlayerView from './components/starrailComponents/PlayerView.vue'
import TargetMarkerComponent from './components/starrailComponents/TargetMarkerComponent.vue'
import TimelineComponent from './components/starrailComponents/TimelineComponent.vue'

const canvas = { width: GAME_WIDTH, height: GAME_HEIGHT }

const {
  gameState,
  enemyXPositions,
  playerXPositions,
  targetMarkers,
  healNumbers,
  damageNumbers,
  activateUlt,
} = useGameState()

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
    case '1':
    case '2':
    case '3':
    case '4': {
      const ultNumber = parseInt(e.key) - 1
      activateUlt(ultNumber)
      break
    }

    case 'p': {
      gameState.queue.shift()
    }
  }
}

function onGameTouch(e: MouseEvent | TouchEvent) {
  if (!(e.target instanceof Element)) {
    return
  }
  const button = e.target.closest<SVGGElement>('.ult-circle')
  if (button) {
    activateUlt(parseInt(button.dataset.index ?? ''))
  }

  const enemy = e.target.closest<SVGGElement>('.enemy-ui')
  if (enemy) {
    const targetIdx = parseInt(enemy.dataset.index ?? '')
    console.log(targetIdx, gameState.focusedTarget.mainTarget)
    if (gameState.focusedTarget.mainTarget === targetIdx) {
      // Execute the action
      if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_SKILL_PENDING) {
        skillButton()
      } else if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT) {
        attackButton()
      }
    }
    gameState.focusedTarget.mainTarget = parseInt(enemy.dataset.index ?? '')
  }

  const player = e.target.closest<SVGGElement>('.player-image')
  if (player) {
    const targetIdx = parseInt(player.dataset.index ?? '')
    if (gameState.focusedTarget.mainTarget === targetIdx) {
      // Execute the action
      if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_SKILL_PENDING) {
        skillButton()
      } else if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT) {
        attackButton()
      }
    }
    gameState.focusedTarget.mainTarget = parseInt(player.dataset.index ?? '')
  }
}

const uiElements = reactive({
  show0SkillPoint: false,
  showWinMessage: false,
  showLoseMessage: false,
})

watch(gameState, () => {
  if (gameState.gameOver) {
    if (gameState.enemies.length === 0) {
      uiElements.showWinMessage = true
    } else {
      uiElements.showLoseMessage = true
    }
  }
})

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
  <main>
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

          <!--Enemy characters-->
          <EnemyView
            v-if="gameState.cameraState.mode === CameraMode.DEFAULT"
            :attacking-enemy="gameState.attackingEnemy"
            :enemies="gameState.enemies"
            :enemy-x-positions="enemyXPositions"
          />

          <PlayerView
            :player-characters="gameState.playerCharacters"
            :camera-state="gameState.cameraState"
            :player-x-positions="playerXPositions"
            :enemy-x-positions="enemyXPositions"
            :player-turn-action="gameState.playerTurnAction"
            :player-attack-main-target="gameState.playerAttackTarget"
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

          <g id="projectile-teleport-target" />
          <g class="damage-numbers">
            <text
              v-for="[idx, damageNumber] in damageNumbers"
              :key="idx"
              :fill="getElementColor(damageNumber.type)"
              :style="{ transform: `translate(${damageNumber.x}px, ${damageNumber.y}px)` }"
            >
              {{ damageNumber.damage }}
            </text>
          </g>
          <g class="heal-numbers">
            <text
              v-for="[idx, healNumber] in healNumbers"
              :key="idx"
              fill="rgb(177,250,73)"
              :style="{ transform: `translate(${healNumber.x}px, ${healNumber.y}px)` }"
            >
              +{{ healNumber.heal }}
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
  text {
    transition: all 0.7s linear;
  }
}

.heal-numbers {
  text-anchor: middle;
  font-size: 30px;
  text {
    transition: all 0.7s linear;
  }
}

.skill-points-container {
  position: absolute;
  bottom: 20px;
  right: 25%;
  color: white;
  z-index: 1;
}
</style>
