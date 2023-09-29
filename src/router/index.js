import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // }, 
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/register-2',
      name: 'register-2',
      component: () => import('../views/RegisterView2.vue')
    },
    {
      path: '/register-failed-name',
      name: 'register-failed-name',
      component: () => import('../views/RegisterationFailedNameView.vue')
    },
    {
      path: '/register-donor',
      name: 'register-donor',
      component: () => import('../views/RegisterationFailedDonorView.vue')
    },
    {
      path: '/register-failed',
      name: 'register-failed',
      component: () => import('../views/RegisterationFailedView.vue')
    },
    {
      path: '/register-success',
      name: 'register-success',
      component: () => import('../views/RegisterationSuccessView.vue')
    },
    {
      path: '/activation',
      name: 'activation',
      component: () => import('../views/ActivateAccountView.vue')
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/ResetPasswordView.vue')
    },
    {
      path: '/reset-password-email',
      name: 'reset-password-email',
      component: () => import('../views/ResetPasswordEmailView.vue')
    },
    {
      path: '/reset-password-main',
      name: 'reset-password-main',
      component: () => import('../views/ResetPasswordMainView.vue')
    },
    {
      path: '/reset-password-success',
      name: 'reset-password-success',
      component: () => import('../views/ResetPasswordSuccessView.vue')
    },
  ]
})

export default router
