<template>
	<section 
		ref="root"
		id="about"
		class="tc-home-about tc-section"
	>
		<div class="tc-container">
			<div class="tc-home-about-pattern-col">
				<svg 
					class="tc-home-about-pattern"
				>
					<rect height="100%" width="100%" fill="url(#dotsSpaced)"></rect>
				</svg>
			</div>
			<div class="tc-home-about-card-col">
				<TcCard>
					<p>
						Hello! 👋 I’m Tiff. I’m a front end developer and designer who enjoys creating and experimenting in the digital world.
					</p>
					<p>
						I currently work as a Senior Front End Developer at an AI-based start up with previous experience as a Lead UI Engineer on a digital focused team within a nationally known and recognized banking institution. 
					</p>
					<p>
						My focus is developing and designing websites and applications, creating interactive web experiences, and developing and maintaining a component library.
					</p>
				</TcCard>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import TcCard from '../Card.vue';
</script>

<style lang="scss">
@import '../../styles/variables-sass';

.tc-home-about {
	--card-color-background: var(--color-background-2);

	background-color: var(--color-background-3);

	.tc-container {
    @media (width > $bp-md) {
      grid-template-rows: 4rem auto 9rem;
    }
	}

	&-card-col {
		position: relative;
		z-index: 2;
    grid-column: 2 / span var(--col-amount);

    @media (width > $bp-md) {
      grid-column: 2 / span 4;
      grid-row: 2;
    }
	}

	&-pattern {
		height: 100%;
		width: 100%;
	}

	&-pattern-col {
		position: relative;
		z-index: 1;

    @media (width > $bp-md) {
      grid-column: 4 / span 3;
      grid-row: 1 / span 2;
      max-height: 70%;
    }
	}
}
</style>