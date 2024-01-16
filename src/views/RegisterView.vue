<script setup>
import DefaultPage from "../components/Pages/DefaultPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import InputLabelComponent from '../components/Input/InputLabelComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import { useRouter } from "vue-router";
import { useAuthStore } from '@/stores/auth';
import { appState } from '@/services/app'

const authStore = useAuthStore()

</script>

<template>
    <DefaultPage>
        <template v-slot:pages>
            <LeftCard title="Create an Account" title2="Registering" tbreak="for this site is easy."
                info="Just fill in the fields given, and we'll get a new account set up for you in no time." />
            <RightCard class="xl:!py-16">
                <template v-slot:content>
                    <form @submit.prevent="authStore.register1">
                        <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
                            <label for="firstname" class="text-dim-gray">First Name <sup>*</sup>
                            </label>
                            <input v-model="authStore.registerRT.first_name"
                                class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 h-1/6 rounded-md p-3"
                                type="text" required id="firstname" placeholder="Enter Your First Name" />
                        </div>
                        <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
                            <label for="lastname" class="text-dim-gray">Last Name <sup>*</sup>
                                <i class="text-sm xl:text-xs">(This field may be seen by everyone)</i>
                            </label>
                            <input v-model="authStore.registerRT.last_name"
                                class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 h-1/6 rounded-md p-3"
                                type="text" required id="lastname" placeholder="Enter Your Last Name" />
                        </div>
                        <p v-if="authStore.loginRT.errorMessage" class="mt-2 text-sm text-red-600 dark:text-red-500">
                            {{ authStore.registerRT.errorMessage }}
                        </p>
                        <!-- <p class="mt-12 mb-5 xl:mt-7 text-dim-dark flex items-center w-full"> <span class="w-1/12 mr-3">
                                <hr>
                            </span> OR <span class="w-full ml-3">
                                <hr />
                            </span> </p>
                            
                        <InputLabelComponent label="Donor ID*" for="donorid" placeholder="Donor ID" /> -->
                        <div class="flex flex-col lg:flex-row  md:space-y-0 items-center justify-between mt-10 md:mt-5">
                            <Button
                                :disabled="authStore.registerRT.first_name.length == 0 || authStore.registerRT.last_name.length == 0"
                                :loading="authStore.registerRT.appState == appState().loading"
                                class="order-1 lg:-order-1 w-fit !p-3 !text-xs disabled:border-transparent disabled:bg-dim-gray disabled:cursor-not-allowed disabled:hover:text-white"
                                name="Next" type="submit" />
                            <p class="!mb-5"><span class="text-gold">1</span>/2 Steps</p>
                        </div>
                    </form>
                </template>
            </RightCard>
        </template>
    </DefaultPage>
</template>