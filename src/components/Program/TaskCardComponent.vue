<script setup lang="js">
const props = defineProps({
  statusIcon: String,
  viewIcon: String,
  title: String,
  info: String
})
</script>
<template>
  <div
    class="w-full bg-white shadow-nav p-2 space-x-4 md:p-4 rounded-md flex items-center justify-between hover:shadow-dashboard transition-all ease-in-out duration-400"
  >
    <div class="flex items-center space-x-3">
      <img v-if="props.statusIcon" :src="props.statusIcon" alt="status icon" />
      <p class="font-TruenoB text-sm lg:text-xs">
        {{ props.title }}
        <span class="ml-1 font-Trueno">{{ props.info }}</span>
      </p>
    </div>
    <img v-if="props.viewIcon" :src="props.viewIcon" alt="view icon" />
  </div>
</template>
