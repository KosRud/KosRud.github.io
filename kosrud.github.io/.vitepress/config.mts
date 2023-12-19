import { defineConfigWithTheme } from 'vitepress';
import { ThemeConfig } from './theme/ThemeConfig';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { withMermaid } from 'vitepress-plugin-mermaid';
import { buildNav } from './buildNav';
import markdownItKatex from 'markdown-it-katex';

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
