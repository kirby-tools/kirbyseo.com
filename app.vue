<script setup lang="ts">
import { joinURL } from "ufo";

const siteConfig = useSiteConfig();
const route = useRoute();
const colorMode = useColorMode();
const color = computed(() =>
  colorMode.value === "dark" ? "#18181b" : "#f4f4f5",
);

useServerHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
    { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
    {
      rel: "canonical",
      href: joinURL(siteConfig.url, route.path),
    },
  ],
  script: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "kirbyseo.com",
    },
    //     {
    //       src: "https://www.googletagmanager.com/gtag/js?id=AW-16488150310",
    //       async: true,
    //     },
    //     {
    //       innerHTML: `
    // window.dataLayer = window.dataLayer || []
    // function gtag() { dataLayer.push(arguments) }
    // gtag('js', new Date())
    // gtag('config', 'AW-16488150310')
    //       `.trimStart(),
    //     },
  ],
});

useSeoMeta({
  themeColor: color,
  titleTemplate: "%s – Kirby SEO Audit",
  ogSiteName: "Kirby SEO Audit",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <!-- <NuxtLoadingIndicator /> -->

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>
