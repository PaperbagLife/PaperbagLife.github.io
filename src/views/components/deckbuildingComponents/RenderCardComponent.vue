<script setup lang="ts">
import { computed } from 'vue'
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  CardColor,
  CardType,
  type RenderCard,
} from '@/util/deckbuilding/consts'

const props = defineProps<{
  renderCard: RenderCard
  originX?: number
  originY?: number
}>()

const POINT_CARD_TEXT_TOP_PADDING = 50

const origin = computed(() => {
  return {
    originX: props.originX ? props.originX : props.renderCard.centerX,
    originY: props.originY ? props.originY : props.renderCard.centerY,
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
    :class="{ dragged: renderCard.dragged }"
    :data-instanceID="renderCard.card.instanceID"
  >
    <g v-if="renderCard.card.type === CardType.POINT" :class="{ shake: renderCard.shake }">
      <image
        :href="renderCard.card.cardArt"
        :width="CARD_WIDTH"
        :height="CARD_HEIGHT"
        :x="-CARD_WIDTH / 2"
        :y="-CARD_HEIGHT / 2"
      />
      <text
        class="card-number"
        :class="{ dark: renderCard.card.color === CardColor.DARK }"
        :x="0"
        :y="POINT_CARD_TEXT_TOP_PADDING - CARD_HEIGHT / 2"
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
  font-size: 3rem;
  font-weight: bold;
  user-select: none;
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.dragging .render-card {
  pointer-events: none;
}

.render-card {
  cursor: pointer;
}

.card-number.dark {
  fill: white;
}
</style>
