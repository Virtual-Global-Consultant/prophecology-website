<script setup>
const props = defineProps(['name', 'route', 'customClass'])
</script>

<template>
    <!-- button with default styles -->
    <button :class="['text-xxs lg:text-sm tracking-widest bg-white px-4 py-2 lg:px-6 lg:py-2.5 xl:px-8 rounded-[7px] \
        border border-gold hover:border-gold hover:bg-gold text-gold hover:text-white \
        transition-all ease-in-out duration-300 flex items-center justify-center', 
        props.customClass]" @click="$router.push(props.route)">
        {{ props.name }}
    </button>
</template>