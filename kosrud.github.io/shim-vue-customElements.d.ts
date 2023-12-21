import GithubStars from './.vitepress/theme/components/elements/GitHubStars.ce.vue';
import ContentWrapper from './.vitepress/theme/components/elements/ContentWrapper.ce.vue';

// register global typings
declare module 'vue' {
	export interface GlobalComponents {
		GithubStars: typeof GithubStars;
		ContentWrapper: typeof ContentWrapper;
	}
}
