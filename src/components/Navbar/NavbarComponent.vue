<script setup>
import BackIcon from '../Icons/BackIcon.vue'
import HamburgerIcon from '../Icons/HamburgerIcon.vue'
import CloseIcon from '../Icons/CloseIcon.vue'
import Button from '../Button/ButtonComponent.vue'
import ButtonWhite from '../Button/ButtonWhiteComponent.vue'
import { ref } from 'vue'
import ProfileImage from '../../assets/img/user-img.png'
import ArrowDownIcon from '../Icons/ArrowDownIcon.vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { routerName } from '@/router'

const authStore = useAuthStore()

const toggle = ref(false)
const route = useRoute()
const toggleNav = () => {
  toggle.value = !toggle.value
}
</script>

<template>
  <div
    class="shadow-nav flex items-center fixed w-full bg-white justify-between m-auto px-10 font-Trueno py-3 md:px-10 md:justify-center md:space-x-32 xl:space-x-44"
  >
    <!-- back icon and link -->
    <a
      href="https://www.prophecology.com"
      class="hidden md:flex items-center md:text-xs lg:text-sm text-light-dark opacity-50 hover:text-gold transition-all ease-in-out duration-300"
    >
      <BackIcon class="md:w-1/12 mr-3" />
      Back to Prophecology.com
    </a>
    <!-- logo -->
    <img
      class="w-4/12 md:w-2/12 xl:!w-32 2xl:w-52"
      src="@/assets/img/logo.svg"
      alt="Prophecology Logo"
    />
    <!-- register and login button / hamburger icon-->
    <div class="md:hidden">
      <button @click="toggleNav">
        <HamburgerIcon class="hover:text-gold transition-all ease-in-out duration-300" />
      </button>
      <!-- toggle menu -->
      <div
        v-if="toggle"
        class="absolute px-8 py-5 bg-gold h-screen top-0 left-0 w-full space-x-5 border z-10"
      >
        <div class="flex flex-col justify-between h-full">
          <div class="flex justify-between">
            <a
              href="https://www.prophecology.com"
              class="flex items-center text-xs text-light-dark opacity-50 hover:opacity-100 hover:text-white transition-all ease-in-out duration-300"
            >
              <BackIcon class="mr-3 w-4" />
              Back to Prophecology.com
            </a>
            <button @click="toggleNav">
              <CloseIcon
                class="border-2 rounded-md border-black hover:border-white hover:fill-white transition-all duration-300 ease-in-out"
              />
            </button>
          </div>
          <div class="border">
            <p>home</p>
            <p>home</p>
          </div>
          <div v-if="!authStore.isAuthenticated" class="flex justify-center space-x-10">
            <Button name="Register" :route="routerName().register" />
            <ButtonWhite name="Login" :route="routerName().register" />
          </div>
          <div v-else class="flex items-center space-x-3">
            <div class="w-9 h-9">
              <img :src="authStore.user.avatar_url" alt="" />
            </div>
            <p>{{ authStore.fullName }}</p>
            <button>
              <ArrowDownIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden items-center md:flex w-fit space-x-3">
      <div v-if="!authStore.isAuthenticated" class="flex space-x-4">
        <Button name="Register" :route="routerName().register" />
        <ButtonWhite name="Login" :route="routerName().login" />
      </div>
      <!-- user profile menu toggle -->
      <div v-else class="flex items-center space-x-3">
        <div class="w-9 h-9">
          <img :src="authStore.user.avatar_url" alt="user profile image" class="rounded-full" />
        </div>
        <p class="md:text-xs lg:text-sm">{{ authStore.fullName }}</p>
        <button>
          <ArrowDownIcon class="md:w-5 lg:w-9" />
        </button>
      </div>
    </div>
  </div>
</template>
