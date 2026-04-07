<script setup lang="ts">
import { ref } from "vue";
import type { MediaItem } from "#imports";

defineProps<{
  slides: MediaItem[];
}>();

const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "991px",
    numVisible: 3,
  },
  {
    breakpoint: "575px",
    numVisible: 2,
  },
]);
</script>

<template>
  <div v-if="slides && slides.length > 0" class="card">
    <Galleria
      :value="slides"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      containerStyle="max-width: 850px"
      :circular="true"
      :autoPlay="true"
      :transitionInterval="5000"
    >
      <template #item="slotProps">
        <div class="main-slide-item">
          <img
            :src="slotProps.item.ImageUrl"
            :alt="slotProps.item.ImageAltText ?? ''"
            :class="slotProps.item.ImageClass"
            class="main-image main-slide-item"
          />

          <div v-if="slotProps.item.Description" class="description-bar">
            <p>{{ slotProps.item.Description }}</p>
          </div>
        </div>
      </template>

      <template #thumbnail="slotProps">
        <div class="thumbnail-item">
          <img
            :src="slotProps.item.ThumbnailUrl ?? slotProps.item.ImageUrl"
            :alt="slotProps.item.ThumbnailAltText ?? ''"
            class="thumbnail-image"
          />
        </div>
      </template>
    </Galleria>
  </div>
  <div v-else>
    <p>Es sind keine Bilder für das Karussell vorhanden.</p>
  </div>
</template>

<style scoped>
.main-slide-item {
  aspect-ratio: 16 / 9;
  background-color: #1f2937; /* A slightly darker gray */
  position: relative;
  display: flex;
}

.main-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.description-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: rgba(55, 65, 81, 0.8); /* bg-gray-700 with some transparency */
  color: white;
  text-align: center;
  padding: 0.25rem; /* p-1 */
  /* Remove the border, as positioning it over the image is cleaner */
}

.description-bar p {
  font-weight: bold;
  font-size: 1.125rem; /* text-lg */
  margin: 0.25rem 0; /* my-1 */
}

.thumbnail-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}

:deep(.p-galleria-thumbnail-item) {
  border-left: 1px solid white;
  border-right: 1px solid white;
}
</style>
