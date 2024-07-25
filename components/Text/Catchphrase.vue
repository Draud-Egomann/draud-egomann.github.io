<script lang="ts" setup>
import type { ImageBaseItem } from '#imports';

const props = defineProps<{
  ImageItem: ImageBaseItem;
  Text: string;
}>();
</script>

<template>
  <div class="bg-ownPrimary text-white flex items-center justify-center lg:min-h-screen">
    <div class="container lg:min-h-screen relative flex justify-center items-center m-8">
      <div class="flex flex-col items-center gap-8">
        <img :src="props.ImageItem.ImageUrl" :alt="props.ImageItem.ImageAltText ?? ''"
          :class="props.ImageItem.ImageClass" class="size-full sm:size-96" />

        <div class="border-b-8 border-ownAccent w-full lg:w-[40rem]"></div>

        <h2 class="text-3xl text-center mx-4 font-bold italic">
          {{ props.Text }}
        </h2>
      </div>

      <MiscAngleVector :width="200" :height="200" :strokeColor="'#FD2C4D'" :strokeWidth="16"
        class="hidden lg:block absolute top-0 left-0 rotate-180" />
      <MiscAngleVector :width="200" :height="200" :strokeColor="'#FD2C4D'" :strokeWidth="16"
        class="hidden lg:block absolute bottom-0 right-0" />
    </div>
  </div>
</template>