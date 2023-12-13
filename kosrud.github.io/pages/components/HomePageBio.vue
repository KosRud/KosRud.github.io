<script setup lang="ts">
import { Ref, ref } from "vue";
import { useResizeObserver } from "../../.vitepress/theme/components/composables/resizeObserver";
import { pxToRem } from "../../.vitepress/theme/components/composables/unitConverter";

const adaptiveStage = ref(0);
const isNarrowThresholdsRem = [1100, 900, 700];
const containerElement: Ref<Element | null> = ref(null);

useResizeObserver(
	() => {
		if (!containerElement.value) {
			console.error("Homepage bio container element not found");
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

const devIcons = {
	worked: [
		{ url: "/assets/icons/dev/unity/icon.svg" },
		{ url: "/assets/icons/dev/csharp/icon.svg" },
		{ url: "/assets/icons/dev/hlsl/icon.svg" },

		{ url: "/assets/icons/dev/vue/icon.svg" },
		{ url: "/assets/icons/dev/pinia/icon.svg" },

		{ url: "/assets/icons/dev/javascript/icon.svg" },
		{ url: "/assets/icons/dev/typescript/icon.svg" },

		{ url: "/assets/icons/dev/html5/icon.svg" },
		{ url: "/assets/icons/dev/css3/icon.svg" },
		{ url: "/assets/icons/dev/less/icon.svg" },

		{ url: "/assets/icons/dev/immutable/icon.svg" },
		{ url: "/assets/icons/dev/typedoc/icon.png" },
		{ url: "/assets/icons/dev/node/icon.svg" },

		{ url: "/assets/icons/dev/python/icon.svg" },

		{ url: "/assets/icons/dev/cpp/icon.svg" },

		{ url: "/assets/icons/dev/doxygen/icon.png" },
		{ url: "/assets/icons/dev/git/icon.svg" },
	],
	dabbled: [
		{ url: "/assets/icons/dev/react/icon.svg" },
		{ url: "/assets/icons/dev/redis/icon.svg" },
		{ url: "/assets/icons/dev/postgresql/icon.svg" },
		{ url: "/assets/icons/dev/mongodb/icon.svg" },
		{ url: "/assets/icons/dev/cypress/icon.svg" },
		{ url: "/assets/icons/dev/fastify/icon.svg" },
		{ url: "/assets/icons/dev/deno/icon.svg" },
		{ url: "/assets/icons/dev/cython/icon.svg" },
		{ url: "/assets/icons/dev/lua/icon.svg" },
		{ url: "/assets/icons/dev/rust/icon.svg" },
	],
};
</script>

<template>
	<div :class="{
		[$style.Bio]: true,
		[$style.Bio___adaptive_0]: adaptiveStage >= 0,
		[$style.Bio___adaptive_1]: adaptiveStage >= 1,
		[$style.Bio___adaptive_2]: adaptiveStage >= 2,
	}" :ref="(element) => { containerElement = element as Element }">
		<div :class="$style.Bio_titleContainer">
			<div :class="$style.Bio_titleSpacer"></div>
			<h2 :class="$style.Bio_title">Greetings!</h2>
		</div>

		<div :class="$style.Bio_content">
			<img :class="[$style.Bio_photo, $style.Bio_photo___aside]" src="/assets/photo.png" v-if="adaptiveStage < 2" />
			<div :class="[$style.Bio_text]">
				<p>
					Name's Kostiantyn. I'm a programmer from Ukraine currently
					residing in Bratislava, Slovakia. This website contains an
					overview of my work (<a href="/projects/">projects</a>,
					<a href="/papers/">papers</a>), as well as an assortment of
					condensed <a href="#">highlights</a> from the web
					development seminars I've been teaching at
					<a href="https://www.fiit.stuba.sk/en.html"><span
							  title="Faculty of Informatics and Information Technologies, Slovak University of Technology">FIIT
							STU</span></a>.
				</p>
				<p>
					<img :class="[$style.Bio_photo, $style.Bio_photo___inside]" src="/assets/photo.png"
						 v-if="adaptiveStage >= 2" />
				</p>
				<p>
				<table :class="$style.DeviconsTable">
					<tr>
						<td>I have experience working with:</td>
						<td>
							<img :class="$style.devIcon" v-for="devIcon in devIcons.worked" :src="devIcon.url" />
						</td>
					</tr>
					<tr>
						<td>I have dabbled with:</td>
						<td>
							<img :class="$style.devIcon" :src="devIcon.url" v-for="devIcon in devIcons.dabbled" />
						</td>
					</tr>
				</table>
				</p>
			</div>
		</div>
	</div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

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
	td:first-child {
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
	display: block;
}

.devIcon {
	height: @size*2;
	vertical-align: middle;

	&:first-child {
		margin-left: @gap*0.5;
	}

	margin: @gap*0.25;
	transform: translateY(-15%);
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
