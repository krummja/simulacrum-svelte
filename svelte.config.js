import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	extensions: [
		'.svelte',
		'.md',
	],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
		}),
	],
};

export default config;
