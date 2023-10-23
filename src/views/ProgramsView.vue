<script setup>
import ProgramToggleComponent from '@/components/Dashboard/Programs/ProgramToggleComponent.vue'
import LoadingIcon from '@/assets/img/red.svg'
import LoadingIconGreen from '@/assets/img/green.svg'
import ProgramCardComponent from '@/components/Dashboard/ProgramCardComponent.vue'
</script>
<template>
  <ProgramToggleComponent title="Incomplete Programs" value="02">
    <template v-slot:toggleComponents>
      <div class="lg:grid lg:grid-cols-2 lg:gap-2 xl:grid-cols-3">
        <ProgramCardComponent
          :icon="LoadingIcon"
          percentage="37"
          lastActivity="Yesterday"
          steps="2"
        />
        <ProgramCardComponent
          :icon="LoadingIconGreen"
          percentage="84"
          lastActivity="3 Days Ago"
          steps="4"
        />
      </div>
    </template>
  </ProgramToggleComponent>

  <!-- Upcoming Programs -->
  <ProgramToggleComponent title="Upcoming Programs" value="04">
    <template v-slot:toggleComponents>
      <div class="lg:grid lg:grid-cols-2 lg:gap-2 xl:grid-cols-3">
        <ProgramCardComponent
          :icon="LoadingIcon"
          percentage="37"
          lastActivity="Yesterday"
          steps="2"
        />
        <ProgramCardComponent
          :icon="LoadingIconGreen"
          percentage="84"
          lastActivity="3 Days Ago"
          steps="4"
        />
      </div>
    </template>
  </ProgramToggleComponent>

  <!-- Past Programs -->
  <ProgramToggleComponent title="Past Programs" value="02">
    <template v-slot:toggleComponents>
      <div class="lg:grid lg:grid-cols-2 lg:gap-2 xl:grid-cols-3">
        <ProgramCardComponent
          :icon="LoadingIcon"
          percentage="37"
          lastActivity="Yesterday"
          steps="2"
        />
        <ProgramCardComponent
          :icon="LoadingIconGreen"
          percentage="84"
          lastActivity="3 Days Ago"
          steps="4"
        />
        <ProgramCardComponent
          :icon="LoadingIconGreen"
          percentage="84"
          lastActivity="3 Days Ago"
          steps="4"
        />
        <ProgramCardComponent
          :icon="LoadingIconGreen"
          percentage="84"
          lastActivity="3 Days Ago"
          steps="4"
        />
      </div>
    </template>
  </ProgramToggleComponent>
</template>
