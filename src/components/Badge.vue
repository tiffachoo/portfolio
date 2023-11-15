<template>
	<div
		v-if="text"
		class="tc-badge tc-italic"
		:style="{ '--badge-color-background': `var(--color-${color})` }"
	>
		<svg
			v-if="shape === 'flower'"
			class="tc-badge-shape tc-badge-shape-flower"
			viewBox="0 0 120 120"
		>
			<path 
				d="M62 7.2 67.1.9a2.5 2.5 0 0 1 4.2.7l3 7.6c.7 1.4 2.4 2 3.8 1.2L85 6c1.6-1 3.7 0 3.8 2l.6 8.1a2.5 2.5 0 0 0 3.1 2.3l8-2a2.5 2.5 0 0 1 3 3l-2 8c-.4 1.5.7 3 2.3 3.1l8.1.6c2 .1 3 2.2 2 3.8l-4.4 7a2.5 2.5 0 0 0 1.2 3.6l7.6 3c1.8.8 2.2 3.1.7 4.3l-6.3 5.3a2.5 2.5 0 0 0 0 3.8l6.3 5.3a2.5 2.5 0 0 1-.7 4.2l-7.6 3c-1.4.7-2 2.4-1.2 3.8L114 85c1 1.6 0 3.7-2 3.8l-8.1.6a2.5 2.5 0 0 0-2.3 3.1l2 8a2.5 2.5 0 0 1-3 3l-8-2c-1.5-.4-3 .7-3.1 2.3l-.6 8.1c-.1 2-2.2 3-3.8 2l-7-4.4a2.5 2.5 0 0 0-3.6 1.2l-3 7.6c-.8 1.8-3.1 2.2-4.3.7l-5.3-6.3a2.5 2.5 0 0 0-3.8 0l-5.3 6.3a2.5 2.5 0 0 1-4.2-.7l-3-7.6c-.7-1.4-2.4-2-3.8-1.2L35 114c-1.6 1-3.7 0-3.8-2l-.6-8.1a2.5 2.5 0 0 0-3.1-2.3l-8 2a2.5 2.5 0 0 1-3-3l2-8c.4-1.5-.7-3-2.3-3.1L8 88.9c-2-.1-3-2.2-2-3.8l4.4-7c.8-1.3.2-3-1.2-3.6l-7.6-3c-1.8-.8-2.2-3.1-.7-4.3l6.3-5.3c1.2-1 1.2-2.8 0-3.8L.9 52.8a2.5 2.5 0 0 1 .7-4.2l7.6-3c1.4-.7 2-2.4 1.2-3.8L6 35c-1-1.6 0-3.7 2-3.8l8.1-.6a2.5 2.5 0 0 0 2.3-3.1l-2-8a2.5 2.5 0 0 1 3-3l8 2c1.5.4 3-.7 3.1-2.3l.6-8.1c.1-2 2.2-3 3.8-2l7 4.4c1.3.8 3 .2 3.6-1.2l3-7.6c.8-1.8 3.1-2.2 4.3-.7l5.3 6.3c1 1.2 2.8 1.2 3.8 0Z"
				class="tc-badge-shape-path"
			/>
		</svg>
		<div
			v-else
			class="tc-badge-shape tc-badge-shape-circle"
		/>
		<span class="tc-badge-text">
			{{ text }}
		</span>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
	color: {
		type: String,
		default: 'secondary'
	},
	shape: {
		type: String as PropType<'circle' | 'flower'>,
		default: 'circle'
	},
	text: String
})
</script>

<style lang="scss">
.tc-badge {
	width: 7.5rem;
	aspect-ratio: 1/1;
	display: grid;
	align-content: center;
	text-align: center;
	color: var(--badge-color-text, var(--color-font-invert));

	&-shape {
		position: absolute;

		&-path {
			fill: var(--badge-color-background);
		}

		&-circle {
			inset: 0;
			border-radius: 100%;
			background-color: var(--badge-color-background);
		}
	}

	&-text {
		rotate: -20deg;
	}
}
</style>