<script setup lang="ts">
import type { MediaItem } from '#imports';

const card: MediaItem[] = DataProvider.GetContactCards();
</script>

<template>
  <div>
    <title>Justin Urbanek - Kontakt</title>

    <LazyHeroBanner :title="'Kontakt'"
                    :subTitle="'Mittel und Wege um mich zu erreichen'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => { }"
    />

    <div class="h-[50vh] flex flex-col justify-center">
      <CardsContactCards :cards="card" data-aos="zoom-in" />
    </div>

    <MiscEastereggLink />
  </div>
</template>