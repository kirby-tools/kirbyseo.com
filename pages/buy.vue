<script setup lang="ts">
import { withQuery } from "ufo";

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

const appConfig = useAppConfig();

const licenseHolder = ref("");
const checkoutUrl = computed(() =>
  withQuery(page.value!.plan.button.to, {
    "checkout[custom][licenseHolder]": licenseHolder.value || undefined,
  }),
);

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
        class="bg-primary-500 flex flex-col gap-16 rounded-xl px-4 py-6 shadow md:grid md:grid-cols-[2fr,1fr] md:items-center md:gap-y-24 md:p-16 lg:grid-cols-2"
      >
        <div>
          <div
            v-if="page.discount"
            class="relative z-[1] -mb-3.5 flex justify-center"
          >
            <div
              class="border-primary-600 dark:border-primary-200 rounded-full border bg-white px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
            >
              {{ page.discount.label }}
            </div>
          </div>

          <UPricingCard
            v-bind="page.plan"
            :button="{ ...page.plan.button, to: checkoutUrl }"
            :ui="{
              highlight: 'ring-1 ring-primary-600 dark:ring-primary-200',
            }"
          >
            <template #features>
              <ul
                v-if="page.plan.features?.length"
                class="mb-6 space-y-3 text-sm"
              >
                <li
                  v-for="(offer, index) of page.plan.features"
                  :key="index"
                  class="flex min-w-0 items-center gap-x-3"
                >
                  <UIcon
                    :name="appConfig.ui.icons.check"
                    class="text-primary h-5 w-5 flex-shrink-0"
                  />

                  <span class="truncate text-gray-600 dark:text-gray-400">{{
                    offer
                  }}</span>
                </li>
              </ul>

              <UDivider label="Licensee" class="mb-6" />

              <UInput
                v-model="licenseHolder"
                color="gray"
                placeholder="License holder"
                class="mb-2"
              />
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Who will own this license (e.g. your full name, organization, or
                client)? Will be you if left empty. All licenses are managed in
                <a
                  href="https://hub.kirby.tools"
                  class="hover:text-primary-500 decoration-primary-500 font-medium underline"
                  target="_blank"
                >
                  hub.kirby.tools</a
                >.
              </div>
            </template>
          </UPricingCard>
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
