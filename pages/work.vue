<script lang="ts" setup>
const { data } = await useAsyncData('count', () => $fetch('/api/hello'))

</script>

<template>
 
  <TransitionGroup name="list" class="items-start flex flex-row max-w-full stretch flex-wrap overflow-auto gap-3 p-10" tag="div">
      <img  v-for="i in data?.results" class=" h-64 w-auto" :src="i.urls.small" alt="">
  </TransitionGroup>
 
</template>

<style >
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
