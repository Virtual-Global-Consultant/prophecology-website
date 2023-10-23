<script setup lang="ts">
const props = defineProps({
  icon: String,
  name: String,
  indicator: String
})

</script>
<template>
    <div
        class="flex items-center justify-between w-60 py-4 px-6 mb-3 bg-opacity-50 bg-white rounded-md hover:shadow-dashboard">
        <div class="flex space-x-5 items-center">
            <img :src="props.icon" alt="card icon" class="w-3 lg:w-4">
            <p>{{ props.name }}</p>
        </div>
        <img v-if="props.indicator" :src="props.indicator" alt="indicator">
    </div>
</template>