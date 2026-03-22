<template>
  <svg 
    ref="root"
    class="tc-blueberry tc-food"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 58.5"
  >
    <path d="M60 31.6c0 15.1-13 27-28.8 27S2.4 46.7 2.4 31.5 15.3 3.8 31.2 3.8 60 16.6 60 31.6Z" class="fill-black"/>
    <path d="M58 28.3c0 15.1-12.8 26.9-28.7 26.9S.5 43.4.5 28.3 13.4.5 29.3.5 58 13.2 58 28.3Z" class="stroke stroke-black-dark"/>
    <path d="m30.9 4 2.8 2.4c.2.2.6.3 1 .4l4.8.8c1.3.2 1.8 1.1 1 1.7l-3 2.2c-.3.2-.5.5-.5.7l.2 2.9c0 .7-1.3 1.3-2.6 1l-4.7-1h-1.3l-4.6 1c-1.3.3-2.6-.3-2.6-1l.1-2.9c0-.2 0-.5-.4-.7l-3-2.2c-.8-.6-.3-1.5 1-1.7l4.8-.8c.4 0 .8-.2 1-.4L27.7 4c.8-.6 2.4-.6 3.2 0Z" class="fill-black-dark"/>
  </svg>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const root = ref();

defineExpose({
  root
})
</script>

<style>
.tc-blueberry {
  width: 3rem;
}
</style>
