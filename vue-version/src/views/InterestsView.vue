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
            I have learned the violin for 8 years, and I still play it every week.<br />
            With the intention to share my love for music with others, I learned how to edit
            videos.<br />
            I have a YouTube Channel for my Violin Covers.<br />
            <a href="https://www.youtube.com/c/PaperbagLife">Here</a> is a link to my YouTube
            Channel.
          </p>
        </div>

        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>Gaming/Game Design</b><br />
            <i>2010 - present</i><br />
            I have constantly tried to play games since I got a PSP in 2012.<br />
            Evetually, I started developing interest towards making a game myself.<br />
            Tools I have used so far: RPG Maker series, Powerpoint, Scratch, GameMaker, Pygame,
            Unity
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
