<script lang="ts" setup></script>

<template>
  <div class="flex h-screen">
    <div class="p-3 bg-black flex w-[90px] flex-col">
      <Sidebar class=" my-auto w-full"/>
      <img src="/img/logo.png"/>
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
