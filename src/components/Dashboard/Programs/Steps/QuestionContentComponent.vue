<script setup >
import { defineProps, defineEmits, ref } from 'vue';
import TextInput from '@/components/Dashboard/Programs/Steps/Questions/TextInput.vue';
import RadioInput from '@/components/Dashboard/Programs/Steps/Questions/RadioInput.vue';
import CheckboxInput from '@/components/Dashboard/Programs/Steps/Questions/CheckBoxInput.vue';
import SelectInput from '@/components/Dashboard/Programs/Steps/Questions/SelectInput.vue';
import ProgramToggleComponent from '@/components/Dashboard/Programs/ProgramToggleComponent.vue'

const props = defineProps({
  modelValue: Object,
  stepId: Number,
  currentProgramStepId: Number,
  show: {
    type: [Boolean],
    default: true
  },
});

const emit = defineEmits(['update:modelValue']);

const questionsData = ref(props.modelValue);

const getIndex = () => {
  console.log(questionsData.value);
  return questionsData.value.index ? questionsData.value.index instanceof Array ? questionsData.value.index : questionsData.value.index.split(',') : Object.keys(questionsData.value).filter(e => e != 'index')
}
</script>

<template>
  <div v-if="show" class="px-5 w-full">
    <div v-for="item in getIndex()" :key="item" class="mb-5">
      <div v-if="item.includes('content')">
        <!-- <option value="c-title">Title</option> 
        <option value="c-subtitle">Subtitle</option> 
        <option value="c-desc">Description</option> \
        <option value="c-subdesc">Sub-description</option> 
        <option value="c-image">Image</option> 
        <option value="c-map">Map</option> 
        <option value="c-video">Video</option> 
        <option value="c-drop">Dropdown</option> 
        <option value="c-doc">Document</option>  -->

        <div v-if="questionsData[item].answer_type == 'c-title'">
          <p class="font-bold text-lg">{{ questionsData[item].question }}</p>
        </div>
        <div v-if="questionsData[item].answer_type == 'c-subtitle'">
          <p class="text-lg">{{ questionsData[item].question }}</p>
        </div>

        <div v-if="questionsData[item].answer_type == 'c-desc'">
          <p class="font-TruenoSB text-base">{{ questionsData[item].question }}</p>
        </div>

        <div v-if="questionsData[item].answer_type == 'c-subdesc'">
          <p class="font-TruenoSB text-dim-gray">{{ questionsData[item].question }}</p>
        </div>

        <div v-if="questionsData[item].answer_type == 'c-drop'">
          <ProgramToggleComponent :title="questionsData[item].question">
            <template v-slot:toggleComponents>
              <QuestionContentComponent v-model="questionsData"/>
            </template>
          </ProgramToggleComponent>
        </div>

      </div>
      <div v-if="item.includes('question')">
        <p class="text-dim-gray">{{ questionsData[item].question }}</p>
        <!-- <option value="text" >Text</option> \
          <option value="radio">Radio button</option>
          <option value="checkbox">Checkbox</option>
          <option value="select">Select</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
          <option value="doc">Document</option>
          <option value="file">File</option> -->
        <div v-if="questionsData[item].answer_type == 'text'">
          <TextInput v-model="questionsData[item]" />
        </div>
        <div v-if="questionsData[item].answer_type == 'radio'">
          <RadioInput v-model="questionsData[item]" :options="questionsData[item]['answer-options']" />
        </div>
        <div v-if="questionsData[item].answer_type == 'checkbox'">
          <CheckboxInput v-model="questionsData[item]" :options="questionsData[item]['answer-options']" />
        </div>
        <div v-if="questionsData[item].answer_type == 'select'">
          <SelectInput v-model="questionsData[item]" :options="questionsData[item]['answer-options']" />
        </div>
      </div>
    </div>
    <button v-if="getIndex().filter(e => e.includes('question'))" class="lg:text-sm tracking-widest bg-gold px-4 py-2 lg:px-6 lg:py-2.5 xl:px-8 rounded-[7px]
        border border-gold hover:border-gold hover:bg-white hover:text-gold
        transition-all ease-in-out duration-300 flex items-center justify-center !text-xs h-fit text-white">
      Save and submit
    </button>
  </div>
</template>
