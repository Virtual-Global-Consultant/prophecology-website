<script setup>
import DefaultPage from "../components/Pages/DefualtPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import SuccessIcon from "../assets/img/success.svg";

</script>
<template>
    <DefaultPage>
        <template v-slot:pages>
            <LeftCard :icon="SuccessIcon" title2="You have" tbreak="successfully created your account!"
                info="To begin using this site you will need to activate your account via the email we have just sent to your address." />
            <RightCard class="space-y-6">
                <template v-slot:content>
                    <p class="font-TruenoB text-xl w-8/12">Check Your Email to Activate Your Account!</p>
                    <p class="w-10/12 !mb-12">An email has been sent to <span class="font-bold">blacecreative@gmail.com</span> with a link containing an activation code to proceed with your email verification.</p>
                    <div class="space-y-3">
                        <p class="text-dim-gray">Activation Code</p>
                        <p class="p-3 border rounded-md overflow-x-auto">vcaZVCP5JuZ98STmnk103UCatq5m8HKM</p>
                    </div>
                    <Button name="Activate Account" class="!py-3" route="/activation"/>
                    <p class="px-4 py-2 xl:w-[72%] text-dim-gray">Still haven't received the email?
                        <a 
                            href="#"
                            class="font-bold border-b-2 border-black text-black hover:text-gold hover:border-gold transition-all ease-in-out duration-300 cursor-pointer">
                            Resend Email
                        </a>
                    </p>
            </template>
        </RightCard>
    </template>
</DefaultPage></template>