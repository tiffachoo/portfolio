<template>
  <svg 
    ref="root"
    class="tc-cake"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 199.3 154.2"
  >
    <path d="M0 80.2h195l-53.6-59.4a5 5 0 0 0-5.7-1.2L0 80.2Z" class="fill-accent-tint"/>
    <path d="M3.9 75.2h192.4c2.2 0 3.4-2.6 1.9-4.3l-52.6-53.8a7.4 7.4 0 0 0-8.5-1.8L2.8 70.3c-2.5 1.1-1.7 4.8 1 4.8Z" class="stroke stroke-black-dark"/>
    <path d="M116.7 16.8c9-10.7 16.7-4.5 26.1 3.4 9.4 7.8 17 14.3 8 25s-29.5 19.8-38.9 12-4-29.7 4.8-40.4Z" class="fill-secondary"/>
    <path d="M117.2 13.6c9-10.7 16.7-4.5 26.1 3.4 9.4 7.8 17 14.3 8 25s-29.5 19.8-38.9 12c-9.4-7.9-4-29.7 4.8-40.4Z" class="stroke stroke-black-dark"/>
    <path d="M149.3 16.2c3-2.5 4.8-5.8 4.8-5.8s-5.9-.5-10 1.7l-1 .6-.2-1.2c-.5-4.7-4.2-9.3-4.2-9.3s-2.6 5.3-2.1 10c.4 4 1.7 6.3 3.2 6.8.9 1.3 3 2.3 6.3 2.9 4.7.7 10.1-1.6 10.1-1.6s-3.1-2.8-6.9-4.1Z" class="fill-primary"/>
    <path d="M150.4 14.9c2.9-2.5 4.8-5.8 4.8-5.8s-6-.5-10 1.7l-1.1.6-.1-1.2c-.5-4.6-4.2-9.3-4.2-9.3s-2.7 5.3-2.1 10c.4 4 1.7 6.3 3.1 6.8h.1c.8 1.3 3 2.4 6.3 3 4.6.7 10-1.7 10-1.7s-3-2.8-6.8-4.1Z" class="stroke stroke-black-dark"/>
    <path d="M185 154.2H10a10 10 0 0 1-10-10v-64h195v64a10 10 0 0 1-10 10Z" class="fill-accent"/>
    <rect width="169" height="23" x="12.5" y="101.7" class="fill-accent-tint" rx="11.5" ry="11.5"/>
    <path d="M188 149.2H13a10 10 0 0 1-10-10v-64h195v64a10 10 0 0 1-10 10Z" class="stroke stroke-black-dark"/>
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
  .tc-cake {
    width: 9rem;
  }
</style>
