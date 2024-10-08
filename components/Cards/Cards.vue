<script setup lang="ts">
import type { ProjectMenuItem } from '#imports';
import { ProjectStatus } from '~/composables/enums/ProjectStatus';
import { BadgeColor } from '~/composables/enums/BadgeColor';
import type { Container } from '@tsparticles/engine'

const props = defineProps<{
  cards: ProjectMenuItem[];
  searchItem: ProjectMenuItem | null;
}>();

const { t } = useI18n();
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
      return [BadgeColor.Info, t('components.badgeColors.inProgress')];
    case ProjectStatus.Completed:
      return [BadgeColor.Success, t('components.badgeColors.completed')];
    case ProjectStatus.OnHold:
      return [BadgeColor.Primary, t('components.badgeColors.onHold')];
    case ProjectStatus.Canceled:
      return [BadgeColor.Danger, t('components.badgeColors.canceled')];
    case ProjectStatus.Unknown:
    default:
      return [BadgeColor.Secondary, t('components.badgeColors.unknown')];
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

const onLoad = (container: Container) => {
  container.play()
}
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-around items-center gap-32 lg:gap-16 py-24 overflow-hidden">
      <CardsCard v-for="card, index in cards" :key="index" :class="isSearchItem(index)" class="w-full lg:w-1/2 xl:w-1/3"
        :card="card" :index="index" @buttonClickEvent="selectCard(index)" />
    </div>

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

            <div class="w-full xl:w-2/3 xxl:w-1/2 flex flex-col justify-center items-center gap-4 mt-5">
              <p class="text-lg text-center text-white" data-aos="fade-up">
                {{ currentCard.Description }}
              </p>

              <p class="text-lg text-center text-white" data-aos="fade-up" data-aos-delay="200">
                {{ currentCard.MoreInfoText }}
              </p>

              <MiscBadge :color="badge[0]" :text="badge[1]" data-aos="fade-up" data-aos-delay="400" />

              <div class="w-full flex justify-center gap-4">
                <NuxtLink v-if="!stringHelper.IsNullOrEmpty(currentCard.LinkToLiveSite)"
                  :to="currentCard?.LinkToLiveSite ?? '/'" target="_blank" rel="nofollow" data-aos="fade-up"
                  data-aos-delay="600">
                  <button class="btn btn-outline btn-info">
                    {{ $t('components.visitSite') }}
                    <fa-icon icon="external-link-square-alt" class="ml-2" />
                  </button>
                </NuxtLink>

                <NuxtLink v-if="!stringHelper.IsNullOrEmpty(currentCard.LinkToSourceCode)"
                  :to="currentCard?.LinkToSourceCode ?? '/'" target="_blank" rel="nofollow" data-aos="fade-up"
                  data-aos-delay="600">
                  <button class="btn btn-outline btn-info">
                    {{ $t('components.viewSourceCode') }}
                    <fa-icon icon="external-link-square-alt" class="ml-2" />
                  </button>
                </NuxtLink>

                <div v-else-if="currentCard.LinkToSourceCodes && currentCard.LinkToSourceCodes.length > 0"
                  class="flex flex-wrap justify-center items-center">

                  <NuxtLink v-for="item, index in currentCard.LinkToSourceCodes" :to="item" target="_blank"
                    rel="nofollow" class="w-1/3 m-4 mx-auto flex justify-center" data-aos="fade-up"
                    :data-aos-delay="600 + index * 100">
                    <button class="btn btn-outline btn-info">
                      {{ index + 1 + "." }} {{ $t('components.viewSourceCode') }}
                      <fa-icon icon="external-link-square-alt" class="ml-2" />
                    </button>
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>
        </div>
        <label class="modal-backdrop bg-gray-900/80" for="my_modal_combined" @click="closeModal">Close</label>
      </dialog>
    </div>
    
    <LazyNuxtParticles id="tsparticles" url="/animationJson/particles.json" @load="onLoad"
      style="z-index: -1; position: relative;">
    </LazyNuxtParticles>
  </div>

</template>