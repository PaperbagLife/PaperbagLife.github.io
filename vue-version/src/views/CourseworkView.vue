<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
const { type } = useBreakpoints()

type Semester = {
  name: string
  courses: string[]
}
const semesters: Semester[] = [
  {
    name: 'Fall 2018:',
    courses: [
      '15110 Principles of Computing',
      '21122 Integration and Approximation',
      '33121 Physics for Science Students',
      '82171 Elementary Japanese 1'
    ]
  },
  {
    name: 'Spring 2019:',
    courses: [
      '03121 Modern Biology',
      '15112 Fundamentals of Programming and Computer Science',
      '21127 Concepts of Mathematics',
      '21241 Matrices and Linear Transformations',
      '73102 Principles of Microeconomics',
      '76107 Writing about Data',
      '76108 Writing about Public Problems'
    ]
  },
  {
    name: 'Summer 1 2019:',
    courses: ['21259 Calculus in 3D', '21260 Differential Equations']
  },
  {
    name: 'Summer 2 2019:',
    courses: ['15122 Principles of Imperative Computation']
  },
  {
    name: 'Fall 2019:',
    courses: [
      '15150 Principles of Functional Programming',
      '15251 Great Ideas in Theoretical Computer Science',
      '21295 Putnam Seminar',
      '21325 Probability',
      '88120 Reason, Passion, and Cognition'
    ]
  },
  {
    name: 'Spring 2020:',
    courses: [
      '15210 Parallel and Sequential Data Structures and Algorithms',
      '15213 Introduction to Computer Systems',
      '21270 Intro to Mathematical Finance',
      '21380 Intro to Mathematical Modelling',
      '38230 Engage in Wellness'
    ]
  },
  {
    name: 'Fall 2020:',
    courses: [
      '10315 Machine Learning',
      '15281 Artificial Intelligence: Representation and Problem Solving',
      '21370 Discrete Time Finance',
      '33104 Experimental Physics',
      '76270 Writing for the Professions'
    ]
  },
  {
    name: 'Spring 2021:',
    courses: [
      '21420 Continuous Time Finance',
      '15451 Algorithms',
      '15440 Distributed Systems',
      '73103 Principles of Macro Economics',
      '80100 Introduction to Philosophy'
    ]
  },
  {
    name: 'Fall 2021:',
    courses: [
      '15462 Computer Graphics',
      '15317 Constructive Logic',
      '82279 Anime - Visual Interplay between Japan and the World',
      '80283 IMHYSI(Linguistics) '
    ]
  },
  {
    name: 'Spring 2022:',
    courses: [
      '15330 Introduction to Computer Security',
      '33120 Science and Science Fiction',
      '85102 Introduction to Psychology',
      '15195 Competition Programming ',
      '98012 Stuco: Fun with Robots'
    ]
  }
]
</script>

<template>
  <main>
    <div class="col mt-2">
      <h1 class="ml-2">Coursework</h1>
      <div class="row mx-0">
        <template v-for="semester in semesters" :key="semester.name">
          <div class="border-top" :class="type === 'xs' ? 'col-12' : 'col-6'">
            <p>
              <b>{{ semester.name }}</b>
            </p>
            <p class="mb-1" v-for="course in semester.courses" :key="course">{{ course }} <br /></p>
          </div>
        </template>
      </div>
    </div>
  </main>
</template>
