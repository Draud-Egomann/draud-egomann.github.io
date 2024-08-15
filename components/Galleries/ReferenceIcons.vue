<script setup lang="ts">
import type { MediaItem } from '#imports';

defineProps<{
  icons: MediaItem[];
}>();
</script>

<template>
  <div class="w-full relative own-bg-primary">
    <div class="container flex flex-wrap justify-center items-center gap-8 py-12 mx-auto">
      <GalleriesReferenceIcon v-for="icon in icons" :icon="icon" />
    </div>
  </div>
</template>