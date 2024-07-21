<script setup lang="ts">
let myName: string = "Justin Urbanek";
let navLinks: [string, string][] = [
  ["Home", "/"],
  ["Über mich", "/about"],
  ["Erfahrung", "/experience"],
  ["Projekte", "/projects"],
  ["Kontakt", "/contact"],
];

let isNavBarOpen: Ref<boolean> = ref(false);
let languages: Ref<string[]> = ref([
  "de-CH",
  "en-US",
]);
let currentLanguage: Ref<string> = ref(languages.value[0]);

function toggleNavBar() {
  isNavBarOpen.value = !isNavBarOpen.value;
}
</script>

<template>
  <nav class="w-full sm:fixed z-40 bg-ownPrimary text-white sm:px-8 shadow-md shadow-gray-800">
    <div class="flex flex-col sm:flex-row justify-between items-center container py-4">
      <p class="inline text-3xl sm:text-4xl font-bold text-white my-4 sm:my-0">
        {{ myName }}
      </p>

      <div class="flex items-center gap-8">
        <div :class="isNavBarOpen ? 'flex' : 'hidden lg:block'" class="navbar-content flex-col lg:flex-row">
          <NuxtLink v-for="navLink in navLinks" :to="navLink[1]"
            class="navbar-btn my-2 lg:my-0 mx-2 px-4 py-2 rounded-md">
            {{ navLink[0] }}
          </NuxtLink>

          <select v-model="currentLanguage" class="w-20 inline px-4 py-2 rounded-md navbar-btn-active">
            <option v-for="language in languages" v-bind:value="language">
              {{ language.substring(0, 2).toUpperCase() }}
            </option>
          </select>
        </div>

        <button @click="toggleNavBar" class="block lg:hidden navbar-btn px-4 p-2 rounded-md">
          <fa-icon :icon="!isNavBarOpen ? 'bars' : 'times'" class="text-[1.75rem] sm:text-[2rem]" />
        </button>
      </div>
    </div>
  </nav>
</template>