<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
const { type } = useBreakpoints()
</script>

<template>
  <main>
    <div class="col">
      <h1 class="ml-2">Coursework</h1>
      <div class="row mx-0">
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Fall 2018:</b></p>
          <p>
            15110 Principles of Computing <br />
            21122 Integration and Approximation<br />
            33121 Physics for Science Students<br />
            82171 Elementary Japanese 1<br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Spring 2019:</b></p>
          <p>
            03121 Modern Biology <br />
            15112 Fundamentals of Programming and Computer Science<br />
            21127 Concepts of Mathematics<br />
            21241 Matrices and Linear Transformations<br />
            73102 Principles of Microeconomics<br />
            76107 Writing about Data<br />
            76108 Writing about Public Problems<br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Summer 1 2019:</b></p>
          <p>
            21259 Calculus in 3D<br />
            21260 Differential Equations<br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Summer 2 2019:</b></p>
          <p>15122 Principles of Imperative Computation<br /></p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Fall 2019:</b></p>
          <p>
            15150 Principles of Functional Programming<br />
            15251 Great Ideas in Theoretical Computer Science<br />
            21295 Putnam Seminar<br />
            21325 Probability<br />
            88120 Reason, Passion, and Cognition<br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Spring 2020:</b></p>
          <p>
            15210 Parallel and Sequential Data Structures and Algorithms<br />
            15213 Introduction to Computer Systems<br />
            21270 Intro to Mathematical Finance<br />
            21380 Intro to Mathematical Modelling<br />
            38230 Engage in Wellness<br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Fall 2020:</b></p>
          <p>
            10315 Machine Learning<br />
            15281 Artificial Intelligence: Representation and Problem Solving<br />
            21370 Discrete Time Finance<br />
            33104 Experimental Physics<br />
            76270 Writing for the Professions<br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Spring 2021:</b></p>
          <p>
            21420 Continuous Time Finance<br />
            15451 Algorithms<br />
            15440 Distributed Systems<br />
            73103 Principles of Macro Economics<br />
            80100 Introduction to Philosophy<br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Fall 2021:</b></p>
          <p>
            15462 Computer Graphics<br />
            15317 Constructive Logic<br />
            82279 Anime - Visual Interplay between Japan and the World<br />
            80283 IMHYSI(Linguistics) <br />
          </p>
        </div>
        <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
          <p><b>Spring 2022:</b></p>
          <p>
            15330 Introduction to Computer Security<br />
            33120 Science and Science Fiction<br />
            85102 Introduction to Psychology<br />
            15195 Competition Programming <br />
            98012 Stuco: Fun with Robots<br />
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
