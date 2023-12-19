import { defineConfigWithTheme } from 'vitepress';
import { ThemeConfig } from './theme/ThemeConfig';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { withMermaid } from 'vitepress-plugin-mermaid';
import markdownItKatex from 'markdown-it-katex';
import markdownItDeflist from 'markdown-it-deflist';
import { resolve } from 'node:path';
import { validateNav } from './validateNav.js';

const nav = validateNav(
	[
		{ title: 'About me', url: '/about' },
		{
			title: 'For students',
			url: '/students',
			children: [
				{
					title: 'HTML & CSS',
					url: '/students/html+css',
					children: [
						{
							title: 'Additional resources',
							url: '/students/html+css/resources',
						},
						{
							title: 'CSS selectors',
							url: '/students/html+css/selectors',
						},
						{
							title: 'Design guidelines',
							url: '/students/html+css/guidelines',
						},
						{
							title: 'Semantic elements',
							url: '/students/html+css/semantic',
						},
						{
							title: 'Tools',
							url: '/students/html+css/tools',
						},
					],
				},
				{
					title: 'JavaScript',
					url: '/students/js',
					children: [
						{ title: 'Clean code', url: '/students/js/clean' },
						{ title: 'JS tricks', url: '/students/js/tricks' },
						{ title: 'Naming things', url: '/students/js/naming' },
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
		],
		optimizeDeps: {
			// https://github.com/mermaid-js/mermaid/issues/4320
			include: ['mermaid'],
		},
		resolve: {
			alias: {
				'@': resolve('.'),
				'@vitepress': resolve('./.vitepress'),
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
	},
	themeConfig: {
		nav,
	},
});

export default withMermaid({
	...config,
	mermaid: {
		//
	},
	mermaidPlugin: {
		//
	},
});
