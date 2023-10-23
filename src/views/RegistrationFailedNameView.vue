<script setup>
import DefaultPage from "../components/Pages/DefaultPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import InputLabelComponent from '../components/Input/InputLabelComponent.vue';
import CloseErrorIconVue from "../assets/img/close-error.svg";
import RegError from "@/components/Errors/RegError.vue";

</script>
<template>
    <DefaultPage>
        <template v-slot:pages>
            <LeftCard :icon="CloseErrorIconVue" title2="Sorry!" tbreak="Your account creation was unsuccessful. "
                info="If you feel like this is a mistake, please contact ZOE Ministry helpline on 888 88888 888  or Send us an Email." />
            <RightCard class="!py-9 space-y-6">
                <template v-slot:content>
                    <p class="font-TruenoB text-xl w-10/12">Sorry! One or more information provided below are not matched in our system</p>
                  <div class="grid grid-cols-2 grid-rows-2 md:grid-rows-3 w-full gap-4 min-[500px]:w-3/6">
                    <RegError title="First Name:" value="CeeJay" class="col-span-2"/>
                    <RegError title="Last Name:" value="Charith" class="col-span-2"/>
                  </div>
                    <p class="w-9/12 !mb-20 text-dim-gray">But, don't worry, If you still remember your Donor ID, you can create your account. </p>
                    <InputLabelComponent class="min-[500px]:w-10/12 md:w-full lg:w-8/12" label="Donor ID" for="donorid"/>

                    <Button name="Create Account" class="px-3 !text-xs lg:!text-sm py-3" />
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