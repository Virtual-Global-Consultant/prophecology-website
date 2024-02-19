<script setup>

import { routerName } from '@/router';

const props = defineProps({
  statusIcon: String,
  viewIcon: String,
  title: String,
  info: String,
  programId: Number,
  data: Object,
  active: Boolean
})
</script>
<template> 
  <RouterLink v-if="data && programId" :to="{ name: routerName().getProgram, params: {stepId: data?.id, id:programId} }"
    :class="['w-full shadow-nav p-2 space-x-4 md:p-4 rounded-md flex items-center justify-between hover:shadow-dashboard transition-all ease-in-out duration-400', active ? 'bg-white': 'bg-white/50' ]"
  >
    <div class="flex items-center space-x-3">
      <img v-if="props.statusIcon" :src="props.statusIcon" alt="status icon" />
      <p class="font-TruenoB text-sm lg:text-xs">
        {{ data?.title ?? title }}
        <span class="ml-1 font-Trueno">{{ data?.description ?? info }}</span>
      </p>
    </div>
    <img v-if="props.viewIcon" :src="props.viewIcon" alt="view icon" />
  </RouterLink>

  <div v-else 
    class="w-full bg-white shadow-nav p-2 space-x-4 md:p-4 rounded-md flex items-center justify-between hover:shadow-dashboard transition-all ease-in-out duration-400"
  >
    <div class="flex items-center space-x-3">
      <img v-if="props.statusIcon" :src="props.statusIcon" alt="status icon" />
      <p class="font-TruenoB text-sm lg:text-xs">
        {{ data?.title ?? title }}
        <span class="ml-1 font-Trueno">{{ data?.description ?? info }}</span>
      </p>
    </div>
    <img v-if="props.viewIcon" :src="props.viewIcon" alt="view icon" />
  </div>
</template>
