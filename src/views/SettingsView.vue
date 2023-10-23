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
</script>
<template>
  <!-- Personal Information -->
  <ProgramToggleComponent title="Personal Information">
    <template v-slot:toggleComponents>
      <div class="flex flex-col space-y-10">
        <div
          class="w-full flex flex-col justify-between lg:flex-row lg:flex-wrap lg:justify-start gap-2 lg:gap-4"
        >
          <RegError
            title="First Name:"
            value="CeeJay"
            class="lg:w-2/5 border-dim-gray border-opacity-50"
          />
          <RegError
            title="Last Name:"
            value="Charith"
            class="lg:w-2/5 border-dim-gray border-opacity-50"
          />
          <RegError
            title="Donor ID:"
            value="015214564"
            class="lg:w-2/5 border-dim-gray border-opacity-50"
          />
        </div>
        <p class="bg-gold bg-opacity-20 rounded-md p-5">
          <span class="font-bold">Please Note:</span> Your Name & Donor ID are unique and can't be
          changed. If you need to change it, please contact the support on this link
          <RouterLink to="/" class="border-b-2 border-gold text-gold">Request Change </RouterLink>
        </p>
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
                  <span
                    class="border-b border-b-gold text-gold hover:border-b-black hover:text-black"
                    >Reset Email</span
                  >
                </p>
              </div>
              <div>
                <InputLabelComponent
                  label="Account Email"
                  value="blacecreative@gmail.com"
                  type="password"
                />
                <p>
                  Forgotten Password?
                  <span
                    class="border-b border-b-gold text-gold hover:border-b-black hover:text-black"
                    >Reset Password</span
                  >
                </p>
              </div>
            </div>
          </template>
        </SettingsCardComponent>

        <SettingsCardComponent
          title="Email Notifications"
          info="Set your email notification preferences."
        >
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
        <SettingsCardComponent
          title="Profile Visibility Settings"
          info="Select who may see your profile details."
        >
        </SettingsCardComponent>

        <SettingsCardComponent
          title="Data Export"
          info="You can request an export of your personal data, containing the following items if applicable:"
        >
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

            <ButtonComponent
              name="Request Data Export"
              class="lg:w-1/2 !text-sm !mt-10 py-3 text-md"
            />
          </template>
        </SettingsCardComponent>

        <SettingsCardComponent
          title="Delete Account & Erase Data"
          info="You can request to delete your account and erase all the data you have."
        >
          <template v-slot:settingsCard>
            <div class="space-y-10">
              <p>
                To erase all data associated with your account, your
                <span class="underline underline-offset-4 text-primary-blue"
                  >user account must be completely deleted.</span
                >
                You may delete your account by clicking the button below.
              </p>
              <div
                class="flex items-center bg-gold bg-opacity-20 rounded-md py-5 w-full lg:px-10 lg:space-x-5"
              >
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
              <ButtonWhiteComponent
                name="Delete My Account"
                class="w-full lg:w-1/2 !text-sm hover:bg-red-700 hover:!text-white hover:!border-red-700 !border-dim-gray !text-dim-gray"
              />
            </div>
          </template>
        </SettingsCardComponent>
      </div>
    </template>
  </ProgramToggleComponent>
</template>
