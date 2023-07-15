<template>
	<div class="tc-content">
		
	</div>
	<div>
		<h1>
			{{ $route.params.id }}
		</h1>
	</div>
</template>

<script setup lang="ts">
import { useWorkStore } from '../stores/work';

const store = useWorkStore();
const { works } = store;

console.log(works);

</script>

<style lang="scss">

</style>