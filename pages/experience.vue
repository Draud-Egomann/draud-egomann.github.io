<script setup lang="ts">
import { TimelineItem } from '#imports';

const timelineItems: TimelineItem[] = [
  new TimelineItem(new Date(2011, 1, 1), new Date(2020, 6, 27), "Obligatorische Schulzeit", "Obligatorische Schulzeit an der Primarschule und Sekundarschule in Luzern. Abschluss der Sekundarschule im Sommer 2020."),
  new TimelineItem(new Date(2020, 8, 19), new Date(2021, 7, 5), "Zentrum für Brückenangebote (ZBA) Luzern", "Besuch des Zentrums für Brückenangebote (ZBA) in Luzern. Während dieser Zeit konnte ich meine schulischen Leistungen verbessern und mich auf die berufliche Ausbildung vorbereiten."),
  new TimelineItem(new Date(2021, 2, 1), new Date(2025, 8, 1), "Berufliche Ausbildung als Informatiker Applikationsentwicklung (Kauz Informatik Medien AG)", "Berufliche Ausbildung als Informatiker Applikationsentwicklung bei der Kauz Informatik Medien AG in Ballwil. Während der Ausbildung wurde ich mit dem Google Workspace, sämtlichen Front- und Backendtechnologien, sowie der Konzeption und Umsetzung von Webapplikationen vertraut gemacht. Nahen Kundenkontakt gehörte ebenfalls zu meinen Aufgaben."),
  new TimelineItem(new Date(2021, 8, 19), new Date(2025, 7, 5), "Berufsliche Ausbildung als Informatiker Applikationsentwicklung (BBZW Sursee)", "Während dem theoretischen Teil der beruflichen Ausbildung besuche ich das Berufsbildungszentrum für Wirtschaft und Informatik (BBZW) in Sursee. Dort habe ich neben den Grundlagen des Unterrichts, Kenntnisse über Microsoft Office erlangt."),
]

onMounted(() => {
  if (timelineItems.length === 0) {
    throw new Error('Timeline requires at least one item.');
  }
});
</script>

<template>
  <div>
    <LazyHeroBanner :title="'Meine Erfahrung'"
                    :subTitle="'Meine bisherigen Stationen und Erfahrungen.'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => {}"
    />

    <MiscTimeline :timelineItems="timelineItems" />
  </div>
</template>