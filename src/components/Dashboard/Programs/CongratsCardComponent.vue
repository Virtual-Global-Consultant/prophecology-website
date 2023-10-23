<script setup lang="ts">
import SuccessIcon from '@/components/Icons/SuccessIcon.vue'
import ButtonWhiteComponent from '@/components/Button/ButtonWhiteComponent.vue'
const props = defineProps({ value: Number })
</script>

<template>
  <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 p-5">
    <SuccessIcon />
    <div class="space-y-3">
      <p class="flex flex-col text-lg md:text-xl font-bold tracking-wider">
        <span class="text-gold font-bold">Congratulations!</span> You’ve complete the Step
        {{ props.value }}.
      </p>
      <p class="text-dim-gray md:w-8/12">
        Please click the Mark Complete button to save your progress
      </p>
      <div
        class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between md:items-center"
      >
        <ButtonWhiteComponent
          name="Mark Complete"
          class="font-bold !text-xs border-2 md:w-4/12 !p-4 md:h-fit md:!p-2"
        />
        <p class="text-dim-gray md:w-2/4">
          Click the button below to proceed to Step 2 to continue.
        </p>
      </div>
    </div>
  </div>
</template>
