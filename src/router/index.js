import { createRouter, createWebHistory } from 'vue-router'
import Vitrine from '../views/VitrineView.vue';

const routes = [
  {
    path: '/',
    name: 'vitrine',
    component: Vitrine
  },
  {
    path: '/produtos',
    name: 'produtos',

    component: () => import('../views/ProdutosView.vue')
  },
  {
    path: '/produtos/:idProduto',
    name: 'produto',

    component: () => import('../views/ProdutoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
