<script setup>

</script>

<template>
    <div class="px-10 border border-black">
        <div class="bg-white bg-opacity-30 rounded-md my-5">
            <div class="bg-white flex justify-between items-center px-5 py-3 rounded-md">
                <p class="font-TruenoB">Incomplete programs <span class="ml-3 text-gold">(02)</span></p>
                <button @click="toggleShow">
                    <img v-if="showTasks" :src="ArrowToggleUpIcon" alt="arrow up">
                    <img v-else :src="ArrowToggleDownIcon" alt="arrow down">
                </button>
            </div>
            <slot name="task"></slot>
        </div>
    </div>
</template>