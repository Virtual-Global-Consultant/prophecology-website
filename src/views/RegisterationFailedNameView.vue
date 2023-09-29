<script setup>
import DefaultPage from "../components/Pages/DefualtPageComponent.vue"
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
                    <p class="font-TruenoB text-xl w-10/12">Sorry! One or more information provided below are not matched in our system</p>
                   <div class="flex space-x-6 w-fit">
                        <p class="border border-red-200 p-3 rounded-md">First Name: <span class="font-bold">CeeJay</span></p>
                        <p class="border border-red-200 p-3 rounded-md">Last Name: <span class="font-bold">Charith</span></p>
                   </div>
                    <p class="w-9/12 !mb-20 text-dim-gray">But, don't worry, If you still remember your Donor ID, you can create your account. </p>
                    <InputLabelComponent class="xl:w-11/12" label="Donor ID" for="donorid"/>

                    <Button name="Create Account" class="w-6/12 px-3" />
                    <p class="px-4 py-2 xl:w-[72%] text-dim-gray">You don't remember Donor ID?
                        <a 
                            href="https://zoeministries.com"
                            class="font-bold border-b-2 border-black text-black hover:text-gold hover:border-gold transition-all ease-in-out duration-300 cursor-pointer">
                            Contact Zoe Ministry
                        </a>
                    </p>
            </template>
        </RightCard>
    </template>
</DefaultPage></template>