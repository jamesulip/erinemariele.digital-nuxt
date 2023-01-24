<script lang="ts" setup>
const { data } = await useAsyncData('count', () => $fetch('/api/hello'))

</script>

<template>
  <div class="items-start flex flex-row max-w-full stretch flex-wrap overflow-auto gap-3 p-10">
    <!-- random image -->

      <img  v-for="i in data.results" class="h-64 w-auto" :src="i.urls.small" alt="">
  
  </div>
</template>

<style scoped>

</style>
