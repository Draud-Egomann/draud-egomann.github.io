<script setup lang="ts">
import type { MediaItem } from '#imports';

defineProps<{
  card: MediaItem;
}>();
</script>

<template>
  <div class="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto">
    <!-- Image Section -->
    <div class="relative">
      <img :src="card.ImageUrl" :alt="card.ImageAltText ?? ''" :class="card.ImageClass" class="w-full rounded-lg">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
    </div>

    <!-- Text Section -->
    <div class="mt-4 text-center">
      <h2 class="text-2xl font-bold text-white">
        {{ card.Title }}
      </h2>
      <p class="text-gray-400 mt-2">
        {{ card.Description }}
      </p>
    </div>

    <!-- Button Section -->
    <div class="mt-4 text-center">
      <NuxtLink>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition-transform duration-100 active:scale-95">
          Quelle
        </button>
      </NuxtLink>
    </div>
  </div>
</template>