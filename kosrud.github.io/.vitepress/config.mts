import { defineConfigWithTheme } from 'vitepress';
import { ThemeConfig } from './theme/ThemeConfig';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { withMermaid } from 'vitepress-plugin-mermaid';
import { buildNav } from './buildNav';
import markdownItKatex from 'markdown-it-katex';
import markdownItDeflist from 'markdown-it-deflist';
import { resolve } from 'node:path';

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
	rewrites: {
		// This is horrible
		//
		// find a way to define rewrites as arbitrary functions
		//
		// https://vitepress.dev/guide/routing#route-rewrites
		// https://github.com/pillarjs/path-to-regexp
		//
		'/(\\d+)?:a': '/:a',
		'/(\\d+\\.\\s)?:a/(\\d+\\.\\s)?:b': '/:a/:b',
		'/(\\d+\\.\\s)?:a/(\\d+\\.\\s)?:b/(\\d+\\.\\s)?:c': '/:a/:b/:c',
		'/(\\d+\\.\\s)?:a/(\\d+\\.\\s)?:b/(\\d+\\.\\s)?:c/(\\d+\\.\\s)?:d':
			'/:a/:b/:c/:d',
		'/(\\d+\\.\\s)?:a/(\\d+\\.\\s)?:b/(\\d+\\.\\s)?:c/(\\d+\\.\\s)?:d/(\\d+\\.\\s)?:e':
			'/:a/:b/:c/:d/:e',
		'/(\\d+\\.\\s)?:a/(\\d+\\.\\s)?:b/(\\d+\\.\\s)?:c/(\\d+\\.\\s)?:d/(\\d+\\.\\s)?:e/(\\d+\\.\\s)?:f':
			'/:a/:b/:c/:d/:e/:f',
	},
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
		nav: buildNav('./pages', '/') ?? [],
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
