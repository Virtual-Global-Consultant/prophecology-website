<script setup>
// import { ref } from "vue"
import { ref } from "vue"
import Button from "../Button/ButtonComponent.vue"
import ButtonWhite from "../Button/ButtonWhiteComponent.vue"
import BackIcon from "../Icons/BackIcon.vue"
import CloseIcon from "../Icons/CloseIcon.vue"

const { isOpen } = defineProps({ isOpen: Boolean })
const isToggled = ref(!isOpen)

console.log(isToggled.value)
const closeMenu = () => {
    isToggled.value = !isToggled.value
    // console.log(!isToggled.value)
}

console.log(isToggled.value);

</script>

<template>
    <div v-if="isToggled.value" class="absolute p-5 bg-gold h-screen top-0 left-0 w-full space-x-5 border">
        <div class="flex flex-col justify-between h-full">
            <div class="flex justify-between">
                <a
                  href="https://www.prophecology.com"
                  class="flex items-center text-xs text-light-dark opacity-50 hover:opacity-100 hover:text-white transition-all ease-in-out duration-300">
                    <BackIcon class="mr-3 w-4"/>
                    Back to Prophecology.com
                </a>
                <button @click="closeMenu">
                    <CloseIcon class="border-2 rounded-md border-black hover:border-white hover:fill-white transition-all duration-300 ease-in-out"/>
                </button>
            </div>
            <div class="border">
                <p>home</p>
                <p>home</p>
            </div>
            <div class="flex justify-center space-x-10">
                <Button class="text-xs w-3/12 h-7 rounded-sm text-opacity-80 !border-slate-200 hover:!text-gold" name="Register" route="/"/>
                <ButtonWhite class="hover:bg-white hover:!text-gold text-xs w-3/12 h-7 text-slate-200 rounded-sm !border-slate-200" name="Login" route="/login"/>
            </div>
        </div>
    </div>
</template>