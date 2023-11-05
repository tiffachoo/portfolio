<template>
	<section 
		id="splash"
		ref="root"
		class="tc-home-splash"
	>
		<div 
			ref="content"
			class="tc-home-splash-content"
		>
			<h1 
				ref="choong"
				aria-label="Tiffany Choong"
				class="tc-home-splash-title"
			>
				Choong
			</h1>
			<p class="tc-home-splash-subtitle">
				Front end developer + designer
			</p>
		</div>
		<svg 
			ref="pattern"
			class="tc-home-splash-pattern"
		>
			<rect height="100%" width="100%" fill="url(#dotsSpaced)"></rect>
		</svg>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const root = ref();
const content = ref();
const choong = ref();
const pattern = ref();

onMounted(() => {
	const tl = gsap.timeline({ delay: 1 });
	tl.from(choong.value, {
		duration: 1,
		ease: 'elastic.out(1, 0.4)',
		opacity: 0,
		scale: 0.5
	});

	gsap.to(content.value, {
		yPercent: 100,
		ease: 'none',
		scrollTrigger: {
			trigger: root.value,
			endTrigger: '#work',
			end: 'top top',
			scrub: true
		}, 
	});

	gsap.to(pattern.value, {
		yPercent: 50,
		ease: 'none',
		scrollTrigger: {
			trigger: root.value,
			start: 'top top',
			end: 'bottom top',
			scrub: true
		}, 
	});
});
</script>

<style lang="scss">
.tc-home-splash {
	position: relative;
	z-index: -1;
	padding-top: 3rem;
	// min-height: 50rem;
	height: 100vh;
	background-color: var(--color-accent);
	text-align: center;
	overflow: hidden;

	&-title {
		font-size: 14rem;
		font-size: clamp(3rem, 20vw, 14rem);
		color: var(--color-secondary);
	}

	&-subtitle {
		font-family: var(--font-fam-2);
		font-size: var(--font-size-2)
	}

	&-content {
		position: relative;
		z-index: 1;
	}

	&-pattern {
		position: absolute;
		top: 0;
		left: 0;
		height: 200%;
		width: 100%;
	}
}
</style>