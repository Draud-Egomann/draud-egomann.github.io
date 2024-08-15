<script setup lang="ts">
import { ImageReference } from '~/composables/models/ImageReference';
import { MediaItem } from '~/composables/models/MediaItem';

const imageReferences: ImageReference[] = [
  new ImageReference("https://via.placeholder.com/800x350", "Placeholder", "https://www.google.com", "Google", "https://www.google.com", "Google"),
  new ImageReference("https://via.placeholder.com/800x350", "Placeholder", "https://www.google.com", "Google", "https://www.google.com", "Google"),
  new ImageReference("https://via.placeholder.com/800x350", "Placeholder", "https://www.google.com", "Google", "https://www.google.com", "Google"),
  new ImageReference("https://via.placeholder.com/800x350", "Placeholder", "https://www.google.com", "Google", "https://www.google.com", "Google"),
]

const icons: MediaItem[] = [
  new MediaItem("https://via.placeholder.com/350", "Placeholder", "Lorem brand", "https://www.google.com", "google"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", "Lorem brand", "https://www.google.com", "Googe"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", "Lorem brand", "https://www.google.com", "Goo"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", "Lorem brand", null, "LinkText"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", "Lorem brand", "https://www.google.com", "google"),
]

const contactBrandCards: MediaItem[] = [
  new MediaItem("https://via.placeholder.com/800x350", "Placeholder", null, "https://www.google.com", "google"),
  new MediaItem("https://via.placeholder.com/800x350", "Placeholder", null, "https://www.google.com", "Googe"),
  new MediaItem("https://via.placeholder.com/800x350", "Placeholder", null, "https://www.google.com", "Goo"),
  new MediaItem("https://via.placeholder.com/800x350", "Placeholder", null, null, "LinkText"),
]

const contactHobbyCards: MediaItem[] = [
  new MediaItem("https://via.placeholder.com/350", "Placeholder", null, "https://www.google.com", "google"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", null, "https://www.google.com", "Googe"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", null, "https://www.google.com", "Goo"),
  new MediaItem("https://via.placeholder.com/350", "Placeholder", null, null, "LinkText"),
]
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