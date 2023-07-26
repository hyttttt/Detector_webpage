import { createRouter, createWebHistory } from 'vue-router'
import CoreView from '../views/CoreView.vue'
import TaskView from '../views/TaskView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ReportView from '../views/ReportView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'

import TestPage from '../views/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/signIn'
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignInView
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUpView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/core',
      name: 'core',
      component: CoreView
    },
    {
      path: '/task/:uid/:did', //user id, detector id
      name: 'task',
      component: TaskView
    },
    {
      path: '/report',
      name: 'report',
      component: ReportView
    }
  ]
})

export default router
