<template>
  <div>
    <LazyHeroBanner :title="'Pepe?'"
                    :subTitle="'Pepe.'"
                    :paragraphs="[]"
                    :hasButton="false"
                    :isBigView="false"
                    :buttonText="null"
                    @buttonClickEvent="() => { }" />

    <img src="https://c.tenor.com/3kPGZrOLeiUAAAAC/tenor.gif" class="mx-auto"/>
  </div>
</template>