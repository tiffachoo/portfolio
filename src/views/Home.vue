<template>
	<header class="tc-header">
		<h1>
			Tiff
		</h1>
	</header>
	<section class="tc-section">
		<header>
			<h2>
				Work
			</h2>
		</header>
		<div class="tc-grid">
			<article 
				v-for="item in works"
				:key="item.title"
				class="tc-grid-card"
			>
				<h3>
					{{ item.title }}
				</h3>
			</article>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import workData from '../data/work.json';

const works = ref(workData);
</script>

<style lang="scss">

</style>
