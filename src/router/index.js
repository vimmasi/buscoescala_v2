import { createRouter, createWebHistory } from 'vue-router'
import BuscarView from '../views/BuscarView.vue'
import CadastrarView from '../views/CadastrarView.vue'
import ObservacoesView from '../views/ObservacoesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'buscar',
      component: BuscarView
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: CadastrarView
    },
    {
      path: '/observacoes',
      name: 'observacoes',
      component: ObservacoesView
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
