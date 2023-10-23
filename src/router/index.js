import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/dashboard/',
      name: 'dashboard',
      redirect: 'dashboard/summary',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'summary',
          name: 'summary',
          component: () => import('../views/SummaryView.vue')
        },
        {
          path: 'programs/',
          name: 'programs',
          component: () => import('../views/ProgramsView.vue')
          // children: [
          //   {
          //     path: ':slug',
          //     name: 'program',
          //     component: () => import('../views/ProgramView.vue')
          //   }
          // ]
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/SettingsView.vue')
        },
        {
          path: 'notifications',
          name: 'notifications',
          component: () => import('../views/SettingsView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/verify-otp',
      name: 'verify-otp',
      component: () => import('../views/VerifyOTPView.vue')
    },
    {
      path: '/register-2',
      name: 'register-2',
      component: () => import('../views/RegisterView2.vue')
    },
    {
      path: '/register-failed-name',
      name: 'register-failed-name',
      component: () => import('../views/RegistrationFailedNameView.vue')
    },
    {
      path: '/register-donor',
      name: 'register-donor',
      component: () => import('../views/RegistrationFailedDonorView.vue')
    },
    {
      path: '/register-failed',
      name: 'register-failed',
      component: () => import('../views/RegistrationFailedView.vue')
    },
    {
      path: '/register-success',
      name: 'register-success',
      component: () => import('../views/RegistrationSuccessView.vue')
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
    {
      path: '/dashboard/program/',
      name: 'program',
      redirect: 'program/intro',
      component: () => import('../views/ProgramView.vue'),
      children: [
        {
          path: 'intro',
          name: 'intro',
          component: () => import('../views/IntroView.vue')
        },
        {
          path: 'itinerary',
          name: 'itinerary',
          component: () => import('../views/ItineraryView.vue')
        },
        {
          path: 'first',
          name: 'first',
          component: () => import('../views/FirstCourseCardView.vue')
        },
        {
          path: 'second',
          name: 'second',
          component: () => import('../views/SecondCourseCardView.vue')
        },
        {
          path: 'third',
          name: 'third',
          component: () => import('../views/ThirdCourseCardView.vue')
        },
        {
          path: 'fourth',
          name: 'fourth',
          component: () => import('../views/FourthCourseCardView.vue')
        },
        {
          path: 'fifth',
          name: 'fifth',
          component: () => import('../views/FifthCourseCardView.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/PageNotFoundView.vue')
    }
  ]
})

export default router
