<script setup lang="ts">
import type { TimelineItem } from '#imports';
import type { Container } from '@tsparticles/engine'

const props = defineProps<{
  timelineItems: TimelineItem[];
}>();

const timeline = ref<TimelineItem[]>([]);

onMounted(() => {
  timeline.value = props.timelineItems.sort((a, b) => a.StartYear.getTime() - b.StartYear.getTime());

  timeline.value.forEach((item, index) => {
    item.Classes = [
      getContainerClass(index),
      getContentClass(index),
      getYearContainerClass(index),
      getDescriptionContainerClass(index)
    ];
  });
});

const getContainerClass = (index: number): string => {
  return index % 2 === 0 ? "left" : "right";
}
const getContentClass = (index: number): string => {
  return index % 2 === 0 ? "hover:-translate-x-2 lg:hover:translate-x-2" : "hover:-translate-x-2";
}
const getYearContainerClass = (index: number): string => {
  return index % 2 === 0 ? "rounded-l-full lg:rounded-l-none lg:rounded-r-full bg-gradient-to-bl lg:bg-gradient-to-br" : "rounded-l-full bg-gradient-to-bl";
}
const getDescriptionContainerClass = (index: number): string => {
  return index % 2 === 0 ? "sm:mr-2 ml-8 lg:mr-8 lg:ml-2" : "sm:mr-2 ml-8";
}

const onLoad = (container: Container) => {
  container.play()
}
</script>

<template>
  <div class="w-full py-12">
    <div class="timeline relative container overflow-hidden py-24">

      <div v-for="item in timeline" :class="item.Classes[0]" class="timeline-container z-10" data-aos="fade-up">
        <div :class="item.Classes[1]" class="content duration-500">

          <div :class="item.Classes[2]"
            class="w-full h-auto relative z-20 text-lg text-center text-white from-[#fd2c4d] to-[rgb(253, 44, 77, 28.39)] py-2 px-2 shadow-lg">
            <h3 class="w-full font-bold text-3xl text-white text-center">
              <span>
                {{ item.StartYear.getFullYear() }}

                <span v-if="item.StartYear.getFullYear() != item.EndYear.getFullYear()">
                  - {{ item.EndYear.getFullYear() }}
                </span>
              </span>
            </h3>
          </div>

          <div :class="item.Classes[3]"
            class="relative z-10 py-4 px-2 text-black text-center bg-white ring-1 ring-medium-200 shadow-lg rounded-b-lg">
            <p class="font-bold">
              {{ item.Title }}
            </p>

            <p class="mt-2 font-light text-gray-700">
              {{ item.Description }}
            </p>
          </div>

        </div>
      </div>

      <NuxtParticles id="tsparticles" url="/animationJson/particles.json" @load="onLoad"
        style="z-index: -1;">
      </NuxtParticles>

    </div>
  </div>
</template>

<style scoped>
/* The actual timeline (the vertical ruler) */
.timeline {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 0.5rem;
  background-color: rgb(226, 156, 51);
  top: 0;
  bottom: 0;
  left: 50%;
  border-radius: 8px;
  transform: translateX(-50%);
}

/* Container around content */
.timeline-container {
  padding: 10px 40px;
  position: relative;
  width: 50%;
}

/* The circles on the timeline */
.timeline-container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -13px;
  background-color: var(--accent);
  border: 4px solid white;
  top: 20px;
  border-radius: 50%;
  z-index: 1;
}

.left {
  left: 0;
}

.right {
  left: 50%;
  margin-left: 4px;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

.content {
  background-color: transparent;
  position: relative;
}

@media screen and (max-width: 1024px) {

  /* Place the timeline to the left */
  .timeline::after {
    left: 31px;
  }

  .timeline-container {
    width: 100%;
    padding-left: 60px;
    padding-right: 20px;
  }

  .timeline-container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  .left {
    margin-left: 4px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>