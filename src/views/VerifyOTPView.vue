<script setup>
import LeftCard from '../components/Pages/LeftCardComponent.vue'
import RightCard from '../components/Pages/RightCardComponent.vue'
import Button from '../components/Button/ButtonComponent.vue'
import DefaultPage from '../components/Pages/DefaultPageComponent.vue'
import { ref } from 'vue'

const verifyOTP = ref('')
</script>
<template>
  <div>
    <DefaultPage>
      <template v-slot:pages>
        <LeftCard
          title="Login"
          title2="Verify"
          tbreak="OTP"
          info="Just fill in the fields below, and we’ll get a new account set up for you in no time."
        />
        <RightCard class="md:!py-44">
          <template v-slot:content>
            <form action="/dashboard" method="get">
              <div>
                <label for="success" class="block mb-2 text-sm font-medium">Enter Code</label>
                <input
                  v-model="verifyOTP"
                  type="tel"
                  id="success"
                  pattern="[0-9]*"
                  class="bg-dim-white border focus:ring-gold focus:border-gold placeholder-dim-gray text-sm rounded-lg block w-full xl:w-1/2 p-2.5"
                  placeholder="OTP Code"
                  required
                />
              </div>
              <div class="flex justify-center md:justify-normal mt-9">
                <Button
                  :disabled="verifyOTP.length < 5"
                  name="Verify"
                  class="h-12 disabled:border-transparent disabled:bg-dim-gray disabled:cursor-not-allowed disabled:hover:text-white"
                  type="submit"
                />
              </div>
            </form>
          </template>
        </RightCard>
      </template>
    </DefaultPage>
  </div>
</template>
