<script setup lang="ts">
import type { MediaItem } from '#imports';

defineProps<{
  icon: MediaItem;
}>();
</script>

<template>
  <div class="w-full sm:w-[240px] h-[188px] bg-gray-600 p-6 rounded-lg shadow-lg text-center">

    <div class="mb-4">
      <img :src="icon.ImageUrl" :alt="icon.ImageAltText ?? ''" :class="icon.ImageClass" class="h-24 w-24 mx-auto">
    </div>

    <div>
      <NuxtLink :to="icon.LinkUrl ?? '/'" target="_blank" rel="nofollow"
        class="p-2 rounded-lg text-lg font-medium text-blue-300 hover:text-blue-700 active:text-blue-700 bg-transparent hover:bg-white active:bg-white">
        {{ icon.Description }}
      </NuxtLink>
    </div>

  </div>
</template>