<script setup>
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import InputLabelComponent from '../components/Input/InputLabelComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import DefaultPage from "../components/Pages/DefualtPageComponent.vue"
import PasswordHidden from '../components/Icons/PasswordHiddenIcon.vue';
import PasswordVissible from '../components/Icons/PasswordVisibleIcon.vue';
import { ref } from "vue";

const inputType = ref('password')

const toggleVissiblility = () => {
    inputType.value === 'text' ?
        inputType.value = 'password' :
        inputType.value = 'text';
}

</script>
<template>
    <div>
        <DefaultPage>
            <template v-slot:pages>
                <LeftCard title="Login" title2="Welcome Back" tbreak="to Prophecology" info="Just fill in the fields below, and we’ll get a new account set up for you in no time."/>
                <RightCard class="!py-28">
                    <template v-slot:content>
                        <InputLabelComponent label="Username or Email Address" placeholder="Enter Your Username"/>
                        <div class="relative">
                            <InputLabelComponent :type="inputType" label="Password" for="password" placeholder="Enter your password" />
                            <button class="absolute bottom-2 right-5" @click="toggleVissiblility">
                                <PasswordHidden v-if="inputType === 'password'" />
                                <PasswordVissible v-else/>
                            </button>
                        </div>
                        <p v-if="$route.name === 'register' || '/login'" class="">Forgotten Password?
                            <span @click="$router.push('/reset-password')"
                            class="font-bold border-b-2 border-black hover:text-gold hover:border-gold transition-all ease-in-out duration-300 cursor-pointer"
                            >Request New</span>
                        </p>
                        <div class="flex items-center justify-between mt-5">
                            <Button name="Login" class="h-12"/>
                        </div>
                    </template>
                </RightCard>
            </template>
        </DefaultPage>
    </div>
</template>