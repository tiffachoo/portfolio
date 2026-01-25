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
		<TcBadge
			v-if="badge"
			:text="badge"
			shape="flower"
			class="tc-media-card-badge"
		/>
		<div class="tc-media-card-content">
			<h3 class="tc-media-card-title">
        <span class="tc-media-card-title-text">
          {{ title }}
        </span>
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
import { TcArrow } from './svgs';
import TcBadge from './Badge.vue';

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

	@media (width > $bp-md) {
		display: grid;
		grid-template-columns: subgrid;
	}

	@media (width > $bp-md) {
		grid-template-rows: subgrid;
		grid-row: var(--media-row-start, auto) / span 3;
	}

	@media (width <= $bp-md) {
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
		box-shadow: 1rem 1rem 0 var(--color-primary);

    @media (width <= $bp-md) {
      border-radius: 2.5rem;
    }

		&::before,
		&::after {
			content: '';
			position: absolute;
      inset: 0;
			border-radius: inherit;
      transition: 0.35s ease-in-out;
		}

		&::before {
			translate: -0.75rem -0.5rem;
			background-color: var(--media-color-overlay);
			mix-blend-mode: multiply;
		}

		&::after {
			translate: 0.25rem 0;
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
		justify-self: var(--media-title-justify, start);
		margin-left: var(--media-title-margin-left, 0);
		margin-right: var(--media-title-margin-right, 0);
		margin-bottom: var(--spacer-2);
		text-align: var(--media-title-align);

    @media (width <= $bp-md) {
      margin-inline: -1rem;
    }

    &-text {
      padding: 0 1rem;
      background-color: var(--color-background);
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }
	}

	&-cta {
		justify-self: start;
		color: var(--color-secondary);

    @media (width > $bp-md) {
      margin-top: var(--spacer-2);
    }

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
	}

	&-content {
		position: relative;
		display: grid;
		grid-row: 2;
		grid-column: var(--media-content-col-start) / span calc(var(--col-amount) / 2 - var(--media-content-col-span-diff, 0));
		font-family: var(--font-fam-2);
	}

  .tc-badge-shape {
    transition: 0.3s ease-in-out;
  }

  &:hover {
    .tc-media-card-image {
      &::before {
        translate: 0 0;
        opacity: 0.2;
      }
    }

    .tc-badge-shape {
      scale: 1.1;
      animation: spinny 5s linear infinite;
    }
  }

	@media (width > $bp-md) {
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

	@media (width > $bp-md) {
		&-content {
			--media-content-col-span-diff: 1
		}

		&-right {
			--media-content-col-start: 2;
		}
	}
}
</style>