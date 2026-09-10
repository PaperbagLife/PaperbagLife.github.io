<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGameState } from '@/util/deckbuilding/gameManager'
import { SIMPLE_DECK } from '@/util/deckbuilding/consts'
import BattleScene from './components/deckbuildingScenes/BattleScene.vue'
import MapScene from './components/deckbuildingScenes/MapScene.vue'

const { gameState, initializeGame } = useGameState()

onMounted(() => {
  initializeGame(SIMPLE_DECK)
  window.scrollTo(0, 1)
})
</script>
<template>
  <main>
    <div class="col">
      <BattleScene v-if="gameState.currentBattle" />
      <MapScene v-else />
    </div>
  </main>
</template>
<style lang="scss">
.overlay {
  position: fixed;
  z-index: 1000;
  pointer-events: none;
}
.blessings-container {
  min-height: 20px;
}

.player-stats {
  font-size: 2rem;
  text-align: center;
  line-height: 1;
  color: black;
  user-select: none;
}

.no-scroll {
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    position: fixed;
    -webkit-overflow-scrolling: touch;
  }
}

.svg-container {
  width: 100%;
  max-height: 100dvh;
  height: 100vh;
  touch-action: none;
}

.svg-container text {
  user-select: none;
}
</style>
