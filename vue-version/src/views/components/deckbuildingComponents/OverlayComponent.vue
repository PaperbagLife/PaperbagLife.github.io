<script setup lang="ts">
import { useGameState } from '@/util/deckbuilding/gameManager'
const { gameState } = useGameState()
import coin from '@/assets/game/deckbuilding/coin.png'
import sword from '@/assets/game/deckbuilding/sword.png'

const OVERLAY_ICON_SIZE = 80
</script>

<template>
  <!--We are inside of an svg-->
  <g>
    <g style="transform: translate(0, 80px)">
      <image :href="sword" y="0" :width="OVERLAY_ICON_SIZE" :height="OVERLAY_ICON_SIZE" />
      <image :href="coin" y="80" :width="OVERLAY_ICON_SIZE" :height="OVERLAY_ICON_SIZE" />
      <text x="80" y="45" class="overlay-text"> {{ gameState.player?.attack }}</text>
      <text x="80" y="126" class="overlay-text"> {{ gameState.gold }}</text>
    </g>
    <g>
      <!-- <image :href="deck" /> -->
    </g>
  </g>
</template>

<style lang="scss" scoped>
.overlay-text {
  font-size: 4rem;
  text-align: center;
  text-anchor: start;
  dominant-baseline: middle;
  line-height: 1;
  color: black;
  user-select: none;
}
</style>
