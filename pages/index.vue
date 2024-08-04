<script setup lang="ts">
import { ImageBaseItem } from '~/composables/models/ImageBaseItem';

const birthDate: Date = new Date(2004, 12, 17);
const mySelfImage: ImageBaseItem = new ImageBaseItem("/imgs/me.png", null, "Image of Myself");
const catchphraseText: string = "-jähriger angehender Entwickler mit einer Leidenschaft für Informatik";
const diff = new Date().getFullYear() - birthDate.getFullYear();

function NavigateToAbout() {
  const router = useRouter();
  router.push('/about');
}
</script>

<template>
  <div>
    <HeroBanner :title="'Justin Urbanek - Ich'"
                :subTitle="null"
                :paragraphs="['Willkommen auf meiner persönlichen Webseite! Ich bin Justin Urbanek, ein leidenschaftlicher Informatiklernender im dritten Lehrjahr.', 'Aktuell absolviere ich meine Ausbildung bei der Kauz Informatik Medien AG und besuche das Berufsbildungszentrum BBZW Sursee.']"
                :hasButton="true"
                :isBigView="true"
                :buttonText="'Mehr über mich'"
                @buttonClickEvent="NavigateToAbout"
    />

    <TextCatchphrase :ImageItem="mySelfImage" :Text="catchphraseText" :Age="diff" />
  </div>
</template>
