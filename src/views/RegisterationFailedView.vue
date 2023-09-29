<script setup>
import DefaultPage from "../components/Pages/DefualtPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import ButtonWhite from '../components/Button/ButtonWhiteComponent.vue';
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
                   <div class="grid grid-cols-2 grid-rows-2 w-fit gap-4">
                        <p class="border border-red-200 p-3 rounded-md flex items-center">First Name: <span class="font-bold">CeeJay</span></p>
                        <p class="border border-red-200 p-3 rounded-md flex items-center">Last Name: <span class="font-bold">Charith</span></p>
                        <p class="border border-red-200 p-3 rounded-md mt-3 col-span-2">Donor ID: <span class="font-bold">015214564</span></p>
                   </div>
                    <p class="w-10/12 !mb-20 text-dim-gray">All the information you've provided above are not matched with our system. Please contact ZOE Ministry's If you feel like this is a mistake. We're happy to help you out.</p>

                    <div class="flex space-x-10">
                        <Button name="Contact" class="!py-3" />
                        <ButtonWhite name="Try Again"/>
                    </div>
                  
            </template>
        </RightCard>
    </template>
</DefaultPage></template>