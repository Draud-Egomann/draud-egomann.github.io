<script setup lang="ts">
import type { ImageReference } from '#imports';

defineProps<{
  imageReference: ImageReference;
}>();
</script>

<template>
  <div class="w-full sm:w-1/3">
    <img :src="imageReference.ImageUrl" :alt="imageReference.ImageAltText ?? ''" :class="imageReference.ImageClass"
      class="mx-auto" aria-hidden="true" />

    <p class="text-white">
      {{ $t('components.imgFrom') }}

    <div v-if="imageReference.ProfileUrl" class="inline-block">
      <NuxtLink :to="imageReference.ProfileUrl" target="_blank" rel="nofollow" class="link">
        {{ imageReference.ProfileName }}
      </NuxtLink>
      <span class="mx-1">{{ $t('components.imgOn') }}</span>
    </div>

    <NuxtLink :to="imageReference.SiteUrl ?? ''" target="_blank" rel="nofollow" class="link">
      {{ imageReference.SiteName }}
    </NuxtLink>
    </p>
  </div>
</template>

<style>
.link {
  @apply text-white underline;
}
</style>