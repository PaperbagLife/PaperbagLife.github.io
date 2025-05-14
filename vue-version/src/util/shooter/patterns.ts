import { Bullet, Player } from './classes'
import { rotate } from './helpers'

import {
  BASIC_ENEMY_BULLET_SPEED,
  BLUE,
  GREEN,
  type MovePattern,
  NUM_CENTER_SPRAY,
  NUM_CENTER_SPREAD,
  NUM_ROTATED,
  RED,
} from './const'

// const for move patterns
export const triangleMove = [
  { duration: 300, xVel: -1, yVel: 2 },
  { duration: 80, xVel: 0, yVel: 0 },
  { duration: 268, xVel: 1, yVel: 0 },
  { duration: 80, xVel: 0, yVel: 0 },
  { duration: 300, xVel: -1, yVel: -2 },
  { duration: 80, xVel: 0, yVel: 0 },
]

export const downRight: MovePattern[] = [
  { xVel: 0, yVel: 1, duration: 200 },
  { xVel: 1, yVel: 0.5, duration: -1 },
]
export const downLeft: MovePattern[] = [
  { xVel: 0, yVel: 1, duration: 200 },
  { xVel: -1, yVel: 0.5, duration: -1 },
]

export const straightDown: MovePattern[] = [{ xVel: 0, yVel: 1, duration: -1 }]

// attack patterns
export function basicSingleDirectedAttack(
  cx: number,
  cy: number,
  enemyBullets: Bullet[],
  timeLeft: number,
  player: Player
) {
  const deltaX = player.cx - cx
  const deltaY = player.cy - cy
  const hypo = Math.hypot(deltaX, deltaY)
  const xVel = (deltaX / hypo) * BASIC_ENEMY_BULLET_SPEED
  const yVel = (deltaY / hypo) * BASIC_ENEMY_BULLET_SPEED
  const patternTowards: MovePattern = { duration: -1, xVel, yVel }
  const bullet = new Bullet(cx, cy, 4, 4, [patternTowards], GREEN, Date.now(), 0)
  enemyBullets.push(bullet)
}
export function bossDirectedAttack(
  cx: number,
  cy: number,
  enemyBullets: Bullet[],
  timeLeft: number,
  player: Player
) {
  if (timeLeft % 300 === 0) {
    // bonus!
    basicCenterSpreadAttack(cx, cy, enemyBullets)
  }
  basicDirectedAttack(cx, cy, enemyBullets, timeLeft, player)
}
export function basicDirectedAttack(
  cx: number,
  cy: number,
  enemyBullets: Bullet[],
  timeLeft: number,
  player: Player
) {
  if (timeLeft % 200 > 100) return
  const bulletSpeed = 1.3
  const deltaX = player.cx - cx
  const deltaY = player.cy - cy
  const hypo = Math.hypot(deltaX, deltaY)
  const xVel = (deltaX / hypo) * BASIC_ENEMY_BULLET_SPEED * bulletSpeed
  const yVel = (deltaY / hypo) * BASIC_ENEMY_BULLET_SPEED * bulletSpeed
  const patternTowards: MovePattern = { duration: -1, xVel: xVel, yVel }
  const bullet = new Bullet(cx, cy, 5, 5, [patternTowards], GREEN, Date.now(), 0)
  const patternTowards2: MovePattern = { duration: -1, xVel: xVel + 0.3, yVel }
  const bullet2 = new Bullet(cx + 5, cy, 5, 5, [patternTowards2], GREEN, Date.now(), 1)
  const patternTowards3: MovePattern = { duration: -1, xVel: xVel - 0.3, yVel }
  const bullet3 = new Bullet(cx - 5, cy, 5, 5, [patternTowards3], GREEN, Date.now(), 2)
  enemyBullets.push(bullet)
  enemyBullets.push(bullet2)
  enemyBullets.push(bullet3)
}

