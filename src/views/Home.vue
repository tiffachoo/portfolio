<template>
	<div>
		<TcHomeSplash />

		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="tc-roof"
			role="presentation"
			viewBox="50 120 1400 105"
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
</template>

<script setup lang="ts">
import TcHomeSplash from '../components/home/HomeSplash.vue';
import TcHomeWork from '../components/home/HomeWork.vue';
import TcHomeSkills from '../components/home/HomeSkills.vue';
import TcHomeMedia from '../components/home/HomeMedia.vue';
import TcHomeAbout from '../components/home/HomeAbout.vue';
</script>

<style lang="scss">
@import '../styles/variables-sass';

.tc {
	&-roof {
		position: sticky;
		z-index: 20;
		top: 0;
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
}
</style>
