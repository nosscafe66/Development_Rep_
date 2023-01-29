import { createRouter, createWebHistory } from 'vue-router'
import Privacy from '../views/Privacy.vue'
import CalculatorPage from '../views/CalculatorPage.vue'
import ChatroomPage from '../views/ChatroomPage.vue'
import Main from '../views/Main.vue'
import ManyFunctionPage from '../views/ManyFunctionPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: CalculatorPage
  },{
    path: '/chatroom',
    name: 'chatroom',
    component: ChatroomPage
  },{
    path: '/function',
    name: 'function',
    component: ManyFunctionPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
