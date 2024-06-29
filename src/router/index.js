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
      path: '/disciplina',
      name: 'Detalhe Disciplina',
      component: () => import('../pages/DetalheDisciplinaPage.vue')
    },
    {
      path: '/fluxo',
      name: 'Meu Fluxo',
      component: () => import('../pages/Fluxo.vue')
    },
    {
      path: '/selecaomaterias',
      name: 'Seleção',
      component: () => import('../pages/SelecaoMaterias.vue')
    }
  ]
})

export default router
