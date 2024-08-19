<script setup lang="ts">
import type { MediaItem } from '#imports';
import type { Container } from '@tsparticles/engine'

const card: MediaItem[] = DataProvider.GetContactCards();

const onLoad = (container: Container) => {
  container.play()
}
</script>

<template>
  <div>
    <title>{{ $t('myName') }} - {{ $t('contact.title') }}</title>

    <RenderCacheable :max-age="86400">
      <HeroBanner :title="$t('contact.title')" :subTitle="$t('contact.subTitle')" :paragraphs="[]" :hasButton="false"
        :isBigView="false" :buttonText="null" @buttonClickEvent="() => { }" />

      <div class="min-h-[50vh] flex flex-col justify-center">
        <CardsContactCards :cards="card" data-aos="zoom-in" />

        <LazyNuxtParticles id="tsparticles" url="/animationJson/particles.json" @load="onLoad" style="z-index: -1;">
        </LazyNuxtParticles>
      </div>

      <MiscEastereggLink />
    </RenderCacheable>
  </div>
</template>