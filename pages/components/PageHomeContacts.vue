<script setup lang="ts">
import PageHomeContactsLink from './PageHomeContactsLink.vue';
import iconGithub from '@pages/components/assets/icons/websites/github/mark-github.svg';
import iconLinkein from '@pages/components/assets/icons/websites/linkedin/icon.svg';
import iconEmail from '@pages/components/assets/icons/etc/email/icon.svg';
</script>

<template>
	<div :class="$style.Contacts">
		<PageHomeContactsLink
			href="https://github.com/KosRud"
			icon-alt="github icon"
			name="Github"
			:icon-src="iconGithub"
		/>
		<PageHomeContactsLink
			href="https://www.linkedin.com/in/kosrud"
			icon-alt="linkedin icon"
			name="LinkedIn"
			:icon-src="iconLinkein"
		/>
		<PageHomeContactsLink
			href="#contact-me"
			icon-alt="email icon"
			name="Email"
			:icon-src="iconEmail"
			same-tab
		/>
	</div>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables.less';

.Contacts {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	gap: @gap*4;

	font-size: @size-l;
}
</style>
