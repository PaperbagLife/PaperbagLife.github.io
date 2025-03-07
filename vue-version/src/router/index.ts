import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseWorkView from '../views/CourseworkView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import InterestsView from '../views/InterestsView.vue'
import ShooterGameView from '../views/ShooterGameView.vue'
import DanmakuView from '../views/DanmakuView.vue'
import GamesView from '../views/GamesView.vue'
import DeckBuildingView from '@/views/DeckBuildingView.vue'

const StarRailView = () => import('../views/StarRailView.vue')
const ThreeView = () => import('../views/ThreeView.vue')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coursework',
      name: 'coursework',
      component: CourseWorkView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/interests',
      name: 'interests',
      component: InterestsView
    },
    {
      path: '/games/shooter',
      name: 'shooter',
      component: ShooterGameView
    },
    {
      path: '/games/danmaku',
      name: 'danmaku',
      component: DanmakuView
    },
    {
      path: '/games/starrail',
      name: 'starrail',
      component: StarRailView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
    {
      path: '/demo',
      name: 'demo',
      component: ThreeView
    },
    {
      path: '/games/deckbuilding',
      name: 'deckbuilding',
      component: DeckBuildingView,
      meta: {
        hideHeader: true
      }
    }
  ]
})

export default router
