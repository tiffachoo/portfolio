<template>
	<section 
		ref="root"
		id="work"
		class="tc-home-work tc-section"
	>
		<div class="tc-container">
			<div class="tc-col">
				<p class="tc-italic-heading tc-text-line-right">
					Menu
				</p>
			</div>
		</div>
		<div class="tc-home-work-title-wrap">
			<svg 
				class="tc-home-work-title-svg"
				viewBox="0 -75 800 220"
			>
				<defs>
					<path
						id="circlePath"
						d="M 0, 400 a 400,400 0 1,1 800,0 a 400,400 0 1,1 -800,0"
					/>
				</defs>
				<text
					ref="title"
					role="heading"
					aria-level="2"
					transform-origin="400 400"
					class="tc-home-work-title h2 fill-black-dark"
				>
					<textPath
						xlink:href="#circlePath"
						startOffset="630"
					>
						Featured items
					</textPath>
				</text>
			</svg>
		</div>

		<ul class="tc-container">
			<TcMediaCard
				v-for="(work, index) in works"
				:badge="work.favourite ? 'Staff favourite' : ''"
				:image="work.images[0]?.src"
				:link="`/work/${work.id}`"
				:layout="index % 2 ? 'right' : 'left'"
				:text="work.descriptionFeature"
				:title="work.title"
				:style="{ 
					'--media-row-start': (index + 1) * 2 - 1,
					'--media-color-overlay': `var(--color-${getColourVariable(index)})`
				}"
			/>
		</ul>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TcMediaCard from '../MediaCard.vue';

import { useWorkStore } from '../../stores/work';

gsap.registerPlugin(ScrollTrigger);

const store = useWorkStore();
const { works } = store;

const root = ref();
const title = ref();

onMounted(() => {
	gsap.to(title.value, {
		rotate: 35,
		ease: 'none',
		scrollTrigger: {
			trigger: root.value,
			start: 'top bottom',
			endTrigger: title.value,
			end: 'bottom top',
			scrub: true
		}, 
	});
})

function getColourVariable(index: number) {
	if (index % 3 === 0) {
		return 'accent';
	} else if ((index + 1) % 3 === 0) {
		return 'primary';
	} else {
		return 'secondary';
	}
}
</script>

<style lang="scss">
@import '../../styles/variables-sass';

.tc-home-work {
	background-color: var(--color-background-3);

	.tc-container {
		@media (min-width: $bp-md) {
			row-gap: var(--spacer-6);
			// TODO: switch this to margin x
			column-gap: calc(var(--gutter) * 2);
		}
	}

	&-title {
		text-anchor: middle;

		&.h2 {
			font-size: var(--font-size-6);
		}

		&-svg {
			overflow: visible;
			width: 100%;
			max-width: 50rem;
		}

		&-wrap {
			margin-top: var(--spacer-4);
			margin-bottom: var(--spacer-4);
			text-align: center;
		}
	}
}
</style>