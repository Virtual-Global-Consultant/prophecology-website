<script setup>
import DefaultPage from '../components/Pages/DefaultPageComponent.vue'
import LeftCard from '../components/Pages/LeftCardComponent.vue'
import RightCard from '../components/Pages/RightCardComponent.vue'
import InputLabelComponent from '../components/Input/InputLabelComponent.vue'
import Button from '../components/Button/ButtonComponent.vue'
import PasswordHidden from '../components/Icons/PasswordHiddenIcon.vue'
import PasswordVissible from '../components/Icons/PasswordVisibleIcon.vue'
import { ref } from 'vue'
import { appState } from '@/services/app'
import { useRouter } from 'vue-router'
import { routerName } from '@/router';
import { useAuthStore } from '@/stores/auth';

const inputType = ref('password')

const toggleVissiblility = () => {
  inputType.value === 'text' ? (inputType.value = 'password') : (inputType.value = 'text')
}

const authStore = useAuthStore()
const router = useRouter()

if (authStore.registerRT.first_name.length == 0 || authStore.registerRT.last_name.length == 0) {
  router.replace(routerName().register)
}
</script>
<template>
  <DefaultPage>
    <template v-slot:pages>
      <LeftCard title="Create an Account" title2="Congratulations!" tbreak="One more step away."
        info="Let's create a user name, email address & strong password for your account." />
      <RightCard class="!py-9 xl:h-fit">
        <template v-slot:content>

          <div class="border rounded-md mb-3">
            <div class="p-4 xl:py-3 border-b text-sm bg-gold bg-opacity-10 grid grid-cols-2">
              <p class="">First Name: <span class="font-bold">{{ authStore.registerRT.first_name }}</span></p>
              <p>Last Name: <span class="font-bold">{{ authStore.registerRT.first_name }}</span></p>
              <p class="mt-4">Donor ID: <span class="font-bold">015214564</span></p>
            </div>

            <p class="px-4 py-2 text-xs xl:w-fit">
              Are the above Information representing you? If not please
              <button
                class="font-bold border-b-2 border-gold text-gold hover:text-black hover:border-black transition-all ease-in-out duration-300 cursor-pointer"
                @click="$router.push(routerName().register)">
                Change Here
              </button>
            </p>
          </div>
          <form @submit.prevent="authStore.register">
            <div>
              <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
                <label for="phone" class="text-dim-gray">Cell Phone <sup>*</sup>
                </label>
                <input v-model="authStore.registerRT.cell_phone"
                  class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 h-1/6 rounded-md p-3"
                  type="tel" required id="phone" placeholder="Enter Your Phone Number" />
              </div>
              <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
                <label for="firstname" class="text-dim-gray">Email Address <sup>*</sup>
                </label>
                <input v-model="authStore.registerRT.email"
                  class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 h-1/6 rounded-md p-3"
                  type="email" required id="firstname" placeholder="Enter Your Email Address" />
              </div>
            </div>
            <!--                    <div class="relative">-->
            <!--                        <InputLabelComponent :type="inputType" label="Choose a Password*" for="password" placeholder="Enter your password" />-->
            <!--                        <button class="absolute bottom-2 right-5" @click="toggleVissiblility">-->
            <!--                            <PasswordHidden v-if="inputType === 'password'" />-->
            <!--                            <PasswordVissible v-else/>-->
            <!--                        </button>-->
            <!--                    </div>-->

            <p v-if="authStore.registerRT.errorMessage" class="mt-2 text-sm text-red-600 dark:text-red-500">
              {{ authStore.registerRT.errorMessage }}
            </p>
            <div class="flex items-center justify-between mt-5 md:flex-col">
              <Button :loading="authStore.registerRT.appState == appState().loading" name="Create Account"
                class="md:order-1 w-fit !text-xs !p-3" type="submit" />
              <p class="!mb-5"><span class="text-gold">2</span>/2 Steps</p>
            </div>
          </form>
        </template>
      </RightCard>
    </template>
  </DefaultPage>
</template>
