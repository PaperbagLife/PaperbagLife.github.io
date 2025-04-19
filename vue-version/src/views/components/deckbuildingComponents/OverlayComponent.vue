<script setup lang="ts">
import { useGameState } from '@/util/deckbuilding/gameManager'
import coin from '@/assets/game/deckbuilding/coin.png'
import sword from '@/assets/game/deckbuilding/sword.png'
import deck from '@/assets/game/deckbuilding/deck.png'
import { SVG_HEIGHT, SVG_WIDTH } from '@/util/deckbuilding/consts'
import { computed } from 'vue'
import type { Card, RenderCard } from '@/util/deckbuilding/consts'
import RenderCardComponent from './RenderCardComponent.vue'
const { gameState } = useGameState()

const props = defineProps<{
  cards: Card[]
  showCards: boolean
}>()

const emit = defineEmits(['open-overlay', 'close-overlay'])

const COLUMNS = 5

const renderCards = computed<RenderCard[]>(() => {
  // arange it in a grid, left to right, top to bottom
  const renderCards: RenderCard[] = []
  for (let i = 0; i < props.cards.length; i++) {
    const card = props.cards[i]
    const x = (i % COLUMNS) * (SVG_WIDTH / COLUMNS)
    const y = Math.floor(i / COLUMNS) * (SVG_HEIGHT / Math.ceil(props.cards.length / COLUMNS))
    renderCards.push({
      card,
      centerX: x + SVG_WIDTH / (2 * COLUMNS),
      centerY: y + SVG_HEIGHT / (2 * Math.ceil(props.cards.length / COLUMNS)),
      dragged: false
    })
  }
  return renderCards
})

function onOverlayClick() {
  emit('close-overlay')
}

function onDeckClick() {
  emit('open-overlay')
}

const OVERLAY_ICON_SIZE = 80
const DECK_ICON_WIDTH = 230
const DECK_ICON_HEIGHT = DECK_ICON_WIDTH * 1.5
</script>

<template>
  <!--We are inside of an svg-->
  <g>
    <g style="transform: translate(0, 80px)">
      <image :href="sword" y="0" :width="OVERLAY_ICON_SIZE" :height="OVERLAY_ICON_SIZE" />
      <image :href="coin" y="80" :width="OVERLAY_ICON_SIZE" :height="OVERLAY_ICON_SIZE" />
      <text x="80" y="45" class="overlay-text"> {{ gameState.player?.attack }}</text>
      <text x="80" y="126" class="overlay-text"> {{ gameState.gold }}</text>
    </g>
    <g>
      <image
        @click="onDeckClick"
        class="deck-icon"
        :x="SVG_WIDTH - DECK_ICON_WIDTH"
        :width="DECK_ICON_WIDTH"
        :y="SVG_HEIGHT - DECK_ICON_HEIGHT * 0.9"
        :href="deck"
      />
    </g>
    <g v-if="showCards">
      <!-- Semi-transparent background -->
      <rect
        x="0"
        y="0"
        :width="SVG_WIDTH"
        :height="SVG_HEIGHT"
        fill="black"
        opacity="0.8"
        @click="onOverlayClick"
      />
      <!-- Overlay content -->
      <RenderCardComponent
        v-for="(renderCard, index) in renderCards"
        :key="index"
        :render-card="renderCard"
      />
    </g>
  </g>
</template>

<style lang="scss" scoped>
.overlay-text {
  font-size: 4rem;
  text-align: center;
  text-anchor: start;
  dominant-baseline: middle;
  line-height: 1;
  color: black;
  user-select: none;
}
</style>
