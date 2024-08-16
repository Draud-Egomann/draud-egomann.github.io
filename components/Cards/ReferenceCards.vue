<script setup lang="ts">
import type { MediaItem } from '#imports';

defineProps<{
  cards: MediaItem[];
}>();
</script>

<template>
  <div class="w-full relative bg-ownPrimary">
    <div class="container flex flex-wrap justify-center items-center gap-8 py-12 mx-auto">
      <CardsReferenceCard v-for="card in cards" :card="card" />
    </div>
  </div>
</template>