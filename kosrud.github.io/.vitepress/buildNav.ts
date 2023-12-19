import { readdirSync, lstatSync } from 'node:fs';
import { join, parse, posix } from 'node:path';
import { NavItem } from 'theme/ThemeConfig';

const pageExtensions = ['.md', '.html'];

export function buildNav(rootPath: string, navPath: string) {
	const dirContents = readdirSync(rootPath).map((path) =>
		join(rootPath, path)
	);
	const subDirs = dirContents.filter((path) => lstatSync(path).isDirectory());
	const files = dirContents.filter((path) => {
		if (lstatSync(path).isDirectory()) {
			return false;
		}

		if (!pageExtensions.includes(parse(path).ext)) {
			return false;
		}

		return true;
	});

	const navItems: NavItem[] = [];

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

		navItems.push({
			title: name,
			url: posix.join(navPath, `${parsed.name}.html`),
		});
	}

	for (const dir of subDirs) {
		const parsed = parse(dir);

		const url = posix.join(navPath, parsed.base);
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

		if (children) {
			navItems.push({
				title: parsed.base,
				url,
				children,
			});
		}
	}

	if (!navItems.length) {
		return null;
	}

	if (navPath == '/') {
		// ensure "Home" is the first entry

		const homeIndex = navItems.findIndex(
			(navItem) => navItem.title == 'Home'
		);

		if (homeIndex != -1) {
			return [navItems[homeIndex]].concat(
				navItems.filter((_, id) => id != homeIndex)
			);
		}
	}

	return navItems;
}
