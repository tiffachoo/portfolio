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
		descriptionFeature?: string;
		favourite?: boolean;
		highlights: string[];
		images: { 
			alt: string;
			height?: number;
			placeholder?: string;
			src: string;
			width?: number;
		}[];
		imageFeatureIndex?: number;
		imageThumbnail?: string;
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