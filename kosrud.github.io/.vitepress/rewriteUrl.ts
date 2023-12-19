export function rewriteUrl(url: string) {
	return url
		.split('/')
		.map((fragment) => fragment.replace(/^\d+\.\s/, ''))
		.join('/');
}
