<template>
	<div 
		:class="{ 'tc-card-flush': flush }"
		class="tc-card"
	>
		<div 
			v-if="header"
			class="tc-card-header"
		>
			{{ header }}
		</div>
		<div class="tc-card-body">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	header: String,
	flush: Boolean
});
</script>

<style lang="scss">
.tc-card {
	--card-padding: var(--spacer-3);
	--card-padding-header: var(--spacer-1);
	--card-border: var(--border);

	border: var(--card-border);
	box-shadow: var(--box-shadow);

	&-body {
		padding: var(--card-padding);
	}

	&-header {
		display: flex;
		padding: var(--card-padding-header) var(--card-padding);
		border-bottom: var(--card-border);
		background-color: var(--color-primary);
		font-family: var(--font-fam-2);
		font-size: var(--font-size-sm-2);

		&::after {
			content: '';
			display: inline-block;
			margin-left: auto;
			height: var(--font-size-sm-2);
			width: var(--font-size-sm-2);
			border-radius: 100%;
			border: var(--card-border);
		}
	}

	&-flush {
		--card-padding: 0;
		--card-padding-header: 0;
	}
}
</style>