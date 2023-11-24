---
title: My projects
---

<script setup>
	import ProjectsPage from "../components/ProjectsPage.vue";
	import ProjectsPage_Projects from "../components/ProjectPage_Projects.vue"
</script>

# My projects

<ProjectsPage>
	<template #Projects>
		<ProjectsPage_Projects/>
	</template>
</ProjectsPage>