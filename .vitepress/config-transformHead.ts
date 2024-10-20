import { UserConfig } from 'vitepress';

export const transformHead: UserConfig['transformHead'] =
	function transformHead({ assets }) {
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
	};
