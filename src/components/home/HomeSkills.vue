<template>
	<section 
		ref="root"
		id="skills"
		class="tc-home-skills tc-section"
	>
		<div class="tc-container">
			<TcCard class="tc-col">
				<h2>
					Selected ingredients
				</h2>
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

		&::after {
			content: '';
			position: absolute;
			inset: var(--spacer-4);
			border: 1px solid;
			pointer-events: none;
		}
	}

	&-grid {
		display: grid;
		gap: var(--spacer-1);
		grid-template-columns: repeat(auto-fit, 5rem);

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
			aspect-ratio: 1/1;
			text-align: center;
		}
	}
}
</style>