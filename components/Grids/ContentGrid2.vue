<script setup lang="ts">
import type { MediaItem } from '#imports';

defineProps<{
  title: string;
  mediaItems: MediaItem[];
}>();

const icon = ref('arrow-up');

onMounted(() => {
  icon.value = window.innerWidth < 768 ? 'hand-pointer' : 'arrow-up';
});
</script>

<template>
  <div class="w-full relative bg-ownPrimary">
    <div class="container flex flex-wrap justify-center items-center gap-8 py-12 mx-auto">
      <h2 class="font-bold text-white text-center text-3xl lg:text-4xl my-2" data-aos="fade-up">
        {{ title }}
      </h2>

      <div class="w-full flex flex-wrap justify-center items-center">
        <div v-for="item in mediaItems" class="w-full sm:w-1/2 xl:w-1/4 p-4" data-aos="zoom-in">
          <div class="relative rounded-xl shadow-gray-800 shadow-md hoverable">

            <div
              class="overlay w-full h-full absolute z-20 flex flex-col justify-center items-center bg-gray-800/60 rounded-xl overflow-auto">
              <p class="text-xl text-center text-white mt-16 mb-8 md:mt-0 md:mb-0 mx-4">
                {{ item.Description }}
              </p>
            </div>

            <img :src="item.ImageUrl" :alt="item.ImageAltText ?? ''" class="w-full h-auto rounded-xl" />

            <button class="btn-overlay absolute z-10 left-1/2 top-1/2 p-0">
              <fa-icon :icon="icon"
                class="bg-white text-gray-800 shadow-gray-600 shadow-md rounded-full text-2xl sm:text-3xl py-4 px-5" />
            </button>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.overlay,
.btn-overlay {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.overlay {
  opacity: 0;
  transform: translateY(10px);
  /* This ensures that the overlay does not interfere with clicking when invisible */
  pointer-events: none;
}

.btn-overlay {
  opacity: 1;
  transform: translate(-50%, -50%);
}

.hoverable:hover .overlay {
  opacity: 1;
  transform: translateY(0);
  /* Re-enable pointer events when visible */
  pointer-events: auto;
}

.hoverable:hover .btn-overlay {
  opacity: 0;
  transform: translate(-50%, calc(-50% + 10px));
}
</style>