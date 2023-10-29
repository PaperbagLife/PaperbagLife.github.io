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

const BASE_HEIGHT = 270
const SHIELD_BAR_OFFSET = 0.75
const PASSIVE_RADIUS = 2

import { getElementColor } from '../../util/starrail/utils'

defineProps<{
  playerCharacters: PlayerCharacter[]
  cameraState: CameraState
  playerXPositions: number[]
}>()
</script>

<template>
  <g>
    <!--Player Default View-->
    <g v-if="cameraState.mode === CameraMode.DEFAULT">
      <image
        :href="playerCharacters[cameraState.focus].backImage"
        :height="PLAYER_IMAGE_HEIGHT"
        :width="PLAYER_IMAGE_WIDTH"
        :x="150"
        :y="ALLY_VIEW_TOP_PADDING"
      />
    </g>
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
      <g v-if="character.passiveCount">
        <circle
          v-for="idx in Array.from({ length: character.passiveCount }, (_, index) => index)"
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
          :width="PROFILE_PIC_WIDTH"
          :height="HP_BAR_HEIGHT" />
        <rect
          class="health-bar"
          :x="PROFILE_PIC_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
          :y="BASE_HEIGHT + PROFILE_PIC_HEIGHT"
          :width="(character.hp / character.maxHp) * PROFILE_PIC_WIDTH"
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
      <g class="ult-circle" :data-index="i">
        <circle
          :cx="ULT_GAUGE_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
          :cy="BASE_HEIGHT + 40"
          r="25"
          fill="black"
        />
        <circle
          :cx="ULT_GAUGE_BASE_OFFSET + i * PROFILE_PIC_SIDE_OFFSET"
          :cy="BASE_HEIGHT + 40"
          r="25"
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
  </g>
</template>

<style lang="scss" scoped>
.ult-circle {
  opacity: 80%;
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
}
.health-bar-outline {
  fill: transparent;
  stroke: white;
}
</style>
