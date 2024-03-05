<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const links = [
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
];

const navigation = inject<Ref<NavItem[]>>("navigation", ref([]));
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
      <UButton label="Try" color="gray" to="/playground" class="lg:hidden" />
      <UButton
        label="Get Your Audit"
        icon="i-ri-arrow-right-line"
        trailing
        color="black"
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
