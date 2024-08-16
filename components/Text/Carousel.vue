<script setup lang="ts">
import type { CarouselWord } from '#imports';

const props = defineProps<{
  title: string;
  carouselWords: CarouselWord[];
  buttonText: string;
}>();
const emits = defineEmits(['buttonClickEvent']);

const animationDuration = 10;
const componentLoaded = ref(false);

onMounted(() => {
  props.carouselWords.forEach((word, index) => {
    word.AnimationDelay = -(animationDuration / props.carouselWords.length * index);
  });
  componentLoaded.value = true;
});

function OnClick() {
  emits('buttonClickEvent');
}
</script>

<template>
  <div class="w-full relative bg-ownSecondary">
    <div class="container flex flex-wrap justify-center items-center gap-8 py-12 mx-auto">
      <div class="w-full text-white text-center text-5xl font-bold">

        {{ title }}

        <div v-if="componentLoaded" class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
          <span v-for="word in carouselWords"
            class="animate-word col-span-full row-span-full flex align-middle justify-center py-4"
            :style="`animation-delay: ${word.AnimationDelay}s;`">
            <span class="my-auto">{{ word.Word }}</span>

            <img :src="word.ImageUrl" :alt="word.ImageAltText ?? ''" :class="word.ImageClass" class="w-16 h-16 ml-4"
              aria-hidden="true" />
          </span>
        </div>
        <div v-else class="relative inline-grid align-middle w-60 h-12 bg-gray-300 rounded animate-pulse"></div>
      </div>

      <button v-if="!stringHelper.IsNullOrEmpty(buttonText)" @click="OnClick"
        class="btn btn-outline mx-auto lg:mx-0 font-medium text-base text-white border-gray-400 rounded-full w-64 px-6"
        data-aos="fade-in">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes word {
  0% {
    transform: translateY(100%);
  }

  15% {
    transform: translateY(-10%);
    animation-timing-function: ease-out;
  }

  20% {
    transform: translateY(0);
  }

  40%,
  100% {
    transform: translateY(-110%);
  }
}

.animate-word {
  animation: word 10s infinite;
}
</style>