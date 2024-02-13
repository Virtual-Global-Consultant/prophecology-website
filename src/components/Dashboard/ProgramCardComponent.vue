<script setup lang="ts">
import ArrowToggleDownIcon from '../../assets/img/arrowToggleInactive.svg'
import ArrowToggleUpIcon from '../../assets/img/arrow-toggle-up-icon.svg'
import TaskCardComponent from '@/components/Program/TaskCardComponent.vue'
import CheckedIcon from '../../assets/img/checked-true.svg'
import UncheckedIcon from '../../assets/img/checked-false.svg'
import ViewIcon from '../../assets/img/arrow-view.svg'
import { ref } from 'vue'
import { routerName } from '@/router';

const showTask = ref(false)

const toggleShow = () => {
  showTask.value = !showTask.value
}

const props = defineProps({
  title: String,
  info: String,
  lastActivity: String,
  percentage: Number,
  stepCount: Number,
  steps: Array,
  icon: String,
  data: Object
})
</script>
<template>
  <div class="w-full bg-white mt-5 bg-opacity-30 space-y-5 rounded-md">
    <div class="tracking-wider bg-white space-y-5 rounded-md shadow-dboard p-3.5">
      <div class="flex items-center justify-between black">
        <p class="text-dim-gray lg:text-xs">Programs / Conference</p>
        <button @click="toggleShow" class="lg:w-7">
          <img v-if="!showTask" :src="ArrowToggleDownIcon" alt="arrow-down icon" />
          <img v-else :src="ArrowToggleUpIcon" alt="arrow-up icon" />
        </button>
      </div>
      <p class="font-TruenoB text-lg xl:text-sm">
        <RouterLink v-if="data?.steps.length > 0" :to="{ name: routerName().getProgram, params: {id: data?.id, stepId: data?.steps[0].id,} }">
          {{ data?.title ?? 'Summer Prophecology 2023: The Future Forward' }}
        </RouterLink>
        <span v-else>{{ data?.title ?? 'Summer Prophecology 2023: The Future Forward' }}</span>
      </p>
      <small class="text-dim-gray">Last Activity: {{ lastActivity }}</small>
      <hr />
      <div class="flex items-center justify-between xl:text-xs">
        <div class="flex space-x-4">
          <img :src="props.icon" alt="icon" width="0" />
          <p>{{ 0 }}% Completed</p>
        </div>
        <p>
          <span class="text-gold">{{ 0 }}</span
          >/{{ data?.steps_count }} Steps
        </p>
      </div>
    </div>
    <div v-if="showTask" class="p-3 space-y-3">
      <TaskCardComponent
      v-for="item in data?.steps"
        v-bind:key="item.id"
        :data="item"
        :programId="data?.id"
        :status-icon="UncheckedIcon"
        :view-icon="ViewIcon"
      />
      <TaskCardComponent v-if="data?.steps == 0"
        :status-icon="CheckedIcon"
        :view-icon="ViewIcon"
        title="Step 2"
        info="Confirm Prophecology Summer Conference 2023 Attendance"
      />
      <TaskCardComponent v-if="data?.steps == 0"
        :status-icon="UncheckedIcon"
        :view-icon="ViewIcon"
        title="Step 3"
        info="Confirm Archbishop E. Bernard Jordan's 64th Birthday Celebration Gala Attendance"
      />
      <TaskCardComponent v-if="data?.steps == 0"
        :status-icon="UncheckedIcon"
        :view-icon="ViewIcon"
        title="Step 4"
        info="Sign Your Agreements and Releases"
      />
      <TaskCardComponent v-if="data?.steps == 0"
        :status-icon="UncheckedIcon"
        :view-icon="ViewIcon"
        title="Step 5"
        info="Aims"
      />
    </div>
  </div>
</template>
