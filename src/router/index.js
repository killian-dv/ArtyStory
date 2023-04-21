import { createRouter, createWebHistory } from 'vue-router'
import NapoleonView from '../views/NapoleonView.vue'
import AlexandreDumasView from '../views/AlexandreDumasView.vue'
import MarieAntoinetteView from '../views/MarieAntoinetteView.vue'
import RonsardView from '../views/RonsardView.vue'
import ChateaubriandView from '../views/ChateaubriandView.vue'
import JulesCesarView from '../views/JulesCesarView.vue'
import PereNoelView from '../views/PereNoelView.vue'
import RosaBonheur from '../views/RosaBonheurView.vue'
import VictorHugo from '../views/VictorHugoView.vue'
import Renoir from '../views/RenoirView.vue'
import ClaudeMonet from '../views/ClaudeMonetView.vue'
import JeanFontaine from '../views/JeanFontaineView.vue'
import HectorBerlioz from '../views/BerliozView.vue'
import ErikSatie from '../views/SatieView.vue'
import Stendhal from '../views/StendhalView.vue'
import Balzac from '../views/BalzacView.vue'
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
    {
      path: '/rosa-bonheur',
      name: 'rosa-bonheur',
      component: RosaBonheur
    },
    {
      path: '/victor-hugo',
      name: 'victor-hugo',
      component: VictorHugo
    },
    {
      path: '/renoir',
      name: 'renoir',
      component: Renoir
    },
    {
      path: '/claude-monet',
      name: 'claude-monet',
      component: ClaudeMonet
    },
    {
      path: '/la-fontaine',
      name: 'la-fontaine',
      component: JeanFontaine
    },
    {
      path: '/hector-berlioz',
      name: 'hector-berlioz',
      component: HectorBerlioz
    },
    {
      path: '/erik-satie',
      name: 'erik-satie',
      component: ErikSatie
    },
    {
      path: '/stendhal',
      name: 'stendhal',
      component: Stendhal
    },
    {
      path: '/balzac',
      name: 'balzac',
      component: Balzac
    },
  ]
})

export default router
