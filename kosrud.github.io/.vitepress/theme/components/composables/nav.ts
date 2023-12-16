import { NavItem } from "theme/ThemeConfig";

export function findFirstChildPage(navItem: NavItem) {
	if (navItem.url == "/") {
		return navItem;
	}

	if (!navItem.children) {
		return navItem;
	}

	if (!navItem.children[0]) {
		console.error("Navitem has an empty children list:", navItem);
		return { title: "Home", url: "/" };
	}

	return findFirstChildPage(navItem.children[0]);
}
