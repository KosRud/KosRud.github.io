<script setup lang="ts">
import HomePageHighlightsProject from "./HomePageHighlightsProject.vue";
import GrungeHeading from "./GrungeHeading.vue";

const props = defineProps<{ dummies: number }>();
</script>

<template>
	<div>
		<GrungeHeading text="My projects" />
		<div :class="$style.HighlightsWrapper">
			<div :class="$style.Highlights">
				<HomePageHighlightsProject :title="'DQ skinning for Unity'">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec ac dignissim nibh. Sed pharetra sem et congue
					faucibus. Maecenas eget libero lacus. Nunc non eros id risus
					accumsan ullamcorper. Nullam sit amet purus risus. Aliquam
					erat volutpat. Vivamus et lacus posuere, rutrum magna quis,
					faucibus nunc.
				</HomePageHighlightsProject>
				<HomePageHighlightsProject :title="'dice-pool-calc'">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec ac dignissim nibh. Sed pharetra sem et congue
					faucibus. Maecenas eget libero lacus. Nunc non eros id risus
					accumsan ullamcorper. Nullam sit amet purus risus. Aliquam
					erat volutpat. Vivamus et lacus posuere, rutrum magna quis,
					faucibus nunc.
				</HomePageHighlightsProject>
				<HomePageHighlightsProject :title="'This website'">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec ac dignissim nibh. Sed pharetra sem et congue
					faucibus. Maecenas eget libero lacus. Nunc non eros id risus
					accumsan ullamcorper. Nullam sit amet purus risus. Aliquam
					erat volutpat. Vivamus et lacus posuere, rutrum magna quis,
					faucibus nunc.
				</HomePageHighlightsProject>
				<HomePageHighlightsProject :title="'joplin-plugin-paginator'">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec ac dignissim nibh. Sed pharetra sem et congue
					faucibus. Maecenas eget libero lacus. Nunc non eros id risus
					accumsan ullamcorper. Nullam sit amet purus risus. Aliquam
					erat volutpat. Vivamus et lacus posuere, rutrum magna quis,
					faucibus nunc.
				</HomePageHighlightsProject>
				<HomePageHighlightsProject
					:title="'Material Clustering Benchmark'"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec ac dignissim nibh. Sed pharetra sem et congue
					faucibus. Maecenas eget libero lacus. Nunc non eros id risus
					accumsan ullamcorper. Nullam sit amet purus risus. Aliquam
					erat volutpat. Vivamus et lacus posuere, rutrum magna quis,
					faucibus nunc.
				</HomePageHighlightsProject>
				<HomePageHighlightsProject
					:title="'ProTeGe v2'"
					:images="[
						'/content/project screenshots/Protege v2/1.png',
						'/content/project screenshots/Protege v2/3.png',
					]"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec ac dignissim nibh. Sed pharetra sem et congue
					faucibus. Maecenas eget libero lacus. Nunc non eros id risus
					accumsan ullamcorper. Nullam sit amet purus risus. Aliquam
					erat volutpat. Vivamus et lacus posuere, rutrum magna quis,
					faucibus nunc.
				</HomePageHighlightsProject>
				<HomePageHighlightsProject
					:title="'ProTeGe v1'"
					:images="['/content/project screenshots/Protege v1/1.png']"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec ac dignissim nibh. Sed pharetra sem et congue
					faucibus. Maecenas eget libero lacus. Nunc non eros id risus
					accumsan ullamcorper. Nullam sit amet purus risus. Aliquam
					erat volutpat. Vivamus et lacus posuere, rutrum magna quis,
					faucibus nunc.
				</HomePageHighlightsProject>
				<div
					:class="$style.Highlights_dummy"
					v-for="_ in Array.from({ length: props.dummies })"
				></div>
			</div>
		</div>
	</div>
</template>

<style lang="less" module>
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

@Highlights-gap: @gap*2;

.Highlights {
	margin: -@Highlights-gap*0.5;

	display: flex;
	flex-wrap: wrap;
	flex-direction: row;

	> * {
		flex: 1 1 500rem;

		margin: @gap @Highlights-gap * 0.5;
	}
}

.Highlights_dummy {
	margin-top: 0rem;
	margin-bottom: 0rem;
}
</style>
