<script setup lang="ts">
import type { FlipCardItem } from '#imports';
import type { Container } from '@tsparticles/engine'

defineProps<{
  cards: FlipCardItem[]
}>();

const onLoad = (container: Container) => {
  container.play()
}
</script>

<template>
  <div class="w-full relative">
    <div class="container w-full flex flex-wrap justify-center gap-4 py-12 mx-auto">

      <CardsFlipCard v-for="(card, index) in cards" :key="index" :card="card" :index="index" />

      <LazyNuxtParticles id="tsparticles" url="/animationJson/parallax.json" @load="onLoad" style="z-index: -1;">
      </LazyNuxtParticles>

    </div>
  </div>
</template>