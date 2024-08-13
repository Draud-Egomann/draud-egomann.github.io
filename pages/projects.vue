<script setup lang="ts">
import { ProjectMenuItem } from '~/composables/models/ProjectMenuItem';
import { ProjectStatus } from '~/composables/enums/ProjectStatus';
import { MediaItem } from '#imports';

const route = useRoute();
const searchQuery = route.query.search || null;
const slides: MediaItem[] = [
  new MediaItem("https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080"),
  new MediaItem("https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080"),
  new MediaItem("https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080"),
  new MediaItem("https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080"),
  new MediaItem("https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080"),
];
const cards: ProjectMenuItem[] = [
  new ProjectMenuItem("Call Me", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ProjectStatus.Completed, "https://kauz.ch", null, null, [], slides, ""),
  new ProjectMenuItem("Projekt 2", "Beschreibung 1", "more info text", ProjectStatus.Completed, "https://kauz.ch", null, null, [], slides, ""),
  new ProjectMenuItem("Projekt 3", "Beschreibung 1", "more info text", ProjectStatus.Completed, "https://kauz.ch", null, null, [], slides, ""),
  new ProjectMenuItem("Projekt 4", "Beschreibung 1", "more info text", ProjectStatus.Completed, "https://kauz.ch", null, null, [], slides, ""),
]
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
  </div>
</template>