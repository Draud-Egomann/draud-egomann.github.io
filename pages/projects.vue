<script setup lang="ts">
import type { ProjectMenuItem } from '#imports';

const route = useRoute();
const searchQuery = route.query.search || null;
const cards: ProjectMenuItem[] = DataProvider.GetProjects();
const searchItem = ref<ProjectMenuItem | null>(null);
const cardsLoaded = ref(false);

onMounted(() => {
  if (searchQuery && !stringHelper.IsNullOrEmpty(searchQuery.toString())) {
    let project = cards.find(c => c.Title.toLowerCase().includes(searchQuery.toString().toLowerCase()));

    if (project) {
      searchItem.value = project;
      scrollToElement(project.Title);
    }
  }
  cardsLoaded.value = true;
});

function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);

  element?.scrollIntoView();
  window.scrollBy(0, -70);  // because the header is fixed
}
</script>

<template>
  <div>
    <LazyHeroBanner :title="'Nennenswerte Arbeiten'"
                    :subTitle="'Meilensteine und kreative Leistungen'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => { }"
    />

    <LazyCards v-if="cardsLoaded" :cards="cards" :searchItem="searchItem" />

    <MiscEastereggLink />
  </div>
</template>