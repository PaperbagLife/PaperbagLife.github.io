<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  AttackType,
  type CameraState,
  ENEMY_SIZE,
  ENEMY_TOP_PADDING,
  GAME_HEIGHT,
  HP_BAR_WIDTH,
  type PlayerCharacter,
  PlayerTurnAction,
  TargetType,
  TURN_TIME,
} from '../../../util/starrail/consts'
import {
  ALLY_VIEW_TOP_PADDING,
  CameraMode,
  HP_BAR_HEIGHT,
  PLAYER_DEFAULT_X_POSITION,
  PLAYER_IMAGE_HEIGHT,
  PLAYER_IMAGE_WIDTH,
  PROFILE_PIC_BASE_OFFSET,
  PROFILE_PIC_HEIGHT,
  PROFILE_PIC_SIDE_OFFSET,
  PROFILE_PIC_WIDTH,
  ULT_GAUGE_BASE_OFFSET,
} from '../../../util/starrail/consts'

const BASE_HEIGHT = 280
const SHIELD_BAR_OFFSET = 0.75
const PASSIVE_RADIUS = 2

import { getElementColor, range } from '../../../util/starrail/utils'
import { PLAYER_HEIGHT } from '@/util/shooter/const'

const props = defineProps<{
  playerCharacters: PlayerCharacter[]
  cameraState: CameraState
  playerXPositions: number[]
  enemyXPositions: number[]
  playerAttackMainTarget: number | null
  playerTurnAction: PlayerTurnAction | null
}>()

// used to keep track of projectile transforms
type Projectile = {
  x: number
  y: number
  color: string
  id: number
}

let projectileID = 0
const projectiles = ref<Projectile[]>([])

const meleeAttackTransform = ref('')

watch(
  () => props.playerAttackMainTarget,
  () => {
    if (props.playerAttackMainTarget == null) {
      projectiles.value = []
      return
    } else {
      const player = props.playerCharacters[props.cameraState.focus]
      const target =
        props.playerTurnAction === PlayerTurnAction.ATTACK
          ? TargetType.SINGLE_ENEMY
          : props.playerTurnAction === PlayerTurnAction.SKILL
          ? player.skill.targetType
          : player.ult.targetType
      const attackType =
        props.playerTurnAction === PlayerTurnAction.ATTACK
          ? player.attackType
          : props.playerTurnAction === PlayerTurnAction.SKILL
          ? player.skill.attackType
          : player.ult.attackType

      if (!attackType) return
      if (target === TargetType.ALL_ALLIES || target === TargetType.SINGLE_ALLY) {
        return
      }
      // These should be all damaging spells, etc
      switch (attackType) {
        case AttackType.MELEE: {
          const deltaX =
            props.enemyXPositions[props.playerAttackMainTarget] - PLAYER_DEFAULT_X_POSITION
          const deltaY = ENEMY_TOP_PADDING - PLAYER_HEIGHT / 3
          meleeAttackTransform.value = `translate(${deltaX}px, ${deltaY}px)`
          setTimeout(() => {
            meleeAttackTransform.value = ''
          }, TURN_TIME)
          break
        }
        case AttackType.RANGED: {
          // make projectiles
          switch (target) {
            case TargetType.SINGLE_ENEMY: {
              projectileID += 1
              const projectile: Projectile = {
                x: PLAYER_DEFAULT_X_POSITION + PLAYER_IMAGE_WIDTH,
                y: GAME_HEIGHT / 2,
                color: getElementColor(player.element),
                id: projectileID,
              }
              projectiles.value = [projectile]
              // need enemyXposition here lol rip
              setTimeout(() => {
                if (props.playerAttackMainTarget == null) {
                  console.log('ah shit target lost')
                  return
                }
                projectiles.value[0].x =
                  props.enemyXPositions[props.playerAttackMainTarget] + ENEMY_SIZE / 2
                projectiles.value[0].y = ENEMY_TOP_PADDING + ENEMY_SIZE / 2
              }, 300)
              setTimeout(() => {
                projectiles.value = []
              }, 1100)
              break
            }
            case TargetType.SPLASH_ENEMY:
            case TargetType.ALL_ENEMIES: {
              for (let i = 0; i < props.enemyXPositions.length; i += 1) {
                projectileID += 1
                const projectile: Projectile = {
                  x: PLAYER_DEFAULT_X_POSITION + PLAYER_IMAGE_WIDTH,
                  y: GAME_HEIGHT / 2,
                  color: getElementColor(player.element),
                  id: projectileID,
                }
                projectiles.value.push(projectile)
                setTimeout(() => {
                  projectiles.value[i].x = props.enemyXPositions[i] + ENEMY_SIZE / 2
                  projectiles.value[i].y = ENEMY_TOP_PADDING + ENEMY_SIZE / 2
                }, 300 - i * 50)
              }
              setTimeout(() => {
                projectiles.value = []
              }, 1100)
              break
            }
            case TargetType.RANDOM_ENEMY:
          }
        }
      }
    }
  }
)
</script>

