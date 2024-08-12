<script setup lang="ts">
import type { FlipCardItem } from '#imports';

const props = defineProps<{
  card: FlipCardItem;
}>();
const emits = defineEmits(['onCardClicked']);

function setCurrentCard() {
  emits("onCardClicked", props.card);
}
</script>

<template>

  <div class="w-full sm:w-[48%] lg:w-80 h-52 relative flex flex-wrap flip-box">
    <div @click="setCurrentCard" class="tw-front front">
      <p class="w-full tw-content content">
        {{ card.FrontText }}
      </p>

      <fa-icon class="block md:hidden w-full text-3xl text-white" icon="hand-pointer" />
    </div>

    <div class="tw-back back" :style="`background-image: url(${card.ImageUrl});`">
      <p v-if="!stringHelper.IsNullOrEmpty(card.BackText)" class="tw-content content">
        {{ card.BackText }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.flip-box:hover .back {
  transform: rotateY(0deg);
  z-index: 10;
}

.flip-box:hover .front {
  transform: rotateY(180deg);
  z-index: -1;
}

.tw-front,
.tw-back {
  @apply relative flex flex-wrap justify-center items-center flex-grow flex-shrink basis-full bg-cover bg-center bg-gray-600 z-10 rounded-xl p-4 sm:p-0;
}

.back,
.front {
  -webkit-transition: all 1s cubic-bezier(0.5, 1, 0.5, 1);
  transition: all 1s cubic-bezier(0.5, 1.3, 0.5, 1.3);
  transform-style: preserve-3d;
}

.tw-back {
  @apply absolute left-0 top-0 bottom-0 w-full z-[-1] bg-ownSecondary rounded-xl;
}

.back {
  transform: rotateY(-180deg);
}

.tw-content {
  @apply flex flex-col justify-center items-center text-center text-4xl font-light text-white;
}

.content {
  transform: translateZ(50px);
  -webkit-transform: translateZ(50px);
  text-shadow: 0px 0px 2px black;
}
</style>