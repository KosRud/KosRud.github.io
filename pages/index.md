---
hero: true
title: Home page
---

<script setup>
import HomePage from "./components/HomePage.vue";
import HomePage_Bio from "./components/HomePage_Bio.vue"
import HomePage_Features from "./components/HomePage_Features.vue"
</script>

<HomePage :dummyFeatures="8">
	<template #Bio>
		<HomePage_Bio/>
	</template>
	<template #Features>
		<HomePage_Features/>
	</template>
</HomePage>


