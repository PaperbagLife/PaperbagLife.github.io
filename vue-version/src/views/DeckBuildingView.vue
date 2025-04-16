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
<style lang="scss" scoped></style>
