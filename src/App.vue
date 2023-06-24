<template>
	<nav class="tc-nav">
		<div class="tc-nav-logo">
			🍜
		</div>
		<ul class="tc-nav-items">
			<li class="tc-nav-item">
				<a 
					href="#"
					class="tc-nav-link"
				>
					About
				</a>
			</li>
			<li class="tc-nav-item">
				<a 
					href="#"
					class="tc-nav-link"
				>
					Work
				</a>
			</li>
			<li class="tc-nav-item">
				<a 
					href="#"
					class="tc-nav-link"
				>
					Other
				</a>
			</li>
		</ul>
	</nav>
	<main class="tc-main">
		<router-view />
	</main>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.tc {
	&-nav {
		position: sticky;
		z-index: 151;
		top: 0;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		min-height: 4rem;
		padding: 0 var(--spacer-3);
		background-color: var(--color-primary);

		&-link {
			text-decoration: none;
			font-size: 1.125rem;
			color: var(--color-font);
		}

		&-items {
			display: flex;
			gap: var(--spacer-2);
		} 
	}
}
</style>
