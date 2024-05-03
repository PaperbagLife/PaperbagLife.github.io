<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
const { type } = useBreakpoints()

type GamePage = {
  name: string
  route: string
}

const games: GamePage[] = [
  { name: 'Shooter', route: '/games/shooter' },
  { name: 'Danmaku', route: '/games/danmaku' },
  { name: 'Star rail', route: '/games/starrail' }
]
</script>

<template>
  <main>
    <div class="col mt-2">
      <h1 class="ml-2">Interests</h1>
      <div class="row mx-0">
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>coming soon</b><br />
            <i>2006 - present</i><br />
            Music has been a major part of my life. Unlike many others that would leave their
            instruments to gather dust after getting their shiny certificates, I still play violin
            on a weekly basis. I make covers of the songs I love, mostly J-pop and Vocaloid songs<br />
            <a href="https://www.youtube.com/c/PaperbagLife">Here</a> is a link to my YouTube
            Channel.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
