<script setup lang="ts">
import { computed } from 'vue'
import { getElementColor } from '@/util/starrail/utils'
import type { Enemy } from '../../../util/starrail/consts'
import {
  ENEMY_SIZE,
  ENEMY_TOP_PADDING,
  GAME_HEIGHT,
  PLAYER_DEFAULT_X_POSITION,
} from '../../../util/starrail/consts'

const ENEMY_HP_BAR_WIDTH = 48
const ENEMY_HP_TOP_OFFSET = 20
const ENEMY_HP_BAR_HEIGHT = 6
const ENEMY_TOUGHNESS_BAR_HEIGHT = 4
const props = defineProps<{
  enemies: Enemy[]
  enemyXPositions: number[]
  attackingEnemy: number | null
}>()

const attackingTransform = computed(() => {
  if (props.attackingEnemy == null) {
    return ''
  }

  return `translate(${PLAYER_DEFAULT_X_POSITION - props.enemyXPositions[props.attackingEnemy]}px, ${
    GAME_HEIGHT / 2 - ENEMY_TOP_PADDING - ENEMY_SIZE
  }px)`
})
</script>

<template>
  <g class="enemy-ui" v-for="(enemy, i) in enemies" :key="enemy.name + enemy.hp" :data-index="i">
    <image
      class="enemy-image"
      :style="{
        transform: attackingEnemy != null && i === attackingEnemy ? attackingTransform : ''
      }"
      :href="enemy.avatar"
      :height="attackingEnemy != null && i === attackingEnemy ? ENEMY_SIZE * 1.5 : ENEMY_SIZE"
      :width="attackingEnemy != null && i === attackingEnemy ? ENEMY_SIZE * 1.5 : ENEMY_SIZE"
      :x="enemyXPositions[i]"
      :y="ENEMY_TOP_PADDING"
    />
    <rect
      class="health-bar-outline"
      :x="enemyXPositions[i] + (ENEMY_SIZE - ENEMY_HP_BAR_WIDTH) / 2"
      :y="ENEMY_HP_TOP_OFFSET"
      :width="ENEMY_HP_BAR_WIDTH"
      :height="ENEMY_HP_BAR_HEIGHT"
    />
    <rect
      class="health-bar"
      :x="enemyXPositions[i] + (ENEMY_SIZE - ENEMY_HP_BAR_WIDTH) / 2"
      :y="ENEMY_HP_TOP_OFFSET"
      :width="(enemy.hp / enemy.maxHp) * ENEMY_HP_BAR_WIDTH"
      :height="ENEMY_HP_BAR_HEIGHT"
    />
    <rect
      class="toughness-bar-outline"
      :x="enemyXPositions[i] + (ENEMY_SIZE - ENEMY_HP_BAR_WIDTH) / 2"
      :y="ENEMY_HP_TOP_OFFSET - ENEMY_TOUGHNESS_BAR_HEIGHT"
      :width="ENEMY_HP_BAR_WIDTH"
      :height="ENEMY_TOUGHNESS_BAR_HEIGHT"
    />
    <rect
      v-if="enemy.toughness > 0"
      class="toughness-bar"
      :x="enemyXPositions[i] + (ENEMY_SIZE - ENEMY_HP_BAR_WIDTH) / 2"
      :y="ENEMY_HP_TOP_OFFSET - ENEMY_TOUGHNESS_BAR_HEIGHT"
      :width="(enemy.toughness / enemy.maxToughness) * ENEMY_HP_BAR_WIDTH"
      :height="ENEMY_TOUGHNESS_BAR_HEIGHT"
    />
    <circle
      class="weakness-icon"
      v-for="(weak, weakIdx) in enemy.weakness"
      :key="weak"
      :cx="enemyXPositions[i] - weakIdx * 10 + 60"
      :cy="ENEMY_HP_TOP_OFFSET - 8"
      :r="3.5"
      :style="{ '--color': getElementColor(weak) }"
    ></circle>
  </g>
</template>

<style lang="scss" scoped>
.enemy-ui {
  .enemy-image {
    transition: all 0.7s;
  }
  .weakness-icon {
    fill: var(--color);
  }
  rect {
    stroke: black;
    stroke-width: 0.3px;
  }
  .health-bar {
    fill: rgb(190, 82, 61);
  }
  .health-bar-outline {
    fill: black;
  }
  .toughness-bar {
    fill: white;
  }
}
</style>
