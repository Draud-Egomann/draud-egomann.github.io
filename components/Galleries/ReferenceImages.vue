<script setup lang="ts">
import type { ImageReference } from '#imports';

defineProps<{
  imageReferences: ImageReference[];
}>();
</script>

<template>
  <div class="w-full relative">
    <div class="container flex flex-wrap justify-center items-center gap-8 py-12 mx-auto">
      <GalleriesReferenceImage v-for="imageReference, index in imageReferences" :imageReference="imageReference"
        data-aos="zoom-in" />
    </div>
  </div>
</template>