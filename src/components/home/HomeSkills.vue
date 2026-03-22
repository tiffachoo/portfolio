<template>
	<section 
		ref="root"
		id="skills"
		class="tc-home-skills tc-section"
    >
    <span ref="observerRef" class="tc-observer-ref" />
		<div class="tc-container">
			<TcCard class="tc-col-10">
				<div class="tc-home-skills-title">
					<h2>
            <span 
              ref="titleWord1Ref"
              class="tc-home-skills-title-word"
            >
              Selected
            </span>
						<span 
              ref="titleWord2Ref"
              class="tc-home-skills-title-word"
            >
              ingredients
            </span>
					</h2>
				</div>
				<TcBadge
          ref="badgeRef"
					class="tc-home-skills-badge"
					color="secondary-tint"
					text="Always fresh!"
				/>
				<ul class="tc-home-skills-grid">
					<template 
						v-for="skill in skills"
            :key="skill.label"
					>
            <li
              ref="skillRef"
              class="tc-home-skills-grid-item"
            >
              <LogoTS 
                v-if="skill.icon === 'ts'" 
                class="tc-home-skills-grid-icon"
              />
              <FontAwesomeIcon 
                v-else
                :icon="`fab fa-${skill.icon}`"
                size="4x"
                class="tc-home-skills-grid-icon"
              />
              <span class="tc-home-skills-grid-text">
                {{ skill.label }}
              </span>
            </li>
					</template>
          <li>
          </li>
				</ul>
			</TcCard>
		</div>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCss3Alt, faFigma, faGitAlt, faHtml5, faReact, faSquareJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';

import TcBadge from '../Badge.vue';
import TcCard from '../Card.vue';
import { LogoTS } from '../svgs';

library.add(faCss3Alt, faFigma, faGitAlt, faHtml5, faReact, faSquareJs, faVuejs);

const observerRef = ref();
const badgeRef = ref();
const titleWord1Ref = ref();
const titleWord2Ref = ref();
const skillRef = ref([]);

const skills = [
	{
		icon: 'html5',
		label: 'HTML'
	},
	{
		icon: 'css3-alt',
		label: 'CSS'
	},
	{
		icon: 'square-js',
		label: 'Javascript'
	},
  {
    icon: 'ts',
    label: 'Typescript'
  },
	{
		icon: 'vuejs',
		label: 'Vue.js'
	},
	{
		icon: 'react',
		label: 'React'
	},
	{
		icon: 'git-alt',
		label: 'Git'
	},
	{
		icon: 'figma',
		label: 'Figma'
	}
];

onMounted(() => {
  const tl = gsap.timeline({ paused: true });

  tl
    // attempt to fix content shift
    .from(titleWord1Ref.value, {
      duration: 0.1,
      opacity: 0,
    })
    .from(titleWord1Ref.value, {
      duration: 0.5,
      ease: 'power2.inOut',
      width: 0,
      '--highlight-opacity': 1
    })
    .from(titleWord2Ref.value, {
      duration: 0.5,
      ease: 'power2.inOut',
      width: 0,
      '--highlight-opacity': 1
    }, "+0.25")
    .from(skillRef.value, {
      duration: 0.5,
      ease: 'elastic.out(1, 0.8)',
      scale: 0,
      stagger: 0.1
    })
    .from(badgeRef.value.root, {
      duration: 1,
      ease: 'elastic.out(1, 0.4)',
      scale: 0
    }, '-=0.25');

  let observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      tl.play();
      observer.unobserve(observerRef.value);
    }
  });
  observer.observe(observerRef.value);
})
</script>

<style lang="scss">
@import '../../styles/variables-sass';

.tc-home-skills {
  position: relative;
	background-color: var(--color-background-3);
	color: var(--color-accent);

	.tc-card {
		--card-padding: calc(var(--spacer-4) * 2);
		--card-border: 0;
		--card-color-background: transparent;

		position: relative;
		z-index: 2;
    box-shadow: none;

    @media (width <= $bp-md) {
      --card-padding: var(--spacer-4);
    }

    &::before,
		&::after {
			content: '';
			position: absolute;
    }

    &::before {
      z-index: -1;
      inset: -0.5rem;
      translate: 0.5rem 0.5rem;
      rotate: 5deg;
      background-color: var(--color-black);
      border-radius: 2rem;
    }

		&::after {
			content: '';
			position: absolute;
			inset: calc(var(--card-padding) / 2);
			border: 1px solid;
			pointer-events: none;
      
      @supports (corner-shape: scoop) {
        corner-shape: scoop;
        border-radius: 2rem;

        @media (width <= $bp-md) {
          border-radius: 1rem;
        }
      }
		}

		&-body {
      background-color: var(--color-secondary);

      @media (width > $bp-md) {
        display: grid;
        grid-template-columns: calc(var(--font-size-5) * 3) 1fr;
      }
		}
	}

	&-title {
		position: relative;

    @media (width > $bp-md) {
      min-height: 23rem; // TODO: make more dynamic?

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border-left: 1px solid;
      }
    }

    @media (width <= $bp-md) {
      margin-bottom: 2rem;
    }

    &-word {
      --highlight-opacity: 0;
      position: relative;
      display: inline-block;
      justify-self: start;
      overflow: hidden;

      @media (width > $bp-md) {
        margin-bottom: -0.5rem;
      }

      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        display: block;
        width: 1ch;
        height: 100%;
        background-color: var(--color-accent);
        opacity: var(--highlight-opacity);
      }
    }

		h2 {
      display: grid;
      min-width: fit-content;
			font-style: italic;
			color: var(--color-font-invert);

      @media (width > $bp-md) {
        position: absolute;
        bottom: 0;
        transform-origin: left bottom;
        rotate: -90deg;
        transform: translateY(100%);
      }
		}
	}

	&-badge {
		--badge-color-text: var(--color-black-dark);

		position: absolute;
		z-index: 1;

    @media (width > $bp-md) {
      top: -2rem;
      left: 1rem;
    }

    @media (width <= $bp-md) {
      top: -5rem;
      right: 0;
    }
	}

	&-grid {
    --grid-width: 8.5rem;
		display: grid;
		gap: var(--spacer-1);
		grid-template-columns: repeat(auto-fit, var(--grid-width));
		justify-content: center;

    @media (width <= $bp-md) {
      --grid-width: 5rem;
    }

		&-text {
      display: block;
			align-self: center;
      padding: 0 0.25rem;
			margin-top: var(--spacer-1);
			font-family: var(--font-fam-2);
			font-size: var(--font-size-sm-2);
      color: var(--color-font-invert);
      background-color: var(--color-secondary-dark);
		}

    &-icon {
      width: auto;

      @media (width <= $bp-md) {
        font-size: 3rem;
      }
    }

		&-item {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-self: center;
			aspect-ratio: 1/1;
			text-align: center;
		}
	}
}
</style>