<template>
	<section 
		ref="root"
		id="skills"
		class="tc-home-skills tc-section"
	>
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
					<li 
						v-for="skill in skills"
						:key="skill.label"
            ref="skillRef"
						class="tc-home-skills-grid-item"
					>
						<FontAwesomeIcon 
							:icon="`fab fa-${skill.icon}`"
							size="4x"
							class="tc-home-skills-grid-icon"
						/>
						<span class="tc-home-skills-grid-text">
							{{ skill.label }}
						</span>
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

library.add(faCss3Alt, faFigma, faGitAlt, faHtml5, faReact, faSquareJs, faVuejs);

const root = ref();
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
    }, "-=0.25");

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  };
  let observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      tl.play();
      observer.unobserve(root.value);
    }
  }, options);
  observer.observe(root.value);
})
</script>

<style lang="scss">
.tc-home-skills {
	background-color: var(--color-background-3);
	color: var(--color-accent);

	.tc-card {
		--card-padding: calc(var(--spacer-4) * 2);
		--card-border: 0;
		--card-color-background: var(--color-secondary);

		position: relative;
		z-index: 2;

		&::after {
			content: '';
			position: absolute;
			inset: var(--spacer-4);
			border: 1px solid;
			pointer-events: none;
		}

		&-body {
			display: grid;
			grid-template-columns: calc(var(--font-size-5) * 3) 1fr;
		}
	}

	&-title {
		position: relative;
		min-height: 21.75rem; // TODO: make more dynamic

		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			height: 100%;
			border-left: 1px solid;
		}

    &-word {
      --highlight-opacity: 0;
      position: relative;
      display: inline-block;
      justify-self: start;
      overflow: hidden;
      margin-bottom: -1rem;

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
			position: absolute;
			bottom: 0;
      display: grid;
      min-width: fit-content;
			transform-origin: left bottom;
			rotate: -90deg;
			transform: translateY(100%);
			font-style: italic;
			color: var(--color-font-invert);
		}
	}

	&-badge {
		--badge-color-text: var(--color-black-dark);

		position: absolute;
		z-index: 1;
		top: -2rem;
		left: 1rem;
	}

	&-grid {
		display: grid;
		gap: var(--spacer-1);
		grid-template-columns: repeat(auto-fit, 10rem);
		justify-content: center;

		&-text {
			display: block;
			margin-top: var(--spacer-1);
			font-family: var(--font-fam-2);
			font-size: var(--font-size-sm-2);
		}

    &-icon {
      width: auto;
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