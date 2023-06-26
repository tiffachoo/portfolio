<template>
	<div class="tc-image">
		<div class="tc-image-wrap">
			<div class="tc-image-img"></div>
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
			<h1>
				Tiffany Choong
			</h1>
			<p>
				Front end developer + designer
			</p>
			<p>
				{ insert bio here ? }
				Hello! 👋
			</p>
			<h2>
				Skills
			</h2>
			<ul class="tc-skill-grid">
				<li class="tc-skill-grid-item">
					<FontAwesomeIcon 
						icon="fab fa-html5"
						class="tc-skill-grid-icon"
					/>
				</li>
				<li class="tc-skill-grid-item">
					<FontAwesomeIcon 
						icon="fab fa-css3-alt"
						class="tc-skill-grid-icon"
					/>
				</li>
				<li class="tc-skill-grid-item">
					<FontAwesomeIcon 
						icon="fab fa-js"
						class="tc-skill-grid-icon"
					/>
				</li>
				<li class="tc-skill-grid-item">
					<FontAwesomeIcon 
						icon="fab fa-vuejs"
						class="tc-skill-grid-icon"
					/>
				</li>
				<li class="tc-skill-grid-item">
					<FontAwesomeIcon 
						icon="fab fa-git-alt"
						class="tc-skill-grid-icon"
					/>
				</li>
				<li class="tc-skill-grid-item">
					<FontAwesomeIcon 
						icon="fab fa-figma"
						class="tc-skill-grid-icon"
					/>
				</li>
			</ul>
		</section>
		<section 
			id="Work"
			class="tc-section"
		>
			<header>
				<h2>
					Work
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

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHtml5, faCss3Alt, faJs, faVuejs, faGitAlt, faFigma } from '@fortawesome/free-brands-svg-icons';

import workData from '../data/work.json';

library.add(faHtml5, faCss3Alt, faJs, faVuejs, faGitAlt, faFigma);

const works = ref(workData);
</script>

<style lang="scss">
.tc {
	&-list {
		&-link {
			text-decoration: none;
			color: var(--color-font);
		}

		&-item {
			padding: var(--spacer-2) 0;
			border-bottom: 1px solid var(--color-font);

			&:first-child {
				border-top: 1px solid var(--color-font);
			}
		}
	}
}
</style>
