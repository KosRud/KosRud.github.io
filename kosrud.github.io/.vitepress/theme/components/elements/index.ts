import { defineCustomElement } from 'vue';

import GithubStars from './GitHubStars.ce.vue';
const GithubStarsCe = defineCustomElement(GithubStars);

export function register() {
	customElements.define('github-stars', GithubStarsCe);
}

export { GithubStars, GithubStarsCe };
