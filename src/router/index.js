import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/HomePage.vue'),
    },
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
    },
    {
      path: '/disciplinas',
      name: 'Disciplina',
      component: () => import('../pages/PageDisciplina.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/recuperar',
      name: 'Recuperar',
      component: () => import('../pages/LoginRecuperar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/perfil/:user_id',
      name: 'Perfil',
      component: () => import('../pages/PerfilPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/adicionar',
      name: 'Adicionar Post',
      component: () => import('../pages/AdicionarPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/feedback/:disciplina_id',
      name: 'Feedback',
      component: () => import('../pages/FeedbackPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/detalhe-disciplina/:disciplina_id',
      name: 'Detalhe Disciplina',
      component: () => import('../pages/DetalheDisciplinaPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/selecao',
      name: 'Seleção',
      component: () => import('../pages/SelecaoMaterias.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/fluxo',
      name: 'Meu Fluxo',
      component: () => import('../pages/MeuFluxoPage.vue'),
      meta: { requiresAuth: true }
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
