<script setup lang="ts">
import { ImageBaseItem } from '~/composables/models/ImageBaseItem';
import { MediaItem } from '~/composables/models/MediaItem';

const birthDate: Date = new Date(2004, 12, 17);
const mySelfImage: ImageBaseItem = new ImageBaseItem("/imgs/me.png", null, "Image of Myself");
const catchphraseText: string = "-jähriger angehender Entwickler mit einer Leidenschaft für Informatik";
const diff = new Date().getFullYear() - birthDate.getFullYear();

const gridContentItems: MediaItem[] = [
  new MediaItem("imgs/me.png", "Titel", "Beschreibung", "https://www.google.com", null, "altText", null, null),
  new MediaItem("imgs/me.png", "Titel", "Beschreibung", "https://www.google.com", null, "altText", null, null),
  new MediaItem("imgs/me.png", "Titel", "Beschreibung", "https://www.google.com", null, "altText", null, null),
  new MediaItem("imgs/me.png", "Titel", "Beschreibung", "https://www.google.com", null, "altText", null, null),
];

function NavigateToAbout() {
  const router = useRouter();
  router.push('/about');
}
</script>

<template>
  <div>
    <LazyHeroBanner :title="'Justin Urbanek - Ich'"
                :subTitle="null"
                :paragraphs="['Willkommen auf meiner persönlichen Webseite! Ich bin Justin Urbanek, ein leidenschaftlicher Informatiklernender im dritten Lehrjahr.', 'Aktuell absolviere ich meine Ausbildung bei der Kauz Informatik Medien AG und besuche das Berufsbildungszentrum BBZW Sursee.']"
                :hasButton="true"
                :isBigView="true"
                :buttonText="'Mehr über mich'"
                @buttonClickEvent="NavigateToAbout"
    />

    <LazyTextCatchphrase :ImageItem="mySelfImage" :Text="catchphraseText" :Age="diff" />

    <LazyGridsContentGrid :title="'Erfahrung'"
                      :main-text="'Im Laufe meiner Ausbildung und beruflichen Tätigkeit habe ich an einer Vielzahl von Projekten gearbeitet, von Schulprojekten, Arbeitsprojekten, privaten Projekten bis hin Hackathon-Projekten. Meine Markanntesten Projekte sind hier einsehbar.'"
                      :mediaItems="gridContentItems"
    />
  </div>
</template>
