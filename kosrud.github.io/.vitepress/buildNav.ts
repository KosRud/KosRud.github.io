import { readdirSync, lstatSync } from 'node:fs';
import { join, parse, posix } from 'node:path';
import { NavItem } from 'theme/ThemeConfig';

const pageExtensions = ['.md', '.html'];

const numberedRegex = /^(?<number>\d+)\.\s(?<name>.+)/;

function removeNumber(str: string) {
	return str.replace(/^\d+\.\s/, '');
}

export function buildNav(rootPath: string, navPath: string) {
	const dirContents = readdirSync(rootPath).map((path) =>
		join(rootPath, path)
	);

	const unnumberedNavItems: NavItem[] = [];
	const numberedNavItems: { index: number; navItem: NavItem }[] = [];

	loadFiles({ dirContents, unnumberedNavItems, numberedNavItems, navPath });
	loadDirs({
		dirContents,
		unnumberedNavItems,
		numberedNavItems,
		navPath,
		rootPath,
	});

	numberedNavItems.sort((a, b) => a.index - b.index);

	const navItems = combineNavs({ unnumberedNavItems, numberedNavItems });

	if (!navItems) {
		return null;
	}

	for (const navItem of navItems) {
		navItem.title = removeNumber(navItem.title);
	}

	return navItems;
}

function loadFiles({
	dirContents,
	unnumberedNavItems,
	numberedNavItems,
	navPath,
}: {
	dirContents: string[];
	unnumberedNavItems: NavItem[];
	numberedNavItems: { index: number; navItem: NavItem }[];
	navPath: string;
}) {
	const files = dirContents.filter((path) => {
		if (lstatSync(path).isDirectory()) {
			return false;
		}

		if (!pageExtensions.includes(parse(path).ext)) {
			return false;
		}

		return true;
	});

	for (const path of files) {
		const parsed = parse(path);

		const name = parsed.name;

		if (navPath == '/') {
			if (name == 'Home') {
				throw new Error(
					'It is forbidden to have a file named "Home" in /pages directory, because "index" gets renamed to "Home".'
				);
			}

			if (name == 'index') {
				continue;
			}
		}

		if (name.charAt(0) == '_') {
			continue;
		}

		const match = name.match(numberedRegex);
		if (match?.groups) {
			numberedNavItems.push({
				index: parseInt(match.groups.number),
				navItem: {
					title: match.groups.name,
					url: encodeURI(posix.join(navPath, `${parsed.name}.html`)),
				},
			});
			continue;
		}

		unnumberedNavItems.push({
			title: name,
			url: encodeURI(posix.join(navPath, `${parsed.name}.html`)),
		});
	}
}

function loadDirs({
	dirContents,
	unnumberedNavItems,
	numberedNavItems,
	navPath,
	rootPath,
}: {
	dirContents: string[];
	unnumberedNavItems: NavItem[];
	numberedNavItems: { index: number; navItem: NavItem }[];
	navPath: string;
	rootPath: string;
}) {
	const subDirs = dirContents.filter((path) => lstatSync(path).isDirectory());

	for (const dir of subDirs) {
		const parsed = parse(dir);

		const url = encodeURI(posix.join(navPath, parsed.base));
		if (url == '/public') {
			continue;
		}

		if (parsed.base.charAt(0) == '_') {
			continue;
		}

		const children = buildNav(
			join(rootPath, parsed.base),
			posix.join(navPath, parsed.base)
		);

		if (!children) {
			continue;
		}

		const match = parsed.base.match(numberedRegex);
		if (match?.groups) {
			numberedNavItems.push({
				index: parseInt(match.groups.number),
				navItem: {
					title: match.groups.name,
					url: url,
					children,
				},
			});
			continue;
		}

		unnumberedNavItems.push({
			title: parsed.base,
			url: url,
			children,
		});
	}
}

function combineNavs({
	unnumberedNavItems,
	numberedNavItems,
}: {
	unnumberedNavItems: NavItem[];
	numberedNavItems: { index: number; navItem: NavItem }[];
}) {
	const navItems: NavItem[] = [];
	for (const { navItem } of numberedNavItems) {
		navItems.push(navItem);
	}
	for (const navItem of unnumberedNavItems) {
		navItems.push(navItem);
	}

	if (!navItems.length) {
		return null;
	}

	return navItems;
}
