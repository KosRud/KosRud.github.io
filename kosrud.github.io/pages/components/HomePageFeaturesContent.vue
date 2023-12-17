<script setup lang="ts"></script>

<template>
	<div :class="$style.Feature_content">
		<slot />
	</div>
</template>

<style module lang="less">
@import '../../.vitepress/theme/style/main/index.less';

.Feature_content {
	flex-grow: 1;

	table {
		margin-left: auto;
		margin-right: auto;

		td {
			&:nth-child(1) {
				font-weight: bold;
				text-align: right;
			}

			&:not(:last-child) {
				border-right: @gap*2 solid transparent;
			}
		}
	}

	h2 {
		font-weight: bold;
	}
}
</style>
