<script setup>
import InputComponent from './InputComponent.vue';

const inputProps = defineProps(['label', 'placeholder', 'for', 'lastname', 'type'])
</script>

<template>
    <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
        <label :for="inputProps.for ?? ''" class="text-dim-gray">{{ inputProps.label }} <i v-if="inputProps.label && inputProps.label.includes('Last')" class="text-sm xl:text-xs">(This field may be seen by everyone)</i> </label>
        <InputComponent :type="inputProps.type" :placeholder="inputProps.placeholder"/>
    </div>
</template>