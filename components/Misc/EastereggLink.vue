<script setup lang="ts">
const localePath = useLocalePath();
const randomPositionY = ref(0);
const randomPositionX = ref(0);
const link = ref(["", ""]);

onMounted(() => {
  const fullHeight = document.body.scrollHeight;
  const fullWidth = document.body.scrollWidth;

  randomPositionY.value = rndGenerator.generateBiasedRandom(fullHeight - 68, 0.5, 0.15);
  randomPositionX.value = rndGenerator.generateBiasedRandom(fullWidth, 0.2, 0.2);

  link.value = Math.floor(Math.random() * 2) == 0 ? ["/pepe", "text-green-600", "pepe?"] : ["/gigi", "text-purple-600", "gigi?"];
});

function getStyle() {
  return {
    top: `${randomPositionY.value}px`,
    left: `${randomPositionX.value}px`
  };
}
</script>

<template>
  <NuxtLink :to="localePath(link[0])" rel="nofollow">
    <div :class="link[1]"
      class="absolute z-50 underline font-bold text-xl opacity-0 transition duration-500 hover:opacity-100 hover:cursor-pointer"
      :style="getStyle()">
      {{ link[2] }}
    </div>
  </NuxtLink>
</template>