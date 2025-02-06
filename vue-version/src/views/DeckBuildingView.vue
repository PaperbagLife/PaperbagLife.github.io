<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import {
  useGameState,
  type Card,
  CardType,
  CardColor,
  type RenderCard
} from '@/util/deckbuilding/gameManager'
import RenderCardComponent from './components/deckbuildingComponents/RenderCardComponent.vue'

const CARD_WIDTH = 150
const CARD_HEIGHT = 200

const { gameState, initializeGame } = useGameState()

const renderCards = computed<RenderCard[]>(() => {
  if (!gameState.currentBattle) {
    return []
  }
  const currentCards: RenderCard[] = []
  gameState.currentBattle.hand.forEach((card, i) => {
    currentCards.push({
      card,
      centerX: 200 + i * CARD_WIDTH * 1.2,
      centerY: 700
    })
  })

  return currentCards
})

const cards: Card[] = [
  {
    type: CardType.POINT,
    id: '1',
    color: CardColor.LIGHT,
    value: 1
  },
  {
    type: CardType.POINT,
    id: '2',
    color: CardColor.LIGHT,
    value: 2
  },
  {
    type: CardType.POINT,
    id: '3',
    color: CardColor.LIGHT,
    value: 3
  },
  {
    type: CardType.POINT,
    id: '4',
    color: CardColor.LIGHT,
    value: 4
  },
  {
    type: CardType.POINT,
    id: '5',
    color: CardColor.LIGHT,
    value: 5
  }
]
onMounted(() => {
  initializeGame(cards)
  gameState.currentBattle.hand = cards
})
</script>
<template>
  <main>
    <div class="col">
      <svg
        class="svg-container"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid meet"
      >
        <!-- White background -->
        <rect width="100%" height="100%" fill="white" />

        <!-- Red ball in center -->
        <circle cx="800" cy="450" r="50" fill="black" />
        <!-- Question Area -->
        <RenderCardComponent
          v-for="renderCard in renderCards"
          :key="renderCard.card.id"
          :renderCard="renderCard"
        />
      </svg>
    </div>
  </main>
</template>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.svg-container {
  width: 100%;
  height: 100vh;
  display: block;
}
</style>
