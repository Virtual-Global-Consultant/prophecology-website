<script setup lang="ts">
import Button from '@/components/Button/ButtonComponent.vue'
import InputLabelComponent from '@/components/Input/InputLabelComponent.vue'

const props = defineProps({ number: String })
</script>

<template>
  <!-- Main modal -->
  <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
            Confirm Phone Number
          </h3>
          <form class="space-y-6" action="/verify-otp">
            <div class="flex flex-col items-center justify-center gap-5">
              <input
                type="tel"
                readonly
                class="read-only:cursor-not-allowed bg-dim-white border focus:ring-gold focus:border-gold placeholder-dim-gray text-sm rounded-lg block w-full xl:w-1/2 p-2.5"
                :value="props.number"
              />
              <Button name="Proceed" class="h-12" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
