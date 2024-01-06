<script setup lang="ts">
import { useDarkModeDetect } from './composables/darkMode';
import { findFirstChildPage } from './composables/nav';
import { useNavTrace } from './composables/navTrace';

const darkMode = useDarkModeDetect();

const navTrace = useNavTrace();
</script>

<template>
	<div
		:tabindex="-1"
		:class="[$style.YouAreHere, darkMode ? $style.YouAreHere___dark : '']"
	>
		<h2 :class="$style.YouAreHere_title">You are here:</h2>
		<template v-for="(navItem, id) in navTrace">
			<a
				:aria-current="id == navTrace.length - 1 ? 'page' : undefined"
				:href="findFirstChildPage(navItem).url"
			>
				{{ navItem?.title }}
			</a>
			<span :class="$style.NavTrace_separator">/</span>
		</template>
	</div>
</template>

<style module lang="less">
@import '@theme/style/variables.less';
@import '@theme/style/mixins.less';

.YouAreHere {
	display: flex;
	flex-wrap: wrap;

	a {
		font-weight: bold;
	}
}

.YouAreHere___dark {
	font-weight: normal;

	.DarkMode();
}

.YouAreHere_title {
	margin-right: @gap*0.5;

	font-weight: bold;
}

.NavTrace_separator {
	margin-left: @gap*0.25;
	margin-right: @gap*0.25;

	&:last-child {
		display: none;
	}
}
</style>
