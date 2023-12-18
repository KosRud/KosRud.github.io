<script setup lang="ts">
import iconGithub from './assets/icons/github/mark-github.svg';
import iconStar from './assets/icons/github/star.svg';

import { onMounted, ref } from 'vue';

const stars = ref(0);

onMounted(async () => {
	// const response = await fetch(
	// 	'https://api.github.com/repos/KosRud/DQ-skinning-for-Unity'
	// );
	// const data = await response.json();
	// stars.value = data.stargazers_count;

	stars.value = 187;
});
</script>

<template>
	<div :class="$style.Github">
		<a
			href="https://github.com/KosRud/DQ-skinning-for-Unity"
			:class="[$style.Github_box, $style.Github_box___repo]"
		>
			<img
				:class="$style.Github_icon"
				:src="iconGithub"
			/>
			GitHub
		</a>
		<div :class="[$style.Github_box, $style.Github_box___stars]">
			<img
				:class="[$style.Github_icon, $style.Github_icon___star]"
				:src="iconStar"
			/>
			{{ stars }}
		</div>
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
}

.Github_box___repo {
	font-weight: bold;

	box-shadow: @shadow-ao, 0rem -2rem 4rem #0002 inset;
	&:hover:not(:active) {
		box-shadow: @shadow-ao, 0rem -2rem 4rem #0004 inset;
	}

	text-decoration: none;
	&,
	&:link,
	&:visited {
		color: @color-black;
		&:hover {
			color: @color-github-blue;
		}
	}
}

.Github_box___stars {
	gap: @gap*0.125;
	padding-left: @gap*0.5;
	padding-right: @gap*0.5;
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

.Github_box,
Github_box___repo {
	transition: box-shadow @duration linear, background-color @duration-s linear;
	&:active {
		transition: background-color @duration-s linear;
	}
}
</style>
