<script setup lang="ts">
import type { CarouselWord, FlipCardItem, MediaItem } from '#imports';

const flipCards: FlipCardItem[] = DataProvider.GetFlipCards();
const frameWorks: CarouselWord[] = DataProvider.GetFrameWorksInfo();
const hobbies: MediaItem[] = DataProvider.GetHobbies();

function NavigateToProjects() {
  const router = useRouter();
  router.push('/projects');
}
</script>

<template>
  <div>
    <LazyHeroBanner :title="'Über mich'"
                    :subTitle="'Krume Tastatur, krummer Rücken, Krume Finger'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => {}"
    />

    <LazyCardsFlipCards :cards="flipCards" />

    <LazyTextCarousel :title="'Ich verwende'"
                      :carouselWords="frameWorks"
                      :buttonText="'Meine Projekte ansehen'"
                      @buttonClickEvent="NavigateToProjects"
    />

    <LazyGridsContentGrid3 :title="'Meine Freizeitaktivitäten'" :mediaItems="hobbies" />

    <MiscEastereggLink />
  </div>
</template>