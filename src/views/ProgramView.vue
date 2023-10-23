<script setup lang="js">
import LoadingIcon from '@/assets/img/red.svg'

import { useRoute } from 'vue-router'
import CheckedIcon from '@/assets/img/checked-true.svg'
import ViewIcon from '@/assets/img/arrow-view.svg'
import UncheckedIcon from '@/assets/img/checked-false.svg'
import TaskCardComponent from '@/components/Program/TaskCardComponent.vue'
import ArrowToggleLeft from '@/assets/img/arrow-toggle-left.svg'
import ArrowToggleRight from '@/assets/img/arrow-toggle-right.svg'

const route = useRoute()
</script>
<template>
  <div class="flex justify-center py-32 md:py-44 lg:!py-32 font-Trueno">
    <div class="px-5 md:p-0 md:w-9/12 xl:w-[1000px] space-y-10">
      <p class="tracking-wide capitalize">
        <RouterLink :to="{ name: 'summary' }">Dashboard</RouterLink> /
        <span class="text-dim-gray">{{ route.name }}</span>
      </p>
      <div class="space-y-4">
        <div class="bg-white flex p-4 lg:px-14 rounded-md space-x-5 w-full justify-between">
          <p class="font-bold lg:text-xl xl:w-80">Summer Prophecology 2023:The Future Forward</p>
          <div class="flex text-xs items-center justify-end space-x-3 w-1/2 lg:w-44">
            <img :src="LoadingIcon" alt="icon" class="w-4 lg:w-5" />
            <p class="lg:text-lg">37% Completed</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-5 tracking-wide">
          <!-- Left side -->
          <div class="w-full lg:w-6/12">
            <RouterLink :to="{ name: 'intro' }">
              <TaskCardComponent
                class="mb-1.5"
                :status-icon="CheckedIcon"
                :view-icon="ViewIcon"
                title="Introduction "
                info="Book Your Air Travel, Ground Transportation and Hotel"
              />
            </RouterLink>
            <RouterLink :to="{ name: 'itinerary' }">
              <TaskCardComponent
                class="mb-1.5"
                :status-icon="CheckedIcon"
                :view-icon="ViewIcon"
                title="Conference Itinerary"
                info="Find out all the the dates, locations and information's"
              />
            </RouterLink>
            <RouterLink :to="{ name: 'first' }">
              <TaskCardComponent
                class="mb-1.5"
                :status-icon="CheckedIcon"
                :view-icon="ViewIcon"
                title="Step 1:"
                info=" Book Your Air Travel, Ground Transportation and Hotel"
              />
            </RouterLink>
            <RouterLink :to="{ name: 'second' }">
              <TaskCardComponent
                class="mb-1.5"
                :status-icon="CheckedIcon"
                :view-icon="ViewIcon"
                title="Step 2:"
                info="Confirm Prophecology Summer Conference 2023 Attendance"
              />
            </RouterLink>
            <RouterLink :to="{ name: 'third' }">
              <TaskCardComponent
                class="mb-1.5"
                :status-icon="UncheckedIcon"
                :view-icon="ViewIcon"
                title="Step 3:"
                info="Confirm Archbishop E. Bernard Jordan's 64th Birthday Celebration Gala Attendance"
              />
            </RouterLink>
            <RouterLink :to="{ name: 'fourth' }">
              <TaskCardComponent
                class="mb-1.5"
                :status-icon="UncheckedIcon"
                :view-icon="ViewIcon"
                title="Step 4:"
                info="Sign Your Agreements and Releases"
              />
            </RouterLink>
            <RouterLink :to="{ name: 'fifth' }">
              <TaskCardComponent
                class="mb-1.5"
                :status-icon="UncheckedIcon"
                :view-icon="ViewIcon"
                title="Step 5:"
                info="Aims"
              />
            </RouterLink>
          </div>
          <!-- Left side end -->
          <!-- Right side -->
          <RouterView />
          <!-- Right side end -->
        </div>
      </div>
    </div>
  </div>
</template>
