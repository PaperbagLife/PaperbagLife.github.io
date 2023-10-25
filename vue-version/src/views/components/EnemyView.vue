<script setup lang="ts">
import type { Enemy } from '../../util/starrail/consts'
import {
  HP_BAR_HEIGHT,
  HP_BAR_OFFSET,
  PROFILE_PIC_HEIGHT,
  ENEMY_TOP_PADDING,
  PROFILE_PIC_WIDTH
} from '../../util/starrail/consts'

defineProps<{
  enemies: Enemy[]
  enemyXPositions: number[]
}>()
</script>

<template>
  <g class="enemy-ui" v-for="(enemy, i) in enemies" :key="enemy.name + enemy.hp" :data-index="i">
    <image
      :href="enemy.avatar"
      :height="PROFILE_PIC_HEIGHT"
      :width="PROFILE_PIC_WIDTH"
      :x="enemyXPositions[i]"
      :y="ENEMY_TOP_PADDING"
    />
    <rect
      class="health-bar-outline"
      :x="enemyXPositions[i]"
      y="18"
      :width="PROFILE_PIC_WIDTH"
      :height="HP_BAR_HEIGHT"
    />
    <rect
      class="health-bar"
      :x="enemyXPositions[i] + HP_BAR_OFFSET"
      :y="20"
      :width="(enemy.hp / enemy.maxHp) * 76"
      :height="HP_BAR_HEIGHT - HP_BAR_OFFSET * 2"
    />
  </g>
</template>

<style lang="scss" scoped>
.enemy-ui {
  .health-bar {
    fill: rgb(190, 82, 61);
    stroke: black;
  }
}

.health-bar-outline {
  fill: transparent;
  stroke: white;
}
</style>
