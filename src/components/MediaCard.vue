<template>
	<li class="tc-media-card">
		<div class="tc-media-card-image">
			<img
				:src="image"
				:alt="imageAlt || ''"
				class="tc-media-card-image-img"
				loading="lazy"
			>
		</div>
		<span
			v-if="badge"
		>
			{{ badge }}
		</span>
		<div class="tc-media-card-content">
			<h3 class="tc-media-card-title">
				{{ title }}
			</h3>
			<slot />
			<RouterLink 
				v-if="link"
				:to="link"
			>
				{{ ctaText }}
			</RouterLink>
		</div>
	</li>
</template>

<script setup lang="ts">
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
	link: String,
	title: {
		type: String,
		required: true
	}
});
</script>

<style lang="scss">
.tc-media-card {
	display: grid;
	grid-template-columns: subgrid;
	grid-template-rows: repeat(3, 1fr);
	grid-column: 2 / span var(--col-amount);
	grid-row: auto / span 3;

	&-image {
		aspect-ratio: 1/1;
		max-width: 100%;
		border-radius: 5rem;
		overflow: hidden;
		grid-column: 1 / span calc(var(--col-amount) / 2);
		grid-row: 1 / span 3;
	
		&-img {
			width: 100%;
			object-fit: cover;
		}
	}

	&-title {
		display: inline-block;
		margin-left: calc(var(--gutter) * -3);
		background-color: var(--color-background);
	}

	&-content {
		grid-row: 2;
		grid-column: calc(var(--col-amount) / 2 + 1) / span calc(var(--col-amount) / 2);
		font-family: var(--font-fam-2);
	}
}
</style>