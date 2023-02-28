import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mdLayout = path.join(__dirname, './src/lib/components/Layout.svelte');

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
			layout: {
				// garden: mdLayout,
			},
		}),
	],
};

export default config;
