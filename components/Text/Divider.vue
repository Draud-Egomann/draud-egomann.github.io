<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="w-full relative bg-ownPrimary">
    <div class="container flex flex-wrap justify-center items-center gap-8 py-12 mx-auto">
      <div class="w-1/2 h-1 bg-gradient-to-r from-transparent via-gray-700/80 to-transparent my-2 rounded-xl"></div>
      <p class="text-white w-full text-center">
        {{ text }}
      </p>
    </div>
  </div>
</template>