import { Enemy } from './classes'
import { type AttackPattern, CANVAS_WIDTH, type MovePattern } from './const'
import {
  basicCenterSprayAttack,
  basicCenterSpreadAttack,
  basicDirectedAttack,
  basicRotatedAttack,
  basicSingleDirectedAttack,
  bossDirectedAttack,
  downLeft,
  downRight,
  emptyAttack,
  straightDown,
  triangleMove,
} from './patterns'

function getBasicEnemy(cx: number, move: MovePattern[], interval: number, attack: AttackPattern[]) {
  const basicLeftEnemey = {
    interval: interval,
    enemies: [
      new Enemy('generic', 5, cx, 0, 20, 25, attack, 0.5, move, Math.random() > 0.5 ? 2 : 1),
    ],
  }
  return basicLeftEnemey
}

export const leftWave = [
  getBasicEnemy(40, downRight, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  getBasicEnemy(40, downRight, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  getBasicEnemy(40, downRight, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  getBasicEnemy(40, downRight, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  getBasicEnemy(40, downRight, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  {
    interval: 500,
    enemies: [],
  },
]

export const rightWave = [
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  getBasicEnemy(CANVAS_WIDTH - 40, downLeft, 80, [
    { duration: -1, interval: 300, attack: basicSingleDirectedAttack },
  ]),
  {
    interval: 500,
    enemies: [],
  },
]

export const randomWave = [
  getBasicEnemy(Math.random() * CANVAS_WIDTH, straightDown, 120, [
    { duration: -1, interval: 300, attack: basicDirectedAttack },
  ]),
  getBasicEnemy(Math.random() * CANVAS_WIDTH, straightDown, 120, [
    { duration: -1, interval: 300, attack: basicDirectedAttack },
  ]),
  getBasicEnemy(Math.random() * CANVAS_WIDTH, straightDown, 120, [
    { duration: -1, interval: 300, attack: basicDirectedAttack },
  ]),
  getBasicEnemy(Math.random() * CANVAS_WIDTH, straightDown, 120, [
    { duration: -1, interval: 300, attack: basicDirectedAttack },
  ]),
  getBasicEnemy(Math.random() * CANVAS_WIDTH, straightDown, 120, [
    { duration: -1, interval: 300, attack: basicDirectedAttack },
  ]),
  {
    interval: 800,
    enemies: [],
  },
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
    { duration: 500, interval: 100, attack: bossDirectedAttack },
    { duration: 100, interval: 300, attack: emptyAttack },
  ],
  0.4,
  triangleMove,
  1,
  true
)

export const bossWave = { enemies: [boss1], interval: 0 }
