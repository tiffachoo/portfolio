<template>
	<nav class="tc-nav">
		<div class="tc-nav-logo">
			<router-link 
				to="/"
				aria-label="Home"
				class="tc-nav-logo-link"
			>
				🍜
			</router-link>
		</div>
		<ul class="tc-nav-items">
			<li class="tc-nav-item">
				<a 
					href="#about"
					class="tc-nav-link"
				>
					About
				</a>
			</li>
			<li class="tc-nav-item">
				<a 
					href="#work"
					class="tc-nav-link"
				>
					Work
				</a>
			</li>
			<!-- <li class="tc-nav-item">
				<a 
					href="#"
					class="tc-nav-link"
				>
					Other
				</a>
			</li> -->
		</ul>
	</nav>
	<main class="tc-main">
		<router-view />
	</main>
	<footer class="tc-footer">
		<ul class="tc-footer-items">
			<li class="tc-footer-item">
				<a 
					aria-label="Github"
					class="tc-footer-link"
					href="https://github.com/tiffachoo"
					target="_blank"
				>
					<FontAwesomeIcon 
						icon="fab fa-github-alt"
						class="tc-footer-link-icon"
					/>
				</a>
			</li>
			<li>
				<a 
					aria-label="Codepen"
					class="tc-footer-link"
					href="https://codepen.io/tiffachoo"
					target="_blank"
				>
					<FontAwesomeIcon 
						icon="fab fa-codepen"
						class="tc-footer-link-icon"
					/>
				</a>
			</li>
			<li>
				<a 
					aria-label="Twitter"
					class="tc-footer-link"
					href="https://twitter.com/tiffachooo"
					target="_blank"
				>
					<FontAwesomeIcon 
						icon="fab fa-twitter"
						class="tc-footer-link-icon"
					/>
				</a>
			</li>
		</ul>
	</footer>
</template>

<script setup lang="ts">
import workData from './data/work.json';
import { useWorkStore } from './stores/work';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithubAlt, faCodepen, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faGithubAlt, faCodepen, faTwitter);

const store = useWorkStore();
store.setWork(workData);
</script>

<style lang="scss" scoped>
.tc {
	&-nav {
		position: sticky;
		z-index: 151;
		top: 0;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		min-height: var(--nav-height);
		padding: 0 var(--spacer-3);
		background-color: var(--color-primary);

		&-logo {
			&-link {
				text-decoration: none;
			}
		}

		&-link {
			text-decoration: none;
			font-family: var(--font-fam-2);
			font-size: 1rem;
			color: var(--color-font);
		}

		&-items {
			display: flex;
			gap: var(--spacer-3);
		} 
	}

	&-footer {
		position: relative;
		background-color: var(--color-background);

		&-link {
			--footer-link-scale: 0;

			position: relative;
			display: grid;
			place-items: center;
			height: 4rem;
			width: 4rem;
			color: var(--color-font);

			&::after {
				content: '';
				position: absolute;
				inset: 0;
				background-color: var(--color-primary);
				transform: scale(var(--footer-link-scale));
				transition: 0.3s ease-in-out;
			}

			&:hover {
				--footer-link-scale: 1;
			}

			&-icon {
				position: relative;
				z-index: 1;
				font-size: 1.5rem;
			}
		}

		&-items {
			display: flex;
		}
	}
}
</style>
