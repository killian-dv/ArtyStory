import { createRouter, createWebHistory } from 'vue-router'
import NapoleonView from '../views/NapoleonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/napoleon',
      name: 'napoleon',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NapoleonView
    }
  ]
})

export default router
