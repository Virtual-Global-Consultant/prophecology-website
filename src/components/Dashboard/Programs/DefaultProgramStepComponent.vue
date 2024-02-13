<script setup lang="ts">
import ArrowToggleLeft from '@/assets/img/arrow-toggle-left.svg'
import ArrowToggleRight from '@/assets/img/arrow-toggle-right.svg'
import TaskCardComponent from '@/components/Program/TaskCardComponent.vue'
import { useRoute } from 'vue-router'
import ButtonWhiteComponent from '@/components/Button/ButtonWhiteComponent.vue'

const route = useRoute()

const props = defineProps({
  program: Object,
  title: String,
  info: String,
  desc: String,
  descTitle: String,
  routeName: String,
  routeTitle: String,
  routeInfo: String,
  routeName2: String,
  routeTitle2: String,
  routeInfo2: String,
  toggleBtn: Boolean
})
</script>

<template>
  <div class="w-full space-y-5">
    <div class="bg-dim-white rounded-md w-full">
      <div class="bg-white p-5 rounded-md space-y-4">
        <p
          :class="[
            'text-primary-blue text-lg lg:text-sm ',
            route.name != 'intro' ? 'text-black' : ''
          ]"
        >
        {{ program?.title }}
        </p>
        <div class="flex items-center">
          <p
            :class="[
              'text-gold lg:text-sm ',
              props.descTitle ? 'text-primary-blue lg:!text-lg' : ''
            ]"
          >
            <span class="font-TruenoB">{{ props.descTitle }}</span> {{ props.desc }}
          </p>
          <ButtonWhiteComponent
            v-if="props.toggleBtn"
            name="Save Progress"
            class="!text-xs w-4/12 h-fit !py-4"
          />
        </div>
        <div v-if="route.name === 'intro'" class="flex items-center p-5">
          <iframe
            class="w-full"
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7733418416888!2d-73.86961842397153!3d40.76700967138539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a14803fb63d%3A0x966ff47d7080751b!2sLaGuardia%20Plaza%20Hotel!5e0!3m2!1sen!2sgh!4v1697416542269!5m2!1sen!2sgh"
            width="400"
            height="300"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="py-2 p-5">
        <slot name="programTemplate"></slot>
      </div>
    </div>

    <!-- Navigator   -->
    <div class="flex items-center gap-5 flex-col md:flex-row">
      <RouterLink :to="{ name: props.routeName }" class="w-full">
        <TaskCardComponent
          class="p-4"
          :status-icon="ArrowToggleLeft"
          :title="props.routeTitle"
          :info="props.routeInfo"
        />
      </RouterLink>
      <RouterLink :to="{ name: props.routeName2 }" class="w-full">
        <TaskCardComponent
          class="p-4"
          :view-icon="ArrowToggleRight"
          :title="props.routeTitle2"
          :info="props.routeInfo2"
        />
      </RouterLink>
    </div>
  </div>
</template>
