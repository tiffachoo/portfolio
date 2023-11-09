<template>
	<li 
		:class="`tc-media-card-${layout}`"
		class="tc-media-card"
	>
		<div class="tc-media-card-image">
			<img
				:src="image"
				:alt="imageAlt || ''"
				class="tc-media-card-image-img"
				loading="lazy"
			>
		</div>
		<div
			v-if="badge"
			class="tc-media-card-badge tc-italic"
		>
			<svg
				class="tc-media-card-badge-svg"
				viewBox="0 0 120 120"
			>
				<path 
					d="M62 7.2 67.1.9a2.5 2.5 0 0 1 4.2.7l3 7.6c.7 1.4 2.4 2 3.8 1.2L85 6c1.6-1 3.7 0 3.8 2l.6 8.1a2.5 2.5 0 0 0 3.1 2.3l8-2a2.5 2.5 0 0 1 3 3l-2 8c-.4 1.5.7 3 2.3 3.1l8.1.6c2 .1 3 2.2 2 3.8l-4.4 7a2.5 2.5 0 0 0 1.2 3.6l7.6 3c1.8.8 2.2 3.1.7 4.3l-6.3 5.3a2.5 2.5 0 0 0 0 3.8l6.3 5.3a2.5 2.5 0 0 1-.7 4.2l-7.6 3c-1.4.7-2 2.4-1.2 3.8L114 85c1 1.6 0 3.7-2 3.8l-8.1.6a2.5 2.5 0 0 0-2.3 3.1l2 8a2.5 2.5 0 0 1-3 3l-8-2c-1.5-.4-3 .7-3.1 2.3l-.6 8.1c-.1 2-2.2 3-3.8 2l-7-4.4a2.5 2.5 0 0 0-3.6 1.2l-3 7.6c-.8 1.8-3.1 2.2-4.3.7l-5.3-6.3a2.5 2.5 0 0 0-3.8 0l-5.3 6.3a2.5 2.5 0 0 1-4.2-.7l-3-7.6c-.7-1.4-2.4-2-3.8-1.2L35 114c-1.6 1-3.7 0-3.8-2l-.6-8.1a2.5 2.5 0 0 0-3.1-2.3l-8 2a2.5 2.5 0 0 1-3-3l2-8c.4-1.5-.7-3-2.3-3.1L8 88.9c-2-.1-3-2.2-2-3.8l4.4-7c.8-1.3.2-3-1.2-3.6l-7.6-3c-1.8-.8-2.2-3.1-.7-4.3l6.3-5.3c1.2-1 1.2-2.8 0-3.8L.9 52.8a2.5 2.5 0 0 1 .7-4.2l7.6-3c1.4-.7 2-2.4 1.2-3.8L6 35c-1-1.6 0-3.7 2-3.8l8.1-.6a2.5 2.5 0 0 0 2.3-3.1l-2-8a2.5 2.5 0 0 1 3-3l8 2c1.5.4 3-.7 3.1-2.3l.6-8.1c.1-2 2.2-3 3.8-2l7 4.4c1.3.8 3 .2 3.6-1.2l3-7.6c.8-1.8 3.1-2.2 4.3-.7l5.3 6.3c1 1.2 2.8 1.2 3.8 0Z"
					class="fill-secondary"
				/>
			</svg>
			<span class="tc-media-card-badge-text">
				{{ badge }}
			</span>
		</div>
		<div class="tc-media-card-content">
			<h3 class="tc-media-card-title">
				{{ title }}
			</h3>
			<p v-if="text">
				{{ text }}
			</p>
			<slot />
			<RouterLink 
				v-if="link"
				:to="link"
				class="tc-media-card-cta tc-italic"
			>
				{{ ctaText }}
				<TcArrow flip />
				<span class="sr-only">
					- {{ title }}
				</span>
			</RouterLink>
		</div>
	</li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import TcArrow from './Arrow.vue';

defineProps({
	badge: String,
	ctaText: {
		type: String,
		default: 'View details'
	},
	image: {
		type: String,
		required: true
	},
	imageAlt: String,
	layout: {
		type: String as PropType<'left' | 'right'>,
		default: 'left'
	},
	link: String,
	text: String,
	title: {
		type: String,
		required: true
	}
});
</script>

<style lang="scss">
@import '../styles/variables-sass';

.tc-media-card {
	--media-color-overlay: var(--color-secondary);

	position: relative;
	grid-column: 2 / span var(--col-amount);

	@media (min-width: $bp-sm) {
		display: grid;
		grid-template-columns: subgrid;
	}

	@media (min-width: $bp-md) {
		grid-template-rows: subgrid;
		grid-row: var(--media-row-start, auto) / span 3;
	}

	@media (max-width: $bp-sm - 1) {
    justify-self: center;
		max-width: 25rem;
	}

	&-image {
		position: relative;
		grid-column: var(--media-image-col-start, 1) / span calc(var(--col-amount) / 2);
		grid-row: 1 / span 3;
		aspect-ratio: 1/1;
		max-width: 100%;
		border-radius: 5rem;
		// overflow: hidden;
		box-shadow: 1rem 1rem 0 var(--color-primary);

		&::before,
		&::after {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			border-radius: inherit;
		}

		&::before {
			top: -0.5rem;
			left: -0.75rem;
			background-color: var(--media-color-overlay);
			mix-blend-mode: multiply;
		}

		&::after {
			top: 0rem;
			left: 0.25rem;
			border: 1px solid var(--color-black-dark);
		}
	
		&-img {
			width: 100%;
			height: 100%;
			border-radius: inherit;
			object-fit: cover;
		}
	}

	&-title {
		display: inline-block;
		justify-self: var(--media-title-justify, start);
		margin-left: var(--media-title-margin-left, 0);
		margin-right: var(--media-title-margin-right, 0);
		margin-bottom: var(--spacer-2);
		padding: 0 1rem;
		background-color: var(--color-background);
		text-align: var(--media-title-align);
	}

	&-cta {
		justify-self: start;
		margin-top: var(--spacer-2);
		color: var(--color-secondary);

		.tc-arrow {
			margin-left: var(--spacer-1);
		}

		&:hover {
			color: var(--color-secondary-dark)
		}
	}

	&-badge {
		position: absolute;
		top: -1rem;
		left: -2rem;
		width: 7.5rem;
		aspect-ratio: 1/1;
		display: grid;
		align-content: center;
		text-align: center;
		color: var(--color-font-invert);

		&-svg {
			position: absolute;
		}

		&-text {
			rotate: -20deg;
		}
	}

	&-content {
		position: relative;
		display: grid;
		grid-row: 2;
		grid-column: var(--media-content-col-start) / span calc(var(--col-amount) / 2 - var(--media-content-col-span-diff, 0));
		font-family: var(--font-fam-2);
	}

	@media (min-width: $bp-sm) {
		&-left {
			--media-title-margin-left: calc(var(--gutter) * -3);
			--media-image-col-start: 1;
			--media-content-col-start: calc(var(--col-amount) / 2 + 1);
		}

		&-right {
			--media-title-justify: end;
			--media-title-margin-right: calc(var(--gutter) * -3);
			--media-title-align: right;
			--media-image-col-start: calc(var(--col-amount) / 2 + 1);
			--media-content-col-start: 1;
		}
	}

	@media (min-width: $bp-md) {
		&-content {
			--media-content-col-span-diff: 1
		}

		&-right {
			--media-content-col-start: 2;
		}
	}
}
</style>