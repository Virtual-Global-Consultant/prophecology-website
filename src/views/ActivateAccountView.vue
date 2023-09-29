<script setup>
import DefaultPage from "../components/Pages/DefualtPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import SuccessIcon from "../assets/img/success-1.svg";

</script>
<template>
    <DefaultPage>
        <template v-slot:pages>
            <LeftCard :icon="SuccessIcon" title2="Your account was activated successfully"/>
            <RightCard class="space-y-6 !py-48">
                <template v-slot:content>
                   <p class="font-TruenoB text-xl">Let's Login to your account!</p>
                   <p class="text-dim-gray !mb-10 w-10/12">You can now log in with the username and password you provided when you signed up.</p>
                    <Button name="Login" class="!py-3" route="/login" />
            </template>
        </RightCard>
    </template>
</DefaultPage></template>