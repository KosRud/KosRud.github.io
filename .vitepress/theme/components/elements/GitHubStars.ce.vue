<script setup lang="ts">
import iconGithub from '@pages/components/assets/icons/websites/github/mark-github.svg';
import iconStar from '@pages/components/assets/icons/websites/github/star.svg';
import HyperLink from '../HyperLink.vue';

import { onMounted, ref, Ref } from 'vue';

const props = defineProps<{ repo: string }>();

const stars: Ref<number | null> = ref(0);

type CachedStars = {
	stars?: number;
	timeStamp?: number;
};

async function requestStarCount(repo: string) {
	try {
		const response = await fetch(`https://api.github.com/repos/${repo}`);

		if (!response.ok) {
			return null;
		}

		const json = await response.json();

		const stargazers_count = json.stargazers_count as number | undefined;

		return stargazers_count ?? null;
	} catch {
		return null;
	}
}

onMounted(async () => {
	const cacheName = `github stars: ${props.repo}`;

	function retrieveCache(cacheName: string) {
		const cachedJSON = localStorage.getItem(cacheName);

		if (!cachedJSON) {
			return null;
		}

		try {
			return JSON.parse(cachedJSON) as CachedStars;
		} catch {
			localStorage.removeItem(cacheName);
			return null;
		}
	}

	const cachedStars = retrieveCache(cacheName);

	if (
		cachedStars?.timeStamp != undefined &&
		cachedStars?.stars != undefined
	) {
		const age = (Date.now() - cachedStars.timeStamp) / 1000; // seconds

		const cacheLongevitySuccess = 3600; // 1 hour
		const cacheLongevityFailure = 300; // 5 minutes

		if (
			age < cacheLongevityFailure ||
			(age < cacheLongevitySuccess && cachedStars.stars != -1)
		) {
			stars.value = cachedStars.stars;
			return;
		}
	}

	const retrievedStars = await requestStarCount(props.repo);

	if (!retrievedStars) {
		const newCachedStars: CachedStars = {
			stars: -1,
			timeStamp: Date.now(),
		};

		localStorage.setItem(cacheName, JSON.stringify(newCachedStars));

		return;
	}

	stars.value = retrievedStars;

	const newCachedStars: CachedStars = {
		stars: retrievedStars,
		timeStamp: Date.now(),
	};

	localStorage.setItem(cacheName, JSON.stringify(newCachedStars));
});
</script>

<template>
	<div class="Github">
		<HyperLink
			:href="`https://github.com/${repo}`"
			class="Github_box Github_box___repo"
		>
			<img
				class="Github_icon"
				:src="iconGithub"
				alt="github icon"
				aria-hidden="true"
			/>
			GitHub
		</HyperLink>
		<HyperLink
			:href="`https://github.com/${repo}`"
			class="Github_box Github_box___stars"
			v-if="stars != -1"
		>
			<img
				alt="stars"
				class="Github_icon Github_icon___star"
				:src="iconStar"
			/>
			{{ stars }}
		</HyperLink>
	</div>
</template>

<style lang="less">
@import '@theme/style/variables.less';

@github-color-blue: rgb(9 105 218);
@github-gap: @gap;

//----------------------------------
//	Z-index
//----------------------------------

.Github {
	// establish stacking context
	position: relative;
	z-index: 0;
}

.Github_box___repo {
	z-index: 1;
}

.Github_box___stars {
	z-index: 0;
}

//----------------------------------
//	Main section
//----------------------------------

.Github {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: @github-gap;
}

.Github_box {
	border: @border-width-s solid @color-border;
	border-radius: @gap*0.25;
	background-color: @color-white;

	padding: @gap*0.5 @gap;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: @gap*0.5;

	text-decoration: none;
	&,
	&:link,
	&:visited {
		color: @color-black;
	}
}

.Github_box___repo {
	box-shadow: @shadow-ao, 0rem -2rem 4rem #0002 inset;
	&:hover:not(:active) {
		box-shadow: @shadow-ao, 0rem -2rem 4rem #0004 inset;
	}

	font-weight: bold;

	&:hover {
		&,
		&:visited,
		&:link {
			&:hover {
				color: @github-color-blue;
			}
		}
	}
}

.Github_box___stars {
	gap: @gap*0.125;
	padding-left: @gap*0.5;
	padding-right: @gap*0.5;
	font-weight: normal;

	position: relative;
	&::before,
	&::after {
		content: '';
		position: absolute;

		aspect-ratio: 1;
		right: 100%;
		top: 50%;
		transform-origin: center;
		transform: translateY(-50%) translateX(-50%) rotate(-90deg) scaleY(2)
			scaleX(1);
	}
	&::before {
		border: @github-gap*0.5 solid transparent;
		border-bottom-color: @color-border;
	}

	&::after {
		border: calc(@github-gap*0.5 - @border-width-s) solid transparent;
		border-bottom-color: @color-white;
	}

	&:hover {
		border-color: @github-color-blue;
		&::before {
			border-bottom-color: @github-color-blue;
		}
	}
}

.Github_icon {
	vertical-align: middle;
	height: 1.3em;
}

.Github_icon___star {
	height: 1.2em;
}

//----------------------------------
//	Transitions
//----------------------------------

.Github_box___repo {
	transition: box-shadow @duration linear, background-color @duration-s linear,
		color @duration-s linear;
	&:active {
		transition: background-color @duration-s linear;
	}
}

.Github_box___stars {
	&,
	&::before {
		transition: border-color @duration linear;
	}
}
</style>
