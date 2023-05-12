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
import DenisDiderot from '../views/DenisDiderotView.vue'
import EmileCoue from '../views/EmileCoueView.vue'
import GeorgeSand from '../views/GeorgeSandView.vue'
import MauriceLeblanc from '../views/MauriceLeblancView.vue'
import Voltaire from '../views/VoltaireView.vue'
import ArthurRimbaud from '../views/ArthurRimbaudView.vue'
import AugusteBartholdi from '../views/AugusteBartholdiView.vue'
import AugusteEscoffier from '../views/AugusteEscoffierView.vue'
import AugusteRodin from '../views/AugusteRodinView.vue'
import Champollion from '../views/ChampollionView.vue'
import EdmondRostand from '../views/EdmondRostandView.vue'
import EmileZola from '../views/EmileZolaView.vue'
import FrancoisRabelais from '../views/FrancoisRabelaisView.vue'
import GustaveCaillebotte from '../views/GustaveCaillebotteView.vue'
import GustaveFlaubert from '../views/GustaveFlaubertView.vue'
import JeanJacquesRousseau from '../views/JeanJacquesRousseauView.vue'
import JeanneArc from '../views/JeanneArcView.vue'
import JulesVerne from '../views/JulesVerneView.vue'
import MarcelProust from '../views/MarcelProustView.vue'
import MichelDeMontaigne from '../views/MichelDeMontaigneView.vue'
import Nostradamus from '../views/NostradamusView.vue'
import PaulCezanne from '../views/PaulCezanneView.vue'
import PaulVerlaine from '../views/PaulVerlaineView.vue'
import PierreCorneille from '../views/PierreCorneilleView.vue'
import SarahBernhardt from '../views/SarahBernhardtView.vue'
import CamilleClaudel from '../views/CamilleClaudelView.vue'
import ArseneLupin from '../views/ArseneLupinView.vue'
import Lafayette from '../views/LafayetteView.vue'

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
    {
      path: '/denis-diderot',
      name: 'denis-diderot',
      component: DenisDiderot
    },
    {
      path: '/emile-coue',
      name: 'emile-coue',
      component: EmileCoue
    },
    {
      path: '/george-sand',
      name: 'george-sand',
      component: GeorgeSand
    },
    {
      path: '/maurice-leblanc',
      name: 'maurice-leblanc',
      component: MauriceLeblanc
    },
    {
      path: '/voltaire',
      name: 'voltaire',
      component: Voltaire
    },
    {
      path: '/arthur-rimbaud',
      name: 'arthur-rimbaud',
      component: ArthurRimbaud
    },
    {
      path: '/auguste-bartholdi',
      name: 'auguste-bartholdi',
      component: AugusteBartholdi
    },
    {
      path: '/auguste-escoffier',
      name: 'auguste-escoffier',
      component: AugusteEscoffier
    },
    {
      path: '/auguste-rodin',
      name: 'auguste-rodin',
      component: AugusteRodin
    },
    {
      path: '/champollion',
      name: 'champollion',
      component: Champollion
    },
    {
      path: '/edmond-rostand',
      name: 'edmond-rostand',
      component: EdmondRostand
    },
    {
      path: '/emile-zola',
      name: 'emile-zola',
      component: EmileZola
    },
    {
      path: '/francois-rabelais',
      name: 'francois-rabelais',
      component: FrancoisRabelais
    },
    {
      path: '/gustave-caillebotte',
      name: 'gustave-caillebotte',
      component: GustaveCaillebotte
    },
    {
      path: '/gustave-flaubert',
      name: 'gustave-flaubert',
      component: GustaveFlaubert
    },
    {
      path: '/jean-jacques-rousseau',
      name: 'jean-jacques-rousseau',
      component: JeanJacquesRousseau
    },
    {
      path: '/jeanne-darc',
      name: 'jeanne-darc',
      component: JeanneArc
    },
    {
      path: '/jules-verne',
      name: 'jules-verne',
      component: JulesVerne
    },
    {
      path: '/marcel-proust',
      name: 'marcel-proust',
      component: MarcelProust
    },
    {
      path: '/michel-de-montaigne',
      name: 'michel-de-montaigne',
      component: MichelDeMontaigne
    },
    {
      path: '/nostradamus',
      name: 'nostradamus',
      component: Nostradamus
    },
    {
      path: '/paul-cezanne',
      name: 'paul-cezanne',
      component: PaulCezanne
    },
    {
      path: '/paul-verlaine',
      name: 'paul-verlaine',
      component: PaulVerlaine
    },
    {
      path: '/pierre-corneille',
      name: 'pierre-corneille',
      component: PierreCorneille
    },
    {
      path: '/sarah-bernhardt',
      name: 'sarah-bernhardt',
      component: SarahBernhardt
    },
    {
      path: '/camille-claudel',
      name: 'camille-claudel',
      component: CamilleClaudel
    },
    {
      path: '/arsene-lupin',
      name: 'arsene-lupin',
      component: ArseneLupin
    },
    {
      path: '/lafayette',
      name: 'lafayette',
      component: Lafayette
    },
  ]
})

export default router
