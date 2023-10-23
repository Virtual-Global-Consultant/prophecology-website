<script setup>
import DefaultPage from '../components/Pages/DefaultPageComponent.vue'
import LeftCard from '../components/Pages/LeftCardComponent.vue'
import RightCard from '../components/Pages/RightCardComponent.vue'
import InputLabelComponent from '../components/Input/InputLabelComponent.vue'
import Button from '../components/Button/ButtonComponent.vue'
import PasswordHidden from '../components/Icons/PasswordHiddenIcon.vue'
import PasswordVissible from '../components/Icons/PasswordVisibleIcon.vue'
import { ref } from 'vue'

const inputType = ref('password')

const toggleVissiblility = () => {
  inputType.value === 'text' ? (inputType.value = 'password') : (inputType.value = 'text')
}
</script>
<template>
  <DefaultPage>
    <template v-slot:pages>
      <LeftCard
        title="Create an Account"
        title2="Congratulations!"
        tbreak="One more step away."
        info="Let's create a user name, email address & strong password for your account."
      />
      <RightCard class="!py-9 xl:h-fit">
        <template v-slot:content>
          <div class="border rounded-md mb-3">
            <div class="p-4 xl:py-3 border-b text-sm bg-gold bg-opacity-10 grid grid-cols-2">
              <p class="">First Name: <span class="font-bold">CeeJay</span></p>
              <p>Last Name: <span class="font-bold">Charith</span></p>
              <p class="mt-4">Donor ID: <span class="font-bold">015214564</span></p>
            </div>

            <p class="px-4 py-2 text-xs xl:w-fit">
              Are the above Information representing you? If not please
              <button
                class="font-bold border-b-2 border-gold text-gold hover:text-black hover:border-black transition-all ease-in-out duration-300 cursor-pointer"
                @click="$router.push('/')"
              >
                Change Here
              </button>
            </p>
          </div>

          <div>
            <InputLabelComponent
              label="Username*"
              for="username"
              placeholder="Enter Your User Name"
            />
            <InputLabelComponent
              label="Email Address*"
              for="email"
              placeholder="Enter Your Email Address"
            />
          </div>
          <!--                    <div class="relative">-->
          <!--                        <InputLabelComponent :type="inputType" label="Choose a Password*" for="password" placeholder="Enter your password" />-->
          <!--                        <button class="absolute bottom-2 right-5" @click="toggleVissiblility">-->
          <!--                            <PasswordHidden v-if="inputType === 'password'" />-->
          <!--                            <PasswordVissible v-else/>-->
          <!--                        </button>-->
          <!--                    </div>-->

          <div class="flex items-center justify-between mt-5 md:flex-col">
            <Button name="Create Account" class="md:order-1 w-fit !text-xs !p-3" route="/login" />
            <p class="!mb-5"><span class="text-gold">2</span>/2 Steps</p>
          </div>
        </template>
      </RightCard>
    </template>
  </DefaultPage>
</template>
