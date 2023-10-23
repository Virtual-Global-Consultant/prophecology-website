<script setup lang="ts">
const props = defineProps({
  title: String,
  value: String
})
</script>

<template>
  <p class="border border-red-200 p-3 rounded-md flex items-center text-dim-gray">{{props.title}} <span
      class="font-bold ml-3 text-black">{{props.value}}</span></p>
</template>
