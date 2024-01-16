<script setup lang="ts">
import IconTextComponent from './IconTextComponent.vue';
import {useRoute, useRouter} from "vue-router";

const {name, path} = useRoute()
const {push} = useRouter()
const props = defineProps({
  title: String,
  title2: String,
  tbreak: String,
  info:String,
  icon: Image})

const register = name === 'register'
</script>

<template>
  <div class="lg:w-1/3 md:mr-5 lg:mr-20 w-full md:w-5/12 mb-7">
    <div class="space-y-6">
      <p class="text-dim-gray text-center md:text-left">{{ props.title }}</p>
      <div :class="[path.includes('reset') ? 'flex space-x-10' : '']">
       <IconTextComponent :icon="icon" :title2="title2" :tbreak="tbreak"/>
      </div>
      <p class="hidden md:block text-dim-gray w-10/12 lg:w-80">
        {{ props.info }}
      </p>
    </div>
    <p v-if="register || path === '/login'" class="hidden md:block mt-16">
      {{ register ? 'Already a member?' : 'Not a member?' }}
      <span @click="register ? push('/login') : push('/register')"
        class="font-bold border-b-2 border-black hover:text-gold hover:border-gold transition-all ease-in-out duration-300 cursor-pointer">{{
          register ? 'Login' : 'Create an Account' }}</span>
    </p>
  </div>
</template>
