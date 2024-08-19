<script setup lang="ts">
import type { FlipCardItem } from '#imports';
import type { Container } from '@tsparticles/engine'

defineProps<{
  cards: FlipCardItem[]
}>();

const animateJsonUrl = ref("");

onMounted(() => {
  const width = window.innerWidth;

  if (width < 768) animateJsonUrl.value = '/animationJson/parallax_withoutHover.json'
  else animateJsonUrl.value = '/animationJson/parallax.json'
})

const onLoad = (container: Container) => {
  container.play()
}
</script>

<template>
  <div class="w-full relative">
    <div class="container w-full flex flex-wrap justify-center gap-4 py-12 mx-auto">

      <CardsFlipCard v-for="(card, index) in cards" :key="index" :card="card" :index="index" />

      <NuxtParticles id="tsparticles" :url="animateJsonUrl" @load="onLoad" style="z-index: -1;">
      </NuxtParticles>

    </div>
  </div>
</template>