<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import coupletroubleUrl from '../assets/img/couple_trouble.png'
import cvshooterUrl from '../assets/img/cv_shooter.png'
import mobaUrl from '../assets/img/moba.png'
import shopsimUrl from '../assets/img/Shopsim.png'
import starrailUrl from '../assets/img/starrail.png'
const { width, type } = useBreakpoints()
const COLUMN_FILL_RATIO = 0.84
</script>

<template>
  <main>
    <div class="col mt-2">
      <h1 class="ml-2">Projects</h1>
      <div class="row mx-0">
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>League of Cylinders - C#, Unity</b><br />
            <i>Sept 2021 - Oct 2021</i><br />
            <img
              :src="mobaUrl"
              :width="(type === 'xs' ? width : width / 2) * COLUMN_FILL_RATIO"
            /><br />
            Inspired by my previous project that used unity navigation, I wanted to try recreating
            the basic structure of the popular game League of Legends. I created characters that
            attacks, casts projectiles, and navigates around the terrain.
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>ShopSim - C#, Unity</b><br />
            <i>Jan 2021</i><br />
            <img :src="shopsimUrl" :width="(width / 2) * COLUMN_FILL_RATIO" /><br />
            I created a fully animated 3D animation/simulation of shoppers walking around a shop.
            <br />
            <a href="https://www.youtube.com/watch?v=bK8pCRX2u8I">Here</a> is a link to a YouTube
            video about this project. <br />
            I used Unity's navigation to make pathing calculated at real time. I used finalIK to
            make realistic animations for the shoppers' 3D model. The simulation records paths of
            each shopper when they choose a destination to walk towards.
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>Couple Trouble - Python, Pygames, OpenCV</b><br />
            <i>Feb 2020</i><br />
            <img :src="coupletroubleUrl" :width="(width / 2) * COLUMN_FILL_RATIO" /><br />
            I lead a team of 4 in Tartan Hacks 2020 and we won the "Best Valentines Hack" award.<br />
            <a href="https://www.youtube.com/watch?v=w7r6SNbJifU">Here</a> is a link to a YouTube
            video about this game.<br />
            I was the main programmer for the game system. I used OpenCV to implement a control
            system that detects two different colors. The players has to hold hands wearing rings to
            control the car and avoid obstacles. This was an interesting take on the valentine
            theme, so we stood out and won.
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>CV Shooter- Python, Pygames, OpenCV</b><br />
            <i>Feb 2020</i><br />
            <img :src="cvshooterUrl" :width="(width / 2) * COLUMN_FILL_RATIO" /><br />
            This was my 15-112 Project.<br />
            <a href="https://www.youtube.com/watch?v=WvnU6LHCbh4">Here</a> is a link to a YouTube
            video about this game.<br />
            It is a top-down space shooter game. I used OpenCV to implement a control system that
            detects a red color. The game uses a dynamic difficulty system that adjusts itself to
            the player's performance. The boss has various different attack patterns and a cool
            laser attack.
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>Cosmo Rail - Vue, Typescript</b><br />
            <i>Sept 2023 - Ongoing</i><br />
            <img :src="starrailUrl" :width="(width / 2) * COLUMN_FILL_RATIO" /><br />
            After I started working on UI for my job, I thought I could use my newfound knowledge to
            make games using Vue and Typescript. I have made several minigames on my personal
            website, you can see them under the
            <b>Games</b> section on this website. The screenshot above is a turn based game with
            animations using css.
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>Enter the Arena - C#, Unity</b><br />
            <i>Sept 2018 - Dec 2018</i><br />
            In my first year, I joined the Game Creation Society at CMU and worked with a team of 9
            people.<br />
            We created a 3D VR hack and slash game made for the HTC Vive headset. I worked on the
            enemy attack logic and did some testing for the game. <br />
            <a href="https://www.gamecreation.org/games/enter_the_arena">Here</a> is a link to the
            GCS website
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
