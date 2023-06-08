import { Enemy } from './classes'
import { CANVAS_WIDTH, type MovePattern } from './const'
import { basicSingleDirectedAttack, downLeft, downRight, triangleMove } from './patterns'

import {
  basicRotatedAttack,
  basicCenterSprayAttack,
  basicCenterSpreadAttack,
  basicDirectedAttack,
  emptyAttack
} from './patterns'
function getBasicEnemy(cx: number, move: MovePattern[]) {
  const basicLeftEnemey = {
    interval: 80,
    enemies: [
      new Enemy(
        'generic',
        5,
        cx,
        0,
        20,
        25,
        [{ duration: -1, interval: 300, attack: basicSingleDirectedAttack }],
        0.5,
        move,
        Math.random() > 0.5 ? 2 : 1
      )
    ]
  }
  return basicLeftEnemey
}

export const leftWave = [
  getBasicEnemy(40, downRight),
  getBasicEnemy(40, downRight),
  getBasicEnemy(40, downRight),
  getBasicEnemy(40, downRight),
  getBasicEnemy(40, downRight),
  {
    interval: 500,
    enemies: []
  }
]

export const rightWave = [
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft),
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft),
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft),
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft),
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft),
  {
    interval: 500,
    enemies: []
  }
]

const boss1 = new Enemy(
  'boss1',
  500,
  CANVAS_WIDTH / 2,
  0,
  20,
  25,

  [
    { duration: 1000, interval: 100, attack: basicRotatedAttack },
    { duration: 100, interval: 300, attack: emptyAttack },
    { duration: 800, interval: 10, attack: basicCenterSprayAttack },
    { duration: 100, interval: 300, attack: emptyAttack },
    { duration: 800, interval: 60, attack: basicCenterSpreadAttack },
    { duration: 100, interval: 300, attack: emptyAttack },
    { duration: 500, interval: 100, attack: basicDirectedAttack },
    { duration: 100, interval: 300, attack: emptyAttack }
  ],
  0.4,
  triangleMove,
  1,
  true
)

export const bossWave = { enemies: [boss1], interval: 0 }
