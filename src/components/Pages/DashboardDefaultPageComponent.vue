<script setup lang="ts">
import SummaryIcon from '../../assets/img/Dashboard/summary.png'
import ProgramIcon from '../../assets/img/Dashboard/courses-ico.png'
import ProfileIcon from '../../assets/img/Dashboard/settings.png'
import NotificationIcon from '../../assets/img/Dashboard/notification.png'
import IndicatorIcon from '../../assets/img/indicator.png'
import LogoutIcon from '../../assets/img/logout-icon.svg'
import DashboardCardComponent from '../Dashboard/DashboardCardComponent.vue'
import DashboardRightComponent from '../Dashboard/DasboardRightComponent.vue'
import { ref } from 'vue'
import RightArrowIcon from '@/components/Icons/RightArrowIcon.vue'
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon.vue'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()


const currentDayTime = ref('')
const toggleSideBar = ref('hidden')
const title = ref('Show')
function getTimeOfDay() {
  const currentHour = new Date().getHours()
  if (currentHour >= 5 && currentHour < 12) {
    currentDayTime.value = 'Morning!'
  } else if (currentHour >= 12 && currentHour < 17) {
    currentDayTime.value = 'Afternoon!'
  } else {
    currentDayTime.value = 'Evening!'
  }
}
getTimeOfDay()
const toggle = (): String => {
  if (toggleSideBar.value === 'hidden') {
    title.value = 'Hide'
    return (toggleSideBar.value = '')
  } else {
    title.value = 'Show'
    return (toggleSideBar.value = 'hidden')
  }
}
</script>

<template>
  <div class="md:flex md:justify-center md:items-start px-5 m-auto 2xl:w-[1200px]">
    <!-- Left Side -->
    <!-- Show / hide Sidebar-->
    <button
      class="flex items-center hover:last:bg-white md:hidden fixed left-0 top-[9%] ml-2 p-2 bg-opacity-30 hover:bg-opacity-70 transition-all ease-in-out duration-500 rounded-sm bg-gold"
      @click="toggle"
    >
      <RightArrowIcon v-if="toggleSideBar.length > 4" />
      <LeftArrowIcon v-else />
      {{ title }} Menu
    </button>
    <!-- Show / hide Sidebar End-->

    <div
      :class="[
        toggleSideBar,
        'fixed left-0 md:static bg-dim-white px-4 pt-10 md:flex flex-col justify-between space-y-5 rounded-lg md:mr-5'
      ]"
    >
      <div class="space-y-5 mb-20">
        <div class="pl-8">
          <img  class="w-14 h-14 rounded-full mb-3" :src="authStore.user.avatar_url" alt="user profile image" />
          <p class="font-TruenoB">Good {{ currentDayTime }}</p>
          <p>{{ authStore.fullName }}</p>
        </div>
        <div>
          <RouterLink :to="{ name: 'summary' }" active-class="shadow-dashboard bg-opacity-100">
            <DashboardCardComponent :icon="SummaryIcon" name="Summary" class="" />
          </RouterLink>
          <RouterLink :to="{ name: 'programs' }" active-class="shadow-dashboard bg-opacity-100">
            <DashboardCardComponent
              :icon="ProgramIcon"
              name="Programs"
              :indicator="IndicatorIcon"
            />
          </RouterLink>
          <RouterLink :to="{ name: 'settings' }" active-class="shadow-dashboard bg-opacity-100">
            <DashboardCardComponent :icon="ProfileIcon" name="Profile Settings" />
          </RouterLink>
          <RouterLink
            :to="{ name: 'notifications' }"
            active-class="shadow-dashboard bg-opacity-100"
          >
            <DashboardCardComponent
              :icon="NotificationIcon"
              name="Notifications"
              :indicator="IndicatorIcon"
            />
          </RouterLink>
        </div>
      </div>
      <RouterLink :to="{ name: 'login' }">
        <DashboardCardComponent class="!mb-3" :icon="LogoutIcon" name="Logout" />
      </RouterLink>
    </div>
    <!-- Left Side End -->

    <!-- Right Side -->
    <DashboardRightComponent>
      <template v-slot:dashboard>
        <RouterView />
      </template>
    </DashboardRightComponent>
    <!-- Right Side End -->
  </div>
</template>
