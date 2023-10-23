<script setup>
import DefaultPage from "../components/Pages/DefaultPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import InputLabelComponent from '../components/Input/InputLabelComponent.vue';
import CloseErrorIconVue from "../assets/img/close-error.svg";

</script>
<template>
    <DefaultPage>
        <template v-slot:pages>
            <LeftCard :icon="CloseErrorIconVue" title2="Sorry!" tbreak="Your account creation was unsuccessful. "
                info="If you feel like this is a mistake, please contact ZOE Ministry helpline on 888 88888 888  or Send us an Email." />
            <RightCard class="!py-9 space-y-6">
                <template v-slot:content>
                    <p class="font-TruenoB text-xl w-11/12">Sorry! One or more information provided below are not matched in
                        our system</p>
                    <div class="flex space-x-6 w-fit">
                        <p class="border border-red-200 p-3 rounded-md">Donor ID: <span class="font-bold">015214564</span>
                        </p>
                    </div>
                    <p class="w-9/12 !mb-10 text-dim-gray">Don't worry, Still you can create your account with your first
                        and last name</p>
                   <div class="w-10/12 min-[500px]:w-10/12">
                     <InputLabelComponent label="First Name*" for="firstname" placeholder="Enter Your First Name" />
                     <InputLabelComponent label="Last Name*" for="lastname" placeholder="Enter Your Last Name" />
                   </div>

                    <Button name="Create Account" class="py-3 !text-xs" route="/" />

                </template>
            </RightCard>
    </template>
</DefaultPage></template>