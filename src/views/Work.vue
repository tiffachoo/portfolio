<template>
	<div class="tc-content">
		
	</div>
	<div v-if="work">
		<h1>
			{{ work.title }}
		</h1>
		<dl>
			<div>
				<dt>Date</dt>
				<dd>{{ work.date }}</dd>
			</div>
			<div>
				<dt>Website</dt>
				<dd>{{ work.url }}</dd>
			</div>
			<div>
				<dt>Repo</dt>
				<dd>{{ work.repo }}</dd>
			</div>
		</dl>
		<p>
			{{ work.description }}
		</p>
		<ul>
			<li
				v-for="skill in work.skills"
				:key="skill"
			>
				{{ skill }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useWorkStore } from '../stores/work';

const route = useRoute();

const store = useWorkStore();
const { works } = store;

const work = computed(() => {
	console.log(route.params.id)
	const current = works.find(work => work.id === route.params.id);
	return current;
});
</script>

<style lang="scss">

</style>