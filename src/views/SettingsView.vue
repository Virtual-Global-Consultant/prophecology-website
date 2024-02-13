<script setup>
import ProgramToggleComponent from '@/components/Dashboard/Programs/ProgramToggleComponent.vue'
import RegError from '@/components/Errors/RegError.vue'
import InputLabelComponent from '@/components/Input/InputLabelComponent.vue'
import SettingsCardComponent from '@/components/Dashboard/Settings/SettingsCardComponent.vue'
import CheckboxInfoComponent from '@/components/Dashboard/Settings/CheckboxInfoComponent.vue'
import ButtonComponent from '@/components/Button/ButtonComponent.vue'
import CautionIcon from '@/components/Icons/CautionIcon.vue'
import InputCheckboxComponent from '@/components/Input/InputCheckboxComponent.vue'
import ButtonWhiteComponent from '@/components/Button/ButtonWhiteComponent.vue'
import { appState } from '@/services/app'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()
</script>
<template>
  <!-- Personal Information -->
  <ProgramToggleComponent title="Personal Information">
    <template v-slot:toggleComponents>
      <div class="flex flex-col space-y-10">
        <div class="w-full flex flex-col justify-between lg:flex-row lg:flex-wrap lg:justify-start gap-2 lg:gap-4">
          <RegError title="First Name:" :value="authStore.user.first_name"
            class="lg:w-2/5 border-dim-gray border-opacity-50" />
          <RegError title="Last Name:" :value="authStore.user.last_name"
            class="lg:w-2/5 border-dim-gray border-opacity-50" />
          <RegError title="Donor ID:" value="015214564" class="lg:w-2/5 border-dim-gray border-opacity-50" />
          <RegError title="Date of birth:" :value="authStore.user.date_of_birth ?? '-'" class="lg:w-2/5 border-dim-gray border-opacity-50" />
        </div>
        <p class="bg-gold bg-opacity-20 rounded-md p-5">
          <span class="font-bold">Please Note:</span> Your Name & Donor ID are unique and can't be
          changed. If you need to change it, please contact the support on this link
          <RouterLink to="/" class="border-b-2 border-gold text-gold">Request Change </RouterLink>
        </p>

        <form @submit.prevent="authStore.updateUser">
          <div class="grid lg:grid-cols-2 gap-2 lg:gap-x-4">
            <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider col-span-2">
            <label for="address" class="text-dim-gray">Address <sup>*</sup>
            </label>
            <input v-model="authStore.userUpdateRT.address"
              class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 rounded-md p-3"
              type="tel" required id="address" placeholder="Enter Your Address" />
          </div>
          <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
            <label for="state" class="text-dim-gray">State <sup>*</sup>
            </label>
            <input v-model="authStore.userUpdateRT.state"
              class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 rounded-md p-3"
              type="text" required id="state" placeholder="Enter Your State" />
          </div>
          <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
            <label for="city" class="text-dim-gray">City <sup>*</sup>
            </label>
            <input v-model="authStore.userUpdateRT.city"
              class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 rounded-md p-3"
              type="text" required id="city" placeholder="Enter Your City" />
          </div>
          <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
            <label for="zip_code" class="text-dim-gray">Zip code
            </label>
            <input v-model="authStore.userUpdateRT.zip_code"
              class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 rounded-md p-3"
              type="text" id="zip_code" placeholder="Enter Your Zip code" />
          </div>
          <!-- <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
            <label for="date_of_birth" class="text-dim-gray">Date of birth <sup>*</sup>
            </label>
            <input v-model="authStore.userUpdateRT.date_of_birth"
              class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 rounded-md p-3"
              type="date" required id="date_of_birth" placeholder="Enter Your Date of birth" />
          </div> -->
          <div class="flex flex-col space-y-2 font-Trueno mb-5 tracking-wider">
            <label for="cashapp_id" class="text-dim-gray">Cashapp ID
            </label>
            <input v-model="authStore.userUpdateRT.cashapp_id"
              class="border border-mid-gray focus:border-gold focus:outline-gold transition-all ease-in-out duration-300 rounded-md p-3"
              type="text" id="cashapp_id" placeholder="Enter Your Cashapp ID" />
          </div>
          </div>
          <ButtonComponent name="Save Changes" 
        :loading="authStore.userUpdateRT.appState == appState().loading"
        class="!text-sm w-fit pb-3 text-md" />
        </form>
      </div>
    </template>
  </ProgramToggleComponent>

  <!-- Account Settings -->
  <ProgramToggleComponent title="Account Settings">
    <template v-slot:toggleComponents>
      <!-- Email and Password -->
      <div class="space-y-14">
        <SettingsCardComponent title="Email & Password" info="Update your email and or password.">
          <template v-slot:settingsCard>
            <div class="space-y-5 lg:flex lg:items-center lg:space-x-14 lg:w-full lg:space-y-0">
              <div>
                <InputLabelComponent label="Account Email" value="blacecreative@gmail.com" />
                <p>
                  Change Email?
                  <span class="border-b border-b-gold text-gold hover:border-b-black hover:text-black">Reset Email</span>
                </p>
              </div>
              <div>
                <InputLabelComponent label="Account Email" value="blacecreative@gmail.com" type="password" />
                <p>
                  Forgotten Password?
                  <span class="border-b border-b-gold text-gold hover:border-b-black hover:text-black">Reset
                    Password</span>
                </p>
              </div>
            </div>
          </template>
        </SettingsCardComponent>

        <SettingsCardComponent title="Email Notifications" info="Set your email notification preferences.">
          <template v-slot:settingsCard>
            <p>Which email would like to receive?</p>
            <div class="space-y-2 px-3 lg:grid lg:grid-cols-2">
              <CheckboxInfoComponent text="Special News & Updates" />
              <CheckboxInfoComponent text="Prophecology Updates" />
              <CheckboxInfoComponent text="Insights About Recent Events" />
              <CheckboxInfoComponent text="Daily Blessings & Update Name" />
              <CheckboxInfoComponent text="Account Related Notifications" />
              <CheckboxInfoComponent text="Future Event Notification" />
            </div>

            <ButtonComponent name="Save Changes" class="!text-sm w-full lg:w-1/2 py-3 text-md" />
          </template>
        </SettingsCardComponent>
      </div>
    </template>
  </ProgramToggleComponent>

  <!--  Other Settings-->
  <ProgramToggleComponent title="Other Settings">
    <template v-slot:toggleComponents>
      <div class="flex p-5 flex-col space-y-10">
        <SettingsCardComponent title="Profile Visibility Settings" info="Select who may see your profile details.">
        </SettingsCardComponent>

        <SettingsCardComponent title="Data Export"
          info="You can request an export of your personal data, containing the following items if applicable:">
          <template v-slot:settingsCard>
            <p>Which email would like to receive?</p>
            <div class="space-y-2 px-3 lg:grid lg:grid-cols-2">
              <CheckboxInfoComponent text="Personal information" />
              <CheckboxInfoComponent text="Prophecology Enrolled Courses" />
              <CheckboxInfoComponent text="Prophecology Course Progress" />
              <CheckboxInfoComponent text="Personal settings" />
              <CheckboxInfoComponent text="Prophecology Enrolled Groups" />
              <CheckboxInfoComponent text="Prophecology Course Certificates" />
              <CheckboxInfoComponent text="Extended Profile information" />
            </div>

            <ButtonComponent name="Request Data Export" class="lg:w-1/2 !text-sm !mt-10 py-3 text-md" />
          </template>
        </SettingsCardComponent>

        <SettingsCardComponent title="Delete Account & Erase Data"
          info="You can request to delete your account and erase all the data you have.">
          <template v-slot:settingsCard>
            <div class="space-y-10">
              <p>
                To erase all data associated with your account, your
                <span class="underline underline-offset-4 text-primary-blue">user account must be completely
                  deleted.</span>
                You may delete your account by clicking the button below.
              </p>
              <div class="flex items-center bg-gold bg-opacity-20 rounded-md py-5 w-full lg:px-10 lg:space-x-5">
                <CautionIcon class="w-10 h-10" />
                <p class="w-8/12">
                  Deleting your account will delete all of the content you have created. It will be
                  completely
                  <b>irrecoverable</b>.
                </p>
              </div>
              <div class="flex items-center space-x-3">
                <InputCheckboxComponent type="checkbox" class="w-10" />
                <p class="w-10/12">
                  I do hereby understand that clicking the button below will delete the account and
                  all the information associated with it.
                  <span class="text-gold underline underline-offset-4">Read More</span>
                </p>
              </div>
              <ButtonWhiteComponent name="Delete My Account"
                class="w-full lg:w-1/2 !text-sm hover:bg-red-700 hover:!text-white hover:!border-red-700 !border-dim-gray !text-dim-gray" />
            </div>
          </template>
        </SettingsCardComponent>
      </div>
    </template>
  </ProgramToggleComponent>
</template>
