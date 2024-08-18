<script lang="ts" setup>
import type { ImageBaseItem } from '#imports';
import { useCountUpAnimationStore } from '~/stores/CountUpAnimationStore';
import type { Container } from '@tsparticles/engine'

const props = defineProps<{
  ImageItem: ImageBaseItem;
  Text: string;
  Age: number;
}>();

const countUpAnimation = useCountUpAnimationStore();

onMounted(() => {
  countUpAnimation.setNumber(props.Age);
})


const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>

<template>
  <div class="relative text-white flex items-center justify-center lg:min-h-screen">
    <div class="container lg:min-h-screen relative flex justify-center items-center m-8">
      <div class="flex flex-col items-center gap-8">
        <img :src="props.ImageItem.ImageUrl" :alt="props.ImageItem.ImageAltText ?? ''"
          :class="props.ImageItem.ImageClass" class="size-full sm:size-96" data-aos="zoom-in-up" />

        <div class="border-b-8 border-ownAccent w-full lg:w-[40rem]"></div>

        <h2 class="text-3xl text-center mx-4 font-bold italic" data-aos="fade-up" data-aos-duration="500">
          {{ countUpAnimation.counter.number.toFixed(0) }}{{ props.Text }}
        </h2>
      </div>

      <div class=" hidden lg:block absolute top-0 left-0 rotate-180">
        <MiscAngleVector :width="200" :height="200" :strokeColor="'#FD2C4D'" :strokeWidth="16" class=""
          data-aos="fade-right" data-aos-duration="500" />
      </div>
      <div class="hidden lg:block absolute bottom-0 right-0">
        <MiscAngleVector :width="200" :height="200" :strokeColor="'#FD2C4D'" :strokeWidth="16" class=""
          data-aos="fade-right" data-aos-duration="500" />
      </div>
    </div>
    <NuxtParticles id="tsparticles" url="/animationJson/bubbles.json" @load="onLoad" style="z-index: -1;"></NuxtParticles>
  </div>
</template>