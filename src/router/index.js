import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/forum',
      name: 'Forum',
      component: () => import('../pages/ForumPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/LoginPage.vue'),
      
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('../pages/CadastroPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/disciplina',
      name: 'Disciplina',
      component: () => import('../pages/PageDisciplina.vue'),
    },
    {
      path: '/recuperar',
      name: 'Recuperar',
      component: () => import('../pages/LoginRecuperar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: () => import('../pages/PerfilPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/adicionar',
      name: '/Adicionar',
      component: () => import('../pages/AdicionarPage.vue'),
    },
    {
      path: '/professor',
      name: 'Professor',
      component: () => import('../pages/ProfessorPage.vue'),
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: () => import('../pages/FeedbackPage.vue'),
    },
    {
      path: '/fluxo',
      name: 'Fluxo',
      component: () => import('../pages/Fluxo.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/disciplina',
      name: 'Detalhe Disciplina',
      component: () => import('../pages/DetalheDisciplinaPage.vue')
    },
    {
      path: '/meufluxo',
      name: 'Meu Fluxo',
      component: () => import('../pages/Fluxo.vue')
    },
    {
      path: '/selecao',
      name: 'Seleção',
      component: () => import('../pages/SelecaoMaterias.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
