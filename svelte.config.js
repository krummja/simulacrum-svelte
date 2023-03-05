import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
// import { remark } from 'remark';
// import toc from 'remark-toc';
import toc from '@atomictech/rehype-toc';
import autolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
// import rehypeKatex from 'rehype-katex';
import rehypeKatex from 'rehype-katex-svelte';
import remarkMath from 'remark-math';
import rehypeDocument from 'rehype-document';


const tocOptions = {
	cssClasses: {
		toc: 'outline',
		list: 'outline-level',
		listItem: 'outline-item',
		link: 'outline-link'
	},
	placeholder: "TOC",
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
				// rehypeParse,
				rehypeKatex,
				// rehypeStringify,
				[toc, tocOptions],
			],
			smartypants: {
				dashes: 'oldschool',
			}
		}),
	],
};

export default config;
