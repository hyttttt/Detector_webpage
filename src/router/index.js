import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import TaskView from '../views/TaskView.vue'
import AboutView from '../views/AboutView.vue'
import ReportView from '../views/ReportView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import ProfileView from '../views/ProfileView.vue'
import ComparingView from '../views/ComparingView.vue'
import ComparingReportsView from '../views/ComparingReportsView.vue'
import LoadingView from '../views/LoadingView.vue'
import LeaderBoardView from '../views/LeaderBoardView.vue'
import CallbackView from '../views/CallbackView.vue'

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
      path: '/testPage',
      name: 'testPage',
      component: TestPage
    },
    {
      path: '/loading/:page',
      name: 'loading',
      component: LoadingView
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
      path: '/dash',
      name: 'dash',
      component: DashboardView
    },
    {
      path: '/task/:did', // detector id
      name: 'task',
      component: TaskView
    },
    {
      path: '/report/:ids',
      name: 'report',
      component: ReportView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/comparing',
      name: 'comparing',
      component: ComparingView
    },
    {
      path: '/comparingReports/:ids',
      name: 'comparingReports',
      component: ComparingReportsView
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: LeaderBoardView
    },
    {
      path: '/auth/callback?code=:token_code',
      name: 'callback',
      component: CallbackView
    }
  ]
})

export default router
