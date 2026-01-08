<template>
	<div ref="root" class="tc-work tc-container">
    <div class="tc-work-background" />
    <button 
      aria-label="Return home" 
      class="tc-close-button"
      to="/"
      @click="$router.go(-1)"
    >
      <TcArrow />
    </button>
    <h1 v-if="work" class="tc-work-title">
      {{ work.title }}
    </h1>
		<div 
			v-if="work"
			class="tc-content tc-col-left"
		>
			<div class="tc-content-wrap">
				<section class="tc-section pt-0">
					<TcCard 
						flush
						class="mb-4"
					>
						<dl class="tc-work-dl">
							<div class="tc-work-dl-group">
								<dt>Date</dt>
								<dd>{{ work.date }}</dd>
							</div>
							<div class="tc-work-dl-group">
								<dt>Website</dt>
								<dd>
									<a 
										v-if="work.url"
										:href="work.url"
										target="_blank"
									>
										View website
										<TcArrow external/>
									</a>
									<em v-else>
										Available internally only
									</em>
								</dd>
							</div>
							<div
								v-if="work.repo"
								class="tc-work-dl-group"
							>
								<dt>Repo</dt>
								<dd>
									<a 
										:href="work.repo"
										target="_blank"
									>View Github repo</a>
								</dd>
							</div>
						</dl>
					</TcCard>
					<div class="content">
						<p>
							{{ work.description }}
						</p>
						<template v-if="work.highlights">
							<h2 class="h4">
								Project highlights
							</h2>
							<ul>
								<li
									v-for="highlight in work.highlights"
									:key="highlight"
								>
									{{ highlight }}
								</li>
							</ul>
						</template>
					</div>
					<p 
						v-if="work.credits"
						class="mt-4"
					>
						<em>{{ work.credits }}</em>
					</p>
					<ul class="tc-list-inline mt-4">
						<li
							v-for="skill in work.skills"
							:key="skill"
						>
							<span class="tc-tag">
								{{ skill }}
							</span>
						</li>
					</ul>
				</section>
			</div>
		</div>
		<div class="tc-image tc-col-right">
			<template v-for="image in work?.images">
				<video 
					v-if="image.src.includes('webm')"
					ref="vids"
					autoplay 
					loop
					muted
					playsinline
					:aria-label="image.alt"
					:poster="image.placeholder"
					preload="none"
					class="tc-vid mb-2"
				>
					<source 
						:data-src="image.src"
						type="video/webm"
					>
				</video>
				<img 
					v-else
					:src="image.src" 
					:alt="image.alt || ''"
					:style="{ 'aspect-ratio': image.height && image.width ? image.width / image.height : '' }"
					class="tc-img mb-2"
					loading="lazy"
				>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWorkStore } from '../stores/work';
import { TcArrow } from '../components/svgs';
import TcCard from '../components/Card.vue';

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();

const store = useWorkStore();
const { works } = store;

const root = ref();
const vids = ref([]);

onMounted(() => {
	let observer = new IntersectionObserver(entries => {
		if (entries[0].isIntersecting) {
			const vid = entries[0].target.children[0];
			const src = vid.getAttribute('data-src') || '';
			vid.setAttribute('src', src);
			(entries[0].target as HTMLVideoElement).load();
			observer.unobserve(entries[0].target);
		} 
	});
	
	vids.value?.forEach((vid: HTMLElement) => {
		observer.observe(vid);
	});

	gsap.to(root.value, {
    '--background-height': '120vh',
		ease: 'none',
		scrollTrigger: {
			trigger: root.value,
			start: '-40% bottom',
			endTrigger: root.value,
			end: 'bottom top',
			scrub: true
		}, 
	});
});

const work = computed(() => {
	const current = works.find(work => work.id === route.params.id);
	return current;
});
</script>

<style lang="scss">
@import '../styles/variables-sass';

.tc-work {
  --right-grid-column: 2 / span var(--col-amount);
  --left-grid-column: 2 / span var(--col-amount);

  position: relative;
  background-color: var(--color-background-2);
  
  @media (width > $bp-md) {
    --right-grid-column: 4 / span 6;
    --left-grid-column: 2 / span 2;
    grid-template-rows: auto 4rem auto;
  }

  &.tc-route-enter-active {
    opacity: 0;
    scale: 0.97 1;
    translate: 0 1rem;
    animation: loadWork 0.5s 0.5s ease-in-out forwards;
  }

  .tc-image {
    position: relative;
    z-index: 1;
  }

  &-dl-group {
    display: grid;
    grid-template-columns: 1fr 2fr;
  
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-font);
    }
  
    > dt,
    > dd {
      padding: 0.25rem var(--spacer-1);
      background-color: var(--color-background);
    }
  
    > dt {
      border-right: 1px solid var(--color-font);
      font-family: var(--font-fam-2);
      color: var(--color-font-2);
    }
  }

  &-title {
    position: relative;
    z-index: 2;
    margin-top: var(--spacer-5);
    text-wrap: balance;
    text-shadow: 0.5rem 0.5rem var(--color-accent);

    @media (width > $bp-md) {
      grid-column: 2 / span 6;
      grid-row: 1 / span 2;
    }

    @media (width <= $bp-md) {
      grid-column: 2 / span 8;
    }
  }

  &-background {
    position: fixed;
    z-index: 0;
    top: -10%;
    left: -10%;
    height: var(--background-height, 50vh);
    width: 120%;
    rotate: -3deg;
    background-color: currentColor;
    color: var(--color-accent);

    &::after {
      --circle-size: 3rem;
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: var(--circle-size);
      background-image: radial-gradient(circle at 50% 0%, currentColor 50%, transparent 50%);
      background-size: var(--circle-size) var(--circle-size);
    }
  }

  @media (width > $bp-md) {
    .tc-col-left {
      grid-row: 3;
    }

    .tc-col-right {
      grid-row: 2 / span 3;
    }
  }
}

.tc-close-button {
  position: fixed;
  z-index: 10;
  top: 1rem;
  right: 1rem;
  display: grid;
  place-content: center;
  height: 3rem;
  width: 3rem;
  border: 0;
  border-radius: 100%;
  background-color: var(--color-secondary);
  color: var(--color-font-invert);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    scale: 0.9;
  }
}

@keyframes loadWork {
  to {
    translate: 0 0;
    scale: 1;
    opacity: 1;
  }
}
</style>