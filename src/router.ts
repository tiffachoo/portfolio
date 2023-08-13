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
	scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
			// TOFIX: hacky setTimeout to prevent scroll jump before transition
			// 400ms is equivalent to the transition duration
      setTimeout(() => {
				if (savedPosition) {
					resolve(savedPosition);
				} else {
					resolve({ top: 0 })
				}
      }, 400);
    });
  },
});

export default router;
