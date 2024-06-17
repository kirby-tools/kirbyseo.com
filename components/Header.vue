<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";
import type { HeaderLink } from "#ui-pro/types";

const links: HeaderLink[] = [
  {
    label: "Documentation",
    to: "/docs/get-started",
  },
  {
    label: "Playground",
    to: "/playground",
  },
  {
    label: "Buy",
    to: "/buy",
  },
  {
    label: "Products",
    children: [
      {
        label: "Kirby SEO Audit",
        description: "State-of-the-art SEO analysis",
        to: "/",
      },
      {
        label: "Live Preview",
        to: "https://kirby.tools/live-preview",
        description: "Real-time page preview",
        target: "_blank",
      },
      {
        label: "Content Translator",
        to: "https://kirby.tools/content-translator",
        description: "DeepL-powered translations",
        target: "_blank",
      },
      {
        label: "Kirby Copilot",
        to: "https://kirbycopilot.com",
        description: "AI-powered content generation",
        target: "_blank",
      },
    ],
  },
];

const navigation = inject<Ref<NavItem[]>>("navigation", ref([]));

const { data: version } = await useAsyncData("version", () =>
  queryContent("/changelog")
    .where({ _extension: "md" })
    .sort({ date: -1, title: -1 })
    .findOne(),
);
</script>

<template>
  <UHeader :links="links">
    <template #left>
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white"
      >
        <Logo class="text-primary h-6 w-auto" />
        Kirby SEO Audit
      </NuxtLink>
    </template>

    <template #right>
      <UButton
        v-if="version"
        :label="version.title"
        color="gray"
        variant="link"
        to="/changelog"
      />
      <UButton label="Try it" color="gray" to="/playground" />
      <UButton
        label="Buy"
        icon="i-ri-shopping-bag-3-fill"
        trailing
        color="primary"
        to="/buy"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        :multiple="false"
        default-open
      />
    </template>
  </UHeader>
</template>
