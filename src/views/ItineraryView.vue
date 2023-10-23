<script setup lang="ts">
import ProgramToggleComponent from '@/components/Dashboard/Programs/ProgramToggleComponent.vue'
import CheckInCard from '@/components/Dashboard/Programs/CheckInCard.vue'
import DefaultProgramPageComponent from '@/components/Dashboard/Programs/DefaultProgramPageComponent.vue'
</script>
<template>
  <DefaultProgramPageComponent
    desc-title="Conference Itinerary:"
    desc="Find out all the the dates, times, locations and informations"
    route-title="Introduction:"
    route-title2="Step 1:"
    route-name="intro"
    route-name2="first"
    route-info="Summer Prophecology Conference 2023"
    route-info2="Book Your Air Travel, Ground Transportation and Hotel"
  >
    <template v-slot:programTemplate>
      <ProgramToggleComponent title="Wednesday, June 7, 2023" value="Mastermind Only">
        <template v-slot:toggleComponents>
          <div class="space-y-4 w-full">
            <CheckInCard
              from="12:00 PM"
              to="3:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              m-badge="Mastermind"
              b-badge="Break"
            />
            <CheckInCard
              from="7:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
            />
            <CheckInCard
              from="12:00 PM"
              to="3:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              m-badge="Mastermind"
            />
          </div>
          <p class="bg-gold bg-opacity-30 p-5 text-xs md:text-sm rounded-md mt-4">
            Transportation to and from Manhattan is the responsibility of each Mastermind
            participant.
            <span class="font-TruenoB">See your Mastermind Concierge for more information</span>
          </p>
        </template>
      </ProgramToggleComponent>
      <ProgramToggleComponent title="Day 1 – Thursday, June 8, 2023">
        <template v-slot:toggleComponents>
          <div class="mb-5 space-x-3">
            <p class="text-primary-blue font-TruenoB mb-4">Mastermind Participants Only</p>
            <div class="space-y-4 w-full">
              <CheckInCard
                from="12:00 PM"
                to="3:00 PM"
                title="Check-in at the Mastermind Desk"
                desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
                m-badge="Mastermind"
                b-badge="Break"
              />
              <CheckInCard
                from="7:00 PM"
                title="Check-in at the Mastermind Desk"
                desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              />
              <CheckInCard
                from="12:00 PM"
                to="3:00 PM"
                title="Check-in at the Mastermind Desk"
                desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
                m-badge="Mastermind"
              />
            </div>
          </div>
          <div class="space-x-3">
            <p class="text-primary-blue font-TruenoB mb-4">General Participants</p>
            <div class="space-y-4 w-full">
              <CheckInCard
                from="12:00 PM"
                to="3:00 PM"
                title="Check-in at the Mastermind Desk"
                desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
                m-badge="Mastermind"
                b-badge="Break"
              />
              <CheckInCard
                from="7:00 PM"
                title="Check-in at the Mastermind Desk"
                desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              />
              <CheckInCard
                from="12:00 PM"
                to="3:00 PM"
                title="Check-in at the Mastermind Desk"
                desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
                m-badge="Mastermind"
              />
            </div>
          </div>
        </template>
      </ProgramToggleComponent>
      <ProgramToggleComponent title="Wednesday, June 7, 2023" value="Mastermind Only">
        <template v-slot:toggleComponents>
          <div class="space-y-4 w-full">
            <CheckInCard
              from="12:00 PM"
              to="3:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              m-badge="Mastermind"
              b-badge="Break"
            />
            <CheckInCard
              from="7:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
            />
            <CheckInCard
              from="12:00 PM"
              to="3:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              m-badge="Mastermind"
            />
          </div>
          <p class="bg-gold bg-opacity-30 p-5 text-xs md:text-sm rounded-md mt-4">
            Transportation to and from Manhattan is the responsibility of each Mastermind
            participant.
            <span class="font-TruenoB">See your Mastermind Concierge for more information</span>
          </p>
        </template>
      </ProgramToggleComponent>
      <ProgramToggleComponent title="Wednesday, June 7, 2023" value="Mastermind Only">
        <template v-slot:toggleComponents>
          <div class="space-y-4 w-full">
            <CheckInCard
              from="12:00 PM"
              to="3:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              m-badge="Mastermind"
              b-badge="Break"
            />
            <CheckInCard
              from="7:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
            />
            <CheckInCard
              from="12:00 PM"
              to="3:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              m-badge="Mastermind"
            />
          </div>
          <p class="bg-gold bg-opacity-30 p-5 text-xs md:text-sm rounded-md mt-4">
            Transportation to and from Manhattan is the responsibility of each Mastermind
            participant.
            <span class="font-TruenoB">See your Mastermind Concierge for more information</span>
          </p>
        </template>
      </ProgramToggleComponent>
      <ProgramToggleComponent title="Wednesday, June 7, 2023" value="Mastermind Only">
        <template v-slot:toggleComponents>
          <div class="space-y-4 w-full">
            <CheckInCard
              from="12:00 PM"
              to="3:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              m-badge="Mastermind"
              b-badge="Break"
            />
            <CheckInCard
              from="7:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
            />
            <CheckInCard
              from="12:00 PM"
              to="3:00 PM"
              title="Check-in at the Mastermind Desk"
              desc="LaGuardia Plaza Hotel – 2nd floor (Outside the Corona Room)"
              m-badge="Mastermind"
            />
          </div>
          <p class="bg-gold bg-opacity-30 p-5 text-xs md:text-sm rounded-md mt-4">
            Transportation to and from Manhattan is the responsibility of each Mastermind
            participant.
            <span class="font-TruenoB">See your Mastermind Concierge for more information</span>
          </p>
        </template>
      </ProgramToggleComponent>
    </template>
  </DefaultProgramPageComponent>
</template>
