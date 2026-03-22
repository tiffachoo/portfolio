<template>
  <svg 
    ref="root"
    class="tc-coffee tc-food"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 195.6 172.4"
  >
    <ellipse cx="100.1" cy="143.8" class="fill-accent" rx="95.6" ry="25.1"/>
    <ellipse cx="96.1" cy="146.8" class="stroke stroke-black-dark" rx="95.6" ry="25.1"/>
    <path d="m151 113.4-9.2-13.1c22.6-15.8 29-33.7 27.6-41.8-.5-3.8-2.4-4.8-4-5.2-7.1-2.2-11.2 6.8-11.6 7.9L139 55c.2-.6 2.4-5.8 6.9-10.4 6.7-7 15.4-9.4 24.2-6.7 8.2 2.4 13.7 9 15.1 18 3.3 20.8-14.8 43.8-34.3 57.4Z" class="fill-accent-tint"/>
    <path d="m147 116.4-9.2-13.1c22.6-15.8 29-33.7 27.6-41.8-.5-3.8-2.4-4.8-4-5.2-7.1-2.2-11.2 6.8-11.6 7.9L135 58c.2-.6 2.4-5.8 6.9-10.4 6.7-7 15.4-9.4 24.2-6.7 8.2 2.4 13.7 9 15.1 18 3.3 20.8-14.8 43.8-34.3 57.4Z" class="stroke stroke-black-dark"/>
    <path d="M160 15.7H40l7.6 120c.7 7.4 24 13.4 52.5 13.4s51.7-6 52.4-13.4l7.6-120Z" class="fill-accent-tint"/>
    <ellipse cx="100.1" cy="15.8" class="fill-accent" rx="60" ry="15.8"/>
    <path d="M100 13.9c-25 0-45.2 5.3-45.2 11.9v.3c11 3.3 27.2 5.4 45.3 5.4s34.2-2 45.2-5.4v-.3c0-6.6-20.3-12-45.2-12Z" class="fill-secondary"/>
    <path d="M36 18.9c.3 8.6 27 15.6 60 15.6s59.8-7 60-15.6" class="stroke stroke-black-dark"/>
    <path d="M156 18.7C155.9 10 129 3 96 3s-59.7 7-60 15.7v.3l7.6 119.6c.7 7.5 24 13.5 52.5 13.5s51.7-6 52.4-13.4L156 19v-.2Z" class="stroke stroke-black-dark"/>
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
.tc-coffee {
  width: 9rem;
}
</style>
