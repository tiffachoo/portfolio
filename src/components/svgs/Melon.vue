<template>
  <svg 
    ref="root"
    class="tc-melon"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 131.5 152.5"
  >
    <path d="M121 85.7a60.6 60.6 0 1 1-121 0C0 51 27 22 60.5 22S121 51.1 121 85.7Z" class="fill-primary"/>
    <path d="M131 87.7a60.6 60.6 0 1 1-121 0C10 53 37 24 70.5 24S131 53.1 131 87.7Z" class="stroke stroke-black-dark"/>
    <path d="M82.6 2.1a5 5 0 0 0-7-1.2S59.3 12 44.2 5a5 5 0 0 0-4.2 9.1c5.1 2.3 10.2 3.2 15 3.2h.5v12.8a5 5 0 0 0 10 0V16c9-2.3 15.5-6.7 16-7a5 5 0 0 0 1.2-7Z" class="fill-black"/>
    <path d="M52.5 42.4 17.1 77.8M70.7 48.2 35.4 83.6M70.9 80.2 35.5 44.9M62.9 93.3 27.6 58" class="stroke stroke-black-dark"/>
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
  .tc-melon {
    width: 5rem;
  }
</style>
