<script setup lang="ts">
import type { ImageReference, MediaItem } from '#imports';
import type { Container } from '@tsparticles/engine'

const { t } = useI18n();
const imageReferences: ImageReference[] = DataProvider.GetReferencesImages(t);
const icons: MediaItem[] = DataProvider.GetReferencesBrandLogos();
const contactBrandCards: MediaItem[] = DataProvider.GetReferencesContactBrandLogos();
const contactHobbyCards: MediaItem[] = DataProvider.GetReferencesHobbyCards(t);

const onLoad = (container: Container) => {
  container.play()
}
</script>

<template>
  <div>
    <title>{{ $t('myName') }} - {{ $t('references.title') }}</title>

    <RenderCacheable :max-age="86400">

      <HeroBanner :title="$t('references.title')" :subTitle="$t('references.subTitle')" :paragraphs="[]"
        :hasButton="false" :isBigView="false" :buttonText="null" @buttonClickEvent="() => { }" />

      <div>
        <GalleriesReferenceImages :imageReferences="imageReferences" />

        <GalleriesReferenceIcons :icons="icons" />

        <CardsReferenceCards :cards="contactBrandCards" />

        <CardsReferenceCards :cards="contactHobbyCards" />

        <LazyNuxtParticles id="tsparticles" url="/animationJson/particles.json" @load="onLoad"
          style="z-index: -1; position: relative">
        </LazyNuxtParticles>
      </div>

      <TextDivider :text="$t('references.dividerText')" />
    </RenderCacheable>
  </div>
</template>