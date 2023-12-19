<script setup lang="ts">
import iconFull from './_assets/icons/star/full.svg';
import iconEmpty from './_assets/icons/star/empty.svg';

const props = defineProps<{ max: number; full: number }>();
</script>

<template>
	<div :class="$style.Starline">
		<img
			:src="iconFull"
			:class="$style.Star"
			v-for="_ in props.full"
		/>
		<img
			:src="iconEmpty"
			:class="$style.Star"
			v-for="_ in props.max - props.full"
		/>
	</div>
</template>

<style module lang="less">
.Starline {
	display: inline-flex;
	flex-direction: row;
	gap: 0.125em;
}

.Star {
	width: 1em;
	aspect-ratio: 1em;
	vertical-align: baseline;
}
</style>
