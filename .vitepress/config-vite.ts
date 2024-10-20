import { imagetools } from 'vite-imagetools';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import { resolve } from 'node:path';
import { UserConfig } from 'vitepress';
import svgLoader from 'vite-svg-loader';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';

export const configVite: UserConfig['vite'] = {
	// build: {
	// 	rollupOptions: {
	// 		output: {
	// 			manualChunks(id) {
	// 				console.log(
	// 					'\n\n------- manual chunks ------\n\n ',
	// 					id,
	// 					'\n\n'
	// 				);
	// 			},
	// 		},
	// 	},
	// },
	plugins: [
		vueJsxPlugin({
			// options are passed on to @vue/babel-plugin-jsx
		}),
		// ViteImageOptimizer({
		// 	// https://www.npmjs.com/package/vite-plugin-image-optimizer
		// 	png: { quality: 20 },
		// 	jpg: { quality: 20 },
		// 	gif: { colors: 64 },
		// }),
		imagetools(),
		// visualizer(),
		svgLoader({
			// https://github.com/jpkleemans/vite-svg-loader
			defaultImport: 'url',
			svgo: true,
			svgoConfig: {
				multipass: true,
				floatPrecision: 1,
			},
		}),
		optimizeCssModules(),
	],
	optimizeDeps: {
		// https://github.com/mermaid-js/mermaid/issues/4320
		include: ['mermaid'],
	},
	resolve: {
		alias: {
			'@': resolve('.'),
			'@vitepress': resolve('./.vitepress'),
			'@theme': resolve('./.vitepress/theme'),
			'@pages': resolve('./pages'),
		},
	},
};
