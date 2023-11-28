---
title: SPA and SSR trade-offs
---

<script setup>
	import ProjectsPage from "../components/ProjectsPage.vue";
	import ProjectsPage_Projects from "../components/ProjectPage_Projects.vue"
	import Stars from "../components/Stars.vue";
</script>

# SPA and SSR trade-offs

More stars is better.

| |Traditional|SPA|SSR|
|---:|:---:|:---:|:---:|
|Server load|<Stars :full="2" :max="3" />|<Stars :full="3" :max="3" />|<Stars :full="1" :max="3" />|
|Initial load|<Stars :full="3" :max="3" />|<Stars :full="1" :max="3" />|<Stars :full="2" :max="3" />|
|Navigation|<Stars :full="1" :max="3" />|<Stars :full="3" :max="3" />|<Stars :full="3" :max="3" />|
|SEO|<Stars :full="3" :max="3" />|<Stars :full="1" :max="3" />|<Stars :full="2" :max="3" />|
|Complexity|<Stars :full="3" :max="3" />|<Stars :full="2" :max="3" />|<Stars :full="1" :max="3" />|

## Why SPA?

SPA has worse initial load time, but the navigation between pages is faster and smoother. You might want to consider SPA if your website is very interactive and used more like an application than a collection of pages with content, i.e. after the initial load the user will frequently change pages and interact with dynamic content. An an example, this is often the case with internet shops and social media websites.

## Why SSR?

SSR tries to achieve the "best of both worlds" from the traditional websites and SPA at the expense of development complexity and server load. You can have smooth navigation from SPA combined with fast initial load and good SEO.