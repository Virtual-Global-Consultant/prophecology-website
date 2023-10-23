<script setup lang="ts">
const props = defineProps({
  number: String,
  title: String
})
</script>
<template>
  <div
    class="font-Trueno flex items-center md:justify-start space-x-5 lg:space-x-2 tracking-wide leading-4 lg:leading-3 bg-dim-gray bg-opacity-10 rounded-md xl:w-52 p-4 md:p-2"
  >
    <p class="text-4xl xl:text-4xl text-gold">{{ props.number }}</p>
    <p class="lg:w-1/2 text-dim-gray lg:text-xs">{{ props.title }}</p>
  </div>
</template>
