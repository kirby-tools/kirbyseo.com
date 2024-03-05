<script setup lang="ts">
const title = "Playground";
const description = "Try Kirby SEO Audit in the interactive Panel playground.";

useSeoMeta({
  title,
  ogTitle: `${title} – Kirby SEO Audit`,
  description,
  ogDescription: description,
});

defineOgImageComponent("Default", {
  title,
  description,
});
</script>

<template>
  <div class="h-[calc(100vh-var(--header-height)-var(--header-height)-1px)]">
    <ClientOnly>
      <iframe src="https://try.kirbyseo.com" width="100%" height="100%" />
    </ClientOnly>
  </div>
</template>
