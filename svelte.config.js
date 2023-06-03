import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import toc from '@atomictech/rehype-toc';
import autolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex-svelte';
import remarkMath from 'remark-math';


const tocOptions = {
	cssClasses: {
		toc: 'outline',
		list: 'outline-level',
		listItem: 'outline-item',
		link: 'outline-link',
	},
	placeholder: "TOC",
	customizeTOCItem(tocItem, heading) {
		// tocItem.properties['id'] = "test-id";
		// tocItem.properties['on:click'] = "{() => { console.log('click!')}}";
	},
};


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
			remarkPlugins: [
				remarkMath,
			],
			rehypePlugins: [
				rehypeSlug,
				autolinkHeadings,
				rehypeKatex,
				[toc, tocOptions],
			],
			smartypants: {
				dashes: 'oldschool',
			}
		}),
	],
};

export default config;
