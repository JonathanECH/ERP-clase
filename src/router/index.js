import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/clientes',
      name: 'Clientes',
      component: () => import('../views/ClientesView.vue'),
    },
    {
      path: '/contabilidad',
      name: 'Contabilidad',
      component: () => import('../views/ContabilidadView.vue'),
    },
    {
      path: '/facturacion',
      name: 'Facturacion',
      component: () => import('../views/FacturacionView.vue'),
    },
  ],
})

export default router
