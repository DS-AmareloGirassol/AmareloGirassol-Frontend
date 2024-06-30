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
      component: () => import('../pages/LoginPage.vue')
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('../pages/CadastroPage.vue')
    },
    {
      path: '/avaliacao',
      name: 'Avaliacao',
      component: () => import('../pages/PageAssessment.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/recuperar',
      name: 'Recuperar',
      component: () => import('../pages/LoginRecuperar.vue')
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: () => import('../pages/PerfilPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/professor',
      name: 'Professor',
      component: () => import('../pages/ProfessorPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/fluxo',
      name: 'Fluxo',
      component: () => import('../pages/PerfilPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/disciplina',
      name: 'Detalhe Disciplina',
      component: () => import('../pages/DetalheDisciplinaPage.vue')
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
