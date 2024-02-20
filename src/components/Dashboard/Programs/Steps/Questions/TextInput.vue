<script setup >
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  modelValue: Object
});

const emit = defineEmits(['update:modelValue']);

const localValue = ref(props.modelValue);

const updateParent = () => {
  emit('update:modelValue', localValue.value);
};
</script>

<template>
  <input v-model="localValue.answer" @input="updateParent"
              class="w-full mr-4 border border-mid-gray focus:border-gold transition-all ease-in-out duration-300 h-1/6 rounded-md p-3">
</template>
