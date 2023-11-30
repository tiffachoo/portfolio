<template>
	<section 
		ref="root"
		id="media"
		class="tc-home-media tc-section"
	>
		<div class="tc-container">
			<div class="tc-home-media-title-wrap">
				<h2 class="tc-home-media-title">
					<span class="tc-home-media-title-text">
						Specials
					</span>
				</h2>
			</div>

			<div class="tc-col">
				<ul class="tc-home-media-list">
					<li
						v-for="item in media"
						:key="item.title"
						class="tc-home-media-list-item"
					>
						<a 
							:href="item.link"
							target="_blank"
							class="tc-home-media-list-link"
						>
							<span class="tc-home-media-list-title">
								{{ item.title }}
							</span>
							<span class="tc-home-media-list-date">
								{{ item.date }}
							</span>
						</a>
					</li>
				</ul>
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
	position: relative;
	z-index: 1;
	background-color: var(--color-accent);

	&::before {
		content: '';
		position: absolute;
		z-index: -1;
		bottom: calc(100% - 5rem);
		left: -20%;
		width: 140%;
		height: 25rem;
		rotate: -5deg;
		background-color: inherit;
	}

	&-title {
		grid-column: 2 / span var(--col-amount);
		grid-row: 1;
		margin: 0;

		&-text {
			position: relative;
			display: inline-block;
			padding: 1rem 2rem 1rem 0;
			background-color: var(--color-primary);

			&::before,
			&::after {
				content: '';
				position: absolute;
				left: 100%;
				display: block;
				background-color: inherit;
				height: 50%;
				width: 2rem;
			}

			&::before {
				top: 0;
				clip-path: polygon(100% 0, 0% 100%, 0% 0%);
			}

			&::after {
				bottom: 0;
				clip-path: polygon(0% 0, 100% 100%, 0% 100%);
			}
		}
	}

	&-title-wrap {
		position: relative;
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1 / span calc(var(--col-amount) + 2);

		&::before {
			content: '';
			display: block;
			grid-column: 1 / span 2;
			grid-row: 1;
			height: 100%;
			background-color: var(--color-primary);
		}
	}

	&-list {
		&-title {
			font-family: var(--font-fam-1);
			font-weight: 800;
			font-size: var(--font-size-3);
		}

		&-link {
			display: grid;
			align-items: center;
			grid-template-columns: 1fr auto;
			gap: 1rem;
			padding: var(--spacer-4) 0;
		}

		&-item {
			&:not(:last-child) {
				border-bottom: 1px solid;
			}
		}
	}
}
</style>