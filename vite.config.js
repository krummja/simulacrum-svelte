import { sveltekit } from '@sveltejs/kit/vite';
const config = {
    build: {
        sourcemap: 'hidden',
    },
    plugins: [sveltekit()]
};
export default config;
