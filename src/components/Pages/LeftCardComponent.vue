<script setup>
const props = defineProps(['title', 'title2', 'tbreak', 'info', 'icon'])
</script>

<template>
  <div class="w-1/3 mr-20">
    <div class="space-y-6">
      <p class="text-dim-gray">{{ props.title }}</p>
      <div :class="[$route.path.includes('reset') ? 'flex space-x-10' : '']">
        <img :src=props.icon alt="">
        <p class="font-TruenoB text-4xl lg:text-3xl lg:w-80 border border-transparent">
         <span> {{ props.title2 }} </span><br />
          {{ props.tbreak }}
        </p>
      </div>
      <p class="text-dim-gray w-10/12 lg:w-80">
        {{ props.info }}
      </p>
    </div>
    <p v-if="$route.name === 'register' || $route.path === '/login'" class="mt-16">
      {{ $route.name === 'register' ? 'Already a member?' : 'Not a member?' }}
      <span
        @click="$route.name === 'register' ? $router.push('/login') : $router.push('/')"
        class="font-bold border-b-2 border-black hover:text-gold hover:border-gold transition-all ease-in-out duration-300 cursor-pointer"
        >{{ $route.name === 'register' ? 'Login' : 'Create an Account' }}</span
      >
    </p>
  </div>
</template>
