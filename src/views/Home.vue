<template>
	<div class="tc-home">
		<TcHomeSplash ref="splashRef" />

    <div
      id="content"
      :class="{ active: !splashIsIntersecting }"
      class="tc-home-content"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tc-roof"
        role="presentation"
        viewBox="50 50 1400 175"
      >
        <path 
          d="M1400.5 20.5H.5v150a50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0v-150h-100Z" 
          class="fill-black"
        />
        <path 
          d="M153.5 208.5a50 50 0 0 1-50-50V8.5h100v150a50 50 0 0 1-50 50Zm250-50V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Z" 
          class="fill-accent"
        />
        <path 
          d="M53.5 208.5a50 50 0 0 1-50-50V8.5h100v150a50 50 0 0 1-50 50Zm250-50V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Z" 
          class="fill-primary"
        />
        <path 
          d="M150.5 200.5a50 50 0 0 1-50-50V.5h100v150a50 50 0 0 1-50 50Zm250-50V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm-1300 0V.5H.5v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Z"
          class="stroke-black-dark stroke"
        />
      </svg>
  
      <TcHomeWork />
      <TcHomeSkills />
      <TcHomeMedia />
      <TcHomeAbout />
    </div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
  TcHomeAbout,
  TcHomeMedia,
  TcHomeSkills,
  TcHomeSplash,
  TcHomeWork,
} from '../components/home';

const splashRef = ref();
const splashIsIntersecting = ref(true);

onMounted(() => {
  let observer = new IntersectionObserver(entries => {
    splashIsIntersecting.value = entries[0].isIntersecting;
  });
  observer.observe(splashRef.value.root);
});
</script>

<style lang="scss">
@import '../styles/variables-sass';

.tc {
	&-roof {
		position: sticky;
		z-index: 20;
		top: -5.625rem;
		max-width: 100%;

		+ .tc-home-work {
			// calc extra space for svg on next section
			margin-top: -7.15%;

			&::before {
				content: '';
				display: block;
				position: relative;
				z-index: -1;
				aspect-ratio: 14/1;
				background-color: inherit;
			}
		}
	}

  &-home-content {
    --border-size-1: 0;
    --border-size-2: 0;

    &::before {
      content: '';
      position: fixed;
      z-index: 10;
      display: block;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      box-shadow: inset var(--border-size-1) var(--border-size-1) 0 0 var(--color-primary), inset var(--border-size-2) var(--border-size-2) 0 0 var(--color-primary);
      transition: box-shadow 0.1s ease-in-out;
      pointer-events: none;
    }

    &.active {
      --border-size-1: 1rem;
      --border-size-2: -1rem;

      &::before {
        transition: box-shadow 0.5s 0.3s ease-in-out;
      }
    }
  }
}
</style>
