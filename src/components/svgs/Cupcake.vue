<template>
  <svg 
    ref="root"
    class="tc-cupcake tc-food"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 125.5 142.3"
  >
    <path d="M115.5 64.3H7.5L12 119c0 13 19.5 23.3 49.3 23.3s49.4-10.4 49.4-23.3l4.6-54.5Z" class="fill-accent"/>
    <path d="M47 113.7v15M62 113.7v15M77 113.7v15" class="stroke stroke-black-dark"/>
    <path d="M116.2 61.3H8.2l4.7 54.6c0 12.8 19.5 23.3 49.3 23.3s49.4-10.5 49.4-23.4l4.6-54.5Z" class="stroke stroke-black-dark"/>
    <path d="M125.5 62c-.1-22.8-27.7-49.7-61.7-49.7S3.5 38 2.2 60.4a31.5 31.5 0 0 0 35.3 34 31.4 31.4 0 0 0 54.7.2H94c17.4 0 31.5-14 31.5-31.4V62Z" class="fill-secondary"/>
    <path d="M124 56.6C123.8 33.8 96.2 7 62.3 7S2 32.6.6 55A31.5 31.5 0 0 0 36 89a31.4 31.4 0 0 0 54.7.2h1.8c17.3 0 31.4-14 31.4-31.4v-1.2Z" class="stroke stroke-black-dark"/>
    <path d="M82.5 20.5c0 9.6-8.2 17.2-18.4 17.2S45.7 30 45.7 20.5 53.9 2.6 64 2.6s18.5 8.2 18.5 17.9Z" class="fill-black"/>
    <path d="M81.3 18.3c0 9.7-8.2 17.2-18.4 17.2S44.4 28 44.4 18.3 52.7.5 63 .5s18.4 8.2 18.4 17.8Z" class="stroke stroke-black-dark"/>
    <path d="m64 2.8 1.7 1.5.7.2 3 .6c.9.1 1.2.7.7 1l-2 1.5c-.2.1-.2.3-.2.4v1.8c0 .5-.8.9-1.6.7l-3-.6h-.8l-3 .6c-.8.2-1.7-.2-1.7-.7L58 8c0-.1 0-.3-.2-.4l-2-1.4c-.5-.4-.2-1 .7-1.1l3-.6c.3 0 .5 0 .7-.2l1.8-1.5c.5-.4 1.5-.4 2 0Z" class="fill-black-dark"/>
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
.tc-cupcake {
  width: 5rem;
}
</style>
