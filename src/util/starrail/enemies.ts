import fireShadewalkerImage from '../../assets/game/img/fire_shadewalker.png'
import flameSpawnImage from '../../assets/game/img/flamespawn.png'
import frostSpawnImage from '../../assets/game/img/frostspawn.png'
import { Elements, Enemy } from './consts'

export const frostSpawn = new Enemy(
  'frostspawn',
  Elements.ICE,
  frostSpawnImage,
  50,
  6,
  90,
  [Elements.FIRE, Elements.WIND],
  1
)
export const frostSpawn2 = new Enemy(
  'frostspawn2',
  Elements.ICE,

  frostSpawnImage,
  50,
  8,
  90,
  [Elements.FIRE, Elements.WIND],
  1
)
export const fireShadeWalker = new Enemy(
  'fireshadewalker',
  Elements.FIRE,
  fireShadewalkerImage,
  100,
  15,
  100,
  [Elements.ICE, Elements.WIND, Elements.IMAGINARY],
  2
)
export const frostSpawn4 = new Enemy(
  'frostspawn4',
  Elements.ICE,
  frostSpawnImage,
  50,
  7,
  90,
  [Elements.FIRE, Elements.WIND],
  1
)
export const flameSpawn = new Enemy(
  'flameSpawn',
  Elements.FIRE,
  flameSpawnImage,
  50,
  5,
  90,
  [Elements.ICE, Elements.PHYSICAL],
  1
)
