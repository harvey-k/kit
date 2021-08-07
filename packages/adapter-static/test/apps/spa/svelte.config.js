import adapter from '../../../index.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
		prerender: {
			enabled: false
		},
		ssr: false,
		target: '#svelte'
	}
};

export default config;
