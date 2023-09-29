<script setup>
</script>

<template>
     <div :class="['w-[45%] text-sm h-full bg-white rounded-lg px-16 py-16 xl:py-8 xl:px-8 2xl:w-[500px] ', $route.name === 'login' ? 'xl:py-16' : '']">
       <slot name="content"></slot>
    </div>
</template>