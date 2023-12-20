import { readdirSync, lstatSync } from 'node:fs';
import { parse, posix } from 'node:path';
import { NavItem } from '@theme/ThemeConfig';

const pageExtensions = ['.md', '.html'];

type NavItemTemplate = { url: string; children?: NavItemTemplate[] };

export function makeNav(nav: NavItem[], base: string) {
	return validateNav(propagateUrls(nav, ''), base);
}

function propagateUrls(nav: NavItem[], base: string) {
	return nav.map((item) => {
		const copy = { ...item };

		copy.url = posix.join(base, copy.url);

		if (!copy.children) {
			return copy;
		}

		copy.children = propagateUrls(copy.children, copy.url);

		return copy;
	});
}

function validateNav(nav: NavItem[], rootPath: string) {
	return validateNavTemplate(
		nav,
		rootPath,
		'/',
		buildNavTemplate(rootPath, '/') ?? []
	);
}

function validateNavTemplate(
	nav: NavItem[],
	rootPath: string,
	url: string,
	template: NavItemTemplate[]
) {
	// return nav;

	const items = [...nav];

	for (const templateItem of template) {
		const id = items.findIndex((item) => item.url == templateItem.url);

		if (id == -1) {
			throw new Error(
				`File not referenced in the nav: "${templateItem.url}"`
			);
		}

		const item = items.splice(id, 1)[0];

		if (!templateItem.children) {
			continue;
		}

		validateNavTemplate(
			item.children ?? [],
			rootPath,
			item.url,
			templateItem.children
		);
	}

	if (items[0]) {
		throw new Error(
			`Nav item references nonexistent file: ${items[0].url}`
		);
	}

	return nav;
}

function buildNavTemplate(root: string, url: string) {
	const dirContents = readdirSync(posix.join(root, url));

	const navTemplates: NavItemTemplate[] = [];

	for (const item of dirContents) {
		const itemPath = posix.join(root, url, item);
		const itemParsed = parse(itemPath);
		const itemUrl = posix.join(url, itemParsed.name);

		if (itemParsed.base.charAt(0) == '_') {
			continue;
		}

		if (url == '/' && itemParsed.name == 'index') {
			continue;
		}

		if (lstatSync(itemPath).isDirectory()) {
			// directory

			const children = buildNavTemplate(
				root,
				posix.join(url, itemParsed.base)
			);

			if (children?.length) {
				navTemplates.push({ url: itemUrl, children });
			}
		} else {
			// file

			if (!pageExtensions.includes(itemParsed.ext)) {
				continue;
			}

			navTemplates.push({ url: itemUrl });
		}
	}

	if (navTemplates.length) {
		return navTemplates;
	}

	return null;
}
