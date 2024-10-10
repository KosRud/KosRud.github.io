<script setup lang="ts"></script>

<template>
	<div :class="$style.Feature_content">
		<slot />
	</div>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables.less';

.Feature_content {
	flex-grow: 1;

	table {
		margin-left: auto;
		margin-right: auto;
	}

	th {
		&:nth-child(1) {
			font-weight: bold;
			text-align: right;
		}

		&:not(:last-child) {
			border-right: @gap*2 solid transparent;
		}

		vertical-align: top;
	}

	td {
		padding-top: @gap*0.125;
		padding-bottom: @gap*0.125;

		vertical-align: top;
	}

	h2 {
		font-weight: bold;
	}
}
</style>
