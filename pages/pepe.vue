<template>
  <div>
    <LazyHeroBanner :title="'Pepe?'"
                    :subTitle="'Pepe.'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => { }" />

    <img src="/imgs/eastereggs/pepe.gif" class="mx-auto w-[52vh]" />

    <div class="text-white text-center my-2">
      Bild von
      <NuxtLink to="https://tenor.com/de/users/%E3%83%AD%E3%83%9F%E3%83%8E%E3%82%B9%E3%83%88%E3%83%A9" class="link">
        ロミノストラ
      </NuxtLink>
      auf
      <NuxtLink to="https://tenor.com/de/view/pepe-the-frog-dancing-gif-20649836" class="link">
        tenor
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply text-white underline;
}
</style>