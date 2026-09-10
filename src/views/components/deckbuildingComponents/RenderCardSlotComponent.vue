<script setup lang="ts">
import { computed, watch } from 'vue'
import { CARD_HEIGHT, CARD_WIDTH, type RenderCardSlot } from '@/util/deckbuilding/consts'
import RenderCardComponent from './RenderCardComponent.vue'

const props = defineProps<{
  renderCardSlot: RenderCardSlot
}>()

const originTranslate = computed(() => {
  const relOrigin = {
    originX: props.renderCardSlot.centerX,
    originY: props.renderCardSlot.centerY,
  }
  return `translate(${relOrigin.originX}px, ${relOrigin.originY}px)`
})

watch(
  () => props.renderCardSlot,
  () => {
    console.log('renderCardSlot changed')
  }
)
</script>

<template>
  <!-- This will be in an svg-->
  <g>
    <g
      :style="{ transform: originTranslate }"
      :data-id="renderCardSlot.id"
      class="render-card-slot"
    >
      <rect
        :width="CARD_WIDTH"
        :height="CARD_HEIGHT"
        :x="-CARD_WIDTH / 2"
        :y="-CARD_HEIGHT / 2"
        rx="5"
        fill="none"
        stroke="black"
        pointer-events="visible"
      />
      <line :x1="-20" :y1="0" :x2="20" :y2="0" stroke="black" />
      <line :x1="0" :y1="-20" :x2="0" :y2="20" stroke="black" />
    </g>
    <RenderCardComponent
      v-if="renderCardSlot.renderCard != null"
      :render-card="renderCardSlot.renderCard"
      :origin-x="renderCardSlot.centerX"
      :origin-y="renderCardSlot.centerY"
    />
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
