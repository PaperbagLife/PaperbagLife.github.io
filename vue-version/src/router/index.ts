import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseWorkView from '../views/CourseworkView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import InterestsView from '../views/InterestsView.vue'
import ShooterGameView from '../views/ShooterGameView.vue'
import DanmakuView from '../views/DanmakuView.vue'
import GamesView from '../views/GamesView.vue'
import DeckBuildingView from '@/views/DeckBuildingView.vue'
import TimerView from '@/views/TimerView.vue'
import LatencyPlanner from '@/views/LatencyPlanner.vue'

const StarRailView = () => import('../views/StarRailView.vue')
const ThreeView = () => import('../views/ThreeView.vue')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/coursework',
      name: 'coursework',
      component: CourseWorkView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/interests',
      name: 'interests',
      component: InterestsView,
    },
    {
      path: '/games/shooter',
      name: 'shooter',
      component: ShooterGameView,
    },
    {
      path: '/games/danmaku',
      name: 'danmaku',
      component: DanmakuView,
    },
    {
      path: '/games/starrail',
      name: 'starrail',
      component: StarRailView,
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView,
    },
    {
      path: '/demo',
      name: 'demo',
      component: ThreeView,
    },
    {
      path: '/games/deckbuilding',
      name: 'deckbuilding',
      component: DeckBuildingView,
      meta: {
        hideHeader: true,
        bodyClass: 'no-scroll',
      },
    },
    {
      path: '/games/latency-planner',
      name: 'latency-planner',
      component: LatencyPlanner,
    },
    {
      path: '/timer',
      name: 'timer',
      component: TimerView,
    },
  ],
})

// router/index.js or wherever you set up Vue Router
router.beforeEach((to, from, next) => {
  // Remove all previously applied route-specific body classes
  if (from.meta?.bodyClass) {
    document.documentElement.classList.remove(from.meta.bodyClass as string)
  }

  // Add the new one if it exists
  if (to.meta?.bodyClass) {
    document.documentElement.classList.add(to.meta.bodyClass as string)
  }

  next()
})

export default router
