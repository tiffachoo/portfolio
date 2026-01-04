<template>
	<section 
		ref="root"
		id="about"
		class="tc-home-about tc-section"
	>
		<div class="tc-container">
      <svg 
        class="tc-home-about-pattern"
      >
        <circle cx="50%" cy="50%" r="50%" fill="url(#dotsSpaced)" />
      </svg>
      <div class="tc-home-about-frame-col">
        <div class="tc-home-about-frame" />
      </div>
			<div class="tc-home-about-card-col">
				<TcCard class="content">
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
	--card-color-background: transparent;
  --card-shadow: none;

  padding-bottom: 0;
	background-color: var(--color-primary);
  overflow: hidden;

	.tc-container {
    position: relative;

    @media (width > $bp-md) {
      grid-template-rows: 4rem auto 9rem;
    }
	}

  .tc-card {
    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      height: 100%;
      width: 100%;
    }

    &::before {
      top: 0.75rem;
      left: 0.5rem;
      background-color: var(--color-black);
    }

    &::after {
      top: -0.25rem;
      left: -0.5rem;
      background-color: var(--color-background-2);
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

  &-frame-col {
    position: relative;
    display: grid;
    grid-template-rows: 4rem 1fr;
    gap: 2rem;
    grid-column: 2 / span var(--col-amount);
    // padding-top: 3rem;

    @media (width > $bp-md) {
      grid-column: 6 / span 4;
      grid-row: 2 / span 2;
    }

    &::before {
      content: '';
      background-color: var(--color-secondary);
      background-image: repeating-linear-gradient(to right,
        var(--color-secondary),
        var(--color-secondary) 5%,
        var(--color-secondary-tint) 5%,
        var(--color-secondary-tint) 10%
      );
    }
  }

  &-frame {
    position: relative;
    min-height: 20rem;
    background-color: var(--color-accent);

    &::before {
      content: '';
      position: absolute;
      top: -0.5rem;
      left: 1rem;
      height: 100%;
      width: 100%;
      border: 1px solid;
    }
  }

	&-pattern {
		position: absolute;
    top: 0;
    left: 40%;
    height: 30rem;
    aspect-ratio: 1/1;
	}
}
</style>