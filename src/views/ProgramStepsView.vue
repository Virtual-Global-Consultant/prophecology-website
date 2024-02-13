<script setup lang="js">
import LoadingIcon from '@/assets/img/red.svg'

import { useRoute } from 'vue-router'
import CheckedIcon from '@/assets/img/checked-true.svg'
import ViewIcon from '@/assets/img/arrow-view.svg'
import UncheckedIcon from '@/assets/img/checked-false.svg'
import TaskCardComponent from '@/components/Program/TaskCardComponent.vue'
import ArrowToggleLeft from '@/assets/img/arrow-toggle-left.svg'
import ArrowToggleRight from '@/assets/img/arrow-toggle-right.svg'
import Api from '@/services/api';
import { errorLogger, appState, } from '@/services/app';
import ApiEndpoints from '@/services/api.endpoint';
import { ref } from 'vue';

const route = useRoute()

const programData = ref()
const programAppState = ref(appState().loading)
const programErrorMessage = ref('')

console.log(route.params.id)

Api.getData(ApiEndpoints.getProgram(route.params.id)).then(res => {
  const data = res.data;
  if (data.success) {
    programData.value = data.data
    programAppState.value = appState().loaded
    programErrorMessage.value = ''
  }
}).catch(error => {
  programAppState.value = appState().error
  programErrorMessage.value = ''
  errorLogger(error.response.data)
});
</script>
<template>
  <div class="flex justify-center py-32 md:py-44 lg:!py-32 font-Trueno">
    <div class="px-5 md:p-0 md:w-9/12 xl:w-[1000px] space-y-10">
      <p class="tracking-wide capitalize">
        <RouterLink :to="{ name: 'summary' }">Dashboard</RouterLink> /
        <span class="text-dim-gray">{{ programData?.title }}</span>
      </p>
      <div v-if="programAppState == appState().loading"
        class=" flex justify-center items-center w-full bg-white p-4 lg:px-14 rounded-md space-x-5 h-full">
        <span>
          <svg aria-hidden="true" :class="['inline w-8 h-8 text-white/30 animate-spin fill-gold']" viewBox="0 0 100 101"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>

        </span>
      </div>
      <div v-if="programAppState == appState().loaded" class="space-y-4">
        <div class="bg-white flex p-4 lg:px-14 rounded-md space-x-5 w-full justify-between">
          <p class="font-bold lg:text-xl xl:w-80">{{ programData?.title }}</p>
          <div class="flex text-xs items-center justify-end space-x-3 w-1/2 lg:w-44">
            <img :src="LoadingIcon" alt="icon" class="w-4 lg:w-5" />
            <p class="lg:text-lg">37% Completed</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-5 tracking-wide">
          <!-- Left side -->
          <div class="w-full lg:w-6/12">
            <TaskCardComponent class="mb-1.5" v-for="item in programData?.steps" v-bind:key="item.id" :data="item"
              :programId="programData?.id" :status-icon="UncheckedIcon" :view-icon="ViewIcon" />

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
