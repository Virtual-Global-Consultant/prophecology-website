<script setup>
import DefaultPage from "../components/Pages/DefaultPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import CloseErrorIconVue from "../assets/img/password.svg";

</script>
<template>
    <DefaultPage>
        <template v-slot:pages>
            <LeftCard :icon="CloseErrorIconVue" title2="Recover!" tbreak="Password" />
            <RightCard class="space-y-6 lg:!py-32 lg:!px-10  md:w-[44%]">
                <template v-slot:content>
                    <p class="font-TruenoB text-lg w-8/12">Yeah, one more step away.</p>
                    <p class="text-xs lg:text-base">An email has been sent to <span class="font-bold">blacecreative@gmail.com</span> with a link to reset your password.</p>
                    <p class="xl:w-10/12 text-xs lg:text-base text-dim-gray">Still haven't received the email?
                        <a 
                            href="#"
                            class=" font-bold border-b-2 border-black text-black hover:text-gold hover:border-gold transition-all ease-in-out duration-300 cursor-pointer">
                            Resend Email
                        </a>
                    </p>
            </template>
        </RightCard>
    </template>
</DefaultPage></template>