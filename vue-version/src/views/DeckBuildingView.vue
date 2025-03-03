<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGameState } from '@/util/deckbuilding/gameManager'
import { SIMPLE_DECK } from '@/util/deckbuilding/consts'
import BattleScene from './components/deckbuildingScenes/BattleScene.vue'

const { gameState, initializeGame } = useGameState()

onMounted(() => {
  initializeGame(SIMPLE_DECK)
  window.scrollTo(0, 1)
})

const stateStringPointer = ref('')
const stateStringTouch = ref('')

function onPointerStart(e: PointerEvent) {
  stateStringPointer.value = 'PointerStart'
}

function onPointerMove(e: PointerEvent) {
  stateStringPointer.value = 'PointerMove'
}

function onPointerEnd(e: PointerEvent) {
  stateStringPointer.value = 'PointerEnd'
}

function onTouchStart(e: TouchEvent) {
  stateStringTouch.value = 'TouchStart'
}

function onTouchMove(e: TouchEvent) {
  stateStringTouch.value = 'TouchMove'
}

function onTouchEnd(e: TouchEvent) {
  stateStringTouch.value = 'TouchEnd'
}
</script>
<template>
  <main>
    <div class="col">
      <BattleScene v-if="gameState.currentBattle" />
      <svg
        @pointerdown="onPointerStart"
        @pointermove="onPointerMove"
        @pointerup="onPointerEnd"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <rect ref="background" width="100%" height="100%" fill="white" />
      </svg>
      <div>stateStringPointer: {{ stateStringPointer }}</div>
      <div>stateStringTouch: {{ stateStringTouch }}</div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
