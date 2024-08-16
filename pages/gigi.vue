<template>
  <div>
    <LazyHeroBanner :title="'GiGi?'"
                    :subTitle="'GIGI QUEEN.'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => { }" />

    <img src="/imgs/eastereggs/gigi.webp" class="mx-auto h-[47vh]" />
  </div>
</template>