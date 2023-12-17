export interface UrlMatch {
	inside: boolean;
	exact: boolean;
}

/**
 * Checks if current url is same or inside matched url.
 * @param target
 * @param url
 * @returns
 */
export const urlMatch = (url: string, target: string): UrlMatch => {
	const extensionRegex = /\.[^.]+$/;

	url = encodeURI(url.replace(extensionRegex, ''));
	target = target.replace(extensionRegex, '');

	const result: UrlMatch = { inside: false, exact: false };

	if (target == url) {
		result.exact = true;
	}

	if (url.slice(0, target.length) == target) {
		result.inside = true;
	}

	return result;
};
