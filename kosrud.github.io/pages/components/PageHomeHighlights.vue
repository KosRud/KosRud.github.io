<script setup lang="ts">
import HomePageHighlightsProject from './PageHomeHighlightsProject.vue';
import GrungeHeading from './GrungeHeading.vue';
import HyperLink from '../../.vitepress/theme/components/HyperLink.vue';

const props = defineProps<{ dummies: number }>();
</script>

<template>
	<div>
		<GrungeHeading text="My projects" />
		<div>
			<div :class="$style.Highlights">
				<HomePageHighlightsProject
					:images="[
						{
							url: '/content/project screenshots/DQ/before-after.gif',
							title: 'DQ skinning vs built-in linear skinning comparison',
						},
					]"
					:title="'DQ skinning for Unity'"
					github="KosRud/DQ-skinning-for-Unity"
					:links="{
						docs: 'https://kosrud.github.io/DQ-skinning-for-Unity/hierarchy.html',
						paper: 'http://journals.khnu.km.ua/vestnik/pdf/tech/pdfbase/2020/2020_1/1-2020_(281).pdf#page=12',
					}"
				>
					<p>
						A plugin for
						<HyperLink
							text="Unity"
							href="https://unity.com/"
						/>
						engine which implements skeletal deformations using
						<HyperLink
							text="dual quaternions"
							href="https://www.gamedevs.org/uploads/skinning-with-dual-quaternions.pdf"
						/>
						combined with an original artifact compensation
						<HyperLink
							text="algorithm"
							href="http://journals.khnu.km.ua/vestnik/pdf/tech/pdfbase/2020/2020_1/(281)_2020-1-t.pdf#page=12"
						/>
						which I developed for my master's thesis at the Faculty
						of Applied Mathematics in
						<HyperLink
							text="KPI"
							href="https://kpi.ua/en/fpm"
						/>.
					</p>
					<p>
						The animated screenshot alternates between built-in
						linear skinning and the plugin.
					</p>
				</HomePageHighlightsProject>
				<HomePageHighlightsProject
					github="KosRud/dice-pool-calc"
					:title="'dice-pool-calc'"
					:links="{
						docs: 'https://kosrud.github.io/dice-pool-calc/',
						examples:
							'https://github.com/KosRud/dice-pool-calc-examples',
						npm: 'https://www.npmjs.com/package/dice-pool-calc#dice-pool-calc',
					}"
				>
					<p>
						A
						<HyperLink
							text="typescript"
							href="https://www.typescriptlang.org/"
						/>
						library that efficiently calculates probabilities of
						possible outcomes when rolling an arbitrary collection
						of dice and using arbitrary rules to interpret them.
						Enumerates all possible outcomes without random sampling
						and easily handles hundreds of dice.
					</p>
				</HomePageHighlightsProject>
				<HomePageHighlightsProject
					github="KosRud/KosRud.github.io"
					:title="'This website'"
				>
					<p>
						This website is built on
						<HyperLink
							text="VitePress"
							href="https://vitepress.dev/"
						/>
						and uses a custom theme written from scratch with
						<HyperLink
							text="Vue.js"
							href="https://vuejs.org/"
						/>.
					</p>
					<p>
						It gracefully conforms to viewport widths as narrow as
						320px, utilizes responsive components implemented via
						<HyperLink
							text="ResizeObserver"
							href="https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"
						/>, as well as provides accessibility with
						<HyperLink
							text="ARIA"
							href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
						/>
						attributes and support for browser
						<HyperLink
							text="font size"
							href="https://austingil.com/px-or-rem-in-css/"
						/>
						accessibility setting.
					</p>
				</HomePageHighlightsProject>
				<HomePageHighlightsProject
					github="KosRud/joplin-plugin-paginator"
					:title="'joplin-plugin-paginator'"
					:links="{
						npm: 'https://www.npmjs.com/package/joplin-plugin-paginator',
					}"
				>
					<p>
						<HyperLink
							text="Joplin"
							href="https://joplinapp.org/"
						/>
						is an open-source note taking app with tags,
						hierarchical folders, plugin support, synchronization,
						and embedded multimedia.
					</p>
					<p>
						Normally, a note in joplin is continuous like an HTML
						page. This plugin implements pagination and generates a
						table of contents for the note, making a printable
						document from it.
					</p>
				</HomePageHighlightsProject>
				<HomePageHighlightsProject
					:title="'Material clustering benchmark'"
					:images="[
						{
							url: '/content/project screenshots/material clustering/1.png',
							title: 'screenshot',
						},
					]"
					github="KosRud/Material-Clustering-Benchmark"
					:links="{
						paper: 'https://link.springer.com/chapter/10.1007/978-3-031-37963-5_67',
						preprint:
							'https://www.researchgate.net/publication/369113944_Real-time_material_clustering_for_mixed_reality_applications_based_on_dichromatic_reflection_model',
					}"
				>
					<p>
						This software was implemented to compare the speed and
						quality of different clustering algorithms in a specific
						use case connected to real-time mixed reality systems.
					</p>

					<p>
						The benchmark results are published in a
						<HyperLink
							text="paper"
							href="https://link.springer.com/chapter/10.1007/978-3-031-37963-5_67"
						/>
						(preprint pdf is available
						<HyperLink
							text="here"
							href="https://www.researchgate.net/publication/369113944_Real-time_material_clustering_for_mixed_reality_applications_based_on_dichromatic_reflection_model"
						/>).
					</p>
				</HomePageHighlightsProject>
				<HomePageHighlightsProject
					:title="'ProTeGe v2'"
					:images="[
						{
							url: '/content/project screenshots/Protege v2/1.png',
							title: 'screenshot',
						},
						{
							url: '/content/project screenshots/Protege v2/3.png',
							title: 'textures in use',
						},
					]"
					github="KosRud/ProTeGe_v2"
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec ac dignissim nibh. Sed pharetra sem et congue
						faucibus. Maecenas eget libero lacus. Nunc non eros id
						risus accumsan ullamcorper. Nullam sit amet purus risus.
						Aliquam erat volutpat. Vivamus et lacus posuere, rutrum
						magna quis, faucibus nunc.
					</p>
				</HomePageHighlightsProject>
				<HomePageHighlightsProject
					:title="'ProTeGe v1'"
					:images="[
						{
							title: 'screenshot',
							url: '/content/project screenshots/Protege v1/1.png',
						},
					]"
					github="KosRud/ProTeGe-v1"
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec ac dignissim nibh. Sed pharetra sem et congue
						faucibus. Maecenas eget libero lacus. Nunc non eros id
						risus accumsan ullamcorper. Nullam sit amet purus risus.
						Aliquam erat volutpat. Vivamus et lacus posuere, rutrum
						magna quis, faucibus nunc.
					</p>
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
@import '../../.vitepress/theme/style/variables/index.less';
@import '../../.vitepress/theme/style/mixins/index.less';

@Highlights-gap: @gap*4;

.Highlights {
	margin: -@Highlights-gap*0.5;

	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: stretch;

	> * {
		flex: 1 1 500rem;
		max-width: 700rem;

		margin: @Highlights-gap * 0.5;
	}
}

.Highlights_dummy {
	margin-top: 0rem;
	margin-bottom: 0rem;
}
</style>
