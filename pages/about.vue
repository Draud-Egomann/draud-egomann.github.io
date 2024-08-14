<script setup lang="ts">
import { CarouselWord } from '~/composables/models/CarouselWord';
import { FlipCardItem } from '~/composables/models/FlipCardItem';
import { MediaItem } from '~/composables/models/MediaItem';

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

const hobbies: MediaItem[] = [
  new MediaItem("imgs/me.png", "Kreatives Schreiben", "Meine grösste Leidenschaft widmet sich dem kreativen Schreiben. Ich habe herausgefunden, dass das Verfassen und Ausdenken von Geschichten das ist, was mich persönlich am meisten erfüllt. Momentan schreibe ich nur kleinere Werke oder Konzepte.", null, null, "Kreatives Schreiben"),
  new MediaItem("imgs/me.png", "Programmieren und Coden", "Programmieren ist ein Hobby, mit dem man seine Freizeit sinnvoll verbringen kann und das auch Teil des Berufs sein kann. Ich programmiere gerne das Frontend, aber auch die Backend-Logik von Websites. Die Sprachen, die ich benutze, sind C#, JS/TS, Python und leider auch PHP 😪.", null, null, "Programmieren und Coden"),
  new MediaItem("imgs/me.png", "Gaming", "Ich bin das, was man als leidenschaftlichen Gamer bezeichnen würde, auch wenn ich immer weniger Zeit habe, dieser Leidenschaft nachzugehen. Meine Lieblingsgenres sind RPGs, Hack'n'Slay und MMOs und glaube an die PC-Supremacy.", null, null, "Gaming"),
  new MediaItem("imgs/me.png", "Lesen", "Ein immer mehr aufkommendes Hobby ist das Lesen. Ich lese gerne Bücher, um meinen Wortschatz zu erweitern und um mich in andere Welten zu versetzen. Meine Lieblingsgenres sind Fantasy, Sci-Fi und Thriller.", null, null, "Lesen"),
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

    <LazyGridsContentGrid3 :title="'Meine Freizeitaktivitäten'" :mediaItems="hobbies" />

    <MiscPepeLink />
  </div>
</template>