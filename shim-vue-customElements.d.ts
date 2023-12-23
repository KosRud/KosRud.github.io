import GithubStars from './.vitepress/theme/components/elements/GitHubStars.ce.vue';

// register global typings
declare module 'vue' {
	export interface GlobalComponents {
		GithubStars: typeof GithubStars;
	}
}
