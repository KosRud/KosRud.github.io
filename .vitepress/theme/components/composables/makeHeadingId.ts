export function makeHeadingId(title: string) {
	return (
		title
			// prevent XSS when used as attribute
			.replace(/["']/, '')
			// id can't contain whitespace
			.replace(/\s/g, '-')
			// lowercase
			.toLowerCase()
			// leave only whitelisted characters
			.replace(/[^a-z\d_-]/, '')
	);
}
