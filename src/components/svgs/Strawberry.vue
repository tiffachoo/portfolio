<template>
  <svg 
    ref="root"
    class="tc-strawberry"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 62 82.2"
  >
    <path d="M4.8 38.2c0-18 12.8-18.3 28.6-18.3S62 20.3 62 38.3s-12.8 44-28.6 44-28.6-26-28.6-44Z" class="fill-secondary"/>
    <path d="M.5 36.8c0-18 12.8-18.3 28.6-18.3s28.6.3 28.6 18.3-12.8 44-28.6 44S.5 54.8.5 36.8Z" class="stroke stroke-black-dark"/>
    <path d="M38 11.3c.8-4.8 0-9.7 0-9.7s-6.3 4.4-8.6 10l-.5 1.5-1.1-1.1a27.8 27.8 0 0 0-11.9-5.7s1.8 7.4 6.2 11.6c3.7 3.6 7 4.8 8.8 4.1 2 .5 5-.1 8.7-2.4 5.2-3 8.7-9.9 8.7-9.9s-5.5-.1-10.3 1.7Z" class="fill-primary"/>
    <path d="M34.4 10.6c.9-4.8 0-9.7 0-9.7s-6.3 4.4-8.5 10l-.6 1.5-1-1.1a27.8 27.8 0 0 0-12-5.8s1.9 7.5 6.2 11.7c3.7 3.6 7 4.8 8.8 4.1h.1c1.8.5 4.9-.2 8.6-2.4 5.2-3 8.7-9.9 8.7-9.9s-5.5-.2-10.3 1.6Z" class="stroke stroke-black-dark"/>
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
  .tc-strawberry {
    width: 3rem;
  }
</style>
