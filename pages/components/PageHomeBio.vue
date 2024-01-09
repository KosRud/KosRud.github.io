<script setup lang="ts">
import HyperLink from '@/.vitepress/theme/components/HyperLink.vue';

import { devIcons } from './tsx/devIcons.vue';

import imgPhoto from '@/content/photo-of-me.png?format=jpg&w=300&withoutEnlargement&quality=70';

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

		devIcons.blender,

		devIcons.cython,
		devIcons.lua,
		devIcons.rust,
	],
};
</script>

<template>
	<div :class="$style.Bio">
		<div :class="$style.Bio_titleContainer">
			<div :class="$style.Bio_titleSpacer"></div>
			<h2 :class="$style.Bio_title">Greetings!</h2>
		</div>

		<div :class="$style.Bio_content">
			<img
				alt="Photo of me"
				:class="[$style.Bio_photo, $style.Bio_photo___aside]"
				:src="imgPhoto"
				:style="{ aspectRatio: 300 / 360 }"
			/>
			<div :class="[$style.Bio_text]">
				<p>
					Name's Kostiantyn. I'm a programmer from Ukraine currently
					residing in Bratislava, Slovakia. This website contains an
					overview of my
					<a href="#my-projects">projects</a>, as well as condensed
					highlights from the web development
					<HyperLink
						href="/students/html+css/selectors.html"
						text="seminars"
					/>
					I've been teaching at
					<HyperLink href="https://www.fiit.stuba.sk/en.html"
						><span
							title="Faculty of Informatics and Information Technologies, Slovak University of Technology"
							>FIIT STU</span
						></HyperLink
					>.
				</p>
				<p>
					<img
						alt="Photo of me"
						:class="[$style.Bio_photo, $style.Bio_photo___inside]"
						:src="imgPhoto"
						:style="{ aspectRatio: 300 / 360 }"
					/>
				</p>
				<p></p>
				<table :class="$style.DeviconsTable">
					<tbody>
						<tr>
							<th scope="row">I have experience working with:</th>
							<td>
								<component
									:class="$style.devIcon"
									:is="devIcon"
									v-for="devIcon in devIconGroups.worked"
								/>
							</td>
						</tr>
						<tr>
							<th scope="row">I have dabbled with:</th>
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
@import '@vitepress/theme/style/mixins.less';

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

	th {
		text-align: right;
		padding-right: @gap*1.5;
		vertical-align: top;
		white-space: nowrap;
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
	display: none;
}

.devIcon {
	height: @size*2;
	vertical-align: middle;

	margin: @gap*0.25;
}

/*
	Responsive
\*----------------------------------*/

@media screen and (width < 80em) {
	.Bio_content,
	.Bio_titleContainer {
		margin-right: 0rem;
	}
}

@media screen and (width < 60em) {
	.Bio_content {
		gap: @gap*2;
	}

	.DeviconsTable {
		tr {
			display: flex;
			flex-wrap: wrap;
		}

		th {
			width: 100%;
			text-align: left;
			white-space: normal;
		}
	}

	.Bio_titleSpacer {
		display: none;
	}

	.Bio_title {
		text-align: center;
	}
}

@media screen and (width < 45em) {
	.Bio_text {
		flex: 1 0 100%;
		text-align: left;
	}

	.Bio_photo___aside {
		display: none;
	}

	.Bio_photo___inside {
		display: block;
	}
}
</style>
