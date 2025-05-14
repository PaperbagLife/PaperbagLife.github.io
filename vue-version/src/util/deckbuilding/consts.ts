import LIGHT_CARD_ART from '@/assets/game/deckbuilding/light.png'
import DARK_CARD_ART from '@/assets/game/deckbuilding/dark.png'

export enum CardColor {
  DARK,
  LIGHT
}

export enum CardType {
  POINT,
  UTILITY
}

export type PointCard = {
  type: CardType.POINT
  instanceID?: number
  color: CardColor
  value: number
  cardArt: string
}

// InstanceID is a unique id for each card in deck.
export type UtilityCard = {
  type: CardType.UTILITY
  name: string
  instanceID?: number
  cardArt: string
  description: string
  inputCount: number
  operation: (inputs: PointCard[]) => PointCard[]
}

export type Card = PointCard | UtilityCard

type RequireInstanceID<T> = Omit<T, 'instanceID'> & { instanceID: number }

export type CardInstance = RequireInstanceID<PointCard> | RequireInstanceID<UtilityCard>

export const CARD_PRICE = 2

export type RenderCard = {
  card: Card
  centerX: number
  centerY: number
  dragged: boolean
  shake?: boolean
}

export type RenderCardSlot = {
  id: string
  centerX: number
  centerY: number
  renderCard: RenderCard | null
}

export enum Scene {
  TITLE,
  MAP,
  BATTLE,
  SHOP,
  GAME_OVER
}

export enum Operations {
  ADD = 'ADD',
  SUBTRACT = 'SUBTRACT',
  MULTIPLY = 'MULTIPLY'
}

export type RenderOperations = {
  operation: Operations
  id: number
  centerX: number
  centerY: number
}

// Consts
export const CARD_WIDTH = 150
export const CARD_HEIGHT = 250

export const SVG_WIDTH = 1600
export const SVG_HEIGHT = 900
export const HAND_AREA_RIGHT_PADDING = 200
export const SUBMIT_BUTTON_PADDING = 440
export const SUBMIT_BUTTON_WIDTH = 150
export const SUBMIT_BUTTON_HEIGHT = 80

export const QUESTION_TOP_PADDING = 460

export const CARD_SCORE_ANIMATION_DURATION = 1500
export const ENEMY_DAMAGE_ANIMATION_DURATION = 1000

export const ENEMY_WIDTH = 200
export const ENEMY_HEIGHT = 400

export const SIMPLE_DECK: Card[] = [
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 1,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 2,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 3,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 4,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 5,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 1,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 2,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 3,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 4,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.LIGHT,
    value: 5,
    cardArt: LIGHT_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 1,
    cardArt: DARK_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 2,
    cardArt: DARK_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 3,
    cardArt: DARK_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 4,
    cardArt: DARK_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 5,
    cardArt: DARK_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 1,
    cardArt: DARK_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 2,
    cardArt: DARK_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 3,
    cardArt: DARK_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 4,
    cardArt: DARK_CARD_ART,
  },
  {
    type: CardType.POINT,
    color: CardColor.DARK,
    value: 5,
    cardArt: DARK_CARD_ART,
  },
]
