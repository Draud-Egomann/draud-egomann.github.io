<script lang="ts" setup>
import type { MediaItem } from '#imports';

const props = defineProps<{
  title: string;
  mainText: string;
  mediaItems: MediaItem[];
}>();

const localePath = useLocalePath();

const justifyWithIndex = (index: number): string => {
  return index % 2 == 0 ? 'lg:justify-end' : 'lg:justify-start';
}
</script>

<template>
  <div class="w-full relative bg-ownSecondary px-8">
    <div class="container flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 py-12 mx-auto">
      <div class="w-full lg:w-1/4 flex flex-col items-center gap-8 px-12 lg:px-0">
        <h2 class="text-3xl text-center text-white mx-4 font-bold" data-aos="fade-up">
          {{ title }}
        </h2>

        <p class="w-full lg:max-w-md text-center lg:text-left text-white" data-aos="fade-right">
          {{ mainText }}
        </p>
      </div>

      <div class="w-full lg:w-3/4 flex flex-wrap justify-center">

        <div v-for="item in props.mediaItems" class="w-full sm:w-1/2 p-4 md:p-8 flex justify-center items-center"
          :class="justifyWithIndex(props.mediaItems.indexOf(item))" data-aos="zoom-in">
          <div class="relative bg-gray-600 rounded-lg w-full max-w-[368px] h-[256px] overflow-hidden">

            <NuxtLink :to="localePath(item.LinkUrl ?? '/')">
              <button class="relative w-full h-full rounded-lg overflow-hidden p-8">
                <!-- Separate text and image to separate hover effects -->
                <div :class="item.ImageClass" :style="`background-image: url(${item.ImageUrl});`"
                  class="absolute inset-0 bgImgParallax transform-gpu duration-300 hover:scale-125">
                </div>

                <div v-if="!stringHelper.IsNullOrEmpty(item.Title)"
                  class="absolute bottom-8 left-8 flex items-center gap-4">
                  <fa-icon icon="arrow-right" class="text-white" />

                  <p class="text-xl text-white">
                    {{ item.Title }}
                  </p>
                </div>
              </button>
            </NuxtLink>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>