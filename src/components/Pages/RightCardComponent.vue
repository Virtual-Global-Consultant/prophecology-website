<script setup lang="ts">

import {useRoute} from "vue-router";
enum Reg {
  already = 'Already a member?',
  newMember = 'Not a member?'
}

const register = useRoute().name === 'register'
const login = useRoute().name === 'login'
console.log(register)
</script>
<template>
     <div :class="['bg-white bg-opacity-70 md:bg-opacity-100 w-full md:w-6/12 text-sm rounded-lg px-5 md:px-5 py-16 xl:py-8 xl:px-8 xl:w-[45%] 2xl:w-[500px] min-[500px]:px-16 ', login ? 'xl:py-16' : '']">
       <slot name="content"></slot>
       <p v-if=" register || login" class="md:hidden text-center mt-16">
        {{  register ? Reg.already : Reg.newMember }}
        <span
          @click=" register ? $router.push('/login') : $router.push('/')"
          class="font-bold border-b-2 border-black hover:text-gold hover:border-gold transition-all ease-in-out duration-300 cursor-pointer"
          >{{  register ? 'Login' : 'Create an Account' }}</span
        >
      </p>
    </div>
</template>