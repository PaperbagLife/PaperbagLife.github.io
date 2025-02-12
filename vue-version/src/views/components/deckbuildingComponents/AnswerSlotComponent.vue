<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
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

const operatorSize = 30

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
      <line :x1="operatorSize" :x2="-operatorSize" class="operator-line" />
      <line :y1="operatorSize" :y2="-operatorSize" class="operator-line" />
    </g>
    <g v-if="renderOperation.operation === Operations.SUBTRACT">
      <line :x1="operatorSize" :x2="-operatorSize" class="operator-line" />
    </g>
  </g>
</template>

<style scoped>
.card-number {
  font-size: 25px;
}

.operator-line {
  stroke: black;
  stroke-width: 4;
  stroke-linecap: round;
}

.dark {
  fill: white;
}
</style>
