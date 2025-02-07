<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useGameState } from '@/util/deckbuilding/gameManager'
import RenderCardComponent from './components/deckbuildingComponents/RenderCardComponent.vue'
import {
  type Card,
  CARD_HEIGHT,
  CARD_WIDTH,
  CardColor,
  CardType,
  HAND_AREA_RIGHT_PADDING,
  QUESTION_TOP_PADDING,
  type RenderCard,
  type RenderCardSlot,
  type RenderOperations,
  SVG_HEIGHT,
  SVG_WIDTH
} from '@/util/deckbuilding/consts'
import AnswerSlotComponent from './components/deckbuildingComponents/AnswerSlotComponent.vue'

const { gameState, initializeGame } = useGameState()

const handRenderCards = computed<RenderCard[]>(() => {
  if (!gameState.currentBattle) {
    return []
  }
  const currentCards: RenderCard[] = []
  const handSize = gameState.currentBattle.hand.length
  // spread the cards evenly across available area
  const availableWidth = SVG_WIDTH - HAND_AREA_RIGHT_PADDING
  const effectiveWidth = availableWidth / (handSize + 1)
  const startX = effectiveWidth
  console.log('hand size', handSize, availableWidth, effectiveWidth)
  gameState.currentBattle.hand.forEach((card, i) => {
    currentCards.push({
      card,
      centerX: startX + i * effectiveWidth,
      centerY: SVG_HEIGHT - CARD_HEIGHT / 2
    })
  })

  return currentCards
})

const questionCardSlots = ref<RenderCardSlot[]>([])
const renderOperations = ref<RenderOperations[]>([])

watch(
  () => gameState.currentBattle?.enemy.name,
  () => {
    console.log('updating quesiton card slots')
    if (!gameState.currentBattle) {
      return
    }
    const enemy = gameState.currentBattle.enemy
    const cardSlots: RenderCardSlot[] = []
    const availableWidth = SVG_WIDTH
    const effectiveWidth = availableWidth / (enemy.cardCount + 1)
    const startX = effectiveWidth
    for (let i = 0; i < enemy.cardCount; i++) {
      cardSlots.push({
        renderCard: null,
        id: i,
        centerX: startX + i * effectiveWidth,
        centerY: QUESTION_TOP_PADDING
      })
    }

    questionCardSlots.value = cardSlots
  }
)

watch(
  () => gameState.currentBattle?.enemy.currentOperators,
  () => {
    if (!gameState.currentBattle) {
      return
    }
    const currentOperators = gameState.currentBattle.enemy.currentOperators
    console.log('updating render operations', gameState.currentBattle.enemy.currentOperators)
    const renderOps: RenderOperations[] = []
    const availableWidth = SVG_WIDTH
    const effectiveWidth = availableWidth / (currentOperators.length + 1)
    const startX = effectiveWidth
    for (let i = 0; i < currentOperators.length; i++) {
      renderOps.push({
        operation: currentOperators[i],
        id: i,
        centerX: startX + i * effectiveWidth,
        centerY: 0
      })
    }
    renderOperations.value = renderOps
    console.log(renderOperations.value)
  }
)

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
    color: CardColor.DARK,
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
    color: CardColor.DARK,
    value: 5
  }
]
onMounted(() => {
  initializeGame(cards)
})
</script>
<template>
  <main>
    <div class="col">
      <svg
        class="svg-container"
        :viewBox="`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`"
        preserveAspectRatio="xMidYMid meet"
      >
        <!-- White background -->
        <rect width="100%" height="100%" fill="white" />

        <!-- Question Area -->
        <AnswerSlotComponent
          :card-slots="questionCardSlots"
          :render-operations="renderOperations"
        ></AnswerSlotComponent>
        <RenderCardComponent
          v-for="renderCard in handRenderCards"
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

:root {
  touch-action: pan-x pan-y;
}
</style>
