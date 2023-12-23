function getNumPxInRem() {
	const rootElement = document.querySelector('html');

	if (!rootElement) {
		console.error('root <html> element not found');
		return 1;
	}

	return parseFloat(window.getComputedStyle(rootElement).fontSize);
}

export function remToPx(rem: number) {
	return rem * getNumPxInRem();
}

export function pxToRem(px: number) {
	return px / getNumPxInRem();
}
