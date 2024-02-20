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
  <label class="flex items-center text-sm"
  v-for="option in (options.index?.split(',') ?? Object.keys(options).filter(e => e != 'index'))"
              :key="option" :for="option"
  >
    <input :id="option" v-model="localValue.answer" @input="updateParent" type="checkbox" class="mr-4" :value="option"/>
    {{ options[option] }}
  </label>
</template>
