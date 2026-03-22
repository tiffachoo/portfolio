<template>
	<section 
		ref="root"
		id="about"
		class="tc-home-about tc-section pb-0"
	>
    <div class="tc-container-basic">
      <TcCherry ref="cherryRef" />
      <TcMelon ref="melonRef" />
      <TcDonut ref="donutRef" />
    </div>
		<div class="tc-container">
      <svg 
        ref="patternRef"
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
						Hello! I’m Tiff. I’m a front end developer and designer who enjoys creating and experimenting in the digital world.
					</p>
					<p>
						I currently work as a Senior Front End Developer at an AI-based start up with previous experience as a Lead UI Engineer within a nationally known and recognized banking institution. 
					</p>
					<p>
						My focus is developing and designing websites and applications, creating interactive web experiences, and developing and maintaining component libraries.
					</p>
				</TcCard>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouterTransition } from '../../composables/useRouterTransition';
import TcCard from '../Card.vue';
import { TcCherry, TcDonut, TcMelon } from '../svgs';

gsap.registerPlugin(ScrollTrigger);

const { isTransitionComplete } = useRouterTransition();

const root = ref();
const patternRef = ref();
const donutRef = ref();
const cherryRef = ref();
const melonRef = ref();

let ctx: gsap.Context;

watch(
  [() => isTransitionComplete.value, root],
  ([newIsTransitionComplete]) => {
    if (newIsTransitionComplete && root.value) {
      ctx = gsap.context(() => {
        const donutRefRoot = donutRef.value.root;
        const cherryRefRoot = cherryRef.value.root;
        const melonRefRoot = melonRef.value.root;

        // Fix for position jump calc from scroll trigger
        gsap.from([
          donutRefRoot,
          cherryRefRoot,
          melonRefRoot,
        ], {
            duration: 0.5,
            delay: 0.5,
            opacity: 0
          });

        gsap.to(patternRef.value, {
          yPercent: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: root.value,
            start: 'top bottom',
            endTrigger: patternRef.value,
            end: 'bottom top',
            scrub: true
          }, 
        });

        gsap.to(donutRefRoot, {
          rotate: -60,
          translateY: -200,
          ease: 'none',
          scrollTrigger: {
            trigger: donutRefRoot,
            start: 'top bottom',
            endTrigger: donutRefRoot,
            end: 'bottom top',
            scrub: true
          }, 
        });

        gsap.to(cherryRefRoot, {
          rotate: -100,
          translateY: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: cherryRefRoot,
            start: 'top bottom',
            endTrigger: cherryRefRoot,
            end: 'bottom top',
            scrub: true
          }, 
        });

        gsap.to(melonRefRoot, {
          rotate: -160,
          translateY: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: melonRefRoot,
            start: 'top bottom',
            endTrigger: melonRefRoot,
            end: 'bottom top',
            scrub: true
          }, 
        });
      }, root.value);
    }
  },
  {
    immediate: true,
  }
);

onUnmounted(() => {
  ctx?.revert();
});

defineExpose({
  root
});
</script>

<style lang="scss">
@import '../../styles/variables-sass';

.tc-home-about {
	--card-color-background: transparent;
  --card-shadow: none;

  position: relative;
  padding-bottom: 0;
	background-color: var(--color-primary);
  overflow: hidden;

	.tc-container {
    position: relative;

    @media (width > $bp-md) {
      grid-template-rows: 4rem auto 6rem;
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
    grid-row: -1;

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

    @media (width > $bp-md) {
      grid-column: 6 / span 4;
      grid-row: 2 / span 2;
    }

    &::before {
      content: '';
      border-radius: 1rem;
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

    @media (width <= $bp-sm) {
      min-height: 12rem;
    }

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

  .tc-container-basic {
    .tc-food {
      position: absolute;
    }

    .tc-donut {
      z-index: 10;
      right: 2rem;
      bottom: 4rem;
    }

    .tc-melon {
      z-index: 10;
      right: 14rem;
      bottom: 40%;
    }

    .tc-cherry {
      top: 6rem;
      left: 6rem;
    }
  }
}
</style>