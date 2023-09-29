<script setup>
import DefaultPage from "../components/Pages/DefualtPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import InputLabelComponent from '../components/Input/InputLabelComponent.vue';
import PasswordHidden from '../components/Icons/PasswordHiddenIcon.vue';
import PasswordVissible from '../components/Icons/PasswordVisibleIcon.vue';
import PasswordPlusIcon from "../assets/img/password-plus.svg";
import Button from '../components/Button/ButtonComponent.vue';

import { ref } from "vue";

const inputType = ref('password')
const inputTypeR = ref('password')

const toggleVissiblility = () => {
    inputType.value === 'text' ?
        inputType.value = 'password' :
        inputType.value = 'text';
}
const toggleVissiblilityR = () => {
    inputTypeR.value === 'text' ?
        inputTypeR.value = 'password' :
        inputTypeR.value = 'text';
}
</script>
<template>
    <DefaultPage>
        <template v-slot:pages>
            <LeftCard :icon="PasswordPlusIcon" title2="Create a new" tbreak="Password" />
            <RightCard class="space-y-6 !py-32">
                <template v-slot:content>
                    <div class="relative">
                        <InputLabelComponent :type="inputType" label="New Password" for="password"
                            placeholder="Enter your password" />
                        <button class="absolute bottom-2 right-5" @click="toggleVissiblility">
                            <PasswordHidden v-if="inputType === 'password'" />
                            <PasswordVissible v-else />
                        </button>
                    </div>
                    <div class="relative">
                        <InputLabelComponent :type="inputTypeR" label="Repeat Password" for="password"
                            placeholder="Enter your password" />
                        <button class="absolute bottom-2 right-5" @click="toggleVissiblilityR">
                            <PasswordHidden v-if="inputTypeR === 'password'" />
                            <PasswordVissible v-else />
                        </button>
                    </div>
                    <Button name="Reset Password" class="w-fit !py-4" route="/reset-password-success" />
                    <div class="text-dim-gray tracking-wide">
                        <p>Hint: Your password should contain;</p>
                        <ul class="ml-8">
                            <li class="list-disc">
                                Use of a unique combination of at least 12 characters.
                            </li>
                            <li class="list-disc">Include a mix of letters, uppercase & lower case, numbers, and special characters.</li>
                        </ul>
                    </div>
                </template>
            </RightCard>
        </template>
    </DefaultPage>
</template>