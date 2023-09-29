<script setup>
import { onMounted, ref } from "vue";
import BackIcon from "../Icons/BackIcon.vue"
import BgImage from "../../assets/img/background.svg"

const navHeight = ref(0)

onMounted(() => {
  console.log('DOM loaded');
  const navbar = document.querySelector(".shadow-nav");
  navHeight.value = navbar.offsetHeight;
  console.log(navHeight.value);
  return parseInt(navHeight)
});

</script>

<template>
    <div class="flex flex-col items-center md:justify-center m-auto !font-Trueno px-5 border overflow-auto py-10 space-y-7 " :style="{ height: `calc(100vh - ${navHeight}px)`, background: BgImage, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
      <div class="bg-gradient-to-r from-[#F2F2F2] to-[#F6F6F6] w-full lg:w-10/12 flex flex-col md:flex-row items-center md:pl-24 lg:pl-10 xl:pl-10 xl:w-8/12 2xl:w-[1200px] rounded-md overflow-hidden">
      <slot name="pages"></slot>
    </div>        
    <a href="https://www.prophecology.com" class="flex text-xs md:text-base items-center text-light-dark opacity-50 hover:text-gold transition-all ease-in-out duration-300"><BackIcon class="w-4 mr-3"/> Go to Prophecology </a>
  </div>
</template>
<style scoped>
  <!-- .bg-main {
    background-image: url(BgImage);
  } -->
</style>