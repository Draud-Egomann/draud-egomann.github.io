<script setup lang="ts">
import type { ImageReference, MediaItem } from '#imports';

const imageReferences: ImageReference[] = DataProvider.GetReferencesImages();
const icons: MediaItem[] = DataProvider.GetReferencesBrandLogos();
const contactBrandCards: MediaItem[] = DataProvider.GetReferencesContactBrandLogos();
const contactHobbyCards: MediaItem[] = DataProvider.GetReferencesHobbyCards();
</script>

<template>
  <div>
    <LazyHeroBanner :title="'Quellenverzeichnis'"
                    :subTitle="'Ja, ich verlinke Quellen!'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => { }"
    />

    <GalleriesReferenceImages :imageReferences="imageReferences" />

    <GalleriesReferenceIcons :icons="icons" />

    <CardsReferenceCards :cards="contactBrandCards" />

    <CardsReferenceCards :cards="contactHobbyCards" />

    <TextDivider :text="'Benutzte nicht aufgelistete Bilder werden entweder noch hinzugefügt, sind Eigenkreationen oder sind direkt bei der Grafik verlinkt.'" />
  </div>
</template>