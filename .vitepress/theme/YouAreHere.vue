<script setup lang="ts">
import { useRoute } from "vitepress";
const route = useRoute();
</script>

<template>
    <!--  -->
    <strong>You are here:</strong> {{ route.path }}
</template>
