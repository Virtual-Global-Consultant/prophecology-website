<script setup >
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: [Object],
    required: true
  },
  options: {
    type: [Object],
    required: true
  },
});

const emit = defineEmits(['update:modelValue']);

const localValue = ref(props.modelValue);

const updateParent = () => {
  emit('update:modelValue', localValue.value);
};

</script>

<template>
  <select v-model="localValue.answer" @input="updateParent"
    class="w-full mr-4 border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 h-1/6 rounded-md p-3">
    <option v-for="option in (options.index?.split(',') ?? Object.keys(options).filter(e => e != 'index'))" :key="option">
      {{ options[option] }}
    </option>
  </select>
</template>
