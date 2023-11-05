<template>
	<section 
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
					role="heading"
					aria-level="2"
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
				title="Critterpedia"
				image="/img/cp-01.webp"
			>
				Text goes here
			</TcMediaCard>
		</ul>
	</section>
</template>

<script setup lang="ts">
import TcMediaCard from '../MediaCard.vue';
</script>

<style lang="scss">
.tc-home-work {
	background-color: var(--color-background-2);

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
			text-align: center;
		}
	}
}
</style>