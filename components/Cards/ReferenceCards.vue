<script setup lang="ts">
import type { MediaItem } from '#imports';

defineProps<{
  cards: MediaItem[];
}>();
</script>

<template>
  <div class="w-full relative bg-ownPrimary">
    <div class="container flex flex-wrap justify-center items-center gap-8 py-12 mx-auto">
      <CardsReferenceCard v-for="card, index in cards" :card="card" data-aos="zoom-in" :data-aos-delay="index * 100" />
    </div>
  </div>
</template>