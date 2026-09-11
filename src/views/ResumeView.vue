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
    description: ['GPA: 4.00 (ongoing)'],
    type: 'education',
  },
  {
    startDate: new Date('2018-08-01'),
    endDate: new Date('2022-05-01'),
    title: 'B.S. in Computer Science, Minor in Computational Finance, Carnegie Mellon University',
    description: [
      'GPA: 3.80/4.00',
      'Relevant coursework: Distributed Systems, Artificial Intelligence, Algorithms',
    ],
    type: 'education',
  },
  // Experience
  {
    startDate: new Date('2026-05-17'),
    endDate: new Date('2026-08-14'),
    title: 'Software Engineer Intern at Google',
    description: [
      'Built an LLM agent in Python that automatically gathers diagnostic evidence from multiple data sources and assembles it into a structured triage report for failed machine tests, cutting initial investigation from hours to under 20 minutes via parallelized agent workflows.',
      'Designed and implemented a telemetry pipeline and monitoring dashboard tracking datacenter diagnostic coverage across thousands of machines, enabling fleet-wide visibility into agent execution and data quality.',
    ],
    type: 'experience',
  },
  {
    startDate: new Date('2022-07-01'),
    endDate: new Date('2025-07-01'),
    title: 'Software Engineer at Clockwork Systems, Inc',
    description: [
      'Built the GPU training cluster end-to-end with one other engineer: planned and stacked the switch, racked and cabled 5 servers, and configured + validated Infiniband/RoCE fabric performance.',
      'Designed and built internal GPU-cluster monitoring platform from the ground up (Flask + Vue/TypeScript), replacing a manual pre-test health check with a single page load.',
      'Built the telemetry subsystem for a NCCL plugin that mitigates ECMP hash-collision congestion on RoCE/Infiniband fabrics by rerouting collective traffic based on measured path load — 20% higher allreduce throughput vs. stock NCCL on default ECMP.',
    ],
    type: 'experience',
  },
  {
    startDate: new Date('2021-06-01'),
    endDate: new Date('2021-08-01'),
    title: 'Software Engineer Intern at Arista Networks',
    description: [
      'Migrated existing service to run on Kubernetes, reducing CPU usage of bare metal servers by up to 10%.',
      'Designed and implemented CI/CD pipeline to automate deployment of new builds to Kubernetes clusters, saving ~20 minutes per deployment.',
      'Reformatted excessive verbose logging into JSON strings, reducing database load by 70% and making parsing easier.',
    ],
    type: 'experience',
  },
  // Projects
  {
    startDate: new Date('2025-08-25'),
    title: 'Hamster Mapster — Multiplayer Party Game (Launching on Steam in 2027)',
    description: [
      'Designing and implementing procedural map generation system for a 4-player party game.',
      'Built multi-biome tile-based generation algorithm that creates balanced, playable maps with configurable difficulty.',
      'Collaborated with a team of 20, including 3 other engineers, to integrate map generation with game mechanics and UI.',
    ],
    type: 'project',
  },
  {
    startDate: new Date('2023-01-01'),
    title: 'Personal Website with Vue/TypeScript',
    description: [
      'Maintaining personal website with bio, coursework, project showcase, and web games.',
      'Writing monthly blogs and publishing technical posts.',
      'Developing games and interactive demos with TypeScript/Vue.',
    ],
    type: 'project',
  },
  {
    startDate: new Date('2020-05-01'),
    endDate: new Date('2020-08-01'),
    title: 'Evaluating the Validity of Automatic Speech Recognition Technologies for Online Medical Counseling',
    description: [
      'Transcribed medical videos using ASR APIs from Google, IBM, and Microsoft.',
      'Evaluated performance using word error rate and Levenshtein distance.',
      'Identified factors affecting ASR performance.',
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
    <h1>Yunkun (Ricky) Lu</h1>
    <h5>Software Engineer | Distributed Systems | AI Infrastructure | LLM Agents</h5>
    <div>
      <span class="me-3">
        <span class="material-icons-outlined" style="vertical-align: middle">location_on</span>
        Los Angeles, CA
      </span>
      <span class="url-link me-3">
        <a href="https://www.linkedin.com/in/yunkun-lu/">LinkedIn</a>
      </span>
      <span class="url-link me-3">
        <a href="https://github.com/PaperbagLife">GitHub</a>
      </span>
      <span class="url-link me-3">
        <a href="#" @click.prevent="openResume"> PDF resume </a>
      </span>
    </div>
    <div class="my-2 skills">
      <strong>Skills:</strong>
      <div style="font-size:0.95em">
        Languages: Python, C++, Golang, TypeScript, JavaScript, SQL —
        AI & ML: LLMs, Agentic Workflows, Prompt Engineering, Autonomous Agents —
        Distributed Systems: Kubernetes, Docker, NCCL, RDMA, Infiniband/RoCE —
        Data & Monitoring: Grafana, SQL, Telemetry Pipelines, CI/CD
      </div>
    </div>
    <div>
      <div class="filter-tabs my-2 d-flex">
        <div v-for="option in filterOptions" :key="option" :class="['tab', option, { active: filter === option }]"
          @click="filter = option">
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
$blue: #66ccff;
$purple: #e566ff;
$orange: #ff9966;
$red: #ff2a4d;

.location-icon {
  vertical-align: text-bottom;
}

.url-link {
  a {
    color: $blue;
    text-decoration: none;
  }
}

.filter-tabs {
  .tab {
    padding: 0px 10px;
    cursor: pointer;
    user-select: none;
    border-bottom: 2px solid;
    font-weight: bold;

    &.active {
      border-bottom: 4px solid;
    }

    &.all {
      color: $blue;
      border-color: $blue;
    }

    &.education {
      border-color: $purple;
      color: $purple;
    }

    &.experience {
      border-color: $red;
      color: $red;
    }

    &.project {
      border-color: $orange;
      color: $orange;
    }
  }
}

.event-container {
  border-left: 4px solid;
  padding-left: 10px;

  &.education {
    border-color: $purple;
  }

  &.experience {
    border-color: $red;
  }

  &.project {
    border-color: $orange;
  }
}
</style>
