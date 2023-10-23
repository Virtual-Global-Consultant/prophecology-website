<script setup>
import BackIcon from '../Icons/BackIcon.vue'
import { useRoute } from 'vue-router'

const showLink = useRoute().name !== 'dashboard'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center m-auto !font-Trueno px-5 mb-20 md:p-0 space-y-10 h-fit xl:w-10/12"
  >
    <div
      class="flex flex-col md:flex-row items-center mt-32 lg:mt-48 xl:mt-32 md:bg-gradient-to-r from-[#F2F2F2] to-[#F6F6F6] w-full min-[600px]:px-8 md:w-10/12 lg:w-10/12 md:pl-10 xl:pl-24 2xl:w-[1200px] rounded-md"
    >
      <slot name="pages"></slot>
    </div>
    <a
      v-if="showLink"
      href="https://www.prophecology.com"
      class="flex text-xs lg:text-base items-center text-light-dark opacity-50 hover:text-gold transition-all ease-in-out duration-300"
    >
      <BackIcon class="w-4 mr-3" />
      Go to Prophecology
    </a>
  </div>
</template>
