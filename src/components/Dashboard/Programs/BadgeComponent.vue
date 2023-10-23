<script setup lang="ts">
const props = defineProps({ title: String })
</script>

<template>
  <small class="lg:text-xxs bg-gold bg-opacity-20 h-fit rounded-md py-1 px-2">{{
    props.title
  }}</small>
</template>
