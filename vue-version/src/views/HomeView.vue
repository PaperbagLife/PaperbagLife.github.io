<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useBreakpoints } from '../util/dimensions'
import dpUrl from '../assets/img/dp.jpg'
import resumeUrl from '../assets/docs/Lu-Yunkun.pdf'
import youtubeImg from '../assets/img/youtube_channel.png'
import { COLUMN_FILL_RATIO, projectEntries } from '@/util/consts'
import SlideShowComponenet from './components/SlideShowComponenet.vue'
const { width, type } = useBreakpoints()

const educationTitle = ref<HTMLElement | null>(null)
const showEducationTitle = ref(false)

const projectTitle = ref<HTMLElement | null>(null)
const showProjectTitle = ref(false)

const interestTitle = ref<HTMLElement | null>(null)
const showInterestTitle = ref(false)

const aboutTitle = ref<HTMLElement | null>(null)
const showAboutTitle = ref(false)

const sectionTitles = [aboutTitle, educationTitle, projectTitle, interestTitle]
const showSectionTitles = [showAboutTitle, showEducationTitle, showProjectTitle, showInterestTitle]

const projectsWithImage = projectEntries.filter((project) => project.img)

onMounted(() => {
  showAboutTitle.value = true
  showEducationTitle.value = true

  window.addEventListener('scroll', () => {
    // check for visibility of title div
    sectionTitles.forEach((sectionTitle, i) => {
      if (!sectionTitle.value) return
      const box = sectionTitle.value.getBoundingClientRect()
      if (box && box.top < window.innerHeight && box.bottom > 0) {
        showSectionTitles[i].value = true
      } else {
        showSectionTitles[i].value = false
      }
    })
  })
})

function openYoutube() {
  window.open('https://www.youtube.com/c/paperbaglife')
}
</script>

<template>
  <main>
    <div class="col">
      <div class="row py-5 d-flex align-items-center justify-content-center">
        <div class="col-auto">
          <img class="profile-pic" :src="dpUrl" />
        </div>
        <div class="col-auto mw-90">
          <div :class="type === 'xs' ? 'col text-center' : ''">
            <h1>Yunkun (Ricky) Lu</h1>
            <section class="animation">
              <div class="first"><div>Software Engineer</div></div>
              <div class="second"><div>Passionate Gamer</div></div>
              <div class="third"><div>Violin Youtuber</div></div>
            </section>
            <a class="btn button px-4 mr-3" :href="resumeUrl"> Resume </a>
            <a href="https://www.linkedin.com/in/yunkun-lu/">
              <i class="mx-1 fa-icon fa fa-linkedin fa-lg" />
            </a>
            <a href="https://github.com/PaperbagLife">
              <i class="mx-1 fa-icon fa fa-github fa-lg" />
            </a>
            <a href="https://www.youtube.com/c/PaperbagLife"
              ><i class="mx-1 fa-icon fa fa-youtube fa-lg" />
            </a>
          </div>
        </div>
      </div>
      <div class="row mx-2 pb-4 d-flex">
        <div class="section-title col-auto" ref="aboutTitle" :class="showAboutTitle ? 'show' : ''">
          Who am I?
        </div>
        <div class="col-12">
          I'm a software engineer working for Clockwork Systems. Outside of work, I love turning
          creative ideas into playable experiences, from Unity-powered adventures to quirky Pygame
          projects. <br />
          When I'm not coding, you can find me playing the violin or uploading J-pop and gaming
          videos on my YouTube channel.
        </div>
      </div>
      <div class="row mx-2 py-4 d-flex">
        <div
          ref="educationTitle"
          class="section-title col-auto"
          :class="showEducationTitle ? 'show' : ''"
        >
          Boring Stuff
        </div>
        <div class="col-12">
          I have a BS in Computer Science from Carnegie Mellon University. <br />
          Notable courses I have taken include 15440 Distributed Systems and 15451 Algorithms.
          <br />
          <a href="#/coursework">See full list</a>
        </div>
      </div>
      <div class="row mx-2 py-4 d-flex">
        <div
          ref="projectTitle"
          class="section-title col-auto"
          :class="showProjectTitle ? 'show' : ''"
        >
          Fun Stuff
        </div>
        <div class="col-12">
          <SlideShowComponenet
            route="projects"
            :projects="projectsWithImage"
            :project-width="type === 'xs' ? width * 0.6 : width * 0.5"
          />
        </div>
      </div>
      <div class="row mx-2 py-4 d-flex">
        <div
          ref="interestTitle"
          class="section-title col-auto"
          :class="showInterestTitle ? 'show' : ''"
        >
          More than Code
        </div>
        <div class="col-12">
          <a href="#/interests">Read more </a>or check me out on YouTube! <br />
          <img @click="openYoutube" class="youtube-img" :src="youtubeImg" :width="width * 0.6" />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.youtube-img {
  border: 2px solid #66ccff;
  border-radius: 1rem;
  cursor: pointer;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  opacity: 0;
  transition: opacity 2s;
  color: #ff9966;
}

.section-title.show {
  opacity: 1;
  animation: title-animation 0.8s;
}

@keyframes title-animation {
  0% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0%);
  }
}

.mw-90 {
  max-width: 90%;
}
.bio-xs {
  margin-left: auto;
  margin-right: auto;
}
.button {
  border: 2px solid #66ccff;
  color: #66ccff;
}
.fa-icon {
  color: #66ccff;
}
.profile-pic {
  border-radius: 1rem;
  width: 200px;
  height: 200px;
}
.animation {
  height: 3rem;
  overflow: hidden;
  color: white;
  font-size: 1rem;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height: 2rem;
  margin-bottom: 2rem;
  display: inline-block;
  border-radius: 1rem;
  text-align: center;
}

.animation div:first-child {
  animation: text-animation 10s infinite;
}

.first div {
  background-color: #66ccff;
}
.second div {
  background-color: #3bcd1e;
}
.third div {
  background-color: #d60924;
}

@keyframes text-animation {
  0% {
    margin-top: 0;
  }
  12% {
    margin-top: 0;
  }
  20% {
    margin-top: -3.5rem;
  }
  32% {
    margin-top: -3.5rem;
  }
  40% {
    margin-top: -7rem;
  }
  62% {
    margin-top: -7rem;
  }
  70% {
    margin-top: -3.5rem;
  }
  82% {
    margin-top: -3.5rem;
  }
  92% {
    margin-top: 0;
  }
  100% {
    margin-top: 0;
  }
}
</style>
