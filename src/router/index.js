import { createRouter, createWebHistory } from 'vue-router'
import NapoleonView from '../views/NapoleonView.vue'
import AlexandreDumasView from '../views/AlexandreDumasView.vue'
import MarieAntoinetteView from '../views/MarieAntoinetteView.vue'
import RonsardView from '../views/RonsardView.vue'
import ChateaubriandView from '../views/ChateaubriandView.vue'
import JulesCesarView from '../views/JulesCesarView.vue'
import PereNoelView from '../views/PereNoelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    // },
    {
      path: '/napoleon',
      name: 'napoleon',
      component: NapoleonView
    },
    {
      path: '/alexandre-dumas',
      name: 'alexandre-dumas',
      component: AlexandreDumasView
    },
    {
      path: '/marie-antoinette',
      name: 'marie-antoinette',
      component: MarieAntoinetteView
    },
    {
      path: '/ronsard',
      name: 'ronsard',
      component: RonsardView
    },
    {
      path: '/chateaubriand',
      name: 'chateaubriand',
      component: ChateaubriandView
    },
    {
      path: '/jules-cesar',
      name: 'jules-cesar',
      component: JulesCesarView
    },
    {
      path: '/pere-noel',
      name: 'pere-noel',
      component: PereNoelView
    },
  ]
})

export default router
