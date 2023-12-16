type Block = "start" | "center" | "end" | "nearest";

export function scrollIntoViewIfNeeded(element: Element, block: Block) {
	if (isObscured(element)) {
		element.scrollIntoView({ block });
	}
}

const epsilon = 0.5;
function less(a: number, b: number) {
	return b - a > epsilon;
}
function greater(a: number, b: number) {
	return a - b > epsilon;
}

function isObscured(element: Element, by?: Element) {
	if (!by) {
		if (!element.parentElement) {
			return false;
		}
		by = element.parentElement;
	}

	const byRect = by.getBoundingClientRect();
	const rect = element.getBoundingClientRect();

	if (
		less(rect.left, byRect.left) ||
		greater(rect.right, byRect.right) ||
		less(rect.top, byRect.top) ||
		greater(rect.bottom, byRect.bottom)
	) {
		return true;
	}

	if (by.parentElement) {
		return isObscured(element, by.parentElement);
	}

	return false;
}
