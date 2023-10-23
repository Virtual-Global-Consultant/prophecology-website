<script setup lang="ts">
import BadgeComponent from '@/components/Dashboard/Programs/BadgeComponent.vue'

const props = defineProps({
  from: String,
  to: String,
  title: String,
  mBadge: String,
  bBadge: String,
  desc: String
})
</script>

<template>
  <div
    class="bg-dim-white w-full flex flex-col md:flex-row font-Trueno rounded-md border border-dim-gray border-opacity-20 shadow-dboard"
  >
    <div
      class="bg-white lg:text-sm w-full md:w-4/12 lg:w-5/12 xl:w-28 font-TruenoB text-center md:text-end md:flex md:flex-col md:justify-center p-3 rounded-md"
    >
      <p>{{ props.from }}</p>
      <p>{{ props.to }}</p>
    </div>
    <div class="p-3 space-y-2">
      <p class="lg:text-sm font-TruenoB">{{ props.title }}</p>
      <div class="space-y-4">
        <p class="lg:text-xs">{{ props.desc }}</p>
        <div class="flex space-x-5">
          <BadgeComponent v-if="props.mBadge" :title="props.mBadge" />
          <BadgeComponent
            v-if="props.bBadge"
            class="!bg-dim-gray !bg-opacity-30"
            :title="props.bBadge"
          />
        </div>
      </div>
    </div>
  </div>
</template>
