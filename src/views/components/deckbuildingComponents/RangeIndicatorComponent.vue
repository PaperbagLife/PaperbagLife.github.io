<script setup lang="ts">
import { computed } from 'vue'
import { HAND_AREA_RIGHT_PADDING, SVG_HEIGHT, SVG_WIDTH } from '@/util/deckbuilding/consts'

const props = defineProps<{
  target: number
  range: number
  currentValue: number
}>()

const RANGE_INDICATOR_WIDTH = 800
const RANGE_INDICATOR_HEIGHT = 20
const EXACT_TARGET_WIDTH = 10

const minValue = computed(() => props.target - props.range * 5)
const maxValue = computed(() => props.target + props.range * 5)
const fullRange = computed(() => maxValue.value - minValue.value)
const currentPercentage = computed(
  () => (props.currentValue - minValue.value) / (maxValue.value - minValue.value)
)

const ticks = computed(() => {
  const ticks = []
  for (let i = 0; i <= 10; i++) {
    ticks.push({
      x: (RANGE_INDICATOR_WIDTH * i) / 10 - RANGE_INDICATOR_WIDTH / 2,
      label: `${minValue.value + (fullRange.value * i) / 10}`,
    })
  }
  return ticks
})

const originTranslate = computed(() => {
  return `translate(${(SVG_WIDTH - HAND_AREA_RIGHT_PADDING) / 2}px, ${SVG_HEIGHT / 4}px)`
})
</script>

<template>
  <!-- This will be in an svg-->
  <g :style="{ transform: originTranslate }">
    <!-- Background -->
    <rect
      :x="-RANGE_INDICATOR_WIDTH / 2"
      :y="0"
      :width="RANGE_INDICATOR_WIDTH"
      :height="RANGE_INDICATOR_HEIGHT"
      class="range-indicator-background"
    />
    <!-- Range indicator -->
    <rect
      :x="
        -RANGE_INDICATOR_WIDTH / 2 +
        (RANGE_INDICATOR_WIDTH * (target - range - minValue)) / fullRange
      "
      :y="0"
      :width="(RANGE_INDICATOR_WIDTH * 2 * range) / fullRange"
      :height="RANGE_INDICATOR_HEIGHT"
      class="range-indicator"
    />

    <!-- Exact Target -->
    <rect
      :x="-EXACT_TARGET_WIDTH / 2"
      :y="0"
      :width="EXACT_TARGET_WIDTH"
      :height="RANGE_INDICATOR_HEIGHT"
      class="exact-target"
    />

    <!-- ticks and labels-->
    <g v-for="tick in ticks" :key="tick.label" class="ticks">
      <line
        class="tick"
        :x1="tick.x"
        :y1="RANGE_INDICATOR_HEIGHT"
        :x2="tick.x"
        :y2="RANGE_INDICATOR_HEIGHT * 1.5"
      />
      <text class="tick-label" :x="tick.x" :y="50" text-anchor="middle">{{ tick.label }}</text>
    </g>

    <!-- Current value indicator -->
    <g
      class="current-value-indicator"
      :style="{
        transform: `translate(${
          -RANGE_INDICATOR_WIDTH / 2 + RANGE_INDICATOR_WIDTH * currentPercentage
        }px, 0)`,
      }"
    >
      <path class="indicator-triangle" d="M-10 -10 L10 -10 L0 10 Z" fill="black" />
    </g>
  </g>
</template>

<style lang="scss" scoped>
.range-indicator-background {
  fill: #666;
}
.range-indicator {
  fill: #ff9966;
}

.current-value-indicator {
  transition: transform 0.5s;
  .indicator-triangle {
    fill: #66ccff;
  }
}

.tick {
  stroke: black;
  stroke-width: 2;
}

.tick-label {
  font-weight: 500;
  font-size: 25px;
}

.exact-target {
  fill: #22ff00;
}
</style>
