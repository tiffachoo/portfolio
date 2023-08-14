<template>
	<div class="tc-container">
		<div class="tc-image tc-image-home tc-col-left">
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
		<div class="tc-content tc-col-right">
			<section 
				id="about"
				class="tc-section"
			>
				<h1 class="tc-name">
					<span class="tc-name-first">Tiff</span>any<br>
					Choong
				</h1>
				<p class="tc-font-mono">
					Front end developer + designer
				</p>

				<tc-card 
					header="Hello! 👋"
					class="my-5"
				>
					<p>
						I’m Tiff. I’m a front end developer and designer who enjoys creating and experimenting in the digital world.
					</p>
					<p>
						I am currently working as a Lead UI Engineer on a digital focused team within a nationally known and recognized banking institution. 
					</p>
					<p>
						My focus is overseeing website and application development, creating interactive web experiences to surprise and delight customers who craved fun in their banking, and developing and maintaining a design system that made that easy for us.
					</p>
				</tc-card>

				<h2>
					Stack starter pack
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
				id="work"
				class="tc-section tc-section-bleed"
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
							@mouseover="activeImage = item.images[0]?.src"
							@mouseout="activeImage = ''"
						>
							{{ item.title }}
						</router-link>
					</li>
				</ul>
			</section>
			<section 
				id="media"
				class="tc-section"
			>
				<header>
					<h2>
						Featured media
					</h2>
				</header>
				<ul class="tc-list-cards">
					<li
						v-for="item in media"
						:key="item.title"
						class="tc-list-card"
					>
						<a 
							:href="item.link"
							class="tc-list-card-link"
							target="_blank"
							@mouseover="activeImage = item.image"
							@mouseout="activeImage = ''"
						>
							<span>
								{{ item.title }}
								<br>
								<span class="tc-font-small">
									{{ item.date }}
								</span>
							</span>
							<svg viewBox="0 0 80.77 51.76" class="tc-list-card-link-icon">
								<polyline points="30.77 .38 .77 25.88 30.77 51.38" style="stroke-width: 3; fill: none; stroke: currentColor" />
								<line x1=".77" y1="25.95" x2="80.77" y2="25.95" style="stroke-width: 3; fill: none; stroke: currentColor" />
							</svg>
						</a>
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useWorkStore } from '../stores/work';
import TcCard from '../components/Card.vue';

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
const media = ref([
	{
		title: 'Codepen Radio: Episode 359',
		link: 'https://blog.codepen.io/2022/03/16/359-tiffany-choong/',
		image: '/img/codepen-radio-01.png',
		date: 'March 2022'
	},
	{
		title: 'Net Magazine',
		link: 'https://www.creativebloq.com/how-to/create-animated-css-art',
		image: '/img/netmagazine-01.webp',
		date: 'July 2019'
	}
]);
</script>

<style lang="scss">
@import '../styles/variables-sass';

.tc {
	&-name {
		font-size: 10rem;
		line-height: 0.9;
		margin-bottom: var(--spacer-1);

		@media (min-width: $bp-md) {
			margin-top: var(--spacer-5);
			margin-left: -4rem;
		}

		@media (max-width: $bp-md - 1) {
			margin-top: -8rem;
			font-size: clamp(2rem, 25vw, 10rem);
		}

		&-first {
			text-shadow: 0.5rem 0.5rem var(--color-primary);
		}
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
			border: var(--border);
			box-shadow: var(--box-shadow-primary);
			background-color: var(--color-background);
			text-align: center;
		}
	}

	&-list {
		&-link {
			display: block;
			padding: var(--spacer-2) 0;
			padding-right: var(--spacer-4);
			text-decoration: none;
			color: var(--color-font);
			transition: 0.2s;

			&:hover {
				color: var(--color-secondary-dark);
			}
		}

		&-item {
			border-bottom: 1px solid var(--color-font);

			&:first-child {
				border-top: 1px solid var(--color-font);
			}
		}

		&-card {
			&-link {
				display: flex;
				align-items: center;
				padding: var(--spacer-3);
				background-color: var(--color-primary);
				font-family: var(--font-fam-2);
				transition: 0.2s;

				&-icon {
					display: inline-block;
					margin-left: auto;
					height: 0.75rem;
					rotate: 180deg;
					transition: 0.3s ease-in-out;
				}

				&:hover {
					background-color: var(--color-secondary-tint);

					.tc-list-card-link-icon {
						transform: translateX(-0.25rem);
					}
				}
			}
		}

		&-cards {
			display: grid;
			gap: var(--spacer-1)
		}
	}
}
</style>
