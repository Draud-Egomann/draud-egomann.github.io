<script setup lang="ts">
import type { MediaItem } from '#imports';

const card: MediaItem[] = DataProvider.GetContactCards();
</script>

<template>
  <div>
    <title>{{ $t('myName') }} - {{ $t('contact.title') }}</title>

    <LazyHeroBanner :title="$t('contact.title')"
                    :subTitle="$t('contact.subTitle')"
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