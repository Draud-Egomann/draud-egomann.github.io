<script setup lang="ts">
import { ImageBaseItem } from '~/composables/models/ImageBaseItem';

function NavigateToAbout() {
  const router = useRouter();
  router.push('/about');
}

const birthDate: Date = new Date(2004, 12, 17);
const mySelfImage: ImageBaseItem = new ImageBaseItem("/imgs/me.png", null, "Image of Myself");
const catchphraseText: string = `${new Date().getFullYear() - birthDate.getFullYear()}-jähriger angehender Entwickler mit einer Leidenschaft für Informatik`;
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

    <TextCatchphrase :ImageItem="mySelfImage" :Text="catchphraseText" />
  </div>
</template>
