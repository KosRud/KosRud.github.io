---
title: My projects
---

<script setup>
	import ProjectsPage from "./components/ProjectsPage.vue";
	import ProjectsPageProjects from "./components/ProjectPageProjects.vue"
</script>

# My projects

<ProjectsPage>
	<template #Projects>
		<ProjectsPageProjects/>
	</template>
</ProjectsPage>