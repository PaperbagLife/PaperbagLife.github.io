<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
const { type } = useBreakpoints()
</script>

<template>
  <main>
    <div class="col mt-2">
      <h1 class="ml-2">Interests</h1>
      <div class="row mx-0">
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>Violin</b><br />
            <i>2006 - present</i><br />
            Music has been a major part of my life. Unlike many others that would leave their
            instruments to gather dust after getting their shiny certificates, I still play violin
            on a weekly basis. I make covers of the songs I love, mostly J-pop and Vocaloid songs<br />
            <a href="https://www.youtube.com/c/PaperbagLife">Here</a> is a link to my YouTube
            Channel.
          </p>
        </div>

        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>Gaming/Game Design</b><br />
            <i>2010 - present</i><br />
            I have played countless games since I got a PSP in 2012. Evetually, I started developing
            interest towards making a game myself. Tools I have used so far: RPG Maker series,
            Powerpoint, Scratch, GameMaker, Pygame, Unity, Vue (see <b>Games</b> section above)
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
