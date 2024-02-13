<script setup>
import ProgramToggleComponent from '@/components/Dashboard/Programs/ProgramToggleComponent.vue'
import LoadingIcon from '@/assets/img/red.svg'
import LoadingIconGreen from '@/assets/img/green.svg'
import ProgramCardComponent from '@/components/Dashboard/ProgramCardComponent.vue'
import Api from '@/services/api';
import { errorLogger, appState, } from '@/services/app';
import ApiEndpoints from '@/services/api.endpoint';
import { ref } from 'vue';


const incompleteProgramsData = ref([])
const incompleteProgramsAppState = ref(appState().loading)
const incompleteProgramsErrorMessage = ref('')

const upcomingProgramsData = ref([])
const upcomingProgramsAppState = ref(appState().loading)
const upcomingProgramsErrorMessage = ref('')

const pastProgramsData = ref([])
const pastProgramsAppState = ref(appState().loading)
const pastProgramsErrorMessage = ref('')

Api.getData(ApiEndpoints.incompletePrograms).then(res => {
  const data = res.data;
  if (data.success) {
    incompleteProgramsData.value = data.data
    incompleteProgramsAppState.value = appState().idle
    incompleteProgramsErrorMessage.value = ''
  }
}).catch(error => {
  incompleteProgramsErrorMessage.value = appState().error
  errorLogger(error.response.data)
});

Api.getData(ApiEndpoints.upcomingPrograms).then(res => {
  const data = res.data;
  if (data.success) {
    upcomingProgramsData.value = data.data
    upcomingProgramsAppState.value = appState().idle
    upcomingProgramsErrorMessage.value = ''
  }
}).catch(error => {
  upcomingProgramsErrorMessage.value = appState().error
  errorLogger(error.response.data)
});

Api.getData(ApiEndpoints.pastPrograms).then(res => {
  const data = res.data;
  if (data.success) {
    pastProgramsData.value = data.data
    pastProgramsAppState.value = appState().idle
    pastProgramsErrorMessage.value = ''
  }
}).catch(error => {
  pastProgramsErrorMessage.value = appState().error
  errorLogger(error.response.data)
});

</script>
<template>
  <ProgramToggleComponent title="Incomplete Programs" :data="incompleteProgramsData" :state="incompleteProgramsAppState">
    <template v-slot:toggleComponents>
      <div class="lg:grid lg:grid-cols-2 lg:gap-2 xl:grid-cols-3 w-full">
        <ProgramCardComponent v-for="item in incompleteProgramsData" v-bind:key="item.id" :icon="LoadingIcon" :data="item"
          :percentage="37" lastActivity="Yesterday" />
      </div>
    </template>
  </ProgramToggleComponent>

  <!-- Upcoming Programs -->
  <ProgramToggleComponent title="Upcoming Programs" :data="upcomingProgramsData" :state="upcomingProgramsAppState">
    <template v-slot:toggleComponents>
      <div class="lg:grid lg:grid-cols-2 lg:gap-2 xl:grid-cols-3 w-full">
        <ProgramCardComponent v-for="item in upcomingProgramsData" v-bind:key="item.id" :icon="LoadingIcon" :data="item"
          :percentage="37" lastActivity="Yesterday" />
      </div>
    </template>
  </ProgramToggleComponent>

  <!-- Past Programs -->
  <ProgramToggleComponent title="Past Programs" :data="pastProgramsData" :state="pastProgramsAppState">
    <template v-slot:toggleComponents>
      <div class="lg:grid lg:grid-cols-2 lg:gap-2 xl:grid-cols-3 w-full">
        <ProgramCardComponent v-for="item in pastProgramsData" v-bind:key="item.id" :icon="LoadingIcon" :data="item"
          :percentage="37" lastActivity="Yesterday" />
      </div>
    </template>
  </ProgramToggleComponent>
</template>
