import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Work from './views/Work.vue';

const routes = [
	{ 
		path: '/', 
		component: Home 
	},
	{
		path: '/work/:id',
		component: Work
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
    return new Promise((resolve) => {
      document.querySelector('.tc-container')?.addEventListener('transitionend', () => {
        resolve({ top: 0 })
      });
    });
  },
});

export default router;
