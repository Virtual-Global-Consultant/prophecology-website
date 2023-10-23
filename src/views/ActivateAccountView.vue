<script setup>
import DefaultPage from "../components/Pages/DefaultPageComponent.vue";
import LeftCard from "../components/Pages/LeftCardComponent.vue";
import RightCard from "../components/Pages/RightCardComponent.vue";
import Button from "../components/Button/ButtonComponent.vue";
import SuccessIcon from "../assets/img/success-1.svg";
</script>
<template>
  <DefaultPage>
    <template v-slot:pages>
      <LeftCard :icon="SuccessIcon" title2="Your account was activated successfully" />
      <RightCard class="space-y-6 lg:!py-48">
        <template v-slot:content>
          <p class="font-TruenoB text-xl">Let's Login to your account!</p>
          <p class="text-center md:text-left text-dim-gray !mb-10 md:w-10/12">
            You can now log in with the username and password you provided when you signed
            up.
          </p>
          <div class="flex justify-center md:block">
            <Button name="Login" class="!py-3" route="/login" />
          </div>
        </template>
      </RightCard>
    </template>
  </DefaultPage>
</template>
