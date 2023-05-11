<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import dpUrl from '../assets/img/dp.jpg'
import resumeUrl from '../assets/docs/Lu-Yunkun.pdf'
const { type } = useBreakpoints()
</script>

<template>
  <main>
    <div class="col mt-4">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-auto">
          <img :src="dpUrl" width="250" height="250" />
        </div>
        <div class="col-auto mw-90">
          <div :class="type === 'xs' ? 'col text-center' : ''">
            <h1>Yunkun (Ricky) Lu</h1>
            <h2>Software Engineer</h2>
            <a class="btn button px-4 mr-3" :class="type === 'xs' ? '' : ''" :href="resumeUrl">
              Resume </a
            ><a href="https://www.linkedin.com/in/yunkun-lu/"
              ><i class="mx-1 fa-icon fa fa-linkedin fa-lg"></i
            ></a>
            <a href="https://github.com/PaperbagLife"
              ><i class="mx-1 fa-icon fa fa-github fa-lg"></i
            ></a>
            <a href="https://www.youtube.com/c/PaperbagLife"
              ><i class="mx-1 fa-icon fa fa-youtube fa-lg"></i
            ></a>
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
</style>
