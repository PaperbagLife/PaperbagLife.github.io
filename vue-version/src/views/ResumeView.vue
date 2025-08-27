<script setup lang="ts">
import { computed, ref } from 'vue'
import resumeUrl from '../assets/docs/Lu-Yunkun.pdf'

type LifeEvent = {
  startDate: Date
  endDate?: Date
  title: string
  description: string[]
  type: string // 'education' | 'experience' | 'project';
}

const lifeEvents: LifeEvent[] = [
  // Education
  {
    startDate: new Date('2025-08-01'),
    endDate: new Date('2027-05-01'),
    title: 'M.S. in Computer Science, University of Southern California',
    description: [],
    type: 'education',
  },
  {
    startDate: new Date('2018-08-01'),
    endDate: new Date('2022-05-01'),
    title: 'B.S. in Computer Science, Minor in Computational Finance, Carnegie Mellon University',
    description: [
      'GPA: 3.80/4.00',
      'Courses: Distributed Systems, Artificial Intelligence & Problem Solving, Design and Analysis of Algorithms',
    ],
    type: 'education',
  },
  // Experience
  {
    startDate: new Date('2022-07-01'),
    endDate: new Date('2025-07-01'),
    title: 'Software Engineer at Clockwork Systems, Inc',
    description: [
      'Set up and managed 5 high-power-computing servers',
      'Optimized networking fabric for AI/ML Training',
      'Developed full-stack internal web platform with Flask and Vue/TypeScript',
      'Built and maintained customer-facing UI platform in Vue/TypeScript',
      'Created documentation and onboarded 5 new engineers',
    ],
    type: 'experience',
  },
  {
    startDate: new Date('2021-06-01'),
    endDate: new Date('2021-08-01'),
    title: 'Software Engineer Intern at Arista Networks',
    description: [
      'Migrated service to Kubernetes, reducing CPU usage',
      'Designed CI/CD pipeline for automated deployment',
      'Reformatted logging to JSON, reducing database load',
    ],
    type: 'experience',
  },
  // Projects
  {
    startDate: new Date('2023-01-01'),
    title: 'Personal Website with Vue/Typescript',
    description: [
      'Maintaining a personal website with bio, coursework, project showcase, and web games',
      'Writing monthly blogs',
      'Developing games with Typescript/Vue',
      'Managing TODOs and issues with GitHub Project',
    ],
    type: 'project',
  },
  {
    startDate: new Date('2020-05-01'),
    endDate: new Date('2020-08-01'),
    title:
      'Evaluating the Validity of Automatic Speech Recognition Technologies for Online Medical Counseling',
    description: [
      'Transcribed medical videos using ASR APIs from Google, IBM, and Microsoft',
      'Evaluated performance using word error rate and Levenshtein distance',
      'Identified factors affecting ASR performance',
    ],
    type: 'project',
  },
].sort((a, b) => {
  if (a.endDate && b.endDate) {
    return b.endDate.getTime() - a.endDate.getTime()
  } else if (a.endDate) {
    return 1
  } else if (b.endDate) {
    return -1
  } else {
    return b.startDate.getTime() - a.startDate.getTime()
  }
})

const filterOptions = ['all', 'education', 'experience', 'project']
const filter = ref('all')
const filteredLifeEvents = computed(() => {
  if (filter.value === 'all') {
    return lifeEvents
  }
  return lifeEvents.filter((event) => event.type === filter.value)
})

function openResume() {
  window.open(resumeUrl, '_blank')
}
</script>

<template>
  <div class="col px-3 py-2">
    <h1>Ricky (Yunkun) Lu</h1>
    <h5>USC 2027 May, SWE with 3 years experience</h5>
    <div>
      <span class="location-text">
        <span class="material-icons-outlined" style="vertical-align: middle">location_on</span>
        Los Angeles, CA
      </span>
      <span>
        <span class="icon-link" href="https://www.linkedin.com/in/yunkun-lu/">
          <i class="mx-1 fa-icon fa fa-linkedin fa-lg" />
          <a href="https://www.linkedin.com/in/yunkun-lu/">link</a>
        </span>
      </span>

      <span>
        <span class="icon-link" href="https://github.com/PaperbagLife">
          <i class="mx-1 fa-icon fa fa-github fa-lg" />
          <a href="https://github.com/PaperbagLife">link</a>
        </span>
      </span>

      <button class="btn btn-sm btn-outline-info mx-2" @click="openResume">pdf version</button>
    </div>
    <div>
      <div class="filter-tabs my-3 d-flex">
        <div
          v-for="option in filterOptions"
          :key="option"
          :class="['tab', option, { active: filter === option }]"
          @click="filter = option"
        >
          {{ option.charAt(0).toUpperCase() + option.slice(1) }}
        </div>
      </div>
      <div v-for="event in filteredLifeEvents" :key="event.title">
        <div class="my-3 event-container" :class="event.type">
          <h5 class="mb-1">{{ event.title }}</h5>
          <div class="text-muted" style="font-size: 0.9em">
            {{ event.startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) }}
            -
            {{
              event.endDate
                ? event.endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
                : 'Present'
            }}
          </div>
          <div v-for="(desc, idx) in event.description" :key="idx">{{ desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.location-icon {
  vertical-align: text-bottom;
}

.filter-tabs {
  .tab {
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;

    &.all {
      border: 1px solid #66ccff;
    }

    &.active {
      background-color: #007bff;
      color: white;
    }

    &.education {
      border: 1px solid red;

      &.active {
        background-color: red;
        color: white;
      }
    }

    &.experience {
      border: 1px solid green;

      &.active {
        background-color: green;
        color: white;
      }
    }

    &.project {
      border: 1px solid blue;

      &.active {
        background-color: blue;
        color: white;
      }
    }
  }
}

.event-container {
  border-left: 4px solid;
  padding-left: 10px;

  &.education {
    border-color: red;
  }

  &.experience {
    border-color: green;
  }

  &.project {
    border-color: blue;
  }
}
</style>
