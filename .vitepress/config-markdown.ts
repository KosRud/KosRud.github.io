import { UserConfig } from 'vitepress';
import markdownItDeflist from 'markdown-it-deflist';
import markdownItKatex from 'markdown-it-katex';

export const configMarkdown: UserConfig['markdown'] = {
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
};
