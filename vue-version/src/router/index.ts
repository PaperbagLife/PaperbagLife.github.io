import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseWorkView from '../views/CourseworkView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import InterestsView from '../views/InterestsView.vue'
import TurnBasedGameView from '../views/TurnBasedGameView.vue'
import ShooterGameView from '../views/ShooterGameView.vue'
import DanmakuView from '../views/DanmakuView.vue'
import StarRailView from '../views/StarRailView.vue'

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
      path: '/games/turnbased',
      name: 'turnbased',
      component: TurnBasedGameView
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
    }
  ]
})

export default router
