<script setup lang="ts">
import FeaturesGalleryCard from './FeaturesGalleryCard.vue';

const props = defineProps<{
	dummies?: number;
	label: string;
}>();
</script>

<template>
	<!-- surrounding div is necessary to ensure negative margins work properly -->
	<section :aria-label="$props.label">
		<!--
			Wrapper element is needed in case width is set externally.
			The gallery has width exceeding 100% to account for negative margins.
		-->
		<div :class="$style.FeaturesGallery">
			<slot />
			<FeaturesGalleryCard
				dummy
				name=""
				:class="$style.FeaturesGallery_dummy"
				v-for="_ in Array.from({ length: props.dummies ?? 0 })"
			></FeaturesGalleryCard>
		</div>
	</section>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables.less';

@CardGalleryGap: @gap*2;

.FeaturesGallery {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: stretch;
	align-items: stretch;

	> * {
		margin: @CardGalleryGap*0.5;
	}

	margin: @CardGalleryGap*-0.5;
	width: calc(100% + @CardGalleryGap);
}

.FeaturesGallery_dummy {
	margin-top: @CardGalleryGap*-0.5;
}
</style>
