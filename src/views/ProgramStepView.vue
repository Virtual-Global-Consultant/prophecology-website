<script setup>
import { appState, } from '@/services/app';
import ArrowToggleLeft from '@/assets/img/arrow-toggle-left.svg'
import ArrowToggleRight from '@/assets/img/arrow-toggle-right.svg'
import { useProgramStore } from '@/stores/program';
import QuestionContentComponent from '@/components/Dashboard/Programs/Steps/QuestionContentComponent.vue';
import TaskCardComponent from '@/components/Program/TaskCardComponent.vue'

const programStore = useProgramStore()

</script>
<template>
  <div v-if="programStore.stepAppState == appState().loading" class=" flex justify-center items-center w-full">
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

  <div class="w-full space-y-5" v-if="programStore.stepAppState == appState().loaded">
    <div class="bg-dim-white rounded-md w-full pb-5">
      <div class="bg-white p-5 rounded-md space-y-4 mb-6">
        <!-- <p
          class="text-black"
        >
          Summer Prophecology 2023 Theme: The Future Forward
        </p> -->
        <div class="flex items-center justify-between">
          <p class="text-primary-blue lg:!text-lg">
            <span class="font-TruenoB">{{ programStore.stepData.title }}</span> {{ programStore.stepData.description }}
          </p>
          <button class="text-xxs lg:text-sm tracking-widest bg-white px-4 py-2 lg:px-6 lg:py-2.5 xl:px-8 rounded-[7px]
        border border-gold hover:border-gold hover:bg-gold text-gold hover:text-white
        transition-all ease-in-out duration-300 flex items-center justify-center !text-xs h-fit">
            Save Progress
          </button>

        </div>
      </div>
      <div>
        <QuestionContentComponent v-for="item in programStore.programData?.steps" v-bind:key="item.id" v-model="programStore.answers.value[item.id]" :stepId="item.id" :currentProgramStepId="programStore.currentProgramStepId" :show="programStore.currentProgramStepId == item.id"/>
      </div>

      <!-- <div class="px-10 mt-5 space-y-3">
        <p>Please complete the following by telling us about your accommodations*:</p>
        <label class="flex items-center text-sm">
          <input type="radio" class="mr-4" />
          Main Hotel: The LaGuardia Plaza Hotel 104-04Blvd., East Elmhurst, NY 11369 </label><label
          class="flex items-center text-sm">
          <input type="radio" class="mr-4" />
          Secondary Hotel: The Hampton Inn New York LaGuardia Airport Hotel 102-40 Ditmars
          Boulevard, Queens, NY, 11369, US </label><label class="flex items-center text-sm text-dim-gray">
          <input type="radio" class="mr-4" />
          I'll be staying somewhere else
        </label>
      </div>
      <div class="px-5 flex flex-col space-y-4 md:space-y-0 md:flex-row items-center mt-6 md:space-x-5">
        <ButtonComponent name="Save and Submit" class="w-fit !p-3 !text-xs" />
        <p class="text-red-600">Please select where you stay to proceed.</p>
      </div>
      <div class="px-5 lg:flex space-y-4 lg:space-y-0 lg:space-x-5">
        <div class="space-y-5 lg:w-1/2">
          <p class="font-bold">
            Welcome to the Summer Prophecology 2023 conference, where our theme is “Future Forward:
            Prophetic Insights for Tomorrow’s Leaders.” As we gather here today, we are excited to
            explore the prophetic insights that will shape the future for tomorrow’s leaders.
          </p>
          <p class="font-TruenoSB">
            Our speakers and workshops will provide valuable insights and practical tools to help
            you navigate the challenges and opportunities of the future. We believe that prophetic
            insights are essential for leaders who want to stay ahead of the curve and make a
            positive impact on the world. Through our sessions, you will gain a deeper understanding
            of the trends shaping the future, and how you can use these insights to lead with
            confidence and clarity.
          </p>
        </div>
        <div class="space-y-5 lg:w-1/2">
          <p class="font-TruenoSB">
            Our goal is to equip you with the knowledge and skills you need to be a visionary leader
            in your field, and to help you make a meaningful difference in the world. We look
            forward to sharing this exciting journey with you as we explore the future forward and
            discover the prophetic insights that will shape tomorrow’s leaders.
          </p>
          <p class="bg-gold bg-opacity-30 rounded-md p-5 text-slate-800">
            Please take a few moments to accurately plan and prepare for an unforgettable
            experience. If at any time you have additional questions, please contact our Partner
            Care line at
            <b>888-831-0434</b>.
          </p>
          <p class="order-5 font-TruenoSB">
            Planning now will help you gain the most value and help us prepare an intimate
            experience tailored just for you.
          </p>
        </div>
      </div> -->
    </div>

    <!-- Navigator   -->
    <div class="flex items-center gap-5 flex-col md:flex-row">
      <TaskCardComponent v-if="programStore.previousStepData" class="p-4" :status-icon="ArrowToggleLeft" :data="programStore.previousStepData"
              :programId="programStore.programData?.id"/>
      <TaskCardComponent v-if="programStore.nextStepData" class="p-4" :view-icon="ArrowToggleRight" :data="programStore.nextStepData"
              :programId="programStore.programData?.id" />
    </div>
  </div>
</template>
