<script setup lang="ts">
import type { ProjectMenuItem } from '#imports';

const props = defineProps<{
  card: ProjectMenuItem;
  index: number;
}>();
const emits = defineEmits(['buttonClickEvent']);

const card = ref(props.card);

onMounted(() => {
  if (props.index < 0) {
    throw new Error("Index must be greater than 0");
  }

  card.value.Classes = [
    cardBg(props.index),
    btnColor(props.index),
    cardBgBg(props.index)
  ];
});

function onclick() {
  emits('buttonClickEvent');
}

const cardBg = (index: number): string => {
  return index % 2 === 0 ? "from-[#FD2C4D] to-[#FD2C4D50]" : "from-[#0E274C] to-[#0E274C50]";
}
const btnColor = (index: number): string => {
  return index % 2 === 0 ? "btn-first" : "btn-second";
}
const cardBgBg = (index: number): string => {
  return index % 2 === 0 ? "bg-[#930026]" : "bg-[#1c498e]";
}
</script>

<template>
  <div :id="card.Title" class="relative" data-aos="zoom-in">
    <div :class="card.Classes[0]" class="relative z-20 bg-gradient-to-b px-4 lg:px-8 py-12 lg:py-16 rounded-3xl">

      <div class="relative z-20 flex flex-col justify-center items-center gap-4">

        <h3 class="text-3xl font-bold w-full text-white text-center" data-aos="fade-up">
          {{ card.Title }}
        </h3>

        <p class="w-full text-white text-center text-lg" data-aos="fade-up">
          {{ card.Description }}
        </p>

        <button v-if="card.HasMoreInfo" @click="onclick()" :class="card.Classes[1]"
          class="rounded-lg focus:ring-4 font-medium focus:outline-none px-6 py-3.5 text-base text-white"
          data-aos="fade-up">
          Mehr erfahren
        </button>

      </div>
    </div>

    <div :class="card.Classes[2]" class="w-full h-full absolute z-10 top-0 left-0 rounded-3xl rotate-6 lg:rotate-12">
    </div>
  </div>
</template>

<style scoped>
/* needs to be custom classes, otherwise tailwind wont apply it */
.btn-first {
  @apply bg-ownSecondary
}

.btn-second {
  @apply bg-ownAccent
}
</style>