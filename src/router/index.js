import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';

export const routerName = () => {
  return {
    register: 'register',
    dashboard: 'dashboard',
    summary: 'summary',
    programs: 'programs',
    settings: 'settings',
    notifications: 'notifications',
    login: 'login',
    verifyOtp: 'verify-otp',
    register2: 'register-2',
    registerFailedName: 'register-failed-name',
    registerDonor: 'register-donor',
    registerFailed: 'register-failed',
    registerSuccess: 'register-success',
    activation: 'activation',
    resetPassword: 'reset-password',
    resetPasswordEmail: 'reset-password-email',
    resetPasswordMain: 'reset-password-main',
    resetPasswordSuccess: 'reset-password-success',
    program: 'program',
    intro: 'intro',
    itinerary: 'itinerary',
    first: 'first',
    second: 'second',
    third: 'third',
    fourth: 'fourth',
    fifth: 'fifth',
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: routerName().register,
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/',
      name: routerName().dashboard,
      redirect: 'summary',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        auth:true
      },
      children: [
        {
          path: 'summary',
          name: routerName().summary,
          component: () => import('../views/SummaryView.vue')
        },
        {
          path: 'programs/',
          name: routerName().programs,
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
          name: routerName().settings,
          component: () => import('../views/SettingsView.vue')
        },
        {
          path: 'notifications',
          name: routerName().notifications,
          component: () => import('../views/SettingsView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: routerName().login,
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/verify-otp',
      name: routerName().verifyOtp,
      component: () => import('../views/VerifyOTPView.vue')
    },
    {
      path: '/register-2',
      name: routerName().register2,
      component: () => import('../views/RegisterView2.vue')
    },
    {
      path: '/register-failed-name',
      name: routerName().registerFailedName,
      component: () => import('../views/RegistrationFailedNameView.vue')
    },
    {
      path: '/register-donor',
      name: routerName().registerDonor,
      component: () => import('../views/RegistrationFailedDonorView.vue')
    },
    {
      path: '/register-failed',
      name: routerName().registerFailed,
      component: () => import('../views/RegistrationFailedView.vue')
    },
    {
      path: '/register-success',
      name: routerName().registerSuccess,
      component: () => import('../views/RegistrationSuccessView.vue')
    },
    {
      path: '/activation',
      name: routerName().activation,
      component: () => import('../views/ActivateAccountView.vue')
    },
    {
      path: '/reset-password',
      name: routerName().resetPassword,
      component: () => import('../views/ResetPasswordView.vue')
    },
    {
      path: '/reset-password-email',
      name: routerName().resetPasswordEmail,
      component: () => import('../views/ResetPasswordEmailView.vue')
    },
    {
      path: '/reset-password-main',
      name: routerName().resetPasswordMain,
      component: () => import('../views/ResetPasswordMainView.vue')
    },
    {
      path: '/reset-password-success',
      name: routerName().resetPasswordSuccess,
      component: () => import('../views/ResetPasswordSuccessView.vue')
    },
    {
      path: '/program/',
      name: routerName().program,
      redirect: 'program/intro',
      component: () => import('../views/ProgramView.vue'),
      meta: {
        auth:true
      },
      children: [
        {
          path: 'intro',
          name: routerName().intro,
          component: () => import('../views/IntroView.vue')
        },
        {
          path: 'itinerary',
          name: routerName().itinerary,
          component: () => import('../views/ItineraryView.vue')
        },
        {
          path: 'first',
          name: routerName().first,
          component: () => import('../views/FirstCourseCardView.vue')
        },
        {
          path: 'second',
          name: routerName().second,
          component: () => import('../views/SecondCourseCardView.vue')
        },
        {
          path: 'third',
          name: routerName().third,
          component: () => import('../views/ThirdCourseCardView.vue')
        },
        {
          path: 'fourth',
          name: routerName().fourth,
          component: () => import('../views/FourthCourseCardView.vue')
        },
        {
          path: 'fifth',
          name: routerName().fifth,
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

router.beforeEach((to, from, next)=>{
  if (to.meta?.auth) {
    const authStore = useAuthStore()
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: routerName().login });
    }
    // console.log(to.name);
  } else {
    next();
  }
})


export default router
