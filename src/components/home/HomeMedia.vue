<template>
	<section 
		ref="root"
		id="media"
		class="tc-home-media tc-section"
	>
		<div class="tc-home-media-background" />
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
                <TcArrow external/>
							</span>
							<span class="tc-home-media-list-date">
								{{ item.date }}
							</span>
              <TcStar />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { TcArrow, TcStar } from '../svgs';

const root = ref();

const media = [
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
];

onMounted(() => {
  const tl = gsap.timeline({ paused: true });

  tl
    .from(root.value, {
      duration: 1,
      ease: 'power2.inOut',
      '--bg-width': 0
    })

  let observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      tl.play();
      observer.unobserve(root.value);
    }
  });
  observer.observe(root.value);
})
</script>

<style lang="scss">
.tc-home-media {
  --bg-width: 100%;
  --star-scale: 0.6;
  --star-opacity: 0;
  --star-delay: 0s;
  --link-date-color: var(--color-black-dark);
  --link-date-x: 0;
  --link-date-scale: 1;
  --link-date-opacity: 1;
  --link-title-x: 0;
  --link-title-style: 0;

	position: relative;
	z-index: 1;
  background-color: var(--color-background-3);

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
		width: var(--bg-width);
    background-color: var(--color-accent);
  }

	&-background {
		position: absolute;
		z-index: -1;
		bottom: calc(100% - 0.25rem);
    width: 100%;
		height: 18rem;
    clip-path: rect(0 var(--bg-width) 100% 0);
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			left: -20%;
			top: 25%;
			width: 140%;
			height: 25rem;
			rotate: -5deg;
			background-color: var(--color-accent);
		}
	}

	&-title {
		grid-column: 2 / span var(--col-amount);
		grid-row: 1;
		margin: 0;

		&-text {
			position: relative;
			display: inline-block;
			padding: 1rem 3rem 1rem 0;
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
		margin-bottom: var(--spacer-4);

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
      font-variation-settings: "ital" var(--link-title-style);
      translate: var(--link-title-x) 0;
      transition: 0.3s ease-in-out;
		}

    &-date {
      color: var(--link-date-color);
      transform-origin: right center;
      translate: var(--link-date-x) 0;
      scale: var(--link-date-scale) 1;
      opacity: var(--link-date-opacity);
      transition: 0.3s ease-in-out;
    }

		&-link {
      position: relative;
			display: grid;
			align-items: center;
			grid-template-columns: 1fr auto;
			gap: 1rem;
			padding: var(--spacer-4) 0;
			color: var(--color-black-dark);

      &:hover {
        --star-scale: 1;
        --star-opacity: 1;
        --star-delay: 0.3s;
        --link-date-color: var(--color-primary);
        --link-date-x: 0.5rem;
        --link-date-scale: 0.9;
        --link-date-opacity: 0;
        --link-title-x: 0.5rem;
      }
		}

		&-item {
			&:not(:last-child) {
				border-bottom: 1px solid;
			}
		}
	}

  .tc-star {
    position: absolute;
    right: 0;
    height: 1.5rem;
    color: var(--color-primary);
    animation: spinny 4s linear infinite;
    transition: 0.3s ease-in-out;
    transition-delay: var(--star-delay);
    scale: var(--star-scale);
    opacity: var(--star-opacity);
  }
}
</style>