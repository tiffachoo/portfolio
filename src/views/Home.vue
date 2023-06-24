<template>
	<div class="tc-image">
		<div class="tc-image-wrap">
			{ image goes here ? }
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
			<p>
				{ insert skills here ? }
			</p>
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
						to="/"
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
import workData from '../data/work.json';

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
