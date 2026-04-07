<script setup lang="ts">
defineProps<{
  contactData: AccordionItem[];
}>();
</script>

<template>
  <div class="w-full relative bg-ownPrimary">
    <div class="container flex justify-center items-center gap-8 py-12 mx-auto">
      <!-- w-full to get container grid size -->
      <CardsContactCard :items="contactData" class="w-full" />
    </div>
  </div>
</template>
