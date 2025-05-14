<script setup lang="ts">
import type { CameraState, Character, TargetMarkers } from '../../../util/starrail/consts'
import {
  ALLY_VIEW_TOP_PADDING,
  CameraMode,
  CharacterType,
  ENEMY_CENTER_Y,
  ENEMY_SIZE,
  PLAYER_IMAGE_HEIGHT,
  PLAYER_IMAGE_WIDTH,
} from '../../../util/starrail/consts'
defineProps<{
  turnCharacter: Character | null
  cameraState: CameraState
  targetMarkers: TargetMarkers
  playerXPositions: number[]
  enemyXPositions: number[]
}>()
</script>

<template>
  <g class="target-crosshair" v-if="turnCharacter?.type === CharacterType.PLAYER">
    <g
      v-for="targetMarker in targetMarkers.main"
      :key="targetMarker"
      :transform="`translate(${
        cameraState.mode === CameraMode.ALLIES
          ? playerXPositions[targetMarker] + PLAYER_IMAGE_WIDTH / 2
          : enemyXPositions[targetMarker] + ENEMY_SIZE / 2
      }, ${
        cameraState.mode === CameraMode.ALLIES
          ? ALLY_VIEW_TOP_PADDING + PLAYER_IMAGE_HEIGHT / 2
          : ENEMY_CENTER_Y
      })`"
    >
      <circle fill="transparent" stroke="rgb(255, 8, 0)" r="20"></circle>
      <line x1="10" y1="00" x2="20" y2="0" stroke="rgb(255, 8, 0)"></line>
      <line x1="-20" y1="00" x2="-10" y2="0" stroke="rgb(255, 8, 0)"></line>
      <line x1="0" y1="-20" x2="0" y2="-10" stroke="rgb(255, 8, 0)"></line>
      <line x1="0" y1="10" x2="0" y2="20" stroke="rgb(255, 8, 0)"></line>
    </g>
    <g
      v-for="targetMarker in targetMarkers.sub"
      :key="targetMarker"
      :transform="`translate(${enemyXPositions[targetMarker] + ENEMY_SIZE / 2}, ${ENEMY_CENTER_Y})`"
    >
      <circle fill="transparent" stroke="rgb(255, 8, 0)" r="10"></circle>
      <line x1="10" y1="00" x2="20" y2="0" stroke="rgb(255, 8, 0)"></line>
      <line x1="-20" y1="00" x2="-10" y2="0" stroke="rgb(255, 8, 0)"></line>
      <line x1="0" y1="-20" x2="0" y2="-10" stroke="rgb(255, 8, 0)"></line>
      <line x1="0" y1="10" x2="0" y2="20" stroke="rgb(255, 8, 0)"></line>
    </g>
  </g>
</template>

<style lang="scss" scoped>
.target-crosshair {
  pointer-events: none;
}
</style>
