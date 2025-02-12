<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { BattleState, useGameState } from '@/util/deckbuilding/gameManager'
import RenderCardComponent from './components/deckbuildingComponents/RenderCardComponent.vue'
import {
  type Card,
  CARD_HEIGHT,
  CARD_SCORE_ANIMATION_DURATION,
  CARD_WIDTH,
  CardColor,
  type CardInstance,
  CardType,
  HAND_AREA_RIGHT_PADDING,
  type PointCard,
  QUESTION_TOP_PADDING,
  type RenderCard,
  type RenderCardSlot,
  type RenderOperations,
  SVG_HEIGHT,
  SVG_WIDTH
} from '@/util/deckbuilding/consts'
import AnswerSlotComponent from './components/deckbuildingComponents/AnswerSlotComponent.vue'
import EnemyComponent from './components/deckbuildingComponents/EnemyComponent.vue'
import RangeIndicatorComponent from './components/deckbuildingComponents/RangeIndicatorComponent.vue'

const { gameState, initializeGame } = useGameState()

const SUBMIT_BUTTON_PADDING = 160

const svgElement = ref<SVGElement | null>(null)
const background = ref<SVGRectElement | null>(null)

const submitButtonVisible = computed(() => {
  return questionCardSlots.value.every((slot) => slot.renderCard !== null)
})

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
      dragged: false
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
  () => gameState.currentBattle?.enemy.currentQuestionIndex,
  () => {
    if (!gameState.currentBattle) {
      return
    }
    const enemy = gameState.currentBattle.enemy
    const currentQuestionIndex = gameState.currentBattle.enemy.currentQuestionIndex
    const cardSlots: RenderCardSlot[] = []
    const availableWidth = SVG_WIDTH
    const effectiveWidth = availableWidth / (enemy.cardCount + 1)
    const startX = effectiveWidth
    for (let i = 0; i < enemy.cardCount; i++) {
      cardSlots.push({
        renderCard: null,
        id: `${currentQuestionIndex}-${i}`,
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
    color: CardColor.LIGHT,
    value: 3
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 4
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 5
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 1
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 2
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 3
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
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
    const instanceID = card.dataset.instanceID
    if (!instanceID) {
      return
    }
    const renderCard = instanceIDToRenderCard.value.get(parseInt(instanceID))
    if (!renderCard) {
      return
    }
    dragCard.value = renderCard
    dragging.value = true
    // If the card is in the hand, remove it from the hand
    const handIndex = gameState.currentBattle?.hand.findIndex(
      (c) => c.instanceID === renderCard.card.instanceID
    )
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

function submitQuestion() {
  const cards = questionCardSlots.value.map((slot) => slot.renderCard?.card as PointCard)
  gameState.currentBattle?.resolveQuestion(cards)
  // Add a shaking effect to all cards
  questionCardSlots.value.forEach((cardSlot, i) => {
    setTimeout(() => {
      if (!cardSlot.renderCard) {
        return
      }
      cardSlot.renderCard.shake = true
      setTimeout(() => {
        if (!cardSlot.renderCard) {
          return
        }
        cardSlot.renderCard.shake = false
      }, CARD_SCORE_ANIMATION_DURATION)
    }, i * CARD_SCORE_ANIMATION_DURATION)
  })
  return
}

function onMouseUp(e: PointerEvent) {
  if (e.target instanceof Element && e.target.closest('.submit-button') && !dragging.value) {
    submitQuestion()
    return
  }
  if (!dragCard.value) {
    return
  }

  if (dragCard.value?.card.instanceID !== undefined) {
    // if we are over a card slot, then we want to place the card there
    if (!(e.target instanceof Element)) {
      return
    }
    const cardSlot = e.target.closest<SVGGElement>('.render-card-slot')
    console.log(cardSlot)
    const slotId = cardSlot?.dataset.id
    if (slotId) {
      const slot = questionCardSlots.value.find((slot) => slot.id === slotId)
      if (slot) {
        // If card already in slot, return it to the hand
        if (slot.renderCard) {
          gameState.currentBattle?.hand.push(slot.renderCard.card as CardInstance)
        }
        slot.renderCard = dragCard.value
        dragging.value = false
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
  dragging.value = false
}
</script>
<template>
  <main>
    <div class="col">
      <svg
        ref="svgElement"
        class="svg-container mx-auto my-auto"
        :class="{ dragging: dragging }"
        :viewBox="`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`"
        preserveAspectRatio="xMidYMid meet"
        @pointerdown.prevent="onMouseDown"
        @pointermove.prevent="onMouseMove"
        @pointerup.prevent="onMouseUp"
      >
        <!-- White background -->
        <rect ref="background" width="100%" height="100%" fill="white" />

        <RangeIndicatorComponent
          v-if="gameState.currentBattle"
          :target="gameState.currentBattle.enemy.currentTarget"
          :range="gameState.currentBattle.enemy.range"
          :currentValue="gameState.currentBattle.currentValue"
        />
        <!-- Question Area -->
        <AnswerSlotComponent
          :card-slots="questionCardSlots"
          :render-operations="renderOperations"
        />
        <text x="800" y="100" class="current-value">
          {{ gameState.currentBattle?.currentValue }}
        </text>
        <RenderCardComponent
          v-for="renderCard in handRenderCards"
          :key="renderCard.card.instanceID"
          :renderCard="renderCard"
        />
        <RenderCardComponent v-if="dragCard" :renderCard="dragCard" />

        <!-- Submit Button -->
        <rect
          v-if="submitButtonVisible"
          class="submit-button"
          :x="SVG_WIDTH - HAND_AREA_RIGHT_PADDING"
          :y="SVG_HEIGHT - SUBMIT_BUTTON_PADDING"
          rx="10"
          :width="120"
          :height="60"
        />

        <!-- Enemy -->
        <EnemyComponent v-if="gameState.currentBattle" :enemy="gameState.currentBattle.enemy" />
      </svg>
    </div>
  </main>
</template>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.current-value {
  font-size: 50px;
  text-anchor: middle;
}

.render-card {
  transition: transform 1s;
}

.dragging {
  .render-card {
    pointer-events: none;
    transition: none;
  }
}

.submit-button {
  fill: green;
  cursor: pointer;
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

.svg-container text {
  user-select: none;
}

:root {
  touch-action: pan-x pan-y;
}
</style>
