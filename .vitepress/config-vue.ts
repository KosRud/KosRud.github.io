import { UserConfig } from 'vitepress';

export const configVue: UserConfig['vue'] = {
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
};
