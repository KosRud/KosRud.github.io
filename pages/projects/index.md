<script setup>
	import ProjectsPage from "../components/ProjectsPage.vue";
	import ProjectsPage_Projects from "../components/ProjectPage_Projects.vue"
</script>

<ProjectsPage>
	<template #Projects>
		<ProjectsPage_Projects/>
	</template>
</ProjectsPage>