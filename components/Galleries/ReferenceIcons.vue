<script setup lang="ts">
import type { MediaItem } from '#imports';

defineProps<{
  icons: MediaItem[];
}>();
</script>

<template>
  <div class="w-full relative">
    <div class="container flex flex-wrap justify-center items-center gap-8 py-12 mx-auto">
      <GalleriesReferenceIcon v-for="icon, index in icons" :icon="icon" data-aos="zoom-in"
        :data-aos-delay="index * 100" />
    </div>
  </div>
</template>