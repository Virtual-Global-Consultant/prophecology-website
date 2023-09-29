<script setup>
import DefaultPage from "../components/Pages/DefualtPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import PasswordSuccessIcon from '../assets/img/password-success.svg'

</script>
<template>
    <DefaultPage>
        <template v-slot:pages>
            <LeftCard :icon="PasswordSuccessIcon" title2="Password" tbreak="Changed" />
            <RightCard class="space-y-6 !py-32 !px-24">
                <template v-slot:content>
                    <p class="font-TruenoB text-xl w-8/12">Hooooray! You got a new password. </p>
                    <p class="text-dim-gray tracking-wide">Your password has successfully changed for your account <span class="text-black font-bold border-b border-black">blacecreative@gmail.com</span></p>
                    <p class="text-dim-gray tracking-wide">Please <span class="font-bold text-black border-b-2 border-black">Login</span> to your new account using your new password.</p>
                    <Button name="Login" class="w-fit !py-4" route="/login" />
                </template>
            </RightCard>
        </template>
    </DefaultPage>
</template>