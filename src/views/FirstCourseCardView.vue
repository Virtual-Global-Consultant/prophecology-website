<script setup lang="ts">
import DefaultProgramPageComponent from '@/components/Dashboard/Programs/DefaultProgramPageComponent.vue'
import ProgramToggleComponent from '@/components/Dashboard/Programs/ProgramToggleComponent.vue'
import ButtonComponent from '@/components/Button/ButtonComponent.vue'
import CongratsCardComponent from '@/components/Dashboard/Programs/CongratsCardComponent.vue'
import { ref } from 'vue'

const timesClicked = ref(0)

const clicked = (): number => {
  return (timesClicked.value += 1)
}
</script>
<template>
  <DefaultProgramPageComponent
    desc-title="Step 1:"
    desc="Book Your Air Travel, Ground Transportation and Hotel"
    route-title="Introduction:"
    route-name="intro"
    route-info="Summer Prophecology Conference 2023"
    route-title2="Step 2:"
    route-name2="second"
    route-info2="Confirm Prophecology Summer Conference 2023 Attendance"
    :toggleBtn="true"
    >'
    <template v-slot:programTemplate>
      <ProgramToggleComponent title="Book Your Flight">
        <template v-slot:toggleComponents>
          <div class="lg:px-4">
            <p>Participants are responsible for booking their air travel.</p>
            <p class="mt-4 lg:text-sm text-dim-gray">
              Note: Many take advantage of the hotel and location to include family and colleagues
              for an extended stay or to participate in social activities or local adventures.
              People travel from all parts of the globe to this area of New York, as it is packed
              with many points of interest. Book your travel accordingly.
            </p>
          </div>
        </template>
      </ProgramToggleComponent>
      <ProgramToggleComponent title="Arrival">
        <template v-slot:toggleComponents>
          <div class="px-4">
            <p>We recommend flying into LaGuardia Airport (LGA),</p>
            <p class="mt-4 text-dim-gray lg:text-sm">
              It is 1.0 miles from the hotel, or John F. Kennedy International Airport (JFK), which
              is 9.7 miles from the LaGuardia Plaza Hotel and Hampton Inn New York LaGuardia
              Airport. Ground transportation—Uber, Lyft, taxi, shuttle service, or car rental—is the
              recommended mode of travel to and from the airport and around the area.
            </p>
          </div>
        </template>
      </ProgramToggleComponent>
      <ProgramToggleComponent title="Late Arrival or Early Departure" @click="clicked">
        <template v-slot:toggleComponents>
          <div class="lg:px-4">
            <p>The conference is designed to be a sequential experience.</p>
            <p class="mt-4 lg:text-sm text-dim-gray">
              As such, any late arrival or early departure not only puts your conference results at
              risk (you’ll likely miss something) but is disruptive for the founders and attendees.
              Please book your flights to arrive and depart so as not to miss the start or end of
              the conference. (Please note Schedule)
            </p>
            <div class="px-10 mt-5 space-y-3">
              <p>Please complete the following by telling us about your accommodations*:</p>
              <label class="flex items-center text-sm">
                <input type="radio" class="mr-4" />
                Main Hotel: The LaGuardia Plaza Hotel 104-04Blvd., East Elmhurst, NY 11369 </label
              ><label class="flex items-center text-sm">
                <input type="radio" class="mr-4" />
                Secondary Hotel: The Hampton Inn New York LaGuardia Airport Hotel 102-40 Ditmars
                Boulevard, Queens, NY, 11369, US </label
              ><label class="flex items-center text-sm text-dim-gray">
                <input type="radio" class="mr-4" />
                I'll be staying somewhere else
              </label>
            </div>
            <div
              class="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center mt-6 md:space-x-5"
            >
              <ButtonComponent name="Save and Submit" class="w-fit !p-3 !text-xs" />
              <p class="text-red-600">Please select where you stay to proceed.</p>
            </div>
          </div>
        </template>
      </ProgramToggleComponent>
      <CongratsCardComponent v-if="timesClicked > 1" :value="1" />
    </template>
  </DefaultProgramPageComponent>
</template>
