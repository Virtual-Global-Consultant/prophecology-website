<script setup>
import LeftCard from '../components/Pages/LeftCardComponent.vue'
import RightCard from '../components/Pages/RightCardComponent.vue'
import InputLabelComponent from '../components/Input/InputLabelComponent.vue'
import Button from '../components/Button/ButtonComponent.vue'
import DefaultPage from '../components/Pages/DefaultPageComponent.vue'
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { useRoute, useRouter } from 'vue-router'
import OTPModal from '@/components/Modals/OTPModal.vue'

const router = useRouter()

const otp = ref('')

onMounted(() => {
  initFlowbite()
})
</script>
<template>
  <div>
    <DefaultPage>
      <template v-slot:pages>
        <LeftCard
          title="Login"
          title2="Welcome Back"
          tbreak="to Prophecology"
          info="Just fill in the fields below, and we’ll get a new account set up for you in no time."
        />
        <RightCard class="md:!py-44 font-TruenoSB tracking-wide">
          <template v-slot:content>
            <!--                        <form>-->
            <div class="mb-6">
              <label for="success" class="block mb-2 text-sm font-medium"
                >Enter Your Phone Number</label
              >
              <input
                v-model="otp"
                type="tel"
                id="success"
                pattern="[0-9]*"
                class="bg-dim-white border focus:ring-gold focus:border-gold placeholder-dim-gray text-sm rounded-lg block w-full xl:w-1/2 p-2.5"
                placeholder="xxxx xxxx xxx"
                required
              />
              <!--              <p v-if="otp" class="mt-2 text-sm text-green-600 dark:text-green-500">-->
              <!--                <span class="font-medium">Well done!</span> Some success message.-->
              <!--              </p>-->
              <!--                <p v-else class="mt-2 text-sm text-red-600 dark:text-red-500">-->
              <!--                  <span class="font-medium">Oh, snapp!</span> Some error message.-->
              <!--                </p>-->
            </div>
            <div class="flex justify-center md:justify-normal mt-9">
              <Button
                :disabled="otp.length < 10"
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                name="Get OTP"
                class="h-12 disabled:border-transparent disabled:bg-dim-gray disabled:cursor-not-allowed disabled:hover:text-white"
              />
            </div>
            <!--            </form>-->
            <OTPModal :number="otp" />
          </template>
        </RightCard>
      </template>
    </DefaultPage>
  </div>
</template>
