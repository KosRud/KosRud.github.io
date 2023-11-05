<script setup>
	const projects = [{
		name: "ProTeGe v2"
	}, {name: "ProTeGe v1"}, {name: "dice-pool-calc"}]
</script>

# Home

## Under construction

Nothing here yet...<br>
Try exploring the menu

<div v-for="project in projects">
{{ project.name }}
</div>
