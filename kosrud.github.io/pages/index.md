---
hero: true
title: Home page
---

<script setup>
import HomePage from "./components/HomePage.vue";
import HomePageBio from "./components/HomePageBio.vue"
import HomePageFeatures from "./components/HomePageFeatures.vue"
import HomePageHighlights from "./components/HomePageHighlights.vue";
</script>

<HomePage :dummyFeatures="8">
	<template #Bio>
		<HomePageBio/>
	</template>
	<template #Features>
		<HomePageFeatures/>
	</template>
	<template #Highlights>
		<HomePageHighlights/>
	</template>
</HomePage>


