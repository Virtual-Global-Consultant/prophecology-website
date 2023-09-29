<script setup>
import BackIcon from "../Icons/BackIcon.vue";
import HamburgerIcon from "../Icons/HamburgerIcon.vue";
import CloseIcon from "../Icons/CloseIcon.vue";
import Button from "../Button/ButtonComponent.vue";
import ButtonWhite from "../Button/ButtonWhiteComponent.vue";
import { ref } from "vue";

const toggle = ref(false);

const toggleNav = () => {
  toggle.value = !toggle.value;
  console.log(toggle.value);
};
</script>

<template>
  <div class="shadow-nav flex items-center justify-around font-Trueno py-3 md:px-10">
    <!-- back icon and link -->
    <a
      href="https://www.prophecology.com"
      class="hidden md:flex items-center md:text-xs lg:text-sm text-light-dark opacity-50 hover:text-gold transition-all ease-in-out duration-300"
    >
      <BackIcon class="md:w-1/12 mr-3" />
      Back to Prophecology.com
    </a>
    <!-- logo -->
    <img
      class="w-4/12 md:w-2/12 xl:w-40 2xl:w-52"
      src="@/assets/img/logo.svg"
      alt="Prophecology Logo"
    />
    <!-- register and login button / hamburger icon-->
    <div class="md:hidden">
      <button @click="toggleNav">
        <HamburgerIcon class="hover:text-gold transition-all ease-in-out duration-300" />
      </button>
      <!-- toggle menu -->
      <div
        v-if="toggle"
        class="absolute px-8 py-5 bg-gold h-screen top-0 left-0 w-full space-x-5 border"
      >
        <div class="flex flex-col justify-between h-full">
          <div class="flex justify-between">
            <a
              href="https://www.prophecology.com"
              class="flex items-center text-xs text-light-dark opacity-50 hover:opacity-100 hover:text-white transition-all ease-in-out duration-300"
            >
              <BackIcon class="mr-3 w-4" />
              Back to Prophecology.com
            </a>
            <button @click="toggleNav">
              <CloseIcon
                class="border-2 rounded-md border-black hover:border-white hover:fill-white transition-all duration-300 ease-in-out"
              />
            </button>
          </div>
          <div class="border">
            <p>home</p>
            <p>home</p>
          </div>
          <div class="flex justify-center space-x-10">
            <Button
              class="text-xs w-3/12 h-7 rounded-sm text-opacity-80 !border-slate-200 hover:!text-gold"
              name="Register"
              route="/"
            />
            <ButtonWhite
              class="hover:bg-white hover:!text-gold text-xs w-3/12 h-7 text-slate-200 rounded-sm !border-slate-200"
              name="Login"
              route="/login"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden overflow-hidden md:flex w-fit space-x-3">
      <Button name="Register" route="/" />
      <ButtonWhite name="Login" route="/login" />
    </div>
    <!-- user profile menu toggle -->
  </div>
</template>
