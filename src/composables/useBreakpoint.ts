import { onMounted, onUnmounted, ref } from 'vue';

type Breakpoints = 'sm' | 'md' | 'lg';

const breakpointMap = {
  sm: '575px',
  md: '767px',
  lg: '991px',
};

export const useBreakpoint = (breakpoint: Breakpoints) => {
  const isBreakpoint = ref(false);
  const breakpointValue = breakpointMap[breakpoint] ?? breakpointMap.md;

  const handleResize = (e: MediaQueryListEvent) => {
    isBreakpoint.value = e.matches    
  };

  onMounted(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpointValue})`);
    isBreakpoint.value = mediaQuery.matches;
    
    mediaQuery.addEventListener('change', handleResize);
  });

  onUnmounted(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpointValue})`);
    mediaQuery.removeEventListener('change', handleResize);
  });

  return {
    isBreakpoint
  }
};
