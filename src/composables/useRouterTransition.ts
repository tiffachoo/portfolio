import { ref } from 'vue';

const isTransitionComplete = ref(false);

/**
 * Composable for ensuring router-view transition is complete 
 * before initializing gsap scroll trigger
 */
export const useRouterTransition = () => {
  const setIsTransitionComplete = (value: boolean) => {
    isTransitionComplete.value = value;
  };

  return {
    isTransitionComplete,
    setIsTransitionComplete,
  };
};
