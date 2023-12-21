import { defineCustomElement } from 'vue';

import GithubStars from './GitHubStars.ce.vue';
const GithubStarsCe = defineCustomElement(GithubStars);

import ContentWrapper from './ContentWrapper.ce.vue';
const ContentWrapperCe = defineCustomElement(ContentWrapper);

export function register() {
	customElements.define('github-stars', GithubStarsCe);
	customElements.define('content-wrapper', ContentWrapperCe);
}

export { GithubStars, GithubStarsCe };
