<script setup lang="ts">
import { CarouselWord } from '~/composables/models/CarouselWord';
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

const frameWorks: CarouselWord[] = [
  new CarouselWord("imgs/me.png", "VueJS", 0, null, "VueJS Logo"),
  new CarouselWord("imgs/me.png", "Ionic", 0, null, "Ionic Logo"),
  new CarouselWord("imgs/me.png", "TailwindCSS", 0, null, "TailwindCSS Logo"),
  new CarouselWord("imgs/me.png", "ASP .NET", 0, null, "ASP .NET Logo"),
  new CarouselWord("imgs/me.png", "WordPress", 0, null, "WordPress Logo"),
]

function NavigateToProjects() {
  const router = useRouter();
  router.push('/projects');
}
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

    <LazyCardsFlipCards :cards="hobbyCards" />

    <LazyTextCarousel :title="'Ich verwende'"
                      :carouselWords="frameWorks"
                      :buttonText="'Meine Projekte ansehen'"
                      @buttonClickEvent="NavigateToProjects"
    />
  </div>
</template>