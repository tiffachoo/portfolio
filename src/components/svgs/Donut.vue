<template>
  <svg 
    ref="root"
    class="tc-donut"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 209.5 205.5"
  >
    <path d="M103 5.5a100 100 0 1 0 0 200 100 100 0 0 0 0-200Zm0 125a25 25 0 1 1 0-50 25 25 0 0 1 0 50Z" class="fill-accent-tint"/>
    <path d="M103 80.5a25 25 0 0 1 25 25h75a100 100 0 1 0-200 0h75a25 25 0 0 1 25-25Z" style="fill:#ff4ae5;stroke-width:0"/>
    <path d="M109 .5a100 100 0 1 0 0 200 100 100 0 0 0 0-200Zm0 125a25 25 0 1 1 0-50 25 25 0 0 1 0 50Z" class="stroke stroke-black-dark"/>
    <path d="m71.8 47.3 4.1-14a8.4 8.4 0 0 0-10.3-10.5L55 25.4c-.5 0-1 0-1.4-.3L38.1 14.7A8.9 8.9 0 0 0 24.5 21l-2.2 18.5c0 .4-.3.9-.7 1.2l-9 6.4A8.5 8.5 0 0 0 14 61.8l13.3 6c.5.2.8.6 1 1.2l2.3 12.6c1.3 7 10.2 9.2 15 3.9l10.6-11.8c.4-.3.8-.6 1.3-.6l15.8-.4c7.2-.1 11.3-8.4 6.9-13.9l-8-10c-.4-.4-.5-1-.4-1.5Z" style="fill:#ffff6e;stroke-width:0"/>
    <path d="m70.8 52.3 4.1-14a8.4 8.4 0 0 0-10.3-10.5L54 30.4c-.5 0-1 0-1.4-.3L37.1 19.7A8.9 8.9 0 0 0 23.5 26l-2.2 18.5c0 .4-.3.9-.7 1.2l-9 6.4A8.5 8.5 0 0 0 13 66.8l13.3 6c.5.2.8.6 1 1.2l2.3 12.6c1.3 7 10.2 9.2 15 3.9l10.6-11.8c.4-.3.8-.6 1.3-.6l15.8-.4c7.2-.1 11.3-8.4 6.9-13.9l-8-10c-.4-.4-.5-1-.4-1.5Z" class="stroke stroke-black-dark"/>
    <circle cx="92" cy="50.5" r="3" class="fill-accent-tint"/>
    <circle cx="142" cy="83.5" r="3" class="fill-accent-tint"/>
    <circle cx="176" cy="63.5" r="3" class="fill-accent-tint"/>
    <circle cx="116" cy="18.5" r="3" class="fill-accent-tint"/>
    <circle cx="134" cy="48.5" r="3" class="fill-accent-tint"/>
    <path d="M206.4 106.5a696.2 696.2 0 0 0-78.5-7 3 3 0 1 0-.2 6 691.3 691.3 0 0 1 78.3 7 3 3 0 0 0 .4-6ZM78 99.5c-25.1 1-50.5 3.3-75.4 7a3 3 0 0 0 .8 6 689 689 0 0 1 74.9-7 3 3 0 0 0-.2-6Z" class="fill-black"/>
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
  .tc-donut {
    width: 10rem;
  }
</style>
