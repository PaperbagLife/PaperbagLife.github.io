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
}

// InstanceID is a unique id for each card in deck.
export type UtilityCard = {
  type: CardType.UTILITY
  name: string
  instanceID?: number
  art_id: number
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
}

export type RenderCardSlot = {
  id: number
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
  ADD,
  SUBTRACT,
  MULTIPLY
}

export type RenderOperations = {
  operation: Operations
  id: number
  centerX: number
  centerY: number
}

// Consts
export const CARD_WIDTH = 150
export const CARD_HEIGHT = 200

export const HAND_AREA_RIGHT_PADDING = 200
export const SVG_WIDTH = 1600
export const SVG_HEIGHT = 900

export const QUESTION_TOP_PADDING = 300
