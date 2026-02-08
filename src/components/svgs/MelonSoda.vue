<template>
  <svg
    ref="root"
    class="tc-melon-soda"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 196.8 298.8"
  >
    <path d="M192.3 57.3h-140s47.6 117.7 27 228.4c-.3.6-.4 1.2-.4 1.7 0 6.3 19.4 11.4 43.4 11.4s43.4-5 43.4-11.4c0-.5-.2-1.1-.5-1.6-20.5-110.8 27-228.5 27-228.5Z" class="fill-accent-tint"/>
    <ellipse cx="122.3" cy="56.4" rx="70" ry="18.4" class="fill-accent"/>
    <path d="m195.7 51.7.6-2.3c0-10.1-31.4-18.4-70-18.4s-70 8.3-70 18.4c0 .3.4 2 .6 2.3 5.3 13.9 45.6 123.5 26.4 227-.3.6-.4 1.1-.4 1.7 0 6.3 19.4 11.4 43.4 11.4s43.4-5 43.4-11.4c0-.6-.2-1.1-.5-1.7-19.2-103.5 21.2-213.1 26.5-227Z" class="stroke stroke-black-dark"/>
    <path d="m178.2 71.8.5-2.1c0-9.3-25.3-16.8-56.4-16.8s-56.4 7.5-56.4 16.8c0 .2.3 1.8.5 2.1C70.7 84.5 103 184.5 87.7 279c-.3.5-.4 1-.4 1.5 0 5.8 15.7 10.4 35 10.4s35-4.6 35-10.4c0-.5-.2-1-.4-1.5-15.5-94.5 17-194.5 21.3-207.2Z" class="fill-primary"/>
    <circle cx="142.7" cy="120.9" r="3" class="fill-accent-tint"/>
    <circle cx="107.7" cy="153.9" r="3" class="fill-accent-tint"/>
    <circle cx="123.7" cy="184.9" r="3" class="fill-accent-tint"/>
    <circle cx="113.7" cy="209.9" r="3" class="fill-accent-tint"/>
    <circle cx="120.7" cy="224.9" r="3" class="fill-accent-tint"/>
    <g style="opacity: 0.6">
      <path d="m118.8 215.6-3.4.8c-1.7.4-3.5-.7-4-2.5l-47-196a9.7 9.7 0 0 0-11.8-7.1L5.4 22c-1.8.5-3.6-.6-4-2.4l-.8-3.3c-.4-1.8.7-3.6 2.4-4L50.3 1.1C60.9-1.5 71.5 5 74 15.6l47.2 196c.4 1.8-.7 3.6-2.4 4Z" class="stroke stroke-secondary fill-accent-tint"/>
    </g>
    <path d="M179.2 62c0 19.5-19 30.4-42.5 30.4S94.2 81.5 94.2 62s19-40.5 42.5-40.5 42.5 21 42.5 40.5Z" class="fill-accent-tint"/>
    <path d="M181.2 56c0 19.5-19 30.4-42.5 30.4S96.2 75.5 96.2 56s19-40.5 42.5-40.5 42.5 21 42.5 40.5Z" class="stroke stroke-black-dark"/>
    <circle cx="100.7" cy="74.9" r="12.5" class="fill-secondary"/>
    <circle cx="99.7" cy="70.9" r="12.5" class="stroke stroke-black-dark"/>
    <path d="M99.3 60s1.9-8.6-2.1-14.6" class="stroke stroke-black-dark"/>
    <path d="M56.3 49.9c1 10 32 18 70 18s69-8 70-18" class="stroke stroke-black-dark"/>
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
  .tc-melon-soda {
    width: 10rem;
  }
</style>
