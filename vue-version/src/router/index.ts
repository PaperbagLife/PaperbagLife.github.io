import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseWorkView from '../views/CourseworkView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import InterestsView from '../views/InterestsView.vue'

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
    }
  ]
})

export default router
