import { createApp } from 'vue';
import router from './router';
import './styles/index.scss';
import App from './App.vue';

createApp(App)
	.use(router)
	.mount('#app');
