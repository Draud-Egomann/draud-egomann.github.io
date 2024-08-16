<script setup lang="ts">
import type { TimelineItem } from '#imports';

const timelineItems: TimelineItem[] = DataProvider.GetTimelineItems();

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
    
    <MiscEastereggLink />
  </div>
</template>