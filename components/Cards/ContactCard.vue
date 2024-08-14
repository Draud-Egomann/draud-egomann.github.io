<script setup lang="ts">
import type { MediaItem } from '#imports';
import { ref } from 'vue';

defineProps<{
  card: MediaItem;
}>();

const isTextVisible = ref(false);
const isPopoverVisible = ref(false);
const gamerTag = ref("#GamerTag123");

function toggleTextVisibility() {
  isTextVisible.value = !isTextVisible.value;
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    isPopoverVisible.value = true;
    setTimeout(() => {
      isPopoverVisible.value = false;
    }, 2000);
  }).catch(err => {
    console.error("Text konnte nicht kopiert werden: ", err);
  });
}
</script>

<template>
  <div class="relative flex w-full max-w-[26rem] flex-col">
    <div class="relative bg-gradient-to-b from-gray-500 to-gray-700 text-white rounded-xl bg-clip-border shadow-lg">
      <div
        class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img :src="card.ImageUrl" :alt="card.ImageAltText ?? ''" :class="card.ImageClass" />
      </div>
      <div class="p-6">
        <div class="mb-3 flex items-center justify-between">
          <h3 class="block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
            {{ card.Title }}
          </h3>
        </div>
        <p class="block font-sans text-base font-light leading-relaxed text-gray-200 antialiased">
          {{ card.Description }}
        </p>
      </div>
      <div v-if="card.HasLink" class="p-6 pt-3">
        <button @click="toggleTextVisibility"
          class="block w-full select-none rounded-lg bg-ownSecondary py-3.5 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-[#2c5ea8]/20 transition-all hover:shadow-lg hover:shadow-[#2c5ea8]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Zeigen
        </button>
      </div>
      <div v-if="isTextVisible" class="relative p-6 py-3 flex items-center justify-between rounded-b-lg bg-ownSecondary">
        <span class="block font-sans text-lg font-bold tracking-wide leading-relaxed text-white antialiased italic">
          {{ gamerTag }}
        </span>
        <button @click="copyToClipboard(gamerTag)"
          class="ml-4 flex items-center justify-center rounded-lg bg-[#2c5ea8] text-white py-2 px-4 shadow-md hover:bg-[#193a6c] transition-all">
          <fa-icon icon="copy" class="w-6 h-6" />
        </button>

        <!-- Popover -->
        <div v-if="isPopoverVisible"
          class="absolute bottom-full -mb-2 right-6 bg-black text-white text-xs rounded-md py-1 px-2 shadow-lg">
          Kopiert!
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-black">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>