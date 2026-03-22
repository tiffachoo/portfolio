<template>
  <svg 
    ref="root"
    class="tc-cherry tc-food"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64.8 68"
  >
    <circle cx="15.7" cy="53.9" r="14.1" class="fill-secondary"/>
    <circle cx="14.6" cy="49.4" r="14.1" class="stroke stroke-black-dark"/>
    <path d="M14.2 37S11.4 18.5 27.5.5" class="stroke stroke-black-dark"/>
    <circle cx="50.7" cy="44.9" r="14.1" class="fill-secondary"/>
    <circle cx="49.6" cy="43.4" r="14.1" class="stroke stroke-black-dark"/>
    <path d="M49.2 31S45.5 11.5 25.5 3.5" class="stroke stroke-black-dark"/>
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
.tc-cherry {
  width: 3rem;
}
</style>
