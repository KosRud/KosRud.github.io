---
title: SPA and SSR trade-offs
---

<script setup>
	import StarRating from "@/pages/components/StarRating.vue";
</script>

More stars is better.

| |MPA|SPA|SSR|
|---:|:---:|:---:|:---:|
|Server load|<StarRating :full="2" :max="3" />|<StarRating :full="3" :max="3" />|<StarRating :full="1" :max="3" />|
|Initial load|<StarRating :full="3" :max="3" />|<StarRating :full="1" :max="3" />|<StarRating :full="2" :max="3" />|
|Navigation|<StarRating :full="1" :max="3" />|<StarRating :full="3" :max="3" />|<StarRating :full="3" :max="3" />|
|SEO|<StarRating :full="3" :max="3" />|<StarRating :full="1" :max="3" />|<StarRating :full="2" :max="3" />|
|Complexity|<StarRating :full="3" :max="3" />|<StarRating :full="2" :max="3" />|<StarRating :full="1" :max="3" />|

## Why SPA?

SPA has worse initial load time, but the navigation between pages is faster and smoother. You might want to consider SPA if your website is very interactive and used more like an application than a collection of pages with content, i.e. after the initial load the user will frequently change pages and interact with dynamic content. An an example, this is often the case with internet shops and social media websites.

## Why SSR?

SSR tries to achieve the "best of both worlds" from the traditional websites and SPA at the expense of development complexity and server load. You can have smooth navigation from SPA combined with fast initial load and good SEO.

## Comparison in detail

### Complexity

* SSR has additional security [gotchas](https://pinia.vuejs.org/ssr/#State-hydration).