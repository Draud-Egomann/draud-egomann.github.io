<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'darkMode'
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage class="sm:pt-[4.25rem]" />
      <Toast />
    </NuxtLayout>
  </div>
</template>
