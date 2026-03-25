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
					ref="titleRef"
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
    
    <div class="tc-home-work-svgs-wrap">
      <div class="tc-container-basic">
        <TcBlueberry ref="blueberryRef" />
      </div>
      <div class="tc-container-basic">
        <TcMelonSoda ref="melonSodaRef" />
      </div>
      <div class="tc-container-basic">
        <TcCupcake ref="cupcakeRef" />
      </div>
      <div class="tc-container-basic">
        <TcStrawberry ref="strawberryRef" />
      </div>
  
      <ul class="tc-container tc-home-work-list">
        <TcMediaCard
          v-for="(work, index) in displayedWorks"
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
  
      <div class="tc-container-basic">
        <TcIceCream ref="iceCreamRef" />
      </div>
      <div class="tc-container-basic">
        <TcCake ref="cakeRef" />
      </div>
    </div>
	</section>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TcMediaCard from '../MediaCard.vue';
import { useRouterTransition } from '../../composables/useRouterTransition';
import { useWorkStore } from '../../stores/work';
import { TcBlueberry, TcCake, TcCupcake, TcIceCream, TcMelonSoda, TcStrawberry } from '../svgs';

gsap.registerPlugin(ScrollTrigger);

const { isTransitionComplete } = useRouterTransition();

const store = useWorkStore();
const { works } = store;
const displayedWorks = works.sort(({ order: a }, { order: b}) => a - b)

const root = ref();
const titleRef = ref();
const blueberryRef = ref();
const melonSodaRef = ref();
const cupcakeRef = ref();
const strawberryRef = ref();
const iceCreamRef = ref();
const cakeRef = ref();

let ctx: gsap.Context;

watch(
  [() => isTransitionComplete.value, root],
  ([newIsTransitionComplete]) => {
    if (newIsTransitionComplete && root.value) {
      ctx = gsap.context(() => {
        const blueberryRefRoot = blueberryRef.value.root;
        const melonSodaRefRoot = melonSodaRef.value.root;
        const cupcakeRefRoot = cupcakeRef.value.root;
        const strawberryRefRoot = strawberryRef.value.root;
        const iceCreamRefRoot = iceCreamRef.value.root;
        const cakeRefRoot = cakeRef.value.root;

        // Fix for position jump calc from scroll trigger
        gsap.from([
          titleRef.value,
          blueberryRefRoot,
          melonSodaRefRoot,
          cupcakeRefRoot,
          strawberryRefRoot,
          iceCreamRefRoot,
          cakeRefRoot
        ], {
            duration: 0.5,
            delay: 0.5,
            opacity: 0
          });

        gsap.to(titleRef.value, {
          rotate: 35,
          ease: 'none',
          scrollTrigger: {
            trigger: root.value,
            start: 'top bottom',
            endTrigger: titleRef.value,
            end: 'bottom top',
            scrub: true
          }, 
        });

        gsap.to(blueberryRefRoot, {
          rotate: -140,
          translateY: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: blueberryRefRoot,
            start: 'top bottom',
            endTrigger: blueberryRefRoot,
            end: 'bottom top',
            scrub: true
          }, 
        });

        gsap.to(melonSodaRefRoot, {
          rotate: 40,
          translateY: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: melonSodaRefRoot,
            start: 'top bottom',
            endTrigger: melonSodaRefRoot,
            end: 'bottom top',
            scrub: true
          }, 
        });

        gsap.to(cupcakeRefRoot, {
          rotate: 60,
          translateY: -140,
          ease: 'none',
          scrollTrigger: {
            trigger: cupcakeRefRoot,
            start: 'top bottom',
            endTrigger: cupcakeRefRoot,
            end: 'bottom top',
            scrub: true
          }, 
        });

        gsap.to(strawberryRefRoot, {
          rotate: 380,
          translateY: -90,
          ease: 'none',
          scrollTrigger: {
            trigger: strawberryRefRoot,
            start: 'top bottom',
            endTrigger: strawberryRefRoot,
            end: 'bottom top',
            scrub: true
          }, 
        });

        gsap.to(iceCreamRefRoot, {
          rotate: -60,
          translateY: -130,
          ease: 'none',
          scrollTrigger: {
            trigger: iceCreamRefRoot,
            start: 'top bottom',
            endTrigger: iceCreamRefRoot,
            end: 'bottom top',
            scrub: true
          }, 
        });

        gsap.to(cakeRefRoot, {
          rotate: -90,
          translateY: -120,
          ease: 'none',
          scrollTrigger: {
            trigger: cakeRefRoot,
            start: 'top bottom',
            endTrigger: cakeRefRoot,
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

function getColourVariable(index: number) {
	if (index % 3 === 0) {
		return 'accent';
	} else if ((index + 1) % 3 === 0) {
		return 'primary';
	} else {
		return 'secondary';
	}
}

onUnmounted(() => {
  ctx?.revert();
});
</script>

<style lang="scss">
@use '../../styles/variables-sass';

.tc-home-work {
	background-color: var(--color-background-3);

	.tc-home-work-list {
		@media (width > variables-sass.$bp-lg) {
			row-gap: var(--spacer-6);
			column-gap: calc(var(--gutter) * 2);
		}
	}

	&-title {
		text-anchor: middle;

		&.h2 {
			font-size: var(--font-size-6);

      @media (width <= variables-sass.$bp-sm) {
        font-size: 6rem;
      }
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

  &-svgs-wrap {
    position: relative;
    z-index: 1;

    .tc-container-basic {
      position: absolute;
      left: 50%;
      translate: -50% 0;

      &:has(.tc-blueberry) {
        top: -14rem;
      }

      &:has(.tc-melon-soda) {
        top: -3rem;
      }

      &:has(.tc-cupcake) {
        z-index: 3;
        top: 40%;
      }

      &:has(.tc-strawberry) {
        z-index: 10;
        top: 45%;
      }

      &:has(.tc-ice-cream) {
        bottom: 20%;
      }

      &:has(.tc-cake) {
        bottom: 1rem;
      }
    }

    .tc-food {
      position: absolute;
    }

    .tc-blueberry {
      left: 10rem;
    }

    .tc-melon-soda {
      right: 4rem;
    }

    .tc-cupcake {
      right: 6rem;
    }

    .tc-strawberry {
      left: 12rem;
    }

    .tc-ice-cream {
      left: 2rem;
    }

    .tc-cake {
      right: 10rem;
    }
  }
}
</style>