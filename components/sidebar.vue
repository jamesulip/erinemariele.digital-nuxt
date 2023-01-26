<script lang="ts" setup></script>

<template>
    <div class="text-white  flex text-base font-normal leading-10 flex-row md:flex-col gap-3 md:gap-20 font-['Josefin_Sans']">
      <NuxtLink :to="`/about`" class="uppercase md:-rotate-90">About</NuxtLink>
      <NuxtLink :to="`/contact`" class="uppercase md:-rotate-90">Contact</NuxtLink>
      <NuxtLink :to="`/work`" class="uppercase md:-rotate-90">Work</NuxtLink>
     
    </div>    
    <NuxtLink class="md:flex hidden" to="/">
        <Logo />
      </NuxtLink>
</template>

<style scoped></style>