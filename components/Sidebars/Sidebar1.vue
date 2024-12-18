<script lang="ts" setup>
import type { ImageBaseItem, SocialLink } from '#imports';

const props = defineProps<{
  profileImage: ImageBaseItem;
  title: string;
  description: string;
  socialLinks: SocialLink[];
}>();
</script>

<template>
  <aside class="top-16 sticky h-fit w-full lg:w-1/4 rounded p-6 mb-6 lg:mb-0">
    <div class="text-left">
      <div class="size-24 lg:size-60 mx-auto bg-gray-300 rounded-full">
        <img :src="profileImage.ImageUrl" :alt="profileImage.ImageAltText ?? ''" :class="profileImage.ImageClass"
          class="rounded-full" />
      </div>
      <h2 class="text-xl text-white font-semibold mt-4">
        {{ title }}
      </h2>
      <p class="text-sm text-gray-400 mt-2">
        {{ description }}
      </p>

      <ul class="mt-6 text-gray-400">
        <li v-for="link in socialLinks" class="mt-1 flex items-center justify-left gap-2">
          <fa-icon :icon="link.Icon" class="text-white w-5" />

          <NuxtLink v-if="link.HasLink" :to="link.LinkUrl ?? '/'" class="text-gray-400" target="_blank" rel="nofollow">
            {{ link.Name }}
          </NuxtLink>
          <span v-else>
            {{ link.Name }}
          </span>
        </li>
      </ul>
    </div>
  </aside>
</template>