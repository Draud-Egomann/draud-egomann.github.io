<script setup lang="ts">
import type { ImageReference, MediaItem } from '#imports';

const { t } = useI18n();
const imageReferences: ImageReference[] = DataProvider.GetReferencesImages(t);
const icons: MediaItem[] = DataProvider.GetReferencesBrandLogos();
const contactBrandCards: MediaItem[] = DataProvider.GetReferencesContactBrandLogos();
const contactHobbyCards: MediaItem[] = DataProvider.GetReferencesHobbyCards(t);
</script>

<template>
  <div>
   <title>{{ $t('myName') }} - {{ $t('references.title') }}</title>

    <LazyHeroBanner :title="$t('references.title')"
                    :subTitle="$t('references.subTitle')"
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

    <TextDivider :text="$t('references.dividerText')" />
  </div>
</template>