export function basicCenterSpreadAttack(cx: number, cy: number, enemyBullets: Bullet[]) {
  const bulletSpeed = 0.8
  for (let i = 0; i < NUM_CENTER_SPREAD; i++) {
    const xVel =
      -Math.cos(((Math.PI * 2) / NUM_CENTER_SPREAD) * i) +
      Math.sin(((Math.PI * 2) / NUM_CENTER_SPREAD) * i)
    const yVel =
      Math.sin(((Math.PI * 2) / NUM_CENTER_SPREAD) * i) +
      Math.cos(((Math.PI * 2) / NUM_CENTER_SPREAD) * i)
    const patternDirectional: MovePattern = {
      duration: -1,
      xVel: xVel * bulletSpeed,
      yVel: yVel * bulletSpeed,
    }
    const bullet = new Bullet(cx, cy, 3, 3, [patternDirectional], RED, Date.now(), i)
    enemyBullets.push(bullet)
  }
}
export function basicCenterSprayAttack(
  cx: number,
  cy: number,
  enemyBullets: Bullet[],
  timeLeft: number
) {
  const bulletSpeed = 1
  const modifier = ((Math.sin(timeLeft / 80) >= 0 ? 1 : -1) * timeLeft) / 100
  for (let i = 0; i < NUM_CENTER_SPRAY; i++) {
    const dir = i + modifier
    const xVel =
      -Math.cos(((Math.PI * 2) / NUM_CENTER_SPRAY) * dir) +
      Math.sin(((Math.PI * 2) / NUM_CENTER_SPRAY) * dir)
    const yVel =
      Math.sin(((Math.PI * 2) / NUM_CENTER_SPRAY) * dir) +
      Math.cos(((Math.PI * 2) / NUM_CENTER_SPRAY) * dir)
    const patternDirectional: MovePattern = {
      duration: -1,
      xVel: xVel * bulletSpeed,
      yVel: yVel * bulletSpeed,
    }
    const bullet = new Bullet(
      cx,
      cy,
      3,
      3,
      [patternDirectional],
      Math.sin(timeLeft / 80) >= 0 ? RED : BLUE,
      Date.now(),
      i
    )
    enemyBullets.push(bullet)
  }
}
export function basicRotatedAttack(
  cx: number,
  cy: number,
  enemyBullets: Bullet[],
  timeLeft: number
) {
  let color = RED
  if (Math.floor(timeLeft / 100) % 2 === 1) {
    color = BLUE
  }
  const bulletSpeed = 0.6
  for (let i = 0; i < NUM_ROTATED; i++) {
    const xVel =
      -Math.cos(((Math.PI * 2) / NUM_ROTATED) * i) + Math.sin(((Math.PI * 2) / NUM_ROTATED) * i)
    const yVel =
      Math.sin(((Math.PI * 2) / NUM_ROTATED) * i) + Math.cos(((Math.PI * 2) / NUM_ROTATED) * i)
    const patternDirectional: MovePattern = {
      duration: 80,
      xVel: xVel * bulletSpeed,
      yVel: yVel * bulletSpeed,
    }
    const patternStop: MovePattern = {
      duration: 100,
      xVel: xVel * 0.05,
      yVel: yVel * 0.05,
    }
    const alternator = color === RED ? 1 : -1
    const rotated = rotate(xVel, yVel, (-Math.PI * alternator) / 2)
    const patternRotated: MovePattern = {
      duration: -1,
      xVel: rotated.x * (bulletSpeed * 1.4),
      yVel: rotated.y * (bulletSpeed * 1.4),
      rotation: (-Math.PI * alternator) / 4,
      rotationDuration: 400,
    }

    const movePatterns = [patternDirectional, patternStop, patternRotated]
    const bullet = new Bullet(cx, cy, 3, 3, movePatterns, color, Date.now(), i)
    enemyBullets.push(bullet)
  }
}

export function emptyAttack() {
  return
}
