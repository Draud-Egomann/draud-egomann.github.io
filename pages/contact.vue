<script setup lang="ts">
import type { MediaItem } from '#imports';

const card: MediaItem[] = DataProvider.GetContactCards();
</script>

<template>
  <div>
    <LazyHeroBanner :title="'Kontakt'"
                    :subTitle="'Mittel und Wege um mich zu erreichen'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => { }" />

    <CardsContactCards :cards="card" />

    <MiscEastereggLink />
  </div>
</template>