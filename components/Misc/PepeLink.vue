<script setup lang="ts">
const randomPositionY = ref(0);
const randomPositionX = ref(0);

onMounted(() => {
  const fullHeight = document.body.scrollHeight;
  const fullWidth = document.body.scrollWidth;

  randomPositionY.value = rndGenerator.generateBiasedRandom(fullHeight - 68, 0.5, 0.15);
  randomPositionX.value = rndGenerator.generateBiasedRandom(fullWidth, 0.2, 0.2);
});


function getStyle() {
  return {
    top: `${randomPositionY.value}px`,
    left: `${randomPositionX.value}px`
  };
}
</script>

<template>
  <NuxtLink to="/pepe" rel="nofollow">
    <div
      class="absolute z-50 underline font-bold text-xl text-green-600 opacity-0 transition duration-500 hover:opacity-100 hover:cursor-pointer"
      :style="getStyle()">
      pepe?
    </div>
  </NuxtLink>
</template>