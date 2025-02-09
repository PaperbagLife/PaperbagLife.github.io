<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  CardColor,
  CardType,
  type RenderCard
} from '@/util/deckbuilding/consts'

const props = defineProps<{
  renderCard: RenderCard
  originX?: number
  originY?: number
}>()

const POINT_CARD_TEXT_TOP_PADDING = 15
const POINT_CARD_TEXT_SIDE_PADDING = 20

const origin = computed(() => {
  return {
    originX: props.originX ? props.originX : props.renderCard.centerX,
    originY: props.originY ? props.originY : props.renderCard.centerY
  }
})

const originTranslate = computed(() => {
  return `translate(${origin.value.originX}px, ${origin.value.originY}px)`
})
</script>

<template>
  <!-- This will be in an svg-->
  <g
    :style="{ transform: originTranslate }"
    class="render-card"
    :class="{ dragged: props.renderCard.dragged }"
    :data-instanceID="props.renderCard.card.instanceID"
  >
    <g v-if="renderCard.card.type === CardType.POINT">
      <rect
        class="render-card-rect"
        :class="{ dark: renderCard.card.color === CardColor.DARK }"
        :width="CARD_WIDTH"
        :height="CARD_HEIGHT"
        :x="-CARD_WIDTH / 2"
        :y="-CARD_HEIGHT / 2"
        rx="5"
        stroke="black"
      />
      <text
        class="card-number"
        :class="{ dark: renderCard.card.color === CardColor.DARK }"
        :x="POINT_CARD_TEXT_TOP_PADDING - CARD_WIDTH / 2"
        :y="POINT_CARD_TEXT_SIDE_PADDING - CARD_HEIGHT / 2"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {{ renderCard.card.value }}
      </text>
    </g>
  </g>
</template>

<style scoped>
.card-number {
  font-size: 25px;
  user-select: none;
}

.dragging .render-card {
  pointer-events: none;
}

.render-card-rect {
  fill: rgb(251, 255, 206);
}

.render-card-rect.dark {
  fill: rgb(4, 0, 49);
}

.render-card {
  cursor: pointer;
}

.card-number.dark {
  fill: white;
}
</style>
