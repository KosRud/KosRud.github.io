<script setup lang="ts">
import iconGithub from './assets/icons/github/mark-github.svg';
import iconStar from './assets/icons/github/star.svg';
import HyperLink from './HyperLink.vue';

import { onMounted, ref } from 'vue';

const props = defineProps<{ repo: string }>();

const stars = ref(0);

onMounted(async () => {
	function retrieveCache() {
		const cachedJSON = localStorage.getItem('githubStars') ?? '{}';

		console.log(cachedJSON);

		try {
			return JSON.parse(cachedJSON);
		} catch {
			localStorage.setItem('githubStars', '{}');
			return {};
		}
	}

	const cache = retrieveCache();

	const cachedStars = cache[props.repo];

	if (cachedStars !== undefined) {
		const age = (Date.now() - cachedStars.timeStamp) / 1000; // seconds

		const cacheLongevitySuccess = 3600; // 1 hour
		const cacheLongevityFailure = 300; // 5 minutes

		if (
			age < cacheLongevityFailure ||
			(age < cacheLongevitySuccess && cachedStars.numStars != -1)
		) {
			stars.value = cachedStars.numStars;
			console.info('read stars from cache');
			return;
		}
	}

	console.info('updated stars cache');

	const response = await fetch(`https://api.github.com/repos/${props.repo}`);
	const data = await response.json();
	const retrievedStars = data.stargazers_count ?? -1;
	stars.value = retrievedStars;

	cache[props.repo] = {
		numStars: retrievedStars,
		timeStamp: Date.now(),
	};
	localStorage.setItem('githubStars', JSON.stringify(cache));
});
</script>

<template>
	<div :class="$style.Github">
		<HyperLink
			:href="`https://github.com/${repo}`"
			:class="[$style.Github_box, $style.Github_box___repo]"
		>
			<img
				:class="$style.Github_icon"
				:src="iconGithub"
			/>
			GitHub
		</HyperLink>
		<HyperLink
			:href="`https://github.com/${repo}`"
			:class="[$style.Github_box, $style.Github_box___stars]"
			v-if="stars != -1"
		>
			<img
				alt="stars"
				:class="[$style.Github_icon, $style.Github_icon___star]"
				:src="iconStar"
			/>
			{{ stars }}
		</HyperLink>
	</div>
</template>

<style module lang="less">
@import '../../.vitepress/theme/style/variables/index.less';

@color-github-blue: rgb(9 105 218);

.Github {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: @gap;
}

.Github_box {
	border: @border-width-s solid @color-border;
	border-radius: @gap*0.25;

	padding: @gap*0.5 @gap;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: @gap*0.5;

	text-decoration: none !important;
	&,
	&:link,
	&:visited {
		color: @color-black !important;
		&:hover {
			color: @color-github-blue !important;
		}
	}
}

.Github_box___repo {
	box-shadow: @shadow-ao, 0rem -2rem 4rem #0002 inset;
	&:hover:not(:active) {
		box-shadow: @shadow-ao, 0rem -2rem 4rem #0004 inset;
	}

	font-weight: bold !important;
}

.Github_box___stars {
	gap: @gap*0.125;
	padding-left: @gap*0.5;
	padding-right: @gap*0.5;
	font-weight: normal !important;
}

.Github_icon {
	vertical-align: middle;
	height: 1.3em;
}

.Github_icon___star {
	height: 1.2em;
}

/*
	Transitions
\*----------------------------------*/

.Github_box___repo {
	transition: box-shadow @duration linear, background-color @duration-s linear;
	&:active {
		transition: background-color @duration-s linear;
	}
}
</style>
