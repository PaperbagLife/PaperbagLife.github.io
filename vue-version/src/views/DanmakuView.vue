<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
const { type } = useBreakpoints()
type Canvas = {
  width: number
  height: number
}
const canvas: Canvas = { width: 300, height: 400 }

type Bullet = {
  x: number
  y: number
  xVel: (time: number) => number
  yVel: (time: number) => number
  color: string
  createdTimestamp: number
}
function collides(x: number, y: number, width: number, height: number, bullet: Bullet) {
  if (y + height > bullet.y - 1 && y < bullet.y + 1) {
    // check for x:
    if (x + width > bullet.x - 1 && x < bullet.x + 1) {
      return true
    }
  }
  return false
}
</script>

<template>
  <main :class="type">
    <div class="col d-flex justify-content-center">
      <div class="game-viewport">
        <!--<div class="hp-container">
          <span v-for="i in [...Array(5).keys()]" :key="i" class="material-icons-outlined">{{
            i < player.hp ? 'favorite' : 'favorite_border'
          }}</span>
        </div>-->

        <svg :height="canvas.height" :width="canvas.width"></svg>
      </div>
    </div>
  </main>
</template>

<style scoped>
.game-viewport {
  background-color: black;
  border: 2px solid #66ccff;
  border-radius: 4px;
  width: 302px;
  height: 402px;
}
</style>
