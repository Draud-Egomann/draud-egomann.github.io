<script setup lang="ts">
import type { MediaItem } from '#imports';

defineProps<{
  card: MediaItem;
}>();
</script>

<template>
  <div class="bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto">
    <!-- Image Section -->
    <div class="relative">
      <img :src="card.ImageUrl" :alt="card.ImageAltText ?? ''" :class="card.ImageClass" class="w-full rounded-t-lg">
    </div>

    <div class="p-6 pt-3">
      <!-- Text Section -->
      <div class="mt-4 text-left">
        <h2 class="text-2xl font-bold text-white">
          {{ card.Title }}
        </h2>
        <p class="text-gray-400 mt-2">
          {{ card.Description }}
        </p>
      </div>

      <!-- Button Section -->
      <div v-if="card.HasLink" class="mt-4 text-left">
        <NuxtLink :to="card.LinkUrl ?? '/'" target="_blank" rel="nofollow">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition-transform duration-100 active:scale-95">
            {{ $t('components.source') }}
          </button>
        </NuxtLink>
      </div>
      <div v-else class="p-5"></div>
    </div>
  </div>
</template>