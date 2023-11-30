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
						Selected<br>
						ingredients
					</h2>
				</div>
				<TcBadge
					class="tc-home-skills-badge"
					color="secondary-tint"
					text="Always fresh!"
				/>
				<ul class="tc-home-skills-grid">
					<li 
						v-for="skill in skills"
						:key="skill.label"
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
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faVuejs, faGitAlt, faFigma } from '@fortawesome/free-brands-svg-icons';

import TcBadge from '../Badge.vue';
import TcCard from '../Card.vue';

library.add(faHtml5, faCss3Alt, faSquareJs, faVuejs, faGitAlt, faFigma);

const skills = ref([
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
		icon: 'git-alt',
		label: 'Git'
	},
	{
		icon: 'figma',
		label: 'Figma'
	}
]);
</script>

<style lang="scss">
.tc-home-skills {
	background-color: var(--color-background-2);
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
		min-height: 21.25rem; // TODO: make more dynamic

		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			height: 100%;
			border-left: 1px solid;
		}

		h2 {
			position: absolute;
			bottom: 0;
			transform-origin: left bottom;
			rotate: -90deg;
			transform: translateY(100%);
			color: var(--color-font-invert);
			font-style: italic;
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