<template>
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <g>
    <!--Player Default View-->
    <g v-if="cameraState.mode === CameraMode.DEFAULT">
      <image
        class="player-default-image"
        :style="{ transform: meleeAttackTransform }"
        :href="playerCharacters[cameraState.focus].backImage"
        :height="meleeAttackTransform === '' ? PLAYER_IMAGE_HEIGHT : PLAYER_IMAGE_HEIGHT * 0.8"
        :width="meleeAttackTransform === '' ? PLAYER_IMAGE_WIDTH : PLAYER_IMAGE_WIDTH * 0.8"
        :x="PLAYER_DEFAULT_X_POSITION"
        :y="ALLY_VIEW_TOP_PADDING"
      />
    </g>
    <Teleport v-if="projectiles.length > 0" to="#projectile-teleport-target">
      <circle
        class="projectile"
        v-for="projectile in projectiles"
        :key="projectile.id"
        :style="{ transform: `translate(${projectile.x}px, ${projectile.y}px)` }"
        :r="8"
        :fill="projectile.color"
      />
    </Teleport>
    <g
      class="player-ui"
      v-for="(character, i) in playerCharacters"
      :key="character.name + character.hp"
    >
      <image
        :href="character.avatar"
        :height="PROFILE_PIC_HEIGHT"
        :width="PROFILE_PIC_WIDTH"
        :x="PROFILE_PIC_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
        :y="BASE_HEIGHT"
      />
      <g v-if="character.passiveMax && character.passiveCount !== undefined">
        <circle
          class="depleted"
          v-for="idx in range(character.passiveMax)"
          :key="idx"
          :cx="
            PROFILE_PIC_BASE_OFFSET +
            i * PROFILE_PIC_SIDE_OFFSET +
            5 +
            (PASSIVE_RADIUS * 2 + 2) * idx
          "
          :cy="BASE_HEIGHT + PROFILE_PIC_HEIGHT + 10"
          :r="PASSIVE_RADIUS" />
        <circle
          class="active"
          v-for="idx in range(character.passiveCount)"
          :key="idx"
          :cx="
            PROFILE_PIC_BASE_OFFSET +
            i * PROFILE_PIC_SIDE_OFFSET +
            5 +
            (PASSIVE_RADIUS * 2 + 2) * idx
          "
          :cy="BASE_HEIGHT + PROFILE_PIC_HEIGHT + 10"
          :r="PASSIVE_RADIUS"
          :fill="getElementColor(character.element)"
      /></g>

      <g class="bar" :style="{ transform: `translate(0, ${SHIELD_BAR_OFFSET * 2}px)` }"
        ><rect
          class="health-bar-outline"
          :x="PROFILE_PIC_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
          :y="BASE_HEIGHT + PROFILE_PIC_HEIGHT"
          :width="HP_BAR_WIDTH"
          :height="HP_BAR_HEIGHT" />
        <rect
          class="health-bar"
          :x="PROFILE_PIC_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
          :y="BASE_HEIGHT + PROFILE_PIC_HEIGHT"
          :width="(character.hp / character.maxHp) * HP_BAR_WIDTH"
          :height="HP_BAR_HEIGHT" />
        <g v-if="character.shield > 0">
          <line
            class="shield-bar"
            :x1="PROFILE_PIC_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET - SHIELD_BAR_OFFSET"
            :y1="BASE_HEIGHT + PROFILE_PIC_HEIGHT - SHIELD_BAR_OFFSET * 2"
            :y2="BASE_HEIGHT + PROFILE_PIC_HEIGHT + HP_BAR_HEIGHT + SHIELD_BAR_OFFSET * 2"
            :x2="PROFILE_PIC_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET - SHIELD_BAR_OFFSET"
          />
          <line
            class="shield-bar"
            :x1="PROFILE_PIC_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET - SHIELD_BAR_OFFSET"
            :y1="BASE_HEIGHT + PROFILE_PIC_HEIGHT - SHIELD_BAR_OFFSET"
            :y2="BASE_HEIGHT + PROFILE_PIC_HEIGHT - SHIELD_BAR_OFFSET"
            :x2="
              PROFILE_PIC_BASE_OFFSET +
              i * PROFILE_PIC_SIDE_OFFSET +
              (character.shield / character.maxHp) * PROFILE_PIC_WIDTH
            "
          />
          <line
            class="shield-bar"
            :x1="PROFILE_PIC_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET - SHIELD_BAR_OFFSET"
            :y1="BASE_HEIGHT + PROFILE_PIC_HEIGHT + HP_BAR_HEIGHT + SHIELD_BAR_OFFSET"
            :y2="BASE_HEIGHT + PROFILE_PIC_HEIGHT + HP_BAR_HEIGHT + SHIELD_BAR_OFFSET"
            :x2="
              PROFILE_PIC_BASE_OFFSET +
              i * PROFILE_PIC_SIDE_OFFSET +
              (character.shield / character.maxHp) * PROFILE_PIC_WIDTH
            "
          /> </g
      ></g>
      <linearGradient :id="character.name + 'energy-gradient'" x1="0.5" y1="1" x2="0.5" y2="0">
        <stop
          :offset="`${(character.energy / character.maxEnergy) * 100}%`"
          stop-opacity="1"
          :stop-color="getElementColor(character.element)"
        />
        <stop
          :offset="`${(character.energy / character.maxEnergy) * 100}%`"
          stop-opacity="0"
          :stop-color="getElementColor(character.element)"
        />
        <stop offset="100%" stop-opacity="0" :stop-color="getElementColor(character.element)" />
      </linearGradient>
      <g
        class="ult-circle"
        :class="{ ready: character.energy === character.maxEnergy }"
        :data-index="i"
      >
        <circle
          :cx="ULT_GAUGE_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
          :cy="BASE_HEIGHT + 30"
          r="22"
          fill="black"
        />
        <circle
          :cx="ULT_GAUGE_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
          :cy="BASE_HEIGHT + 30"
          r="22"
          :fill="`url(#${character.name}energy-gradient)`"
          :filter="character.energy === character.maxEnergy ? `url(#glow)` : ''"
        />
      </g>
      <text
        class="hp-number-display"
        :x="ULT_GAUGE_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
        :y="BASE_HEIGHT + 58"
      >
        {{ character.hp }}
      </text>
    </g>
    <template v-if="cameraState.mode === CameraMode.ALLIES">
      <g
        class="player-image"
        v-for="(character, i) in playerCharacters"
        :key="character.name + character.hp + 'ally'"
        :data-index="i"
      >
        <image
          :href="character.frontImage"
          :height="PLAYER_IMAGE_HEIGHT"
          :width="PLAYER_IMAGE_WIDTH"
          :x="playerXPositions[i]"
          :y="ALLY_VIEW_TOP_PADDING"
        />
      </g>
    </template>
  </g>
</template>

<style lang="scss" scoped>
.ult-circle {
  opacity: 80%;
  &.ready {
    opacity: 100%;
  }
}

.projectile {
  transition: all 0.7s linear;
}

.player-default-image {
  transition: all 0.7s linear;
}

.hp-number-display {
  user-select: none;
  font-size: 8px;
  stroke: black;
  paint-order: stroke;
  fill: white;
  text-anchor: middle;
  dominant-baseline: middle;
}

.player-ui {
  .shield-bar {
    fill: none;
    stroke: white;
    stroke-width: 1.5px;
  }
  .health-bar {
    fill: rgb(100, 248, 250);
    stroke: black;
    stroke-width: 0.3px;
  }

  .health-bar-outline {
    fill: black;
    stroke-width: 0.3px;
    opacity: 0.7;
  }

  .depleted {
    fill: black;
    stroke: white;
  }
}
.health-bar-outline {
  fill: transparent;
  stroke: white;
}
</style>
