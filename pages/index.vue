<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  titleTemplate: "",
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
  ogImage: "https://kirbyseo.com/social-card.png",
  twitterImage: "https://kirbyseo.com/social-card.png",
});

const isPlaying = ref(false);

function handleVideoClick(event: MouseEvent) {
  const player = event.target as HTMLVideoElement;

  if (isPlaying.value) {
    player.pause();
    isPlaying.value = false;
    return;
  }

  player.play();
  isPlaying.value = true;
}
</script>

<template>
  <div v-if="page">
    <ULandingHero :orientation="page.hero.orientation" :links="page.hero.links">
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="md"
          class="hover:bg-primary-100 dark:bg-primary-950/100 dark:hover:bg-primary-900 transition-color relative rounded-full font-medium shadow-none"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          <span class="flex items-center gap-1">
            <UIcon
              v-if="page.hero.headline.icon"
              :name="page.hero.headline.icon"
              class="pointer-events-none h-4 w-4"
            />
            {{ page.hero.headline.label }}
          </span>
        </UBadge>
      </template>

      <template #title>
        <span v-html="page.hero?.title" />
      </template>

      <template #description>
        <span v-html="page.hero?.description" />
      </template>

      <template #default>
        <div
          class="group relative cursor-pointer rounded-xl shadow ring-1 ring-gray-200 dark:ring-gray-800"
          :class="[
            !isPlaying && 'hover:ring-primary-500 dark:hover:ring-primary-400',
          ]"
        >
          <video
            src="/vid/kirby-seo-audit-demo.mp4"
            poster="/vid/kirby-seo-audit-demo-poster.jpg"
            muted
            class="rounded-xl"
            @ended="isPlaying = false"
            @click="handleVideoClick"
          />

          <div
            v-show="!isPlaying"
            class="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-b from-gray-950/50 to-[rgba(0,0,0,0)] to-20%"
          >
            <UIcon
              name="i-ri-play-circle-fill"
              class="group-hover:text-primary-600 h-[4rem] w-[4rem] text-gray-900 md:h-[6rem] md:w-[6rem]"
            />
          </div>
        </div>
      </template>
    </ULandingHero>

    <UContainer>
      <ULandingCTA
        title="Never Slip on SEO Again"
        align="left"
        card
        :ui="{
          wrapper: 'bg-primary-500 dark:bg-primary-500 ring-0',
          title:
            'text-center text-5xl !text-[#063c3c] sm:text-7xl md:text-left',
        }"
      >
        <HomeLuckyUnlucky12 class="mx-auto w-3/4 md:w-full" />
      </ULandingCTA>
    </UContainer>

    <ULandingSection
      v-for="(section, index) of page.sections"
      :key="index"
      :ui="{ container: section.slot === 'video' ? 'max-w-4xl' : undefined }"
      v-bind="section"
    >
      <template v-if="section.title" #title>
        <span v-html="section.title" />
      </template>

      <template v-if="section.description" #description>
        <span v-html="section.description" />
      </template>

      <template #video> </template>

      <template #features>
        <ULandingGrid class="lg:-mb-20">
          <ULandingCard
            v-for="(card, subIndex) of section.cards"
            :key="subIndex"
            v-bind="card"
            class="flex flex-col"
          />
        </ULandingGrid>
      </template>
    </ULandingSection>

    <ULandingSection class="!pt-0">
      <ULandingCTA
        v-bind="page.cta"
        card
        :ui="{
          wrapper: 'bg-primary-500 dark:bg-primary-500 ring-0',
          title: 'text-5xl !text-[#063c3c] sm:text-7xl',
          description: '!text-[#063c3c]',
        }"
      >
        <template #title>
          <span v-html="page.cta?.title" />
        </template>

        <HomeLuckyUnlucky6 class="mx-auto w-1/2" />
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>
