export enum UrlMatch {
    full,
    inside,
    no,
}

/**
 * Checks if current url is same or inside matched url.
 * @param current
 * @param matched
 * @returns
 */
export const urlMatch = (current: string, matched: string) => {
    const extensionRegex = /\.[^.]+$/;

    matched = encodeURI(matched.replace(extensionRegex, ""));
    current = current.replace(extensionRegex, "");

    if (current == matched) {
        return UrlMatch.full;
    }

    if (matched == current.slice(0, matched.length)) {
        return UrlMatch.inside;
    }

    return UrlMatch.no;
};
