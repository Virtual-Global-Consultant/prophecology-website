<script setup>
import {useRouter} from "vue-router";

const goBack = useRouter()

</script>
<template>
            <div class="font-Trueno border border-black h-screen text-center flex flex-col items-center justify-center">
              <img src="../assets/img/404.png" alt="404 gif">
                <p class="text-xl mt-4">The requested page is not found
                  <button @click="goBack.back()" class="border-b border-b-black hover:text-gold hover:border-gold">
                    Go Back
                  </button>
                </p>
            </div>
</template>