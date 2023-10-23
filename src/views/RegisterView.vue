<script setup>
import DefaultPage from "../components/Pages/DefaultPageComponent.vue"
import LeftCard from '../components/Pages/LeftCardComponent.vue';
import RightCard from '../components/Pages/RightCardComponent.vue';
import InputLabelComponent from '../components/Input/InputLabelComponent.vue';
import Button from '../components/Button/ButtonComponent.vue';
import {useRouter} from "vue-router";

</script>

<template>
     <DefaultPage>
            <template v-slot:pages>
                <LeftCard title="Create an Account" title2="Registering" tbreak="for this site is easy." info="Just fill in the fields given, and we'll get a new account set up for you in no time."/>
                <RightCard class="xl:!py-16">
                    <template v-slot:content>
                        <InputLabelComponent label="First Name*" for="firstname" placeholder="Enter Your First Name"/>
                        <InputLabelComponent label="Last Name*"  for="lastname" placeholder="Enter Your Last Name"/>
                        <p class="mt-12 mb-5 xl:mt-7 text-dim-dark flex items-center w-full"> <span class="w-1/12 mr-3"> <hr> </span> OR <span class="w-full ml-3"><hr /></span> </p>
                        <InputLabelComponent label="Donor ID*" for="donorid" placeholder="Donor ID"/>
                        <div class="flex flex-col lg:flex-row  md:space-y-0 items-center justify-between mt-10 md:mt-5">
                            <Button name="Create Account" class="order-1 lg:-order-1 w-fit !p-3 !text-xs" route="/register-2"/>
                            <p class="!mb-5"><span class="text-gold">1</span>/2 Steps</p>
                        </div>
                    </template>
                </RightCard>
            </template>
        </DefaultPage>
</template>