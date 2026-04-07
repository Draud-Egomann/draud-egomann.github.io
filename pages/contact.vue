<script setup lang="ts">
import type { AccordionItem } from "#imports";
import type { Container } from "@tsparticles/engine";

const contactData: AccordionItem[] = DataProvider.GetContactCards();

const onLoad = (container: Container) => {
  container.play();
};
</script>

<template>
  <div>
    <title>{{ $t("myName") }} - {{ $t("contact.title") }}</title>

    <RenderCacheable :max-age="86400">
      <HeroBanner
        :title="$t('contact.title')"
        :subTitle="$t('contact.subTitle')"
        :paragraphs="[]"
        :hasButton="false"
        :isBigView="false"
        :buttonText="null"
        @buttonClickEvent="() => {}"
      />

      <div class="min-h-[50vh] flex flex-col justify-center">
        <CardsContactCards :contactData="contactData" />

        <LazyNuxtParticles
          id="tsparticles"
          url="/animationJson/particles.json"
          @load="onLoad"
          style="z-index: -1"
        >
        </LazyNuxtParticles>
      </div>

      
    </RenderCacheable>
  </div>
</template>
