<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	dummy?: boolean;
	class?: string;
	name: string;
	iconUrl?: string;
}>();

// must be wrapped in double quotes, or the image can be missing from build!
// see: https://github.com/vitejs/vite/issues/15444#issuecomment-1870732943
// see: https://vite.dev/guide/assets (section "Inlining SVGs through url()")
const iconUrl = computed(() => `url("${props.iconUrl}")`);
</script>

<template>
	<div
		:class="[
			$style.Card,
			props.dummy ? $style.FeaturesGallery_card___dummy : '',
			props.class,
		]"
	>
		<template v-if="!props.dummy">
			<h3 :class="$style.Feature_title">
				<span
					v-if="props.iconUrl"
					:class="$style.Feature_icon"
				></span>
				{{ props.name }}
			</h3>
			<slot />
		</template>
	</div>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables.less';

@icon-size: 1.5em;
// @icon-size: 1.8em;

.Card {
	flex: 1 1 380rem;
	min-height: 160rem;
	// width: max-content;
	flex-grow: 1;

	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: stretch;

	background: @color-background-card;
	// box-shadow: @shadow;
	@shadow-length: 8rem;
	box-shadow: @shadow-ao,
		0rem -@shadow-length @shadow-length -@shadow-length inset #0008,
		0rem @shadow-length @shadow-length -@shadow-length inset #0005;
	border: 1rem solid @color-border;
	padding: @gap @gap @gap*2 @gap;

	text-align: left;
}

.FeaturesGallery_card___dummy {
	height: 0rem;
	min-height: 0rem;

	border: none;
	padding: 0rem 0rem;
}

.Feature_title {
	margin-bottom: @gap;

	padding-left: calc(@icon-size + @gap);
	font-size: @size-xl;
	font-weight: bold;
	text-align: center;

	position: relative;
}

.Feature_icon {
	display: block;

	position: absolute;
	left: 0rem;
	top: 50%;
	transform: translateY(-50%);

	width: @icon-size;
	aspect-ratio: 1;

	background-image: v-bind('iconUrl');
	background-size: cover;
	background-origin: content-box;
	background-repeat: no-repeat;
	background-position: center;

	// border-radius: 1000rem;
	// box-shadow: -2rem -2rem 2rem 0rem inset #0004,
	//     2rem 2rem 2rem 0rem inset #fff9;
	// padding: @gap*0.5;
}
</style>
