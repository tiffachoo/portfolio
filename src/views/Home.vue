<template>
	<div class="tc-image">
		<div class="tc-image-wrap">
			<transition name="opacity">
				<div 
					v-if="activeImage"
					class="tc-image-img"
					:style="{'background-image': activeImage && `url(${activeImage})` }"
				></div>
			</transition>
			<svg class="tc-image-pattern">
				<defs>
					<pattern id="dots" width="6.59" height="6.59" patternUnits="userSpaceOnUse" viewBox="0 0 6.59 6.59">
						<path class="tc-dot" d="M2.11,0A1.33,1.33,0,0,0,3.43,1.29,1.33,1.33,0,0,0,4.75,0Z"/>
						<path class="tc-dot" d="M2.11,6.59H4.75a1.32,1.32,0,0,0-2.64,0Z"/>
						<path class="tc-dot" d="M6.59,2h0a1.32,1.32,0,0,0,0,2.64h0Z"/>
						<path class="tc-dot" d="M0,2H0V4.68H0A1.32,1.32,0,1,0,0,2Z"/>
					</pattern>
					<pattern id="dotsSpaced" width="13" height="13" patternUnits="userSpaceOnUse" viewBox="0 0 13 13">
						<path class="tc-dot" d="M5.32,0A1.33,1.33,0,0,0,6.64,1.29,1.33,1.33,0,0,0,8,0Z"/>
						<path class="tc-dot" d="M5.32,13H8a1.32,1.32,0,0,0-2.64,0Z"/>
						<path class="tc-dot" d="M13,5.25h0a1.32,1.32,0,0,0,0,2.64h0Z"/>
						<path class="tc-dot" d="M0,5.25H0V7.89H0A1.32,1.32,0,0,0,0,5.25Z"/>
					</pattern>
				</defs>
				<rect height="100%" width="100%" fill="url(#dotsSpaced)"></rect>
			</svg>
		</div>
	</div>
	<div class="tc-content">
		<section 
			id="about"
			class="tc-section"
		>
			<h1 class="tc-name">
				Tiffany<br>
				Choong
			</h1>
			<p class="tc-font-mono">
				Front end developer + designer
			</p>

			<tc-card 
				header="Hello!"
				class="my-5"
			>
				<p>
					I’m Tiff.
				</p>
			</tc-card>

			<h2>
				Skills
			</h2>
			<ul class="tc-skill-grid">
				<li 
					v-for="skill in skills"
					:key="skill.label"
					class="tc-skill-grid-item"
				>
					<FontAwesomeIcon 
						:icon="`fab fa-${skill.icon}`"
						size="2x"
						class="tc-skill-grid-icon"
					/>
					<span class="tc-skill-grid-text">
						{{ skill.label }}
					</span>
				</li>
			</ul>
		</section>
		<section 
			id="Work"
			class="tc-section"
		>
			<header>
				<h2>
					Featured work
				</h2>
			</header>
			<ul class="tc-list">
				<li 
					v-for="item in works"
					:key="item.title"
					class="tc-list-item"
				>
					<router-link 
						class="tc-list-link"
						:to="`/work/${item.id}`"
						@mouseover="activeImage = item.images[0]"
						@mouseout="activeImage = ''"
					>
						{{ item.title }}
					</router-link>
				</li>
			</ul>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TcCard from '../components/Card.vue';
import { useWorkStore } from '../stores/work';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHtml5, faCss3Alt, faJs, faVuejs, faGitAlt, faFigma } from '@fortawesome/free-brands-svg-icons';

library.add(faHtml5, faCss3Alt, faJs, faVuejs, faGitAlt, faFigma);

const store = useWorkStore();
const { works } = store;

const activeImage = ref('');
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
		icon: 'js',
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
.tc {
	&-name {
		font-size: 10rem;
		line-height: 0.9;
		margin-top: var(--spacer-5);
		margin-bottom: var(--spacer-1);
		margin-left: -4rem;
	}

	&-skill-grid {
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
			border: 1px solid var(--color-font);
			box-shadow: 0.25rem 0.25rem 0px var(--color-primary);
			background-color: var(--color-background);
			text-align: center;
		}
	}

	&-list {
		&-link {
			display: block;
			padding: var(--spacer-2) 0;
			text-decoration: none;
			color: var(--color-font);
		}

		&-item {
			border-bottom: 1px solid var(--color-font);

			&:first-child {
				border-top: 1px solid var(--color-font);
			}
		}
	}
}
</style>
