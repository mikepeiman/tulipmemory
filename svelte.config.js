import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import './src/global.scss';` // Optional: for global styles
		}
	}),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		files: {
			assets: 'src/static'
		},
		alias: {
			"@/*": "./src/lib/*",
			"$images": "./src/lib/assets/images",
			"$images/*": "./src/lib/assets/images/*",
			"$utils": "./src/lib/utils",
			"$utils/*": "./src/lib/utils/*",
			"$stores": "./src/lib/stores",
			"$stores/*": "./src/lib/stores/*",
			"$components": "./src/lib/components",
			"$components/*": "./src/lib/components/*",
		}
	},

};

export default config;
