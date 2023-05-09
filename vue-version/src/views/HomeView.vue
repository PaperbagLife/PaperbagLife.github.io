<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import dpUrl from '../assets/img/dp.jpg'
import resumeUrl from '../assets/docs/Lu-Yunkun.pdf'
const { type } = useBreakpoints()
</script>

<template>
  <main>
    <div class="col">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-auto">
          <img :src="dpUrl" width="250" height="250" />
        </div>
        <div class="col-auto">
          <div :class="type === 'xs' ? 'col text-center' : ''">
            <h1 :class="type === 'xs' ? '' : ''">Yunkun (Ricky) Lu</h1>
            <h2 :class="type === 'xs' ? '' : ''">Software Engineer</h2>
            <div class="btn button px-4" :class="type === 'xs' ? '' : ''">
              <div :href="resumeUrl">Resume</div>
            </div>
          </div>
          <div :class="type === 'xs' ? 'bio-xs' : ''">
            I obtained an undergraduate degree from Carnegie Mellon University. <br />
            I have attended many hackathons and developed a handful of games.<br />
            I work as a software engineer for clockwork systems.<br />
            <b>Contact:</b> yunkunL@alumni.cmu.edu
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.bio-xs {
  max-width: 64%;
  margin-left: auto;
  margin-right: auto;
}
.button {
  border: 2px solid #66ccff;
  color: #66ccff;
}
</style>
