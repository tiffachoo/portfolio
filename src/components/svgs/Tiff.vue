<template>
  <div 
    ref="tiffRef" 
    :class="{ 
      'peek-active': peeking,
      'stare-active': staring,
      'wave-active': waving, 
      initial: !waving && !staring
    }"
    class="tc-tiff"
  >
    <div ref="svgRef">
      <svg 
        class="tc-tiff-svg" 
        xmlns="http://www.w3.org/2000/svg" 
        role="presentation"
        width="378.5" 
        height="467.6" 
        viewBox="0 0 378.5 467.6"
      >
        <path id="hairBack" d="M315.3 454.6H63s8-31-4.8-97c-13-66.8-10-140.5-10-140.5h277.8s-2 125.2-8 158.3-2.6 79.2-2.6 79.2Z" class="fill-black-dark"/>
        <g id="body">
          <g id="rightArm" ref="rightArmRef">
            <path d="M349.1 358.6s9 1.7 14.4 1.5c5.3-.3 12.4-1.7 13.7 0 2.3 3 .5 12.5-13.7 18-18 7-14.4-19.5-14.4-19.5Z" class="stroke fill-white stroke-black-dark"/>
            <path d="m349.5 381-55.6 2h-3.8l-55.6-2a12 12 0 1 1 0-24l55.6 2h3.8l55.6-2a12 12 0 1 1 0 24Z" class="stroke fill-white stroke-black-dark"/>
            <path d="M348.5 356.1h14v26h-14z" class="fill-primary"/>
            <path d="M346.5 356.1h14v26h-14z" class="stroke stroke-black-dark"/>
          </g>
          <g id="leftArm" ref="leftArmRef">
            <path d="M29.4 358.6s-9 1.7-14.4 1.5-12.4-1.7-13.6 0c-2.4 3-.5 12.5 13.6 18 18 7 14.4-19.5 14.4-19.5Z" class="stroke fill-white stroke-black-dark"/>
            <path d="m29 381 55.6 2h3.8l55.6-2a12 12 0 1 0 0-24l-55.6 2h-3.8L29 357a12 12 0 1 0 0 24Z" class="stroke fill-white stroke-black-dark"/>
            <path d="M30 382H16v-26h14z" class="fill-primary"/>
            <path d="M32 382H18v-26h14z" class="stroke stroke-black-dark"/>
          </g>
          <g id="torso">
            <path d="M263.3 467h-148l4-63c0-19.3 15.6-55 34.9-55h70.2c19.2 0 34.9 35.7 34.9 55l4 63Z" class="stroke fill-white stroke-black-dark"/>
            <path d="M189.3 467.1v-95" class="stroke stroke-black-dark"/>
            <path d="M192.3 361.1s16.9-6 29-19.3h23s-3.7 29.5-52 26.2v-6.9ZM186.2 361.1s-16.9-6-29-19.3h-23s3.7 29.5 52 26.2v-6.9Z" class="stroke fill-white stroke-black-dark"/>
            <path d="M188.8 365.7s24-22.4 54.2 20.6c0 0-45 20.2-54.2-20.6Z" class="fill-primary"/>
            <path d="M188.8 367.7s24-22.4 54.2 20.6c0 0-45 20.2-54.2-20.6Z" class="stroke stroke-black-dark"/>
            <path d="M195.4 370s8.1 5 14.1 6" class="stroke stroke-black-dark"/>
            <path d="M189.1 366s-19-26.6-57.2 9.6c0 0 40 28.6 57.2-9.5Z" class="fill-primary"/>
            <path d="M191.1 366s-19-26.6-57.2 9.6c0 0 40 28.6 57.2-9.5Z" class="stroke stroke-black-dark"/>
            <path d="M184 368s-4.5 2-11 2" class="stroke stroke-black-dark"/>
            <rect width="11.8" height="14.4" x="183" y="359.4" class="fill-primary" rx="5.9" ry="5.9"/>
            <rect width="11.8" height="14.4" x="184" y="359.4" class="stroke stroke-black-dark" rx="5.9" ry="5.9"/>
            <circle cx="181.5" cy="398.1" r="4" class="stroke fill-white stroke-black-dark"/>
          </g>
        </g>
        <g 
          id="head" 
          :aria-label="routeLabel"
          :role="peeking || waving ? 'button' : undefined" 
          @click="navigateToAnchor"
        >
          <path d="M189.3 65.6c-153.4 0-127 191.3-121 221.1 6.1 29.9 64 69.3 121 69.3s114.8-39.4 120.9-69.3c6.1-29.8 32.4-221-121-221Z" class="stroke fill-white stroke-black-dark"/>
          <path d="M189.3 50.6c179.6 0 148 215.4 141 249l-10-14.6c-5.5 21.6-12.7 33.2-12.7 33.2 6.2-56 0-102.9 0-102.9 0 21.7-10.9 32.5-10.9 32.5a119.3 119.3 0 0 0-17.5-74 88.4 88.4 0 0 1-25.5 42s1.5-12.7.9-26a83.6 83.6 0 0 1-31.3 31s7.1-16 7.1-32c0 0-22 25-80.7 25 0 0 12.7-7.8 14.5-17.6 0 0-12.2 15-56.6 21.3l-6.1 34.6a85 85 0 0 1-8-26C74.4 313.9 99 380.8 99 380.8c-20-34.9-30-67.7-34.2-96.4L62.3 304l-3.6 28.4c-5.4-11.4-11-33.2-11-33.2-7.1-33.6-38-248.6 141.6-248.6Z" class="fill-black"/>
          <path d="M191.8 50.6c-179.6 0-148 215.5-141 249l4-12c-4.7-35.4-8.3-102.4 17.8-154.1 5 3.9 18 .5 30-8.3 13.3-9.5 20.8-21.8 16.7-27.4-3.1-4.3-12.3-3.4-22.4 1.8 22.4-22.3 55.2-37 102.9-37 55.8 0 91.3 20.8 113.5 50.5C292 77 255 50.6 191.8 50.6Z" class="fill-accent"/>
          <path d="M309.7 205s0 29.5-13 42.8c0 0 .8-50.1-17-75.7" class="stroke stroke-black-dark"/>
          <path d="M320.3 283.9c7.5 4.8 13 12.7 13 12.7 7-33.5 38.6-249-141-249S43.6 262.6 50.7 296.2c0 0 5.5 21.8 11 33.2l5-32.3" class="stroke stroke-black-dark"/>
          <path d="M325.2 258.7s-7.2 46.6-17.4 59c0 0 10.8-95.8-1.6-126.2M284.7 140s-.5 49-30.2 75c0 0 4-10.2.2-26" class="stroke stroke-black-dark"/>
          <path d="M261.1 173.4s-7.8 31.3-37.6 47c0 0 7.7-20 7-31.7" class="stroke stroke-black-dark"/>
          <path d="M243.7 173s-22 41.7-93 40.9c0 0 13.5-7.7 14-17.8M97.7 203s-26 103 0 175.6c0 0-30-39.4-35.5-116.4" class="stroke stroke-black-dark"/>
          <path d="M111.3 203s-7.7 26-9.6 48c0 0-6-12-8-29" class="stroke stroke-black-dark"/>
          <path d="M171.7 188.5s-11.9 21.8-64 28.7M178.4 312.6v1c0 4.1 4.9 7.4 10.9 7.4s10.8-3.3 10.8-7.3v-1.1" class="stroke stroke-black-dark"/>
          <ellipse cx="120.3" cy="300.1" class="fill-secondary-tint" rx="24.5" ry="22"/>
          <ellipse cx="258.3" cy="300.1" class="fill-secondary-tint" rx="24.5" ry="22"/>
          <path d="m245.2 305.5 7.4-14.9 7.4 14.9 8.4-14.9M107.2 305.5l7.4-14.9 7.4 14.9 8.4-14.9" class="stroke stroke-secondary"/>
          <path id="eyes" d="M247.8 228c-1.6 0-3 3.4-4.2 8.4-1-.6-2-1.3-2.8-2.2-2.2-2.2-4.5-5.7-4.5-5.7l-.9.5c.1.2 2.4 3.7 4.7 6 1 1 2.2 1.8 3.3 2.4-1 5.3-1.7 12-1.7 18.3 0 13 0 27.8 6 27.8s6.1-14.8 6.1-27.8-2.7-27.8-6-27.8ZM130.5 228c-1.6 0-3 3.4-4.1 8.4-1-.6-2-1.3-2.9-2.2-2.2-2.2-4.4-5.7-4.5-5.7l-.8.5c0 .2 2.3 3.7 4.6 6 1 1 2.3 1.8 3.4 2.4-1 5.3-1.7 12-1.7 18.3 0 13 0 27.8 6 27.8s6-14.8 6-27.8-2.6-27.8-6-27.8Z" class="fill-black-dark"/>
          <circle cx="130.8" cy="266.6" r="47.5" class="stroke stroke-black-dark"/>
          <circle cx="247.8" cy="266.6" r="47.5" class="stroke stroke-black-dark"/>
          <path d="M178.3 267.1h22M135.4 180.7A35.5 35.5 0 0 0 95.1 197M243 179.7a35.5 35.5 0 0 1 40.4 16.2" class="stroke stroke-black-dark"/>
          <template v-if="staring">
            <g id="mouthOpen">
              <rect x="176.98" y="307.32" width="25" height="15" class="fill-white"/>
              <path d="m187.2 309.7-4 8.4c-.7 1.4.4 3 2 3h7.8c1.6 0 2.6-1.6 2-3l-4-8.4c-.8-1.6-3-1.6-3.9 0Z" class="fill-black-dark"/>
              <path d="m195 318.1-1.3-2.6c-.9-.4-2-.7-3.2-.7-3.3 0-6 2-6 4.5 0 .7.2 1.3.5 1.8h8.1c1.5 0 2.5-1.6 1.8-3Z" class="fill-secondary"/>
              <path d="m187.2 309.7-4 8.4c-.7 1.4.4 3 2 3h7.8c1.6 0 2.6-1.6 2-3l-4-8.4c-.8-1.6-3-1.6-3.9 0Z" class="stroke stroke-black-dark"/>
            </g>
            <g id="eyesSparkle">
              <path id="eyeSparkleLeft" d="M145.4 257c-3.5-1.2-7-4.2-9.7-8.8s-4.5-10.2-5.3-16.1c-.8 6-2.5 11.5-5.3 16.1s-6.1 7.6-9.7 8.8v.1c3.5 1.3 7 4.2 9.7 8.8s4.5 10.3 5.3 16.2c.8-6 2.5-11.6 5.3-16.2s6.1-7.5 9.7-8.8Z" class="stroke stroke-black-dark fill-accent"/>
              <path id="eyeSparkleRight" d="M262.6 257c-3.5-1.2-6.9-4.2-9.7-8.8s-4.5-10.2-5.2-16.1c-.9 6-2.6 11.5-5.4 16.1s-6.1 7.6-9.7 8.8v.1c3.6 1.3 7 4.2 9.7 8.8s4.5 10.3 5.3 16.2c.8-6 2.6-11.6 5.3-16.2s6.2-7.5 9.7-8.8Z" class="stroke stroke-black-dark fill-accent"/>
            </g>
          </template>
        </g>
        <g id="hat">
          <path d="M330.6 65.2a28 28 0 0 0-15.7-38.3 28 28 0 0 0-37.4-17.5l-.2-.1a28 28 0 0 0-34 42.8l-10.7 23.1-.1.1c-1.8 3.8 10.8 13.5 28.2 21.6s32.8 11.5 34.6 7.7v-.1l10.8-23.1a28 28 0 0 0 24.5-16.2Z" class="fill-white"/>
          <path d="M296.5 87.7c-1.5.1-4.5-.1-10-1.6-6.7-1.8-15-5-23.3-8.8-17.5-8.2-27-15.5-29.5-18.8l-2.3 5c1.4 1.4 3.3 3 5.6 4.7 6 4.4 14.6 9.3 24 13.7s18.6 7.8 26 9.6a47 47 0 0 0 7.1 1.3l2.4-5Z" class="fill-primary"/>
          <path d="M326.9 59a28 28 0 0 0-15.7-38.2 28 28 0 0 0-37.4-17.5l-.2-.2a28 28 0 0 0-34 42.8L228.8 69v.2c-1.8 3.8 10.8 13.4 28.1 21.5s32.8 11.6 34.6 7.8v-.2l10.8-23.1A28 28 0 0 0 327 59Z" class="stroke stroke-black-dark"/>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  peeking: Boolean,
  staring: Boolean,
	waving: Boolean
});

