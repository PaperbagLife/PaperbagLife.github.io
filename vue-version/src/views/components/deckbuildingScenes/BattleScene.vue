<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useGameState } from '@/util/deckbuilding/gameManager'
import RenderCardComponent from '@/views/components/deckbuildingComponents/RenderCardComponent.vue'
import {
  CARD_HEIGHT,
  CARD_SCORE_ANIMATION_DURATION,
  type CardInstance,
  HAND_AREA_RIGHT_PADDING,
  type PointCard,
  QUESTION_TOP_PADDING,
  type RenderCard,
  type RenderCardSlot,
  type RenderOperations,
  SUBMIT_BUTTON_PADDING,
  SUBMIT_BUTTON_RADIUS,
  SVG_HEIGHT,
  SVG_WIDTH
} from '@/util/deckbuilding/consts'
import AnswerSlotComponent from '@/views/components/deckbuildingComponents/AnswerSlotComponent.vue'
import EnemyComponent from '@/views/components/deckbuildingComponents/EnemyComponent.vue'
import RangeIndicatorComponent from '@/views/components/deckbuildingComponents/RangeIndicatorComponent.vue'

const { gameState } = useGameState()

const svgElement = ref<SVGElement | null>(null)
const background = ref<SVGRectElement | null>(null)

// BATTLE RELATED CODE

const dragging = ref(false)
const dragCard = ref<RenderCard | null>(null)
const draggedCardInstancePosition = ref({ instanceID: -1, x: 0, y: 0 })

const existingCards = ref<Set<number>>(new Set())
const handRenderCards = ref<RenderCard[]>([])

const questionCardSlots = ref<RenderCardSlot[]>([])
const renderOperations = ref<RenderOperations[]>([])

const submitButtonVisible = computed(() => {
  return questionCardSlots.value.every((slot) => slot.renderCard !== null)
})

// handRenderCards watcher
watch(
  () => gameState.currentBattle?.hand.length,
  () => {
    if (!gameState.currentBattle) {
      return
    }
    const handSize = gameState.currentBattle.hand.length
    const currentCards: RenderCard[] = []
    // spread the cards evenly across available area
    const availableWidth = SVG_WIDTH - HAND_AREA_RIGHT_PADDING
    const effectiveWidth = availableWidth / (handSize + 1)
    const startX = effectiveWidth
    gameState.currentBattle.hand.forEach((card, i) => {
      if (existingCards.value.has(card.instanceID)) {
        if (card.instanceID === draggedCardInstancePosition.value.instanceID) {
          currentCards.push({
            card,
            centerX: draggedCardInstancePosition.value.x,
            centerY: draggedCardInstancePosition.value.y,
            dragged: true
          })
          draggedCardInstancePosition.value = { instanceID: -1, x: 0, y: 0 }
          setTimeout(() => {
            const renderCard = handRenderCards.value.find(
              (c) => c.card.instanceID === card.instanceID
            )
            if (!renderCard) {
              console.error('Could not find render card')
              return
            }
            renderCard.centerX = startX + i * effectiveWidth
            renderCard.centerY = SVG_HEIGHT - CARD_HEIGHT / 2
          }, 10)
        } else {
          currentCards.push({
            card,
            centerX: startX + i * effectiveWidth,
            centerY: SVG_HEIGHT - CARD_HEIGHT / 2,
            dragged: false
          })
        }
      } else {
        currentCards.push({
          card,
          centerX: 0,
          centerY: SVG_HEIGHT - CARD_HEIGHT / 2,
          dragged: false
        })
        setTimeout(() => {
          // Find the corresponding instance id in the handRenderCards
          const renderCard = handRenderCards.value.find(
            (c) => c.card.instanceID === card.instanceID
          )
          if (!renderCard) {
            console.error('Could not find render card')
            return
          }
          renderCard.centerX = startX + i * effectiveWidth
          renderCard.centerY = SVG_HEIGHT - CARD_HEIGHT / 2
        }, 10)
        existingCards.value.add(card.instanceID)
      }
    })
    handRenderCards.value = currentCards
  },
  { immediate: true }
)

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

