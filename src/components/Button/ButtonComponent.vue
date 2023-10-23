<script setup lang="js">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  customClass: String,
  name: String,
  route: String
})
</script>

<template>
  <!-- button with default styles -->
  <button
    :class="[
      '\ text-xs lg:text-sm tracking-widest bg-gold px-4 lg:px-6 lg:py-2.5 xl:px-8\
        rounded-[7px] text-white border border-gold hover:border-light-gold \
        hover:bg-white hover:text-gold transition-all ease-in-out duration-300 \
        flex items-center justify-center ',
      props.customClass
    ]"
    @click="router.push(props?.route)"
  >
    {{ props.name }}
  </button>
</template>
