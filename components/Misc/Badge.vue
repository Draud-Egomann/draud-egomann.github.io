<script setup lang="ts">
import { BadgeColor } from '~/composables/enums/BadgeColor';

defineProps<{
  text: string;
  color: BadgeColor;
}>();
</script>

<template>
  <div :class="color" class="tw-badge">
    {{ text }}
  </div>
</template>

<style scoped>
.tw-badge {
  @apply inline-flex items-center justify-center transition-transform duration-200 h-5 text-xs font-bold py-3 px-4 rounded-md;
}

.primary {
  @apply bg-violet-600 text-white;
}

.secondary {
  @apply bg-slate-300 text-black;
}

.success {
  @apply bg-emerald-600 text-white;
}

.danger {
  @apply bg-red-500 text-white;
}

.warning {
  @apply bg-[#ffa800] text-black;
}

.info {
  @apply bg-sky-500 text-white;
}

.light {
  @apply bg-slate-200 text-black;
}

.dark {
  @apply bg-black text-white;
}
</style>
