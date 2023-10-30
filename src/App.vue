<template>
	<nav class="tc-nav">
		<div class="tc-nav-logo">
			<router-link 
				to="/"
				aria-label="Home"
				class="tc-nav-logo-link"
			>
				<span v-if="route.path !== '/'">
					<TcArrow />
				</span>
				<span v-else>
					🍜
				</span>
			</router-link>
		</div>
		<!-- <ul class="tc-nav-items">
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
		</ul> -->
	</nav>
	<main class="tc-main">
		<router-view v-slot="{ Component }">
			<transition name="tc-route">
				<component :is="Component" />
			</transition>
		</router-view>
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
			<li>
				<a 
					aria-label="Linkedin"
					class="tc-footer-link"
					href="https://www.linkedin.com/in/tiffany-choong-0b6513a8"
					target="_blank"
				>
					<FontAwesomeIcon 
						icon="fab fa-linkedin-in"
						class="tc-footer-link-icon"
					/>
				</a>
			</li>
		</ul>
	</footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TcArrow from './components/Arrow.vue';
import workData from './data/work.json';
import { useWorkStore } from './stores/work';

const route = useRoute();

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faGithubAlt,
	faCodepen,
	faTwitter,
	faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithubAlt, faCodepen, faTwitter, faLinkedinIn);

const store = useWorkStore();
store.setWork(workData);

onMounted(() => {
	if (document.documentElement.style.setProperty) {
		document.documentElement.style.setProperty(
			'--scrollbar-width', 
			(window.innerWidth - document.body.clientWidth) + 'px'
		);
	}
});
</script>

<style lang="scss">
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

				&:hover {
					.tc-arrow-stem {
						transform: scaleX(1.2);
					}
				}
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

	&-route {
		&-enter-active {
			transition: 0.4s 0.4s;
		}

		&-leave-active {
			// position: absolute;
			// left: 0;
			// width: 100%;
			transition: 0.4s;
		}

		&-enter-active {
			&::before {
			}
		}

		&-leave-to,
		&-enter-from {
			opacity: 0;
		}
	}

	&-main {
		&:has(.tc-route-enter-active) {
			&::before {
				animation-name: fade;
				animation-duration: 0.8s;
				animation-fill-mode: forwards;
			}
		}
	}
}

@keyframes fade {
  0%, 100% { opacity: 0 }
  45%, 55% { opacity: 1 }
}
</style>
