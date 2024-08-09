<script setup lang="ts">
import { FlipCardItem } from '~/composables/models/FlipCardItem';	

const hobbyCards: FlipCardItem[] = [
  new FlipCardItem("imgs/me.png", "Mein Wohnort"),
  new FlipCardItem("imgs/me.png", "Mein Beruf"),
  new FlipCardItem("imgs/me.png", "Meine Lieblingsfarbe"),
  new FlipCardItem("imgs/me.png", "Mein Lieblingsessen"),
  new FlipCardItem("imgs/me.png", "Mein Liebslingstier"),
  new FlipCardItem("imgs/me.png", "Meine Lieblingsjahreszeit"),
  new FlipCardItem("imgs/me.png", "Mein Lieblingsgetränk"),
];
</script>

<template>
  <div>
    <LazyHeroBanner :title="'Über mich'"
                    :subTitle="'Krume Tastatur, krummer Rücken, Krume Finger'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => {}"
    />

    <CardsFlipCards :cards="hobbyCards" />
  </div>
</template>