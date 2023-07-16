import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';

export const useWorkStore = defineStore('work', () => {
	interface Work {
		id: string;
		title: string;
		credits?: string;
		date: string;
		description: string;
		images: string[];
		imageFeatureIndex: number;
		repo?: string;
		skills: string[];
		url?: string;
	}

	const works: Ref<Work[]> = ref([]);
	function setWork(e: Work[]) {
		works.value = e
	}

	return { works, setWork }
})