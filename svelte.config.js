import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
// import { remark } from 'remark';
// import toc from 'remark-toc';
import toc from '@jsdevtools/rehype-toc';
import autolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';


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
			// remarkPlugins: [[toc, {heading: 'contents'}]],
			rehypePlugins: [
				rehypeSlug,
				autolinkHeadings,
				// rehypeParse,
				rehypeStringify,
				[
					toc, {
						cssClasses: {
							toc: 'outline'
						},
					}
				],
			],
			smartypants: {
				dashes: 'oldschool',
			}
		}),
	],
};

export default config;
