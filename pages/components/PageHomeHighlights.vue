<script setup lang="ts">
import HomePageHighlightsProject from './PageHomeHighlightsProject.vue';
import GrungeHeading from './GrungeHeading.vue';
import HyperLink from '@vitepress/theme/components/HyperLink.vue';

import imgPtgV2_1 from '@/content/project screenshots/Protege v2/1.png?format=jpg&w=400&withoutEnlargement&quality=70';
import imgPtgV2_3 from '@/content/project screenshots/Protege v2/3.png?format=jpg&w=400&withoutEnlargement&quality=70';

import imgPtgV1_1 from '@/content/project screenshots/Protege v1/1.png?format=jpg&w=400&withoutEnlargement&quality=70';

import imgCluster from '@/content/project screenshots/material clustering/1.png?format=jpg&w=400&withoutEnlargement&quality=70';

import imgDq from '@/content/project screenshots/DQ/before-after [small].gif';

import imgLighthouse from '@/content/project screenshots/website/lighthouse.png?format=jpg&w=400&withoutEnlargement&quality=90';

const props = defineProps<{ dummies: number }>();
</script>

<template>
	<div>
		<GrungeHeading text="My projects" />
		<div>
			<div :class="$style.Highlights">
				<HomePageHighlightsProject
					:title="'DQ skinning for Unity'"
					github="KosRud/DQ-skinning-for-Unity"
					:links="{
						docs: 'https://kosrud.github.io/DQ-skinning-for-Unity/hierarchy.html',
						paper: 'http://journals.khnu.km.ua/vestnik/pdf/tech/pdfbase/2020/2020_1/1-2020_(281).pdf#page=12',
					}"
					:images="[
						{
							title: 'before and after: built-in skinning vs plugin',
							url: imgDq,
						},
					]"
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
							text="method"
							href="http://journals.khnu.km.ua/vestnik/pdf/tech/pdfbase/2020/2020_1/(281)_2020-1-t.pdf#page=12"
						/>
						which I developed for my master's thesis at the Faculty
						of Applied Mathematics at
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
					github="KosRud/KosRud.github.io"
					:title="'This website'"
					:images="[
						{
							url: imgLighthouse,
							title: 'lighthouse score: Performance (97), Accessibility (100), Best Practices (95), SEO (99)',
						},
					]"
				>
					<p>
						This website is built in
						<HyperLink
							text="VitePress"
							href="https://vitepress.dev/"
						/>
						with a custom theme written from scratch using
						<HyperLink
							text="Vue.js"
							href="https://vuejs.org/"
						/>.
					</p>
					<p>
						It gracefully conforms to viewports as narrow as 320px,
						utilizes responsive components implemented via
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
					:title="'ProTeGe v2'"
					:images="[
						{
							url: imgPtgV2_1,
							title: 'screenshot',
						},
						{
							url: imgPtgV2_3,
							title: 'textures in use',
						},
					]"
					github="KosRud/ProTeGe_v2"
				>
					<p>
						A graph-based procedural texture generator with
						real-time preview.
					</p>
					<p>
						Implemented in
						<HyperLink
							text="Unity"
							href="https://unity.com/"
						/>
						engine with texture processing performed on the GPU. A
						collection of configurable nodes (noise generators,
						color adjustments, blending) can be chained arbitrarily
						to produce the final output.
					</p>
					<p>
						Developed in collaboration with Ihor Los as a joint
						bachelor's project at the Faculty of Applied Mathematics
						at
						<HyperLink
							text="KPI"
							href="https://kpi.ua/en/fpm"
						/>.
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
					:title="'Material clustering benchmark'"
					:images="[
						{
							url: imgCluster,
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
						(you can also read a
						<HyperLink
							text="preprint"
							href="https://www.researchgate.net/publication/369113944_Real-time_material_clustering_for_mixed_reality_applications_based_on_dichromatic_reflection_model"
						/>).
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
					:title="'ProTeGe v1'"
					:images="[
						{
							title: 'screenshot',
							url: imgPtgV1_1,
						},
					]"
					github="KosRud/ProTeGe-v1"
				>
					<p>
						A procedural texture generator written in C++ using
						wxWidgets library for the GUI. The computations are
						performed on the CPU and utilize multithreading.
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
@import '@vitepress/theme/style/variables.less';
@import '@vitepress/theme/style/mixins.less';

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
