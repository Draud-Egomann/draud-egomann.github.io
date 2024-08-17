<script setup lang="ts">
import type { TimelineItem } from '#imports';

const { t } = useI18n();
const timelineItems: TimelineItem[] = DataProvider.GetTimelineItems(t);

onMounted(() => {
  if (timelineItems.length === 0) {
    throw new Error('Timeline requires at least one item.');
  }
});
</script>

<template>
  <div>
    <title>{{ $t('myName') }} - {{ $t('about.title') }}</title>

    <LazyHeroBanner :title="$t('about.title')"
                    :subTitle="$t('about.subTitle')"
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