<script setup lang="ts">
import type { ImageReference } from '#imports';

defineProps<{
  imageReferences: ImageReference[];
}>();
</script>

<template>
  <div class="w-full relative bg-ownPrimary">
    <div class="container flex flex-wrap justify-center items-center gap-8 py-12 mx-auto">
      <GalleriesReferenceImage v-for="imageReference in imageReferences" :imageReference="imageReference" />
    </div>
  </div>
</template>