<script setup lang="ts">
import HyperLink from '@/.vitepress/theme/components/HyperLink.vue';

const props = defineProps<{
	iconSrc: string;
	iconAlt: string;
	href: string;
	name: string;
	sameTab?: boolean;
}>();
</script>

<template>
	<div>
		<img
			:class="$style.Icon"
			:src="props.iconSrc"
			:alt="props.iconAlt"
			aria-hidden="true"
		/>
		<HyperLink
			:class="$style.Link"
			:href="props.href"
			:same-tab="props.sameTab"
			>{{ props.name }}</HyperLink
		>
	</div>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables.less';

.Icon {
	margin-right: @gap*0.5;
	height: @size-l*1.2;
	vertical-align: middle;
}
</style>
