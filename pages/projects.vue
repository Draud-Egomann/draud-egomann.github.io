<script setup lang="ts">
import type { ProjectMenuItem } from '#imports';

const { t } = useI18n();
const route = useRoute();
const searchQuery = route.query.search || null;
const cards: ProjectMenuItem[] = DataProvider.GetProjects(t);
const searchItem = ref<ProjectMenuItem | null>(null);

onNuxtReady(() => {
  if (searchQuery && !stringHelper.IsNullOrEmpty(searchQuery.toString())) {
    let project = cards.find(c => c.Title.toLowerCase().includes(searchQuery.toString().toLowerCase()));

    if (project) {
      searchItem.value = project;
      scrollToElement(project.Title);
    }
  }
});

function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);

  element?.scrollIntoView();
  window.scrollBy(0, -200);  // because the header is fixed
}
</script>

<template>
  <div>
    <title>{{ $t('myName') }} - {{ $t('projects.title') }}</title>

    <RenderCacheable :max-age="86400">
      <HeroBanner :title="$t('projects.title')" :subTitle="$t('projects.subTitle')" :paragraphs="[]" :hasButton="false"
        :isBigView="false" :buttonText="null" @buttonClickEvent="() => { }" />

      <Cards :cards="cards" :searchItem="searchItem" />

      <MiscEastereggLink />
    </RenderCacheable>
  </div>
</template>