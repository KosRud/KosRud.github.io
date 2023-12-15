<script setup lang="ts">
import naturalSort from "javascript-natural-sort";
import { computed } from "vue";

const props = defineProps<{
	icons: { title: string; url: string }[];
	title: string;
	links?: { github?: string; docs?: string };
}>();

const sortedIcons = computed(() =>
	[...props.icons].sort((a, b) => naturalSort(a.title, b.title))
);

function makeHeadingId(title: string) {
	return title.replace(/[&<"]/, "").replace(/\s/g, "-"); // ToDo this is just a placeholder
}
</script>

<template>
	<article :class="$style.Project">
		<h3 :class="$style.Project_title" :id="makeHeadingId(props.title)">
			<span :class="$style.Project_titleText">{{ props.title }}</span>
			<span :class="$style.Project_devIcons">
				<img v-for="icon in sortedIcons" :src="icon.url" :alt="icon.title" :title="icon.title"
					 :class="$style.DevIcon" />
			</span>
		</h3>
		<p>
			<strong :class="$style.Uses_title">uses:</strong>
			<span :class="$style.Uses_item" v-for="icon in sortedIcons">
				{{ icon.title }}
			</span>
		</p>
		<slot />
		<p v-if="links">
			<template v-for="(url, name) in props.links">
				<a :href="url">{{ name }}</a>
				<span :class="$style.Project_linkSeparator"> | </span>
			</template>
		</p>
	</article>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";

.Project_linkSeparator:last-child {
	display: none;
}

.Project .Project_title {
	display: flex;
	gap: @gap*0.5 @gap*2;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
}

.Project_titleText {
	display: block;
}

.Project_devIcons {
	display: flex;
	gap: @gap*0.5;
	flex-wrap: wrap;
}

.DevIcon {
	width: @size*2;
	vertical-align: bottom;
	background-color: @color-background-card;
	border-radius: @inf;

	aspect-ratio: 1;
	object-fit: contain;
	padding: 4%;
	overflow: visible;

	box-shadow: 0rem -4rem 6rem 0px inset #0003, 0rem 4rem 6rem 0px inset #ffff;
}

.Uses_title {
	&::after {
		content: " ";
	}
}

.Uses_item {
	&::after {
		content: ", ";
	}

	&:last-child::after {
		content: ".";
	}
}
</style>
