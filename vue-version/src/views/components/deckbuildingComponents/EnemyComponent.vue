<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  CardColor,
  CardType,
  Operations,
  type RenderCard,
  type RenderCardSlot,
  type RenderOperations,
  SVG_HEIGHT,
  SVG_WIDTH
} from '@/util/deckbuilding/consts'
import { type Enemy } from '@/util/deckbuilding/gameManager'

const operatorSize = 30

const props = defineProps<{
  enemy: Enemy
}>()

const originTranslate = computed(() => {
  return `translate(${SVG_WIDTH - CARD_WIDTH * 1.5}px, ${SVG_HEIGHT / 2}px)`
})
</script>

<template>
  <!-- This will be in an svg-->
  <g :style="{ transform: originTranslate }">
    <rect :width="CARD_WIDTH" :height="CARD_HEIGHT" rx="5" fill="none" stroke="black" />
    <text class="enemy-ui-text">
      <tspan :x="CARD_WIDTH / 2" y="-20">{{
        `Target: ${enemy.currentTarget} ± ${enemy.range}`
      }}</tspan>
      <tspan :x="CARD_WIDTH / 2" y="20">{{ `HP: ${enemy.health}` }}</tspan>
    </text>
  </g>
</template>

<style scoped>
.enemy-ui-text {
  text-anchor: middle;
  font-size: 40px;
  pointer-events: none;
}
</style>
