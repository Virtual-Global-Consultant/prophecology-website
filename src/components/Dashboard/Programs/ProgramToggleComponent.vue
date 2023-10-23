<script setup lang="ts">
import ArrowToggleUpIcon from '@/assets/img/arrow-toggle-up-icon.svg'
import ArrowToggleDownIcon from '@/assets/img/arrowToggleInactive.svg'
import { ref } from 'vue'

const props = defineProps({
  title: String,
  value: String
})

const showTasks = ref(false)

const toggleShow = () => {
  showTasks.value = !showTasks.value
}
</script>

<template>
  <div class="px-5 w-full">
    <div class="bg-white bg-opacity-60 rounded-md my-2">
      <div class="bg-white flex justify-between items-center px-5 py-3 rounded-md">
        <button @click="toggleShow" class="flex justify-between items-center w-full">
          <p class="font-TruenoB text-xs lg:text-sm text-start w-10/12 md:w-full">
            {{ props.title }}
            <span v-if="props.value" class="ml-3 text-gold">({{ props.value }})</span>
          </p>
          <img v-if="showTasks" :src="ArrowToggleUpIcon" alt="arrow up" />
          <img v-else :src="ArrowToggleDownIcon" alt="arrow down" class="w-5 md:w-7" />
        </button>
      </div>
      <div
        v-if="showTasks"
        class="flex flex-wrap justify-around md:justify-start py-3 px-3 lg:px-3"
      >
        <slot name="toggleComponents"></slot>
      </div>
    </div>
  </div>
</template>
