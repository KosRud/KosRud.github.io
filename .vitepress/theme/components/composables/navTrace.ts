import { computed, Ref } from 'vue';
import { useRoute, useData, Route } from 'vitepress';

import { NavItem, ThemeConfig } from '@theme/ThemeConfig';
import { urlMatch } from './urlMatch';

export function useNavTrace() {
	const route = useRoute();
	const { site, frontmatter } = useData<ThemeConfig>();

	return computed((): NavItem[] => {
		function tracePath(nav: ThemeConfig['nav']): NavItem[] {
			for (const navItem of nav) {
				const match = urlMatch(route.path, navItem.url);

				if (match.exact) {
					return [navItem];
				}

				if (match.inside && navItem.children) {
					return [navItem, ...tracePath(navItem.children)];
				}
			}

			// navItem was not found

			const improvisedNavitem = {
				title: improviseNavTitle(frontmatter, route),
				url: route.path,
			};

			return [improvisedNavitem];
		}

		return [
			{ title: 'Home', url: '/', children: site.value.themeConfig.nav },
			...tracePath(site.value.themeConfig.nav),
		];
	});
}

function improviseNavTitle(
	frontmatter: Ref<Record<string, any>>,
	route: Route
) {
	if (frontmatter.value.title) {
		return frontmatter.value.title;
	}

	const match = route.path.match(/[^\/]+$/); // last portion of url

	if (match) {
		const decoded = decodeURI(match[0]);
		const fileName = decoded.replace(/\.[^.]+$/, ''); // remove extension
		return fileName.charAt(0).toUpperCase() + fileName.slice(1);
	}

	return 'Unknown page';
}
