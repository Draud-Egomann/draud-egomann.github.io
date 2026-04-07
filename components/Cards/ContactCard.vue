<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import type { AccordionItem } from "#imports";

const props = defineProps<{
  items: AccordionItem[];
}>();

console.log(typeof props.items);
console.log(props.items[0]);

const toast = useToast();
const { t } = useI18n();

function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.add({
        severity: "success",
        summary: t("components.copied"),
        detail: t("components.copiedDetails"),
        life: 3000,
      });
    })
    .catch((err) => {
      console.error("Fehler beim Kopieren: ", err);
      toast.add({
        severity: "error",
        summary: t("components.copyError"),
        detail: t("components.copyErrorDetails"),
        life: 3000,
      });
    });
}
</script>

<template>
  <div>
    <Accordion :activeIndex="0">
      <AccordionPanel v-for="(item, index) in items" :key="index" :value="index">
        <AccordionHeader>
          <span class="font-semibold">{{ item.title }}</span>
        </AccordionHeader>

        <AccordionContent>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p class="text-color-secondary break-all">
              {{ item.contentValue }}
            </p>

            <div class="flex-shrink-0">
              <Button
                v-if="item.contentType === 'text'"
                :label="$t('components.copy')"
                icon="pi pi-copy"
                @click="copyToClipboard(item.contentValue)"
                severity="secondary"
              />

              <NuxtLink
                v-else-if="item.contentType === 'link'"
                :to="item.contentValue"
                target="_blank"
              >
                <Button
                  :label="$t('components.visitLink')"
                  icon="pi pi-external-link"
                  icon-pos="right"
                />
              </NuxtLink>
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>
