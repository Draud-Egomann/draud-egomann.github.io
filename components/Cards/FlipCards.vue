<script setup lang="ts">
import type { FlipCardItem } from '#imports';

defineProps<{
  cards: FlipCardItem[]
}>();

let currentCard: FlipCardItem;

function HandleCardClicked(clickedCard: FlipCardItem) {
  currentCard = clickedCard;
}
</script>

<template>
  <div class="w-full relative bg-ownPrimary">
    <div class="container flex flex-wrap lg:flex-nowrap justify-around items-center gap-8 py-12 mx-auto">

      <div class="w-full flex flex-wrap justify-center lg:justify-center gap-4">
        <span v-for="card in cards">
          <CardsFlipCard :card="card" @onCardClicked="HandleCardClicked" />
        </span>
      </div>

    </div>
  </div>
</template>