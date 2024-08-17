<script setup lang="ts">
const route = useRoute();
const localePath = useLocalePath()
const { locale, setLocale, t } = useI18n()
const isNavBarOpen: Ref<boolean> = ref(false);
const navLinks = DataProvider.GetNavBarLinks(t);

const languages: Ref<string[]> = ref([
  "de",
  "en",
]);
const currentLanguage: Ref<string> = ref(locale);

function changeLanguage(lang: string) {
  setLocale(lang);
}

function toggleNavBar() {
  isNavBarOpen.value = !isNavBarOpen.value;
}

const navBarClass = computed(() => isNavBarOpen.value ? 'flex' : 'hidden lg:block');
const navBarIcon = computed(() => isNavBarOpen.value ? 'times' : 'bars');
</script>

<template>
  <nav class="w-full sm:fixed z-40 bg-ownPrimary text-white sm:px-8 shadow-md shadow-gray-800">
    <div class="flex flex-col sm:flex-row justify-between items-center container py-2 lg:py-4 mx-auto">
      <p class="inline text-3xl font-bold text-white my-4 sm:my-0">
        {{ $t('myName') }}
      </p>

      <div class="flex items-center gap-8">
        <div :class="navBarClass" class="navbar-content flex-col lg:flex-row">
          <NuxtLink v-for="navLink in navLinks" :to="localePath(navLink[1])"
            :class="navLink[1] === route.path ? 'navbar-btn-active' : 'navbar-btn'"
            class="my-2 lg:my-0 mx-2 px-4 py-2 rounded-md">
            {{ navLink[0] }}
          </NuxtLink>

          <select v-model="currentLanguage" class="w-20 inline px-4 py-2 rounded-md navbar-btn-active">
            <option v-for="language in languages" @click="changeLanguage(language)" v-bind:value="language">
              {{ language.toUpperCase() }}
            </option>
          </select>
        </div>

        <button @click="toggleNavBar" class="block lg:hidden navbar-btn px-4 p-2 rounded-md">
          <fa-icon :icon="navBarIcon" class="text-[1.75rem] sm:text-[2rem]" />
        </button>
      </div>
    </div>
  </nav>
</template>