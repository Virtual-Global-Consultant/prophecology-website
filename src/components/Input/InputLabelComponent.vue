<script setup lang="ts">
import InputComponent from './InputComponent.vue'

const props = defineProps({
  label: String,
  placeholder: String,
  for: String,
  lastname: String,
  type: String,
  value: String
})
</script>

<template>
  <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
    <label :for="props.for ?? ''" class="text-dim-gray"
      >{{ props.label }}
      <i v-if="props.label && props.label.includes('Last')" class="text-sm xl:text-xs"
        >(This field may be seen by everyone)</i
      >
    </label>
    <InputComponent :type="props.type" :placeholder="props.placeholder" :value="props.value" />
  </div>
</template>
