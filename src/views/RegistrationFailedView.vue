<script setup>
import DefaultPage from "../components/Pages/DefaultPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import ButtonWhite from '../components/Button/ButtonWhiteComponent.vue';
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
                    <p class="font-TruenoB text-xl w-10/12">Sorry! One or more information provided below are not matched in
                        our system</p>
                    <div class="grid grid-cols-2 grid-rows-2 md:grid-rows-3 w-full gap-4">
                       <RegError title="First Name:" value="CeeJay" class="col-span-2"/>
                       <RegError title="Last Name:" value="Charith" class="col-span-2"/>
                       <RegError title="Donor ID:" value="015214564" class="col-span-2"/>
                    </div>
                    <p class="w-10/12 !mb-20 text-dim-gray">All the information you've provided above are not matched with
                        our system. Please contact ZOE Ministry's If you feel like this is a mistake. We're happy to help
                        you out.</p>

                    <div class="flex justify-center space-x-10">
                        <Button name="Contact" class="!py-3" route="/" />
                        <ButtonWhite name="Try Again" route="/" />
                    </div>

            </template>
        </RightCard>
    </template>
</DefaultPage></template>