// questionCardSlots watcher
watch(
  () => gameState.currentBattle?.enemy.currentQuestionIndex,
  () => {
    if (!gameState.currentBattle) {
      return
    }
    const enemy = gameState.currentBattle.enemy
    const currentQuestionIndex = gameState.currentBattle.enemy.currentQuestionIndex
    const cardSlots: RenderCardSlot[] = []
    const availableWidth = SVG_WIDTH - HAND_AREA_RIGHT_PADDING
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
  },
  { immediate: true }
)

// renderOperations watcher
watch(
  () => gameState.currentBattle?.enemy.currentOperators,
  () => {
    if (!gameState.currentBattle) {
      return
    }
    const currentOperators = gameState.currentBattle.enemy.currentOperators
    const renderOps: RenderOperations[] = []
    const availableWidth = SVG_WIDTH - HAND_AREA_RIGHT_PADDING
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
  },
  { immediate: true }
)

function onMouseDown(e: PointerEvent) {
  // if the target is a card, then we want to start dragging it
  if (!(e.target instanceof Element)) {
    return
  }
  const card = e.target.closest<SVGGElement>('.render-card')
  if (card) {
    let instanceID = card.dataset.instanceID
    if (!instanceID) {
      // iOS support
      instanceID = card.getAttribute('data-instanceID') ?? ''
      if (!instanceID) {
        return
      }
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

async function submitQuestion() {
  const cards = questionCardSlots.value.map((slot) => slot.renderCard?.card as PointCard)
  const battleOver = gameState.currentBattle?.resolveQuestion(cards)
  // Add a shaking effect to all cards
  questionCardSlots.value.forEach((cardSlot, i) => {
    existingCards.value.delete(cardSlot.renderCard?.card.instanceID ?? -1)
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
  if (battleOver) {
    const goldGained = await gameState.currentBattle?.endBattle()
    gameState.gold += goldGained ?? 0
    gameState.currentBattle = null
  }
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
    let slotId = cardSlot?.dataset.id
    if (!slotId) {
      // iOS support
      slotId = cardSlot?.getAttribute('data-id') ?? ''
    }
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
    draggedCardInstancePosition.value = {
      instanceID: dragCard.value.card.instanceID,
      x: dragCard.value.centerX,
      y: dragCard.value.centerY
    }
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
    <AnswerSlotComponent :card-slots="questionCardSlots" :render-operations="renderOperations" />
    <text :x="(SVG_WIDTH - HAND_AREA_RIGHT_PADDING) / 2" :y="100" class="current-value">
      {{ gameState.currentBattle?.currentValue }}
    </text>
    <RenderCardComponent
      v-for="renderCard in handRenderCards"
      :key="renderCard.card.instanceID"
      :renderCard="renderCard"
    />
    <RenderCardComponent v-if="dragCard" :renderCard="dragCard" />

    <!-- Submit Button -->
    <circle
      v-if="submitButtonVisible"
      class="submit-button"
      :cx="SVG_WIDTH - SUBMIT_BUTTON_PADDING"
      :cy="SVG_HEIGHT - SUBMIT_BUTTON_PADDING"
      :r="SUBMIT_BUTTON_RADIUS"
      :width="120"
      :height="60"
    />
    <text
      v-if="submitButtonVisible"
      :x="SVG_WIDTH - SUBMIT_BUTTON_PADDING"
      :y="SVG_HEIGHT - SUBMIT_BUTTON_PADDING"
      class="submit-button-text"
      text-anchor="middle"
      dominant-baseline="middle"
    >
      Submit
    </text>

    <!-- Enemy -->
    <EnemyComponent v-if="gameState.currentBattle" :enemy="gameState.currentBattle.enemy" />
  </svg>
</template>

<style lang="scss" scoped>
.current-value {
  font-size: 50px;
  text-anchor: middle;
}

.render-card {
  transition: transform 1s;
}

.dragging .render-card {
  pointer-events: none;
  transition: none;
}

.submit-button {
  fill: #66ccff;
  stroke: #006395;
  stroke-width: 4px;
  cursor: pointer;
}

.submit-button-text {
  font-size: 40px;
  pointer-events: none;
}
</style>
