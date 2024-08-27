<template>
  <div>
    <title>Pepe?</title>

    <RenderCacheable :max-age="86400">
      <HeroBanner :title="'Pepe?'" :subTitle="'Pepe.'" :paragraphs="[]" :hasButton="false" :isBigView="false"
        :buttonText="null" @buttonClickEvent="() => { }" />

      <img src="/imgs/eastereggs/pepe.gif" class="mx-auto w-[52vh]" />
    </RenderCacheable>
  </div>
</template>