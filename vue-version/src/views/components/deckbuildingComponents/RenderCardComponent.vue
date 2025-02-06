<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import { type RenderCard, CardType } from '@/util/deckbuilding/gameManager'

const props = defineProps<{
  renderCard: RenderCard
}>()

const originTranslate = computed(() => {
  const relOrigin = {
    originX: props.renderCard.centerX,
    originY: props.renderCard.centerY
  }
  return `translate(${relOrigin.originX}px, ${relOrigin.originY}px)`
})

const CARD_WIDTH = 150
const CARD_HEIGHT = 200
</script>

<template>
  <!-- This will be in an svg-->
  <g :style="{ transform: originTranslate }">
    <rect :width="CARD_WIDTH" :height="CARD_HEIGHT" fill="none" stroke="black" />
    <text
      v-if="renderCard.card.type === CardType.POINT"
      x="0"
      y="0"
      dominant-baseline="middle"
      text-anchor="middle"
    >
      {{ renderCard.card.value }}
    </text>
  </g>
</template>
