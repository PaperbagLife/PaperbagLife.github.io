<script setup lang="ts">
import type { CameraState, PlayerCharacter } from '../../util/starrail/consts'
import {
  CameraMode,
  HP_BAR_HEIGHT,
  HP_BAR_OFFSET,
  PROFILE_PIC_BASE_OFFSET,
  PLAYER_IMAGE_HEIGHT,
  PLAYER_IMAGE_WIDTH,
  PROFILE_PIC_HEIGHT,
  PROFILE_PIC_SIDE_OFFSET,
  ALLY_VIEW_TOP_PADDING,
  PROFILE_PIC_WIDTH,
  ULT_GAUGE_BASE_OFFSET
} from '../../util/starrail/consts'

import { getElementColor } from '../../util/starrail/utils'

defineProps<{
  playerCharacters: PlayerCharacter[]
  cameraState: CameraState
  playerXPositions: number[]
}>()
</script>

<template>
  <g>
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
        y="250"
      />
      <rect
        class="health-bar-outline"
        :x="PROFILE_PIC_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
        y="330"
        :width="PROFILE_PIC_WIDTH"
        :height="HP_BAR_HEIGHT"
      />
      <rect
        class="health-bar"
        :x="PROFILE_PIC_BASE_OFFSET + HP_BAR_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
        y="332"
        :width="(character.hp / character.maxHp) * (PROFILE_PIC_WIDTH - HP_BAR_OFFSET * 2)"
        :height="HP_BAR_HEIGHT - 2 * HP_BAR_OFFSET"
      />
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
      <g class="ult-circle" :data-index="i">
        <circle
          :cx="ULT_GAUGE_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
          cy="290"
          r="30"
          fill="black"
        />
        <circle
          :cx="ULT_GAUGE_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
          cy="290"
          r="30"
          :fill="`url(#${character.name}energy-gradient)`"
          stroke="grey"
          stroke-width="1"
        />
      </g>
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

    <!--Player Default View-->
    <g v-if="cameraState.mode === CameraMode.DEFAULT">
      <image
        :href="playerCharacters[cameraState.focus].backImage"
        :height="PLAYER_IMAGE_HEIGHT"
        :width="PLAYER_IMAGE_WIDTH"
        :x="350"
        :y="ALLY_VIEW_TOP_PADDING * 2.5"
      />
    </g>
  </g>
</template>

<style lang="scss" scoped>
.ult-circle {
  opacity: 80%;
}

.player-ui {
  .health-bar {
    fill: rgb(100, 248, 250);
    stroke: black;
  }
}
.health-bar-outline {
  fill: transparent;
  stroke: white;
}
</style>
