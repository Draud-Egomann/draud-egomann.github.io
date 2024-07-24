<script setup lang="ts">
import HeroBanner from '~/components/HeroBanner.vue';

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
  </div>
</template>
