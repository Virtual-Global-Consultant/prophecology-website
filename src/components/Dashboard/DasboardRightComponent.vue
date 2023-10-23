<template>
  <div class="flex flex-col bg-dim-white px-7 py-5 rounded-lg w-full xl:w-8/12 2xl:w-8/12">
    <div
      class="flex items-center justify-between lg:justify-end space-x-5 shadow-dboard bg-white rounded-md py-4 px-4"
    >
      <p class="text-dim-gray leading-4 text-sm xl:text-xs 2xl:block">
        Lifetime <br />
        Donations
      </p>
      <p class="text-3xl lg:text-4xl text-gold">$14,940</p>
      <p class="lg:w-2/12 leading-4 text-sm">
        <span class="text-dim-gray">Blessing Plan:</span> Blessing Plan 15
      </p>
    </div>
    <!-- Dashboard Right Slot -->
    <slot name="dashboard"></slot>
  </div>
</template>
