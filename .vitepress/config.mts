import { defineConfigWithTheme } from 'vitepress';
import { ThemeConfig } from './theme/ThemeConfig';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { imagetools } from 'vite-imagetools';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import svgLoader from 'vite-svg-loader';
// import { visualizer } from 'rollup-plugin-visualizer';
import markdownItKatex from 'markdown-it-katex';
import markdownItDeflist from 'markdown-it-deflist';
import { resolve } from 'node:path';
import { getNav } from './config.nav';

// https://vitepress.dev/reference/site-config
const config = defineConfigWithTheme<ThemeConfig>({
	title: 'Kostiantyn Rudenko, software engineer',
	description:
		'A programmer from Ukraine, currently residing in Slovakia. Unity 3d, compute shaders, computer graphics, vue.js, typescript...',
	sitemap: {
		hostname: 'https://kosrud.github.io',
	},
	head: [
		[
			'link',
			{
				rel: 'icon',
				type: 'image/svg+xml',
				href: '/favicon.svg',
			},
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon/favicon-16x16.png',
			},
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon/favicon-32x32.png',
			},
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '57x57',
				href: '/favicon/apple-touch-icon-57x57.png',
			},
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '60x60',
				href: '/favicon/apple-touch-icon-60x60.png',
			},
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '72x72',
				href: '/favicon/apple-touch-icon-72x72.png',
			},
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '76x76',
				href: '/favicon/apple-touch-icon-76x76.png',
			},
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/favicon/apple-touch-icon-114x114.png',
			},
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/favicon/apple-touch-icon-120x120.png',
			},
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/favicon/apple-touch-icon-144x144.png',
			},
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/favicon/apple-touch-icon-152x152.png',
			},
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/favicon/apple-touch-icon-180x180.png',
			},
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/favicon/android-chrome-192x192.png',
			},
		],
		[
			'link',
			{
				rel: 'mask-icon',
				color: '#16643d',
				href: '/favicon/safari-pinned-tab.svg',
			},
		],
		[
			'link',
			{
				rel: 'manifest',
				href: '/manifest.json',
			},
		],
		[
			'meta',
			{
				name: 'msapplication-TileColor',
				content: '#00aba9',
			},
		],
		[
			'meta',
			{
				name: 'msapplication-config',
				content: '/favicon/browserconfig.xml',
			},
		],
		[
			'meta',
			{
				name: 'theme-color',
				content: '#16643d',
			},
		],
		[
			'meta',
			{
				name: 'google-site-verification',
				content: 'nxt5ELdfTEfN5XdluDKwhqpad_QAqlv8Ps-9BrDxytQ',
			},
		],
	],
	transformHead({ assets }) {
		const preloadFonts = assets.filter(
			(file) =>
				/OpenSans-Regular\.latin\.\w+\.woff2/.test(file) ||
				/OpenSans-Bold\.latin\.\w+\.woff2/.test(file) ||
				/OpenSans-Italic\.latin\.\w+\.woff2/.test(file) ||
				/OpenSans-Regular-ext\.latin\.\w+\.woff2/.test(file) ||
				/OpenSans-Bold-ext\.latin\.\w+\.woff2/.test(file) ||
				/OpenSans-Italic-ext\.latin\.\w+\.woff2/.test(file) ||
				/IosevkaAile-Regular\.latin\.\w+\.woff2/.test(file) ||
				/IosevkaAile-Bold\.latin\.\w+\.woff2/.test(file)
		);
		return preloadFonts.map((fontFile) => [
			'link',
			{
				rel: 'preload',
				href: fontFile,
				as: 'font',
				type: 'font/woff2',
				crossorigin: '',
			},
		]);
	},
	srcDir: './pages',
	outDir: resolve('./docs'),
	vite: {
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
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => {
					if (tag.includes('-')) {
						return true;
					}

					const katexElements = [
						'mi',
						'mrow',
						'annotation',
						'semantics',
						'math',
					];

					if (katexElements.includes(tag)) {
						return true;
					}

					return false;
				},
			},
		},
	},
	markdown: {
		container: {
			tipLabel: 'References',
			infoLabel: 'Note',
			warningLabel: 'Warning',
		},
		config: (md) => {
			md.use(markdownItKatex);
			md.use(markdownItDeflist);
		},
		lineNumbers: false,
		theme: 'github-light',
		// codeTransformers: [
		// 	// We use `[!!code` in demo to prevent transformation, here we revert it back.
		// 	{
		// 		postprocess(code) {
		// 			return code.replace(/.+/g, '');
		// 		},
		// 	},
		// ],
	},
	themeConfig: {
		nav: getNav(),
	},
});

export default config;

// export default withMermaid({
// 	...config,
// 	mermaid: {
// 		//
// 	},
// 	mermaidPlugin: {
// 		//
// 	},
// });
