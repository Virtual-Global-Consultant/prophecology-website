<script setup>
import {useRoute} from "vue-router";

const props = defineProps(['title2', 'tbreak', 'info', 'icon'])
const route = useRoute()
</script>

<template>
    <div class="flex space-x-5 w-full justify-center md:justify-start">
        <img v-if="route.path.includes('reset')" :src=props.icon alt="icon" class="md:w-10">
        <p class="font-TruenoB text-center md:text-left text-xl lg:text-3xl lg:w-80 border border-transparent">
            <span> {{ props.title2 }} </span><br />
            {{ props.tbreak }}
        </p>
    </div>
</template>