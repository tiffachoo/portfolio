<template>
	<div class="tc-card">
		<div class="tc-card-header">
			{{ header }}
		</div>
		<div class="tc-card-body">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	header: String
});
</script>

<style lang="scss">
.tc-card {
	--card-padding: var(--spacer-3);
	--card-border: 1px solid var(--color-font);

	border: var(--card-border);

	&-body {
		padding: var(--card-padding);
	}

	&-header {
		display: flex;
		padding: var(--spacer-1) var(--card-padding);
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
}
</style>