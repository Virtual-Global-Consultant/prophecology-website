<script setup lang="ts">
import ProgramCard from '../components/Dashboard/ProgramCardComponent.vue'
import SummaryCard from '../components/Dashboard/SummaryCardComponent.vue'
import LoadingIcon from '../assets/img/red.svg'
import LoadingIconGreen from '../assets/img/green.svg'
</script>
<template>
  <div class="flex flex-col space-y-10 lg:space-y-0 lg:flex-row mt-5 lg:space-x-5">
    <div class="w-full xl:!w-[450px]">
      <p class="text-base xl:text-xs">Incomplete Programs</p>

      <ProgramCard :icon="LoadingIcon" :percentage="37" lastActivity="Yesterday" :steps="2" />
      <ProgramCard :icon="LoadingIconGreen" :percentage="84" lastActivity="3 Days Ago" :steps="4" />
    </div>
    <div class="w-full">
      <p class="text-base xl:text-xs">Account Overview</p>
      <div class="bg-white rounded-lg mt-5 p-3">
        <div>
          <p class="text-dim-gray mb-3 xl:text-xs">Programs Summary</p>
          <div class="flex flex-col gap-2 w-full xl:flex-row xl:flex-wrap">
            <SummaryCard
              class="!bg-gold !bg-opacity-10"
              number="02"
              title="Incomplete Programmes"
            />
            <SummaryCard number="03" title="Recommended Programmes" />
            <SummaryCard number="12" title="Program Certificates" />
            <SummaryCard number="14" title="Total Programmes" />
          </div>
        </div>
        <div class="mt-5 space-y-3 lg:text-xs">
          <div class="flex justify-between">
            <p class="text-dim-gray">Notifications & Updates</p>
            <a href="#" class="text-gold">View All</a>
          </div>
          <div class="text-center p-3 rounded-lg bg-dim-gray bg-opacity-10 h-44">
            <p class="text-dim-gray">Summer Prophecology 2023: The Future Forward</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
