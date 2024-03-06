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
    <UContainer>
      <UPageHero v-bind="page.hero" />
    </UContainer>

    <UContainer
      :ui="{
        constrained: 'max-w-5xl',
      }"
    >
      <div
        class="bg-primary-500 flex flex-col gap-16 rounded-xl px-4 py-6 shadow sm:gap-y-24 sm:p-16 md:grid md:grid-cols-2 md:items-center"
      >
        <div>
          <div
            v-if="page.discount"
            class="relative z-[1] -mb-3.5 flex justify-center"
          >
            <div
              class="bg-primary-400 border-primary-500 text-primary-800 rounded-full border px-2 py-1 text-sm font-medium"
            >
              {{ page.discount.label }}
            </div>
          </div>
          <UPricingCard
            v-bind="page.plan"
            :ui="{
              highlight: 'ring-1 ring-primary-600 dark:ring-primary-200',
            }"
          />
        </div>

        <div>
          <IllustrationLuckyUnlucky1 class="mx-auto w-3/4" />
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
