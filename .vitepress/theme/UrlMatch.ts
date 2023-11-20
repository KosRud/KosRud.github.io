export enum UrlMatch {
    full,
    inside,
    no,
}

export const urlMatch = (path: string, url: string) => {
    const extensionRegex = /\.[^.]+$/;

    url = encodeURI(url.replace(extensionRegex, ""));
    path = path.replace(extensionRegex, "");

    if (path == url) {
        return UrlMatch.full;
    }

    if (url == path.slice(0, url.length)) {
        return UrlMatch.inside;
    }

    return UrlMatch.no;
};
