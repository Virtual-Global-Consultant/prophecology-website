<script setup lang="js">
import InputCheckboxComponent from '@/components/Input/InputCheckboxComponent.vue'

const props = defineProps({
  text: String
})
</script>

<template>
  <div class="flex space-x-3 items-center text-sm lg:text-base">
    <InputCheckboxComponent type="checkbox" />
    <p>{{ props.text }}</p>
  </div>
</template>
