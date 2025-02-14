<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  CardColor,
  CardType,
  ENEMY_HEIGHT,
  ENEMY_WIDTH,
  Operations,
  type RenderCard,
  type RenderCardSlot,
  type RenderOperations,
  SVG_HEIGHT,
  SVG_WIDTH
} from '@/util/deckbuilding/consts'
import { type Enemy } from '@/util/deckbuilding/gameManager'

const props = defineProps<{
  enemy: Enemy
}>()

const PADDING = 50
const hpIndicatorGap = computed(() => ENEMY_WIDTH / props.enemy.maxHp)

function createArray(range: number) {
  return Array.from({ length: range + 1 }, (_, index) => index)
}

const originTranslate = computed(() => {
  return `translate(${SVG_WIDTH - ENEMY_WIDTH - PADDING}px, ${(SVG_HEIGHT - ENEMY_HEIGHT) / 2}px)`
})
const size = 200
</script>

<template>
  <!-- This will be in an svg-->
  <g :style="{ transform: originTranslate }">
    <image :href="enemy.tachie" :width="ENEMY_WIDTH" :height="ENEMY_HEIGHT" />
    <text class="enemy-ui-text">
      <tspan :x="CARD_WIDTH / 2" :y="-ENEMY_HEIGHT / 3">{{
        `Target: ${enemy.currentTarget} ± ${enemy.range}`
      }}</tspan>
    </text>
    <g class="damage-animation">
      <!-- Slash animation from top left to bottom right -->
      <line
        v-if="enemy.damaged"
        :x1="0"
        :y1="0"
        :x2="ENEMY_WIDTH"
        :y2="ENEMY_HEIGHT / 2"
        class="slash-line normal"
      />
    </g>
    <g class="mirrored-animation">
      <!-- Slash animation from top right to bottom left -->
      <line
        v-if="enemy.crit"
        :x1="0"
        :y1="0"
        :x2="ENEMY_WIDTH"
        :y2="ENEMY_HEIGHT / 2"
        class="slash-line mirrored"
      />
    </g>

    <circle
      v-for="i in createArray(enemy.maxHp)"
      :key="i"
      :cx="i * hpIndicatorGap"
      cy="0"
      r="10"
      stroke="black"
      fill="none"
    />
    <circle
      v-for="i in createArray(enemy.hp)"
      :key="i"
      :cx="i * hpIndicatorGap"
      cy="0"
      r="8"
      fill="red"
    />
  </g>
</template>

<style scoped>
@keyframes slashAnimation {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  60% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
@keyframes mirroredSlash {
  0% {
    transform: scale(0) rotate(90deg);
    opacity: 1;
  }
  60% {
    transform: scale(1) rotate(90deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(90deg);
    opacity: 0;
  }
}

.damage-animation {
  transform: translate(0, 50px);
}

.mirrored-animation {
  transform: translate(200px, 50px);
}

.slash-line {
  stroke: red;
  stroke-linecap: round;
  stroke-width: 5px;
  animation: slashAnimation 1s ease-out forwards;
}

.slash-line.mirrored {
  animation: mirroredSlash 1s ease-out forwards;
}

.enemy-ui-text {
  text-anchor: middle;
  font-size: 40px;
  pointer-events: none;
}
</style>
