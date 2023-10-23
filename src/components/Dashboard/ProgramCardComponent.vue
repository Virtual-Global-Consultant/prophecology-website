<script setup lang="ts">
import ArrowToggleDownIcon from '../../assets/img/arrowToggleInactive.svg'
import ArrowToggleUpIcon from '../../assets/img/arrow-toggle-up-icon.svg'
import TaskCardComponent from '@/components/Program/TaskCardComponent.vue'
import CheckedIcon from '../../assets/img/checked-true.svg'
import UncheckedIcon from '../../assets/img/checked-false.svg'
import ViewIcon from '../../assets/img/arrow-view.svg'
import { ref } from 'vue'

const showTask = ref(false)

const toggleShow = () => {
  showTask.value = !showTask.value
}

const props = defineProps({
  title: String,
  info: String,
  lastActivity: String,
  percentage: Number,
  steps: Number,
  icon: String
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
        <RouterLink :to="{ name: 'intro' }">
          Summer Prophecology <br />
          2023: The Future Forward
        </RouterLink>
      </p>
      <small class="text-dim-gray">Last Activity: {{ lastActivity }}</small>
      <hr />
      <div class="flex items-center justify-between xl:text-xs">
        <div class="flex space-x-4">
          <img :src="props.icon" alt="icon" width="14" />
          <p>{{ props.percentage }}% Completed</p>
        </div>
        <p>
          <span class="text-gold">{{ props.steps }}</span
          >/5 Steps
        </p>
      </div>
    </div>
    <div v-if="showTask" class="p-3 space-y-3">
      <TaskCardComponent
        :status-icon="CheckedIcon"
        :view-icon="ViewIcon"
        title="Step 1"
        info=" Book Your Air Travel, Ground Transportation and Hotel"
      />
      <TaskCardComponent
        :status-icon="CheckedIcon"
        :view-icon="ViewIcon"
        title="Step 2"
        info="Confirm Prophecology Summer Conference 2023 Attendance"
      />
      <TaskCardComponent
        :status-icon="UncheckedIcon"
        :view-icon="ViewIcon"
        title="Step 3"
        info="Confirm Archbishop E. Bernard Jordan's 64th Birthday Celebration Gala Attendance"
      />
      <TaskCardComponent
        :status-icon="UncheckedIcon"
        :view-icon="ViewIcon"
        title="Step 4"
        info="Sign Your Agreements and Releases"
      />
      <TaskCardComponent
        :status-icon="UncheckedIcon"
        :view-icon="ViewIcon"
        title="Step 5"
        info="Aims"
      />
    </div>
  </div>
</template>
