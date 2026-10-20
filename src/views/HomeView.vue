<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import dpUrl from '../assets/img/dp.jpg'
const { type } = useBreakpoints()
</script>

<template>
  <main class="page">
    <div class="col top">
      <div class="profile-section row g-4 pt-3 pb-5 align-items-center justify-content-center">
        <div class="col-auto d-flex justify-content-center">
          <img class="profile-pic" :src="dpUrl" />
        </div>
        <div class="col-auto mw-90">
          <div class="col info-container" :class="type === 'xs' ? 'col text-center' : ''">
            <h1 class="row">Yunkun (Ricky) Lu</h1>
            <div class="row">
              <div :class="type === 'xs' ? 'col-12' : 'col-6'">
                <router-link to="/resume">
                  <button class="btn resume-button">Resume</button>
                </router-link>
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
      <div class="row gx-5 gy-4">
        <div :class="type === 'xs' ? 'col-12' : 'col-4'">
          <div class="section-title swe-title">Software Engineer {}</div>
          <div>
            After graduating from Carnegie Mellon University, I spent three years as a software
            engineer at Clockwork Systems, Inc., building GPU training clusters, internal monitoring
            tools with Flask and Vue/TypeScript, and network telemetry for distributed training. I
            am now pursuing an M.S. in Computer Science at the University of Southern California,
            and spent summer 2026 as a Software Engineer Intern at Google building LLM agents for
            datacenter diagnostics. I find value in my work when my fellow engineers become more
            productive due to the automation and tools I create. This drives my passion for building
            efficient, scalable software solutions that streamline workflows and solve complex
            challenges.
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
            thought-provoking stories and action RPGs that challenge me to practice and hone my
            skills. Gaming has always been more than just a hobby for me. Sometimes, I channel my
            creativity into crafting playable experiences, from Unity-powered adventures to quirky
            Pygame projects. I am constantly exploring new frameworks and tools to make games,
            driven by my inner gamer.
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.section-title {
  font-size: 2rem;
  font-weight: bold;
}

.resume-button {
  --bs-btn-bg: var(--color-accent);
  --bs-btn-color: var(--color-accent-ink);
  --bs-btn-border-color: var(--color-accent);
  --bs-btn-hover-bg: var(--color-accent-hover);
  --bs-btn-hover-color: var(--color-accent-ink);
  --bs-btn-hover-border-color: var(--color-accent-hover);
  --bs-btn-active-bg: var(--color-accent-hover);
  --bs-btn-active-color: var(--color-accent-ink);
  --bs-btn-active-border-color: var(--color-accent-hover);
  padding: 0.25rem 1rem;
  border-width: 2px;
}

.icon-link {
  font-size: 1.25rem;
  text-decoration: none;
  margin-top: 0.25rem;
}

.swe-title {
  color: var(--color-green);
}

.violin-title {
  color: var(--color-gold);
}

.gamer-title {
  color: var(--color-purple);
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
  color: var(--color-link);
}
.profile-pic {
  user-select: none;
  border-radius: 1rem;
  width: 200px;
  height: 200px;
}
</style>
