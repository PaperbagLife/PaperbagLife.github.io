<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useGameState } from '@/util/deckbuilding/gameManager'
import RenderCardComponent from './components/deckbuildingComponents/RenderCardComponent.vue'
import {
  type Card,
  CARD_HEIGHT,
  CARD_WIDTH,
  CardColor,
  type CardInstance,
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

const svgElement = ref<SVGElement | null>(null)
const background = ref<SVGRectElement | null>(null)

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
  gameState.currentBattle.hand.forEach((card, i) => {
    currentCards.push({
      card,
      centerX: startX + i * effectiveWidth,
      centerY: SVG_HEIGHT - CARD_HEIGHT / 2,
      dragged:false
    })
  })

  return currentCards
})

const questionCardSlots = ref<RenderCardSlot[]>([])
const renderOperations = ref<RenderOperations[]>([])

const instanceIDToRenderCard = computed(() => {
  const instanceIDToRenderCard: Map<number, RenderCard> = new Map()
  handRenderCards.value.forEach((renderCard) => {
    if (renderCard.card.instanceID === undefined) {
      return
    }
    instanceIDToRenderCard.set(renderCard.card.instanceID, renderCard)
  })
  questionCardSlots.value.forEach((slot) => {
    if (slot.renderCard?.card.instanceID === undefined) {
      return
    }
    instanceIDToRenderCard.set(slot.renderCard.card.instanceID, slot.renderCard)
  })
  return instanceIDToRenderCard
})

const dragging = ref(false)
const dragCard = ref<RenderCard | null>(null)

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
    const effectiveWidth = availableWidth / (currentOperators.length + 2)
    const startX = effectiveWidth
    for (let i = 0; i < currentOperators.length; i++) {
      renderOps.push({
        operation: currentOperators[i],
        id: i,
        centerX: startX + (i + 0.5) * effectiveWidth,
        centerY: QUESTION_TOP_PADDING
      })
    }
    renderOperations.value = renderOps
    console.log(renderOperations.value)
  }
)

const cards: Card[] = [
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 1
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 2
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 3
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 4
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 5
  }
]
onMounted(() => {
  initializeGame(cards)
  window.scrollTo(0, 1)
})

function onMouseDown(e: PointerEvent) {
  // if the target is a card, then we want to start dragging it
  if (!(e.target instanceof Element)) {
    return
  }
  const card = e.target.closest<SVGGElement>('.render-card')
  if (card) {
    console.log("dragging card", card)
    e.target.setPointerCapture(e.pointerId) // Capture pointer
    const instanceID = card.dataset.instanceID
    if (!instanceID) {
      return
    }
    const renderCard = instanceIDToRenderCard.value.get(parseInt(instanceID))
    if (!renderCard) {
      return
    }
    dragCard.value = renderCard
    renderCard.dragged = true
    // If the card is in the hand, remove it from the hand
    const handIndex = gameState.currentBattle?.hand.findIndex((c) => c.instanceID === renderCard.card.instanceID)
    if (handIndex !== undefined && handIndex !== -1) {
      gameState.currentBattle?.hand.splice(handIndex, 1)
    }
    // If the card is in a slot, remove it from the slot
    questionCardSlots.value.forEach((slot) => {
      if (slot.renderCard?.card.instanceID === renderCard.card.instanceID) {
        slot.renderCard = null
      }
    })
  }
}

function onMouseMove(e: PointerEvent) {
  if (!dragCard.value || !svgElement.value || !background.value) {
    return
  }

  const rect = background.value.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  const scaleX = SVG_WIDTH / rect.width
  const scaleY = SVG_HEIGHT / rect.height
  dragCard.value.centerX = mouseX * scaleX
  dragCard.value.centerY = mouseY * scaleY
}

function onMouseUp(e: PointerEvent) {
  if (!dragCard.value) {
    return
  }

  if (dragCard.value?.card.instanceID !== undefined) {
    // if we are over a card slot, then we want to place the card there
    if (!(e.target instanceof Element)) {
      return
    }
    const cardSlot = e.target.closest<SVGGElement>('.render-card-slot')
    const slotId = cardSlot?.dataset.id
    if (slotId) {
      const slot = questionCardSlots.value.find((slot) => slot.id === parseInt(slotId))
      if (slot) {
        slot.renderCard = dragCard.value
        dragCard.value.dragged = false
        dragCard.value = null
        return
      }
    }

    // if we are not over a card slot, then we want to return the card to the hand
    // Push according to the position of the card
    const index = handRenderCards.value.findIndex((card) => card.centerX > dragCard.value!.centerX)
    if (index === -1) {
      gameState.currentBattle?.hand.push(dragCard.value.card as CardInstance)
    } else {
      gameState.currentBattle?.hand.splice(index, 0, dragCard.value.card as CardInstance)
    }
    dragCard.value = null
  }
  dragCard.value = null
}
</script>
<template>
  <main>
    <div class="col">
      <svg
        ref="svgElement"
        class="svg-container mx-auto my-auto"
        :viewBox="`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`"
        preserveAspectRatio="xMidYMid meet"
        @pointerdown.prevent="onMouseDown"
        @pointermove.prevent="onMouseMove"
        @pointerup.prevent="onMouseUp"
      >
        <!-- White background -->
        <rect ref="background" width="100%" height="100%" fill="white" />

        <!-- Question Area -->
        <AnswerSlotComponent
          :card-slots="questionCardSlots"
          :render-operations="renderOperations"
        ></AnswerSlotComponent>
        <RenderCardComponent
          v-for="renderCard in handRenderCards"
          :key="renderCard.card.instanceID"
          :renderCard="renderCard"
        />
        <RenderCardComponent v-if="dragCard" :renderCard="dragCard" />
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

body {
  position: fixed;
  -webkit-overflow-scrolling: touch;
}

.svg-container {
  width: 100%;
  max-height: 100dvh;
  height: 100vh;
  display: block;
  touch-action: none;
}

:root {
  touch-action: pan-x pan-y;
}
</style>
