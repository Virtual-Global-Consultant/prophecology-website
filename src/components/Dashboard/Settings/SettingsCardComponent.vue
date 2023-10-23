<script setup lang="ts">
const props = defineProps({
  title: String,
  info: String
})
</script>

<template>
  <div class="space-y-5">
    <div class="space-y-2">
      <h1 class="text-primary-blue text-lg">{{ props.title }}</h1>
      <p class="text-dim-gray text-sm lg:text-base">{{ props.info }}</p>
      <hr />
    </div>
    <div class="flex flex-col !space-y-4">
      <slot name="settingsCard"></slot>
    </div>
  </div>
</template>
