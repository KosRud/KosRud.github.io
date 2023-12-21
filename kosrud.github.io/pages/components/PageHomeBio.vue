<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useResizeObserver } from '@vitepress/theme/components/composables/resizeObserver';
import { pxToRem } from '@vitepress/theme/components/composables/unitConverter';
import { devIcons } from './tsx/devIcons';

const adaptiveStage = ref(0);
const isNarrowThresholdsRem = [1100, 900, 700];
const containerElement: Ref<Element | null> = ref(null);

useResizeObserver(
	() => {
		if (!containerElement.value) {
			console.error('Homepage bio container element not found');
			return;
		}

		const width = pxToRem(containerElement.value.clientWidth);

		adaptiveStage.value = -1;
		isNarrowThresholdsRem.forEach((threshold, id) => {
			if (width < threshold) {
				adaptiveStage.value = id;
			}
		});
	},
	() => containerElement.value,
	true
);

const devIconGroups = {
	worked: [
		devIcons.unity,
		devIcons.csharp,
		devIcons.hlsl,

		devIcons.vitepress,
		devIcons.vue,
		devIcons.pinia,

		devIcons.javascript,
		devIcons.typescript,

		devIcons.html5,
		devIcons.css3,
		devIcons.less,

		devIcons.immutableJs,
		devIcons.typedoc,
		devIcons.nodeJs,

		devIcons.python,

		devIcons.cpp,

		devIcons.doxygen,
		devIcons.git,
	],
	dabbled: [
		devIcons.react,
		devIcons.vite,
		devIcons.cypress,

		devIcons.neutralino,

		devIcons.redis,
		devIcons.postgresql,
		devIcons.mongodb,

		devIcons.fastify,
		devIcons.deno,

		devIcons.cython,
		devIcons.lua,
		devIcons.rust,
	],
};
</script>

<template>
	<div
		:class="{
			[$style.Bio]: true,
			[$style.Bio___adaptive_0]: adaptiveStage >= 0,
			[$style.Bio___adaptive_1]: adaptiveStage >= 1,
			[$style.Bio___adaptive_2]: adaptiveStage >= 2,
		}"
		:ref="(element) => { containerElement = element as Element }"
	>
		<div :class="$style.Bio_titleContainer">
			<div :class="$style.Bio_titleSpacer"></div>
			<h2 :class="$style.Bio_title">Greetings!</h2>
		</div>

		<div :class="$style.Bio_content">
			<img
				alt="Photo of me"
				:class="[$style.Bio_photo, $style.Bio_photo___aside]"
				src="/_assets/photo.png"
				v-if="adaptiveStage < 2"
			/>
			<div :class="[$style.Bio_text]">
				<p>
					Name's Kostiantyn. I'm a programmer from Ukraine currently
					residing in Bratislava, Slovakia. This website contains an
					overview of my <a href="#my-projects">projects</a>, as well
					as an assortment of condensed
					<a href="/For students/HTML & CSS/CSS selectors.html"
						>highlights</a
					>
					from the web development seminars I've been teaching at
					<a href="https://www.fiit.stuba.sk/en.html"
						><span
							title="Faculty of Informatics and Information Technologies, Slovak University of Technology"
							>FIIT STU</span
						></a
					>.
				</p>
				<p>
					<img
						alt="Photo of me"
						:class="[$style.Bio_photo, $style.Bio_photo___inside]"
						src="/_assets/photo.png"
						v-if="adaptiveStage >= 2"
					/>
				</p>
				<p></p>
				<table :class="$style.DeviconsTable">
					<tbody>
						<tr>
							<td>I have experience working with:</td>
							<td>
								<component
									:class="$style.devIcon"
									:is="devIcon"
									v-for="devIcon in devIconGroups.worked"
								/>
							</td>
						</tr>
						<tr>
							<td>I have dabbled with:</td>
							<td>
								<component
									:class="$style.devIcon"
									:is="devIcon"
									v-for="devIcon in devIconGroups.dabbled"
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables.less';
@import '@vitepress/theme/style/mixins/index.less';

@Bio_photo-width: 130rem;
@Bio_photo-to-content-gap: @gap * 3;

.Bio {
	font-size: @size;

	h2 {
		font-size: @size-xl;
		font-weight: bold;
	}

	h1,
	h2,
	h3,
	h4,
	table,
	p {
		margin-bottom: @gap*1.5;
	}
}

.DeviconsTable {
	line-height: .devIcon() [ height];

	td {
		&:first-child {
			text-align: right;
			padding-right: @gap*1.5;
			vertical-align: top;
			white-space: nowrap;
		}
	}

	td {
		padding-bottom: @gap*0.5;
		padding-top: @gap*0.5;
	}
}

.Bio_title {
	flex: 1 1 600rem;

	max-width: @content-width;
	text-align: left;
}

.Bio_content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
	gap: 0rem @Bio_photo-to-content-gap;
	justify-content: center;
	align-items: start;

	margin-right: @Bio_photo-width + @Bio_photo-to-content-gap;
}

.Bio_text {
	.Content();
	flex: 1 1 400rem;

	font-size: @size-l;
	text-align: justify;
}

.Bio_titleContainer {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-right: @Bio_photo-width + @Bio_photo-to-content-gap;
}

.Bio_titleSpacer {
	flex: 0 0 @Bio_photo-width + @Bio_photo-to-content-gap;
	height: 0rem;
}

.Bio_photo {
	box-shadow: @shadow;
	object-fit: cover;
	border: @border-width-l solid white;
}

.Bio_photo___aside {
	flex: 0 1 @Bio_photo-width;
	border-radius: 50% @gap @gap 30% / 50% @gap @gap 50%;

	margin-top: @size-l*0.3;
	margin-bottom: @gap;
}

.Bio_photo___inside {
	border-radius: @gap @gap 30% 30% / @gap @gap 50% 50%;

	height: 160rem;

	margin-left: auto;
	margin-right: auto;
	display: block;
}

.devIcon {
	height: @size*2;
	vertical-align: middle;

	margin: @gap*0.25;
}

/*
	Responsive
\*----------------------------------*/

.Bio___adaptive_0 {
	.Bio_content,
	.Bio_titleContainer {
		margin-right: 0rem;
	}
}

.Bio___adaptive_1 {
	.Bio_content {
		gap: @gap*2;
	}

	.DeviconsTable {
		td {
			white-space: wrap;

			&:first-child {
				width: 100%;
				text-align: left;
			}
		}

		tr {
			display: flex;
			flex-wrap: wrap;
		}
	}

	.Bio_titleSpacer {
		display: none;
	}

	.Bio_title {
		text-align: center;
	}
}

.Bio___adaptive_2 {
	.Bio_text {
		flex: 1 0 100%;
		text-align: left;
	}
}
</style>
