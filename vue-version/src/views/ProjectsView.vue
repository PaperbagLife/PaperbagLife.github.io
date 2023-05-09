<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import coupletroubleUrl from '../assets/img/couple_trouble.png'
import cvshooterUrl from '../assets/img/cv_shooter.png'
import mobaUrl from '../assets/img/moba.png'
import shopsimUrl from '../assets/img/Shopsim.png'
const { type } = useBreakpoints()
</script>

<template>
  <main>
    <div class="col">
      <h1 class="ml-2">Projects</h1>
      <div class="row mx-0">
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>League of Cylinders - C#, Unity</b><br />
            <i>Sept 2021 - Oct 2021</i><br />
            <img :src="mobaUrl" width="400" height="250" /><br />
            When the semester started I thought I would like to try recreating League of Legends on
            Unity. Inspired by my previous project that used unity navigation, I thought I could use
            this along with my pervious experience to make something similar to League.
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>ShopSim - C#, Unity</b><br />
            <i>Jan 2021</i><br />
            <img :src="shopsimUrl" width="440" height="250" /><br />
            Over the winter I created a fully animated 3D animation/simulation of shoppers pathing
            in a shop. I used Unity navigation to make pathing calculated at real time. I used
            finalIK to make realistic animations for the shoppers' 3D model. The simulation records
            paths of each shopper when they choose a destination to walk towards.
            <a href="https://www.youtube.com/watch?v=bK8pCRX2u8I">Here</a> is a link to a YouTube
            video about this project.
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>Couple Trouble - Python, Pygames, OpenCV</b><br />
            <i>Feb 2020</i><br />
            <img :src="coupletroubleUrl" width="400" height="250" /><br />
            I lead a team of 4 to participate in Tartan Hacks 2020.<br />
            We won the "Best Valentines Hack" award.<br />
            I was the main programmer in charge of coding the main game.<br />
            I used OpenCV to implement a control system that detects two different colors.<br />
            The players has to hold hands wearing rings to control the car and avoid obstacles.<br />
            If the players do not coordinate well and separate their hands, it's game over.<br />
            <a href="https://www.youtube.com/watch?v=w7r6SNbJifU">Here</a> is a link to a YouTube
            video about this game.<br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>CV Shooter- Python, Pygames, OpenCV</b><br />
            <i>Feb 2020</i><br />
            <img :src="cvshooterUrl" width="400" height="230" /><br />
            This was my 15-112 Project. I scored 97% on this project.<br />
            It is a top-down space shooter game.<br />
            I used OpenCV to implement a control system that detects a red color.<br />
            The game uses a dynamic difficulty system that adjusts itself to the player's
            performance.<br />
            The boss has various different attack patterns and a cool laser attack.<br />
            <a href="https://www.youtube.com/watch?v=WvnU6LHCbh4">Here</a> is a link to a YouTube
            video about this game.<br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p>
            <b>Enter the Arena - C#, Unity</b><br />
            <i>Sept 2018 - Dec 2018</i><br />
            In my first year, I worked in a team of 9 people in Game Creation Society.<br />
            This is a 3D VR hack and slash game using HTC live.<br />
            I worked on the enemy attack logic and did some testing. <br />
            <a href="https://www.gamecreation.org/games/enter_the_arena">Here</a> is a link to the
            GCS website<br />
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
