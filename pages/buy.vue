<script setup lang="ts">
const { data: page } = await useAsyncData("buy", () =>
  queryContent("/buy").findOne(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} – Kirby SEO Audit`,
  description: page.value.description,
  ogDescription: page.value.description,
});

defineOgImageComponent("Default", {
  title: page.value.title,
  description: page.value.description,
});
</script>

<template>
  <div v-if="page">
    <UPageHero v-bind="page.hero" />

    <UContainer
      class="bg-primary-500 rounded-xl p-12"
      :ui="{
        constrained: 'max-w-5xl',
      }"
    >
      <div
        class="flex flex-col gap-16 px-4 py-6 sm:gap-y-24 sm:px-16 sm:px-6 md:grid md:grid-cols-2 md:items-center"
      >
        <UPricingCard v-bind="page.plan" />

        <div>
          <HomeLuckyUnlucky1 class="mx-auto w-3/4" />
        </div>
      </div>
    </UContainer>

    <ULandingSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <ULandingFAQ :items="page.faq.items" multiple class="mx-auto max-w-4xl">
        <template #item="{ item }">
          <MDC
            :value="item.content"
            class="prose prose-primary dark:prose-invert max-w-none text-gray-500 dark:text-gray-400"
          />
        </template>
      </ULandingFAQ>
    </ULandingSection>
  </div>
</template>
