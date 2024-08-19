<template>
  <div>
    <title>Justin Urbanek - GiGi?</title>

    <RenderCacheable :max-age="86400">
      <HeroBanner :title="'GiGi?'"
                  :subTitle="'GIGI QUEEN.'"
                  :paragraphs="[]"
                  :hasButton="false"
                  :isBigView="false"
                  :buttonText="null"
                  @buttonClickEvent="() => { }" />
      
      <img src="/imgs/eastereggs/gigi.webp" class="mx-auto h-[47vh]" />
    </RenderCacheable>
  </div>
</template>