<script setup lang="ts">
import { ImageBaseItem, MediaItem } from '#imports';

const localePath = useLocalePath();
const { t } = useI18n();

const birthDate: Date = new Date(2004, 12, 17);
const diff = new Date().getFullYear() - birthDate.getFullYear();

const mySelfImage = new ImageBaseItem("/imgs/me.png", null, t('index.imageOfMyselfAltText'));
const experiences: MediaItem[] = DataProvider.GetExperienceContent();


function NavigateToAbout() {
  const router = useRouter();
  router.push(localePath('/about'));
}
</script>

<template>
  <div>
    <title>{{ $t('index.title') }}</title>

    <LazyHeroBanner :title="$t('index.title')"
                    :subTitle="null"
                    :paragraphs="[$t('index.paragraphs[0]'), $t('index.paragraphs[1]')]"
                    :hasButton="true"
                    :isBigView="true"
                    :buttonText="$t('index.buttonText')"
                    @buttonClickEvent="NavigateToAbout" />

    <LazyTextCatchphrase :ImageItem="mySelfImage"
                         :Text="$t('index.catchphraseText')"
                         :Age="diff" />

    <LazyGridsContentGrid :title="$t('index.experienceTitle')"
                          :main-text="$t('index.experienceMainText')"
                          :mediaItems="experiences" />

    <MiscEastereggLink />
  </div>
</template>
