<script setup lang="ts">
import { onMounted, onUpdated, onUnmounted, ref, Ref, computed } from 'vue';
import { Route, VitePressData } from 'vitepress';
import { useStore } from '@theme/components/pinia/store';

const data: Ref<VitePressData | null> = ref(null);
const route: Ref<Route | null> = ref(null);

const store = useStore();

const contentComponent = computed(() => route?.value?.component);

function runCallbacks() {
	for (const callback of store.contentUpdateCallbacks) {
		callback();
	}
}

onMounted(() => {
	route.value = store.route;
	data.value = store.data;

	runCallbacks();
});

onUnmounted(() => {
	runCallbacks();
});

onUpdated(() => {
	runCallbacks();
});
</script>

<template>
	<div>
		<contentComponent v-if="contentComponent" />
	</div>
</template>
