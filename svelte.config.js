import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		routes: (filepath) => ![/\.test\.ts$/, /(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/]
			.some(regex => regex.test(filepath))
	}
};

export default config;
