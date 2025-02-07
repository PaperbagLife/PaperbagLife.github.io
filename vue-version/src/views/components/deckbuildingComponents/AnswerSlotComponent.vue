<script setup lang="ts">
import { computed, defineProps, ref, watch } from 'vue'
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  CardColor,
  CardType,
  Operations,
  type RenderCard,
  type RenderCardSlot,
  type RenderOperations
} from '@/util/deckbuilding/consts'
import { type Enemy } from '@/util/deckbuilding/gameManager'
import RenderCardSlotComponent from './RenderCardSlotComponent.vue'

const props = defineProps<{
  cardSlots: RenderCardSlot[]
  renderOperations: RenderOperations[]
}>()
</script>

<template>
  <!-- This will be in an svg-->
  <g v-for="cardSlot in cardSlots" :key="cardSlot.id">
    <RenderCardSlotComponent :renderCardSlot="cardSlot" />
  </g>
  <g
    v-for="renderOperation in renderOperations"
    :key="renderOperation.id"
    :style="{ transform: `translate(${renderOperation.centerX}px, ${renderOperation.centerY}px)` }"
  >
    <g v-if="renderOperation.operation === Operations.ADD">
      <circle cx="0" cy="0" r="50" fill="black" />
    </g>
    <g v-if="renderOperation.operation === Operations.SUBTRACT">
      <circle cx="0" cy="0" r="50" fill="black" />
    </g>
  </g>
</template>

<style scoped>
.card-number {
  font-size: 25px;
}

.dark {
  fill: white;
}
</style>
