<script setup lang="ts">
import { useGameState } from '@/util/deckbuilding/gameManager'
import coin from '@/assets/game/deckbuilding/coin.png'
import sword from '@/assets/game/deckbuilding/sword.png'
import deck from '@/assets/game/deckbuilding/deck.png'
import { CARD_HEIGHT, CARD_WIDTH, SVG_HEIGHT, SVG_WIDTH } from '@/util/deckbuilding/consts'
import { computed, ref } from 'vue'
import type { Card, RenderCard } from '@/util/deckbuilding/consts'
import RenderCardComponent from './RenderCardComponent.vue'
const { gameState } = useGameState()

const props = defineProps<{
  cards: Card[]
  showCards: boolean
}>()

const emit = defineEmits(['open-overlay', 'close-overlay'])

const CARD_SPACING = 20 // Space between cards

// Fixed container dimensions for cards
const CONTAINER_WIDTH = SVG_WIDTH * 0.8
const CONTAINER_HEIGHT = SVG_HEIGHT * 0.8
const COLUMNS = Math.floor(CONTAINER_WIDTH / (CARD_WIDTH + CARD_SPACING))
const CONTAINER_X = (SVG_WIDTH - CONTAINER_WIDTH) / 2
const CONTAINER_Y = (SVG_HEIGHT - CONTAINER_HEIGHT) / 2

// For scrolling
const scrollY = ref(0)
const maxScrollY = computed(() => {
  const rows = Math.ceil(props.cards.length / COLUMNS)
  const totalHeight = rows * (CARD_HEIGHT + CARD_SPACING)
  return Math.max(0, totalHeight - CONTAINER_HEIGHT)
})

const scrollBarHeight = computed(() => {
  if (maxScrollY.value === 0) return 0
  return Math.max(50, (CONTAINER_HEIGHT / (maxScrollY.value + CONTAINER_HEIGHT)) * CONTAINER_HEIGHT)
})

const scrollBarY = computed(() => {
  if (maxScrollY.value === 0) return 0
  return (scrollY.value / maxScrollY.value) * (CONTAINER_HEIGHT - scrollBarHeight.value)
})

const renderCards = computed<RenderCard[]>(() => {
  // arrange cards in a grid with fixed positions
  const renderCards: RenderCard[] = []
  for (let i = 0; i < props.cards.length; i++) {
    const card = props.cards[i]
    const col = i % COLUMNS
    const row = Math.floor(i / COLUMNS)

    const x = CONTAINER_X + col * (CARD_WIDTH + CARD_SPACING) + CARD_WIDTH / 2
    const y = CONTAINER_Y + row * (CARD_HEIGHT + CARD_SPACING) + CARD_HEIGHT / 2 - scrollY.value

    renderCards.push({
      card,
      centerX: x,
      centerY: y,
      dragged: false
    })
  }
  return renderCards
})

function onOverlayClick(event: MouseEvent) {
  // Prevent clicks on the container from closing the overlay
  if (event.target === event.currentTarget) {
    emit('close-overlay')
  }
}

function onDeckClick() {
  emit('open-overlay')
}

function handleScroll(event: WheelEvent) {
  event.preventDefault()
  const newScrollY = Math.max(0, Math.min(maxScrollY.value, scrollY.value + event.deltaY * 0.5))
  scrollY.value = newScrollY
}

function startDrag(event: MouseEvent) {
  const startY = event.clientY
  const startScrollY = scrollY.value

  const onMouseMove = (moveEvent: MouseEvent) => {
    const deltaY = moveEvent.clientY - startY
    const scrollRatio = deltaY / (CONTAINER_HEIGHT - scrollBarHeight.value)
    scrollY.value = Math.max(
      0,
      Math.min(maxScrollY.value, startScrollY + scrollRatio * maxScrollY.value)
    )
  }

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
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
      <text x="80" y="45" class="overlay-text">{{ gameState.player?.attack }}</text>
      <text x="80" y="126" class="overlay-text">{{ gameState.gold }}</text>
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

      <!-- Fixed container for cards -->
      <g @wheel="handleScroll">
        <!-- Container background -->
        <rect
          :x="CONTAINER_X"
          :y="CONTAINER_Y"
          :width="CONTAINER_WIDTH"
          :height="CONTAINER_HEIGHT"
          fill="#333"
          opacity="0.7"
          rx="10"
          ry="10"
        />

        <!-- Clipping area for cards -->
        <clipPath id="cards-container-clip">
          <rect
            :x="CONTAINER_X"
            :y="CONTAINER_Y"
            :width="CONTAINER_WIDTH"
            :height="CONTAINER_HEIGHT"
          />
        </clipPath>

        <!-- Cards container with clipping -->
        <g clip-path="url(#cards-container-clip)">
          <RenderCardComponent
            v-for="(renderCard, index) in renderCards"
            :key="index"
            :render-card="renderCard"
            v-show="
              renderCard.centerY >= CONTAINER_Y &&
              renderCard.centerY <= CONTAINER_Y + CONTAINER_HEIGHT
            "
          />
        </g>

        <!-- Scrollbar track -->
        <rect
          v-if="maxScrollY > 0"
          :x="CONTAINER_X + CONTAINER_WIDTH - 20"
          :y="CONTAINER_Y"
          :width="10"
          :height="CONTAINER_HEIGHT"
          fill="#555"
          rx="5"
          ry="5"
        />

        <!-- Scrollbar thumb -->
        <rect
          v-if="maxScrollY > 0"
          :x="CONTAINER_X + CONTAINER_WIDTH - 20"
          :y="CONTAINER_Y + scrollBarY"
          :width="10"
          :height="scrollBarHeight"
          fill="#aaa"
          rx="5"
          ry="5"
          @mousedown="startDrag"
          class="scrollbar-thumb"
        />
      </g>

      <!-- Close button -->
      <g @click="emit('close-overlay')" class="close-button">
        <circle :cx="SVG_WIDTH - 40" :cy="40" r="20" fill="#333" />
        <line
          :x1="SVG_WIDTH - 50"
          y1="30"
          :x2="SVG_WIDTH - 30"
          y2="50"
          stroke="white"
          stroke-width="2"
        />
        <line
          :x1="SVG_WIDTH - 30"
          y1="30"
          :x2="SVG_WIDTH - 50"
          y2="50"
          stroke="white"
          stroke-width="2"
        />
      </g>
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

.deck-icon {
  cursor: pointer;
}

.scrollbar-thumb {
  cursor: pointer;
  &:hover {
    fill: #ccc;
  }
}

.close-button {
  cursor: pointer;
  &:hover circle {
    fill: #555;
  }
}
</style>
