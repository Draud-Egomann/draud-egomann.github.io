<script setup lang="ts">
import type { MediaItem } from '#imports';

const props = defineProps<{
  slides: MediaItem[];
}>();

const hasMultipleSlides = computed(() => props.slides.length > 1);
const currentSlideIndex = ref(0);

onMounted(() => {
  if (props.slides.length === 0) {
    throw new Error('ImageCarousel requires at least one slide.');
  }

  setInterval(() => {
    nextSlide();
  }, 5000);
});

function nextSlide() {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % props.slides.length;
}

function previousSlide() {
  if (currentSlideIndex.value === 0) {
    currentSlideIndex.value = props.slides.length - 1;
  } else {
    currentSlideIndex.value--;
  }
}

function setCurrentSlide(index: number) {
  currentSlideIndex.value = index;
}

function toggleOpacity(index: number) {
  return currentSlideIndex.value === index ? 'opacity: 1;' : 'opacity: 0.6;';
}

function getThumbnailWidth(slidesCount: number) {
  let percentage = 100 / slidesCount;

  return `width: ${percentage}%;`;
}

function slideStyle(index: number) {
  return `${toggleOpacity(index)}; ${getThumbnailWidth(props.slides.length)}`;
}
</script>

<template>
  <div class="relative">
    <!--
      It's important to aknowledge that if you test the UI you have to test it with real mobile devices
      (or real simulators), because the browser's responsive design mode is not accurate.
    -->
    <div>
      <img class="w-full object-cover" :src="slides[currentSlideIndex].ImageUrl"
        :alt="slides[currentSlideIndex].ImageAltText ?? ''" :class="slides[currentSlideIndex].ImageClass" />
    </div>

    <div v-if="hasMultipleSlides">
      <button class="carousel-control left" @click="previousSlide">&#10094;</button>
      <button class="carousel-control right" @click="nextSlide">&#10095;</button>
    </div>

    <div class="text-center bg-gray-700 text-white p-1">
      <p class="font-bold text-white text-lg my-1">{{ slides[currentSlideIndex].Description }}</p>
    </div>

    <div v-if="hasMultipleSlides" class="w-full">
      <img v-for="slide, index in slides" @click="setCurrentSlide(index)" :style="slideStyle(index)"
        :src="slide.ThumbnailUrl ?? ''" :alt="slide.ThumbnailAltText ?? ''" class="thumbnail" />
    </div>
  </div>
</template>

<style scoped>
.carousel-control {
  position: absolute;
  top: 50%;
  padding: 10px;
  color: white;
  font-size: 24px;
  user-select: none;
  background-color: rgba(128, 128, 128, 0.5);
  border: none;
  cursor: pointer;
}

.carousel-control.left {
  left: 0;
  border-radius: 0 3px 3px 0;
}

.carousel-control.right {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.thumbnail {
  float: left;
  height: 100px;
  cursor: pointer;
  object-fit: cover;
}
</style>