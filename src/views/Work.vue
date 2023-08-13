<template>
	<div class="tc-container">
		<div 
			v-if="work"
			class="tc-content tc-col-left"
		>
			<div class="tc-content-wrap">
				<section class="tc-section">
					<h1>
						{{ work.title }}
					</h1>
					<tc-card 
						flush
						class="my-3"
					>
						<dl class="tc-work-dl">
							<div class="tc-work-dl-group">
								<dt>Date</dt>
								<dd>{{ work.date }}</dd>
							</div>
							<div
								v-if="work.url"
								class="tc-work-dl-group"
							>
								<dt>Website</dt>
								<dd>
									<a 
										:href="work.url"
										target="_blank"
									>{{ work.url }}</a>
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
									>{{ work.repo }}</a>
								</dd>
							</div>
						</dl>
					</tc-card>
					<p>
						{{ work.description }}
					</p>
					<p>
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
import { useWorkStore } from '../stores/work';
import TcCard from '../components/Card.vue';

const route = useRoute();

const store = useWorkStore();
const { works } = store;

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
});

const work = computed(() => {
	const current = works.find(work => work.id === route.params.id);
	return current;
});
</script>

<style lang="scss">
.tc-work-dl-group {
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
</style>