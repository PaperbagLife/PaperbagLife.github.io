<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useBreakpoints } from '../util/dimensions'
import dpUrl from '../assets/img/dp.jpg'
import resumeUrl from '../assets/docs/Lu-Yunkun.pdf'
import youtubeImg from '../assets/img/youtube_channel.png'
import { projectEntries } from '@/util/consts'
import SlideShowComponenet from './components/SlideShowComponenet.vue'
const { width, type } = useBreakpoints()

const projectsWithImage = projectEntries.filter((project) => project.img)

onMounted(() => {})

function openYoutube() {
  window.open('https://www.youtube.com/c/paperbaglife')
}
</script>

<template>
  <main>
    <div class="col top">
      <div class="profile-section row mx-5 py-5 d-flex align-items-center justify-content-center">
        <div class="col-auto d-flex justify-content-center">
          <img class="profile-pic" :src="dpUrl" />
        </div>
        <div class="col-auto mw-90">
          <div class="col info-container" :class="type === 'xs' ? 'col text-center' : ''">
            <h1 class="row">Yunkun (Ricky) Lu</h1>
            <div class="row">
              <div :class="type === 'xs' ? 'col-12' : 'col-6'">
                <a class="resume-button btn btn-dark" :href="resumeUrl"> Resume </a>
              </div>
              <div :class="type === 'xs' ? 'col-12' : 'col-6'">
                <a class="icon-link" href="https://www.linkedin.com/in/yunkun-lu/">
                  <i class="mx-1 fa-icon fa fa-linkedin fa-lg" />
                </a>
                <a class="icon-link" href="https://github.com/PaperbagLife">
                  <i class="mx-1 fa-icon fa fa-github fa-lg" />
                </a>
                <a class="icon-link" href="https://www.youtube.com/c/PaperbagLife"
                  ><i class="mx-1 fa-icon fa fa-youtube fa-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-0">
        <div :class="type === 'xs' ? 'col-12' : 'col-4'">
          <div class="section-title swe-title">Software Engineer {}</div>
          <div>
            After graduating from Carnegie Mellon University, I started working at Clockwork
            Systems, Inc. My work spans frontend development with Vue/TypeScript, backend
            engineering with Golang and Python, and creating tools and managing systems with Python
            and Shell scripting. find value in my work when my fellow engineers become more
            productive due to the automation and helper scripts I create. This drives my passion for
            building efficient, scalable software solutions that streamline workflows and solve
            complex challenges.
          </div>
        </div>
        <div :class="type === 'xs' ? 'col-12' : 'col-4'">
          <div class="section-title violin-title">Violinist ♪</div>
          <div>
            Unlike many who set their instruments aside after passing grade exams, I have continued
            playing the violin through both joyful and challenging times. Music has been a constant
            in my life, a source of solace and expression that has accompanied me through every
            chapter. I also share my passion by uploading violin covers of songs I enjoy on my
            YouTube channel, combining my love for music and technology to reach a broader audience.
          </div>
        </div>
        <div :class="type === 'xs' ? 'col-12' : 'col-4'">
          <div class="section-title gamer-title">Gamer ↓↘→</div>
          <div>
            As a player, I enjoy a diverse range of games, including visual novels with rich,
            tought-provoking stories and action RPGs that challenge me to practice and hone my
            skills. Gaming has always been more than just a hobby for me. Sometimes, I channel my
            creativity into crafting playable experiences, from Unity-powered adventures to quirky
            Pygame projects. I am constantly exploring new frameworks and tools to make games,
            driven by my inner gamer.
          </div>
        </div>
      </div>
      <div class="row mx-0 py-4 d-flex">
        <div class="section-title col-auto">Fun Stuff</div>
        <div class="col-12">
          <SlideShowComponenet
            route="projects"
            :projects="projectsWithImage"
            :project-width="type === 'xs' ? width * 0.6 : width * 0.5"
          />
        </div>
      </div>
      <div class="row mx-0 py-4 d-flex">
        <div class="section-title col-auto">More than Code</div>
        <div class="col-12">
          <a href="#/interests">Read more </a>or check me out on YouTube! <br />
          <img
            @click="openYoutube"
            class="youtube-img"
            :src="youtubeImg"
            :width="type === 'xs' ? width * 0.5 : width * 0.6"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.youtube-img {
  border: 2px solid #66ccff;
  border-radius: 1rem;
  cursor: pointer;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
}

.resume-button {
  padding: 0.25rem 1rem;
  border: 2px solid #66ccff;
  background: aliceblue;
  color: #66ccff;
  &:hover {
    background: aliceblue;
    color: #66ccff;
    border-color: #66ccff;
    filter: brightness(0.8);
  }
}

.icon-link {
  font-size: 1.25rem;
  text-decoration: none;
  margin-top: 0.25rem;
}

.swe-title {
  color: #31c300;
}

.violin-title {
  color: #a4830a;
}

.gamer-title {
  color: #9166ff;
}

.info-container {
  justify-content: center;
  align-items: center;
}

.mw-90 {
  max-width: 90%;
}
.bio-xs {
  margin-left: auto;
  margin-right: auto;
}
.fa-icon {
  color: #66ccff;
}
.profile-pic {
  user-select: none;
  border-radius: 1rem;
  width: 200px;
  height: 200px;
}
</style>
