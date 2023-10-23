<script setup lang="ts">
import DefaultProgramPageComponent from '@/components/Dashboard/Programs/DefaultProgramPageComponent.vue'
</script>
<template>
  <DefaultProgramPageComponent
    desc="Prophetic Insights for Tomorrow’s Leaders"
    route-title="Back"
    route-title2="Step 1:"
    route-name="dashboard"
    route-name2="first"
    route-info="to Dashboard"
    route-info2="Book Your Air Travel, Ground Transportation and Hotel"
  >
    <template v-slot:programTemplate>
      <div class="lg:flex space-y-4 lg:space-y-0 lg:space-x-5">
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
      </div>
    </template>
  </DefaultProgramPageComponent>
</template>
