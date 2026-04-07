<script setup lang="ts">
import type { ProjectMenuItem } from "#imports";
import { ProjectStatus } from "~/composables/enums/ProjectStatus";
import { BadgeColor } from "~/composables/enums/BadgeColor";
import type { Container } from "@tsparticles/engine";

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
    throw new Error("Cards requires at least one card.");
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
      return [BadgeColor.Info, t("components.badgeColors.inProgress")];
    case ProjectStatus.Completed:
      return [BadgeColor.Success, t("components.badgeColors.completed")];
    case ProjectStatus.OnHold:
      return [BadgeColor.Primary, t("components.badgeColors.onHold")];
    case ProjectStatus.Canceled:
      return [BadgeColor.Danger, t("components.badgeColors.canceled")];
    case ProjectStatus.Unknown:
    default:
      return [BadgeColor.Secondary, t("components.badgeColors.unknown")];
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
  container.play();
};
</script>

<template>
  <div>
    <div
      class="flex flex-wrap justify-around items-center gap-32 lg:gap-16 py-24 overflow-hidden"
    >
      <CardsCard
        v-for="(card, index) in cards"
        :key="index"
        :class="isSearchItem(index)"
        class="w-full lg:w-1/2 xl:w-1/3"
        :card="card"
        :index="index"
        @buttonClickEvent="selectCard(index)"
      />
    </div>

    <!-- modal -->
    <Dialog
      v-if="currentCard"
      v-model:visible="isModalOpen"
      :dismissableMask="true"
      pt:root:class="!border-0 !bg-transparent max-w-full w-full md:w-4/5"
      pt:mask:class="backdrop-blur-sm bg-black/50"
      modal
    >
      <template #container="{ closeCallback }">
        <div
          class="flex flex-col px-8 py-8 gap-6 rounded-2xl bg-gray-600 h-max-[80vh] overflow-auto"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-2xl font-bold text-white text-center md:text-left">
              {{ currentCard.Title }}
            </h3>

            <Button
              @click="closeModal"
              icon="pi pi-times"
              severity="contrast"
              variant="outlined"
            />
          </div>

          <div class="my-4 border-b border-gray-100/20"></div>

          <div
            class="flex flex-col-reverse xl:flex-row-reverse justify-around items-center gap-4"
          >
            <GalleriesImageSlider
              v-if="currentCard?.Slides && currentCard.Slides.length > 0"
              :slides="currentCard.Slides"
            />

            <div
              class="w-full xl:w-2/3 xxl:w-1/2 flex flex-col justify-center items-center gap-4 mt-5"
            >
              <p class="text-lg text-center text-white" data-aos="fade-up">
                {{ currentCard.Description }}
              </p>

              <p
                class="text-lg text-center text-white"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {{ currentCard.MoreInfoText }}
              </p>

              <MiscBadge
                :color="badge[0]"
                :text="badge[1]"
                data-aos="fade-up"
                data-aos-delay="400"
              />

              <div class="w-full flex justify-center gap-4">
                <NuxtLink
                  v-if="!stringHelper.IsNullOrEmpty(currentCard.LinkToLiveSite)"
                  :to="currentCard?.LinkToLiveSite ?? '/'"
                  target="_blank"
                  rel="nofollow"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Button
                    class="!mx-auto lg:!mx-0 !font-medium !text-base !text-white hover:!bg-white hover:!text-black !border-gray-400 !rounded-full !w-64 !px-6 animate-fade-in"
                    severity="secondary"
                    variant="outlined"
                  >
                    {{ $t("components.visitSite") }}
                    <fa-icon icon="external-link-square-alt" class="ml-2" />
                  </Button>
                </NuxtLink>

                <NuxtLink
                  v-if="!stringHelper.IsNullOrEmpty(currentCard.LinkToSourceCode)"
                  :to="currentCard?.LinkToSourceCode ?? '/'"
                  target="_blank"
                  rel="nofollow"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Button
                    class="!mx-auto lg:!mx-0 !font-medium !text-base !text-white hover:!bg-white hover:!text-black !border-gray-400 !rounded-full !w-64 !px-6 animate-fade-in"
                    severity="secondary"
                    variant="outlined"
                  >
                    {{ $t("components.viewSourceCode") }}
                    <fa-icon icon="external-link-square-alt" class="ml-2" />
                  </Button>
                </NuxtLink>

                <div
                  v-else-if="
                    currentCard.LinkToSourceCodes &&
                    currentCard.LinkToSourceCodes.length > 0
                  "
                  class="flex flex-wrap justify-center items-center"
                >
                  <NuxtLink
                    v-for="(item, index) in currentCard.LinkToSourceCodes"
                    :to="item"
                    target="_blank"
                    rel="nofollow"
                    class="w-1/3 m-4 mx-auto flex justify-center"
                    data-aos="fade-up"
                    :data-aos-delay="600 + index * 100"
                  >
                    <Button
                      class="!mx-auto lg:!mx-0 !font-medium !text-base !text-white hover:!bg-white hover:!text-black !border-gray-400 !rounded-full !w-64 !px-6 animate-fade-in"
                      severity="secondary"
                      variant="outlined"
                    >
                      {{ index + 1 + "." }} {{ $t("components.viewSourceCode") }}
                      <fa-icon icon="external-link-square-alt" class="ml-2" />
                    </Button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Dialog>

    <LazyNuxtParticles
      id="tsparticles"
      url="/animationJson/particles.json"
      @load="onLoad"
      style="z-index: -1; position: relative"
    >
    </LazyNuxtParticles>
  </div>
</template>
