<script lang="ts" setup></script>

<template>
  <div class="flex h-screen flex-col md:flex-row">
    <div class="p-3 bg-black flex w-full md:w-[90px] justify-between flex-col">
      <Sidebar class=" my-auto w-full" />
      

    </div>
    <div class="h-full overflow-auto w-full flex">
      <slot />

    </div>
  </div>
</template>

<style scoped>

</style>
