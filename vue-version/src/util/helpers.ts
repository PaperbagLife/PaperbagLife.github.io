export function getPowerLevel(power: number) {
  return power < 10 ? 0 : power < 30 ? 1 : 2
}

export function rotate(x: number, y: number, rotation: number) {
  return {
    x: Math.cos(rotation) * x - Math.sin(rotation) * y,
    y: Math.sin(rotation) * x + Math.cos(rotation) * y
  }
}
