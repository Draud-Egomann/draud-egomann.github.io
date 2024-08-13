<script setup lang="ts">
import type { ProjectMenuItem } from '#imports';
import { ProjectStatus } from '~/composables/enums/ProjectStatus';
import { BadgeColor } from '~/composables/enums/BadgeColor';

const props = defineProps<{
  cards: ProjectMenuItem[];
  searchItem: ProjectMenuItem | null;
}>();

const currentCard = ref<ProjectMenuItem | null>(null);
const badge = ref<[BadgeColor, string]>([BadgeColor.Default, ""]);
const isModalOpen = ref(false);

onMounted(() => {
  if (props.cards.length === 0) {
    throw new Error('Cards requires at least one card.');
  }
});

function selectCard(index: number) {
  currentCard.value = props.cards[index];
  badge.value = pickBadgeColor(currentCard.value.ProjectStatus ?? ProjectStatus.Unknown);
  isModalOpen.value = true;
}

function pickBadgeColor(status: ProjectStatus): [BadgeColor, string] {
  switch (status) {
    case ProjectStatus.InProgress:
      return [BadgeColor.Info, "In Bearbeitung"];
    case ProjectStatus.Completed:
      return [BadgeColor.Success, "Abgeschlossen"];
    case ProjectStatus.OnHold:
      return [BadgeColor.Primary, "Pausiert"];
    case ProjectStatus.Canceled:
      return [BadgeColor.Danger, "Abgebrochen"];
    case ProjectStatus.Unknown:
    default:
      return [BadgeColor.Secondary, "Unbekannt"];
  }
}

function isSearchItem(index: number) {
  let classes = "";

  if (props.searchItem != null && props.searchItem.Title == props.cards[index].Title) {
    classes = "glowing-border rounded-3xl";
  }

  return classes;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <div class="flex flex-wrap justify-around items-center own-bg-primary gap-32 lg:gap-16 py-24 overflow-hidden">
    <CardsCard v-for="card, index in cards" :key="index" :class="isSearchItem(index)" class="w-full lg:w-1/2 xl:w-1/3"
      :card="card" :index="index" @buttonClickEvent="selectCard(index)" />

    <!-- modal -->
    <div v-if="currentCard" class="w-full">
      <input type="checkbox" id="my_modal_combined" class="modal-toggle" :checked="isModalOpen" />
      <dialog v-if="isModalOpen" class="modal">
        <div class="modal-box max-w-full w-full md:w-4/5 relative bg-gray-700">
          <div class="flex flex-row-reverse justify-between items-center">
            <label for="my_modal_combined" class="btn btn-sm btn-circle btn-ghost text-white/80 text-xl"
              @click="closeModal">✕</label>

            <h3 class="text-xl font-bold text-white text-center md:text-left">{{ currentCard.Title }}</h3>
          </div>

          <div class="my-4 border-b border-gray-100/20"></div>

          <div class="flex flex-col-reverse xl:flex-row-reverse justify-around items-center gap-4">
            <GalleriesImageCarousel v-if="currentCard?.Slides && currentCard.Slides.length > 0" class="w-full xl:w-1/2"
              :slides="currentCard.Slides" />

            <div class="w-full xl:w-1/2 flex flex-col justify-center items-center gap-4 mt-5">
              <p class="text-lg text-center text-white">
                {{ currentCard.Description }}
              </p>

              <p class="text-lg text-center text-white">
                {{ currentCard.MoreInfoText }}
              </p>

              <MiscBadge :color="badge[0]" :text="badge[1]" />

              <div class="w-full flex justify-center gap-4">
                <a v-if="!stringHelper.IsNullOrEmpty(currentCard.LinkToLiveSite)"
                  :href="currentCard?.LinkToLiveSite ?? '/'" target="_blank" rel="nofollow">
                  <button class="btn btn-outline btn-info">
                    Seite besuchen
                    <fa-icon icon="external-link-square-alt" class="ml-2" />
                  </button>
                </a>

                <a v-if="!stringHelper.IsNullOrEmpty(currentCard.LinkToSourceCode)"
                  :href="currentCard?.LinkToSourceCode ?? '/'" target="_blank" rel="nofollow">
                  <button class="btn btn-outline btn-info">
                    Source Code ansehen
                    <fa-icon icon="external-link-square-alt" class="ml-2" />
                  </button>
                </a>
                <div v-else-if="currentCard.LinkToSourceCodes && currentCard.LinkToSourceCodes.length > 0"
                  class="flex flex-wrap justify-center items-center">

                  <a v-for="item, index in currentCard.LinkToSourceCodes" :href="item" target="_blank" rel="nofollow"
                    class="w-1/3 m-4">
                    <button class="btn btn-outline btn-info">
                      {{ index + "." }} Source Code ansehen
                      <fa-icon icon="external-link-square-alt" class="ml-2" />
                    </button>
                  </a>

                </div>
              </div>

            </div>
          </div>
        </div>
        <label class="modal-backdrop bg-gray-900/80" for="my_modal_combined" @click="closeModal">Close</label>
      </dialog>
    </div>
  </div>

</template>