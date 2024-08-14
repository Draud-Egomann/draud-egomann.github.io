<script setup lang="ts">
import type { MediaItem } from '#imports';

defineProps<{
  cards: MediaItem[];
}>();
</script>

<template>
  <div class="w-full relative bg-ownPrimary">
    <div class="container flex flex-wrap justify-around items-start py-12 mx-auto">
      <CardsContactCard v-for="card in cards" :card=card class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4" />
    </div>
  </div>
</template>