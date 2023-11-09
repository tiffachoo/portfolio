<template>
	<section 
		ref="root"
		id="media"
		class="tc-home-media tc-section"
	>
		<div class="tc-container">
			<div class="tc-col">
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const media = ref([
	{
		title: 'Codepen Radio: Episode 359',
		link: 'https://blog.codepen.io/2022/03/16/359-tiffany-choong/',
		image: '/img/codepen-radio-01.webp',
		date: 'March 2022'
	},
	{
		title: 'Net Magazine: Create CSS art',
		link: 'https://www.creativebloq.com/how-to/create-animated-css-art',
		image: '/img/netmagazine-01.webp',
		date: 'July 2019'
	}
]);
</script>

<style lang="scss">
.tc-home-media {
	background-color: var(--color-accent);
}
</style>