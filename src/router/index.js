import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/forum',
      name: 'Forum',
      component: () => import('../pages/ForumPage.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/LoginPage.vue')
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('../pages/CadastroPage.vue')
    },
    {
      path: '/assessment',
      name: 'Assessment',
      component: () => import('../pages/PageAssessment.vue')
    },
    {
      path: '/recuperar',
      name: 'Recuperar',
      component: () => import('../pages/LoginRecuperar.vue')
    },
  ]
})

export default router
