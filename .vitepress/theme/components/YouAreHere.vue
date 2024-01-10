<script setup lang="ts">
import { findFirstChildPage } from './composables/nav';
import { useNavTrace } from './composables/navTrace';

const navTrace = useNavTrace();
</script>

<template>
	<div
		:tabindex="-1"
		:class="$style.YouAreHere"
	>
		<h2 :class="$style.YouAreHere_title">You are here:</h2>
		<template v-for="(navItem, id) in navTrace">
			<a
				:aria-current="id == navTrace.length - 1 ? 'page' : undefined"
				:href="findFirstChildPage(navItem).url"
			>
				{{ navItem?.title }}
			</a>
			<span :class="$style.NavTrace_separator">&nbsp;/ </span>
		</template>
	</div>
</template>

<style module lang="less">
@import '@theme/style/variables.less';
@import '@theme/style/mixins.less';

.YouAreHere {
	a {
		font-weight: bold;
	}
}

.YouAreHere_title {
	display: inline;
	margin-right: @gap*0.5;

	font-weight: bold;
}

.NavTrace_separator {
	&:last-child {
		display: none;
	}
}
</style>
