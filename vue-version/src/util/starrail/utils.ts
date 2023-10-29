import { Elements } from './consts'
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export function getRandomInt(max: number) {
  max = Math.floor(max)
  return Math.floor(Math.random() * max)
}

export function range(size: number) {
  const result = []
  for (let i = 0; i <= size; i += 1) {
    result.push(i)
  }
  return result
}

export function getElementColor(element?: Elements) {
  switch (element) {
    case Elements.FIRE:
      return 'rgb(227,43,41)'
    case Elements.ICE:
      return 'rgb(42,146,211)'
    case Elements.LIGHTNING:
      return 'rgb(186,81,219)'
    case Elements.WIND:
      return 'rgb(97,200,150)'
    case Elements.QUANTUM:
      return 'rgb(85,73,188)'
    case Elements.IMAGINARY:
      return 'rgb(245,223,50)'
    case Elements.PHYSICAL:
      return 'rgb(197,197,197)'
    default:
      return 'white'
  }
}
