import { defineConfigWithTheme } from 'vitepress';
import { ThemeConfig } from './theme/ThemeConfig';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { withMermaid } from 'vitepress-plugin-mermaid';
import vsharp from 'vite-plugin-vsharp';
import markdownItKatex from 'markdown-it-katex';
import markdownItDeflist from 'markdown-it-deflist';
import { resolve } from 'node:path';
import { makeNav } from './nav.js';

const nav = makeNav(
	[
		{ title: 'About me', url: '/about' },
		{
			title: 'For students',
			url: '/students',
			children: [
				{
					title: 'HTML & CSS',
					url: 'html+css',
					children: [
						{
							title: 'CSS selectors',
							url: 'selectors',
						},
						{
							title: 'Design guidelines',
							url: 'guidelines',
						},
						// {
						// 	title: 'Semantic elements',
						// 	url: 'semantic',
						// },
						{
							title: 'Tools',
							url: 'tools',
						},
						{
							title: 'Additional resources',
							url: 'resources',
						},
					],
				},
				{
					title: 'JavaScript',
					url: 'js',
					children: [
						{ title: 'Naming things', url: 'naming' },
						{ title: 'Clean code', url: 'clean' },
						{ title: 'JS cheat sheet', url: 'cheat' },
					],
				},
			],
		},
	],
	'./pages'
);

// https://vitepress.dev/reference/site-config
const config = defineConfigWithTheme<ThemeConfig>({
	title: 'Kostiantyn Rudenko',
	description: 'personal website',
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
			'meta',
			{
				name: 'theme-color',
				content: '#16643d',
			},
		],
	],
	srcDir: './pages',
	vite: {
		plugins: [
			vueJsxPlugin({
				// options are passed on to @vue/babel-plugin-jsx
			}),
			vsharp.default({
				// https://jw-12138.github.io/vite-plugin-vsharp/
			}),
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
		nav,
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
