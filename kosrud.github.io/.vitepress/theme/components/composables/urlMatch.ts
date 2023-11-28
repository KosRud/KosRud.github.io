export interface UrlMatch {
    soft: boolean;
    exact: boolean;
}

/**
 * Checks if current url is same or inside matched url.
 * @param current
 * @param matched
 * @returns
 */
export const urlMatch = (current: string, matched: string): UrlMatch => {
    const extensionRegex = /\.[^.]+$/;

    matched = encodeURI(matched.replace(extensionRegex, ""));
    current = current.replace(extensionRegex, "");

    const result: UrlMatch = { soft: false, exact: false };

    if (current == matched) {
        result.exact = true;
    }

    if (matched == current.slice(0, matched.length)) {
        result.soft = true;
    }

    return result;
};
