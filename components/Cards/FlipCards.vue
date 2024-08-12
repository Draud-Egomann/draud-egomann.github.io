<script setup lang="ts">
import type { FlipCardItem } from '#imports';

defineProps<{
  cards: FlipCardItem[]
}>();

const currentCard: Ref<FlipCardItem | null> = ref(null);
const isModalOpen = ref(false);

function HandleCardClicked(clickedCard: FlipCardItem) {
  if (window.innerWidth < 768) {
    currentCard.value = clickedCard;
    isModalOpen.value = true;
    return;
  }
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <div class="w-full relative bg-ownPrimary">
    <div class="container w-full flex flex-wrap justify-center gap-4 py-12 mx-auto">

      <CardsFlipCard v-for="(card, index) in cards" :key="index" :card="card" @onCardClicked="HandleCardClicked" />

      <input type="checkbox" id="my_modal_combined" class="modal-toggle" :checked="isModalOpen" />
      <dialog v-if="isModalOpen" class="modal">
        <div class="modal-box relative bg-gray-700">
          <div class="flex flex-row-reverse justify-between items-center">
            <label for="my_modal_combined" class="btn btn-sm btn-circle btn-ghost text-white/80 text-xl"
              @click="closeModal">✕</label>

            <h3 class="text-xl font-bold text-white text-center md:text-left">{{ currentCard?.FrontText }}</h3>
          </div>

          <div class="my-4 border-b border-gray-100/20"></div>

          <img :src="currentCard?.ImageUrl" :alt="currentCard?.ImageAltText ?? ''" :class="currentCard?.ImageClass"
            class="w-full h-auto rounded-xl" />

          <p class="text-lg sm:text-xl lg:text-3xl text-center text-white">
            {{ currentCard?.BackText }}
          </p>
        </div>
        <label class="modal-backdrop bg-gray-800/80" for="my_modal_combined" @click="closeModal">Close</label>
      </dialog>

    </div>
  </div>
</template>