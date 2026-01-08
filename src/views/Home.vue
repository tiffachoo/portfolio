<template>
	<div class="tc-home">
    <Tiff
      ref="tiffRef"
      :staring="aboutIsIntersecting"
      :peeking="!splashIsIntersecting && !aboutIsIntersecting"
      :waving="splashIsComplete && splashIsIntersecting"
    />
		<TcHomeSplash 
      ref="splashRef" 
      @tlComplete="onSplashCompleteAnimation"
    />

    <div
      id="content"
      :class="{ active: !splashIsIntersecting }"
      class="tc-home-content"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tc-roof"
        role="presentation"
        viewBox="50 50 1400 175"
      >
        <path 
          d="M1400.5 20.5H.5v150a50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0 50 50 0 0 0 100 0v-150h-100Z" 
          class="fill-black"
        />
        <path 
          d="M153.5 208.5a50 50 0 0 1-50-50V8.5h100v150a50 50 0 0 1-50 50Zm250-50V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Z" 
          class="fill-accent"
        />
        <path 
          d="M53.5 208.5a50 50 0 0 1-50-50V8.5h100v150a50 50 0 0 1-50 50Zm250-50V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Zm200 0V8.5h-100v150a50 50 0 0 0 100 0Z" 
          class="fill-primary"
        />
        <path 
          d="M150.5 200.5a50 50 0 0 1-50-50V.5h100v150a50 50 0 0 1-50 50Zm250-50V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm-1300 0V.5H.5v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Zm200 0V.5h-100v150a50 50 0 0 0 100 0Z"
          class="stroke-black-dark stroke"
        />
      </svg>
  
      <TcHomeWork />
      <TcHomeSkills />
      <TcHomeMedia />
      <TcHomeAbout ref="aboutRef" />
    </div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TcHomeAbout,
  TcHomeMedia,
  TcHomeSkills,
  TcHomeSplash,
  TcHomeWork,
} from '../components/home';
import { Tiff } from '../components/svgs';

gsap.registerPlugin(ScrollTrigger);

const tiffRef = ref();
const splashRef = ref();
const aboutRef = ref();

const splashIsIntersecting = ref(true);
const splashIsComplete = ref(false);
const aboutIsIntersecting = ref(false);
const aboutScrollIsActivated = ref(false);

const onSplashCompleteAnimation = () => {
   gsap
    .to(tiffRef.value.tiffRef, {
        duration: 0.5,
        ease: 'power2.inOut',
        yPercent: 0
      })
      .then(() => {
        // [temp fix?] since gsap resets transform-origin value, 
        // ensure value is correct by adding class when animation is complete
        splashIsComplete.value = true;

        document.body.classList.remove('tc-animation-active');
      })
}

onMounted(() => {
  let splashObserver = new IntersectionObserver(entries => {    
    if (splashIsComplete.value && tiffRef.value) {
      const tl = gsap.timeline();
      if (entries[0].isIntersecting) {
        tl
          .to(tiffRef.value.tiffRef, {
            duration: 0.3,
            ease: 'power2.inOut',
            yPercent: 100,
          })
          .to(tiffRef.value.tiffRef, {
            duration: 0,
            zIndex: 10,
            xPercent: 0
          })
          .to(tiffRef.value.tiffRef, {
            duration: 0.5,
            ease: 'power2.inOut',
            yPercent: 0,
          })
          .then(() => splashIsIntersecting.value = true)
      } else {
        tl
          .to(tiffRef.value.tiffRef, {
            duration: 0.3,
            ease: 'power2.inOut',
            yPercent: 100,
          })
          .to(tiffRef.value.tiffRef, {
            duration: 0,
            zIndex: 30,
            xPercent: 60,
          })
          .to(tiffRef.value.tiffRef, {
            duration: 0.5,
            ease: 'power2.inOut',
            yPercent: 60,
          })
          .then(() => splashIsIntersecting.value = false);
      }
    }

    if (!splashIsComplete.value) {
      document.body.classList.toggle('tc-animation-active', window.scrollY === 0);
    }
  });
  splashObserver.observe(splashRef.value.root);

  let aboutObserver = new IntersectionObserver(entries => {    
    if (splashIsComplete.value && tiffRef.value) {
      aboutIsIntersecting.value = entries[0].isIntersecting;

      if (entries[0].isIntersecting && !aboutScrollIsActivated.value) {
        gsap.to(tiffRef.value.tiffRef, {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: aboutRef.value.root,
            start: 'top bottom',
            endTrigger: aboutRef.value.root,
            end: 'top top',
            scrub: true
          }, 
        });
        aboutScrollIsActivated.value = true;
      }
    }
  });
  aboutObserver.observe(aboutRef.value.root);

  gsap.set(tiffRef.value.tiffRef, {
    yPercent: 100
  })
});

onBeforeUnmount(() => {
  document.body.classList.remove('tc-animation-active');
})
</script>

<style lang="scss">
@import '../styles/variables-sass';

.tc {
	&-roof {
		position: sticky;
		z-index: 20;
		top: -5.625rem;
		max-width: 100%;

		+ .tc-home-work {
			// calc extra space for svg on next section
			margin-top: -7.15%;

			&::before {
				content: '';
				display: block;
				position: relative;
				z-index: -1;
				aspect-ratio: 14/1;
				background-color: inherit;
			}
		}
	}

  &-home-content {
    --border-size-1: 0;
    --border-size-2: 0;

    position: relative;
    z-index: 20;

    &::before {
      content: '';
      position: fixed;
      z-index: 20;
      display: block;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      box-shadow: inset var(--border-size-1) var(--border-size-1) 0 0 var(--color-primary), inset var(--border-size-2) var(--border-size-2) 0 0 var(--color-primary);
      transition: box-shadow 0.1s ease-in-out;
      pointer-events: none;
    }

    &.active {
      --border-size-1: 1rem;
      --border-size-2: -1rem;

      &::before {
        transition: box-shadow 0.5s 0.3s ease-in-out;
      }
    }
  }
}

.tc-animation-active {
  overflow: hidden;
}
</style>
