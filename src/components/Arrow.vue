<template>
	<svg
		:aria-label="external ? 'Open in new window' : undefined"
		:class="{ 'tc-arrow-external': external }"
		class="tc-arrow"
		:viewBox="`0 0 ${external ? 52 : 80.77} 51.76`"
	>
		<g class="tc-arrow-wrap">
			<polyline
				class="tc-arrow-stroke"
				points="30.77 .38 .77 25.88 30.77 51.38"
			/>
			<line
				class="tc-arrow-stroke tc-arrow-stem" 
				x1=".77"
				y1="25.95"
				:x2="external ? 52 : 80.77"
				y2="25.95"
			/>
		</g>
	</svg>
</template>

<script setup lang="ts">
defineProps({
	external: Boolean
});
</script>

<style lang="scss">
.tc-arrow {
	display: inline-block;
	height: 0.875rem;
	overflow: visible;

	&-stem {
		transition: 0.3s ease-in-out;
	}

	&-stroke {
		stroke-width: 3;
		fill: none;
		stroke: currentColor;
	}

	&-external {
		height: 0.75rem;
		transition: 0.3s ease-in-out;
		
		.tc-arrow-wrap {
			rotate: 135deg;
			transform-origin: 26px 26px;
		}

		a:hover & {
			transform: translate(0.125rem, -0.125rem);

			.tc-arrow-stem {
				transform: scaleX(1.2);
			}
		}
	}
}
</style>