// import { visualizer } from 'rollup-plugin-visualizer';

import { configMarkdown } from './config-markdown';
import { configVite } from './config-vite';
import { configVue } from './config-vue';
import { defineConfigWithTheme } from 'vitepress';
import { getNav } from './config-nav';
import { head } from './config-head.js';
import { resolve } from 'node:path';
import { ThemeConfig } from './theme/ThemeConfig';
import { transformHead } from './config-transformHead';

// https://github.com/vuejs/vitepress/blob/8687b86e1e00ae39ff9c8173aef04eb8a9cda0a8/src/node/markdown/markdown.ts#L269
// https://github.com/vuejs/vitepress/blob/8687b86e1e00ae39ff9c8173aef04eb8a9cda0a8/src/node/markdown/markdown.ts#L191
// https://vitepress.dev/reference/site-config

const config = defineConfigWithTheme<ThemeConfig>({
	cleanUrls: true,
	lastUpdated: true, // required for <lastmod> in sitemap
	title: 'Kostiantyn Rudenko, software engineer',
	description:
		'A programmer from Ukraine, currently residing in Slovakia. Unity 3d, compute shaders, computer graphics, vue.js, typescript...',
	sitemap: {
		hostname: 'https://kosrud.github.io',
	},
	head: head,
	transformHead,
	srcDir: './pages',
	outDir: resolve('./docs'),
	vite: configVite,
	vue: configVue,
	markdown: configMarkdown,
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
