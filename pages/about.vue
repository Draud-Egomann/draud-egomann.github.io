<script setup lang="ts">
import type { CarouselWord, FlipCardItem, MediaItem } from '#imports';

const localePath = useLocalePath()
const { t } = useI18n();

const flipCards: FlipCardItem[] = DataProvider.GetFlipCards(t);
const frameWorks: CarouselWord[] = DataProvider.GetFrameWorksInfo();
const hobbies: MediaItem[] = DataProvider.GetHobbies(t);

function NavigateToProjects() {
  const router = useRouter();
  router.push(localePath('/projects'));
}
</script>

<template>
  <div>
    <title>{{ $t('myName') }} - {{ $t('about.title') }}</title>

    <RenderCacheable :max-age="86400">
      <HeroBanner :title="$t('about.title')"
      :subTitle="$t('about.subTitle')"
      :paragraphs="[]"
      :hasButton="false"
      :isBigView="false"
      :buttonText="null"
      @buttonClickEvent="() => {}" />
      
      <CardsFlipCards :cards="flipCards" />
      
      <TextCarousel :title="$t('about.textCarouselTitle')"
      :carouselWords="frameWorks"
      :buttonText="$t('about.textCarouselButtonText')"
      @buttonClickEvent="NavigateToProjects"
      />
      
      <GridsContentGrid2 :title="$t('about.myHobbiesTitle')" :mediaItems="hobbies" />
      
      <MiscEastereggLink />
    </RenderCacheable>
  </div>
</template>