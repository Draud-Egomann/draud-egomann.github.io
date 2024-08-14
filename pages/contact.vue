<script setup lang="ts">
import { MediaItem } from '~/composables/models/MediaItem';

const card: MediaItem[] = [
  new MediaItem("https://via.placeholder.com/350", "Placeholder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit sodales tincidunt.", "https://www.google.com", "google"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit sodales tincidunt.", "https://www.google.com", "Googe"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit sodales tincidunt.", "https://www.google.com", "Goo"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit sodales tincidunt.", null, "LinkText"),
]
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

    <MiscPepeLink />
  </div>
</template>