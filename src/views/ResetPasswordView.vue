<script setup>
import DefaultPage from "../components/Pages/DefaultPageComponent.vue";
import LeftCard from "../components/Pages/LeftCardComponent.vue";
import RightCard from "../components/Pages/RightCardComponent.vue";
import Button from "../components/Button/ButtonComponent.vue";
import InputLabelComponent from "../components/Input/InputLabelComponent.vue";
import ResetPasswordIcon from "../assets/img/password.svg";
</script>
<template>
    <DefaultPage>
        <template v-slot:pages>
            <LeftCard :icon="ResetPasswordIcon" title2="Recover!" tbreak="Password" />
            <RightCard class="space-y-6 md:!py-28">
                <template v-slot:content>
                    <p class="font-TruenoB text-xl w-6/12">Alright. Let's reset the password.</p>
                    <p class="w-9/12 !mb-14 text-dim-gray">
                        Tell us your email address, we'll help you get back on track in no time.
                    </p>
                    <InputLabelComponent class="xl:w-11/12" label="Email Address" for="email"
                        placeholder="Enter your email" />
                    <Button name="Reset Password" class="w-fit px-3 py-3" route="/reset-password-email" />
                </template>
            </RightCard>
        </template>
    </DefaultPage>
</template>
