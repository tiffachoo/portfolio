<template>
	<section 
		ref="root"
		id="about"
		class="tc-home-about tc-section"
	>
		<div class="tc-container">
			<div class="tc-col">
				<TcCard 
					header="Hello! 👋"
					class="my-5"
				>
					<p>
						I’m Tiff. I’m a front end developer and designer who enjoys creating and experimenting in the digital world.
					</p>
					<p>
						I am currently working as a Lead UI Engineer on a digital focused team within a nationally known and recognized banking institution. 
					</p>
					<p>
						My focus is overseeing and developing websites and applications, creating interactive web experiences to surprise and delight customers who craved fun in their banking, and developing and maintaining a design system and component library that made that easy for us.
					</p>
				</TcCard>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import TcCard from '../Card.vue';
</script>

<style lang="scss">
.tc-home-about {
	background-color: var(--color-background-2);
}
</style>