const router = useRouter();

const tiffRef = ref();
// Wrapper to avoid conlict with translate property on scroll trigger
const svgRef = ref();
const leftArmRef = ref();
const rightArmRef = ref();

const routeLabel = computed(() => 
  props.waving ? "Go to work" : props.peeking ? "Go to about me" : undefined
);

function navigateToAnchor() {
  if (props.waving) {
    router.push({ hash: '#work' });
  }
  if (props.peeking) {
    router.push({ hash: '#about' });
  }
}

defineExpose({
  leftArmRef,
  rightArmRef,
  svgRef,
  tiffRef
})
</script>

<style lang="scss">
@import '../../styles/variables-sass';

.tc-tiff {
  --svg-width: 16.5rem;

  position: fixed;
  z-index: 10;
  bottom: -1rem;
  left: calc(50% - (var(--svg-width) / 2));
  pointer-events: none;

  @media (width <= $bp-sm) {
    --svg-width: 11.25rem;
  }

  &-svg {
    height: auto;
    width: var(--svg-width);
    transition: 0.3s ease-in-out;
  }

  #head {
    pointer-events: auto;
  }

  #eyes {
    animation: blinky 7s infinite;
    transform-origin: 189.25px 265px;
  }

  #eyeSparkleLeft,
  #eyeSparkleRight {
    scale: var(--eye-scale, 0);
    transition: 0.2s ease-in-out;
  }

  #eyeSparkleLeft {
    transform-origin: 130.48px 256.82px;
  }

  #eyeSparkleRight {
    transform-origin: 247.48px 256.82px;
  }

  #leftArm {
    transform-origin: 155.5px 370px;
    transition: 0.6s ease-out;
  }

  #rightArm {
    transform-origin: 222.5px 370px;
    transition: 0.6s ease-out;
  }

  &.initial {
    #leftArm {
      rotate: 40deg;
    }

    #rightArm {
      rotate: -40deg;
    }
  }

  &.wave-active {
    #leftArm {
      rotate: -20deg;
    }

    #rightArm {
      animation: wave 0.7s linear infinite alternate;
    }
  }

  &.peek-active {
    &:has(#head:hover) {
      .tc-tiff-svg {
        translate: 0 -25%;
      }
    }
  }

  &.wave-active,
  &.peek-active {
    #head {
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }

  &.stare-active {
    #leftArm {
      rotate: -20deg;
    }

    #rightArm {
      rotate: 20deg;
    }

    &:not(:hover) {
      #mouthOpen {
        display: none;
      }
    }

    &:hover {
      --eye-scale: 1;

      #eyes {
        animation: none;
      }

      #mouthOpen {
        display: inline;
      }

      #eyeSparkleLeft,
      #eyeSparkleRight {
        animation: twinkle 0.4s 0.3s infinite;
      }
    }
  }
}

@keyframes blinky {
	0%, 9%, 11%, 19%, 21%, 69%, 71%, 100% { transform: scaleY(1) }
	10%, 20%, 70% { transform: scaleY(0) }
}

@keyframes wave {
  from {
    rotate: -40deg;
  }

  to {
    rotate: -30deg;
  }
}

@keyframes twinkle {
  to {
    scale: 0.8;
  }
}
</style>