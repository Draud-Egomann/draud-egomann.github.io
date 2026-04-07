<template>
  <div>
    <RenderCacheable :max-age="86400">
      <MainLayoutHeader />
    </RenderCacheable>
    <slot class="sm:pt-[4.25rem]" />
    <RenderCacheable :max-age="86400">
      <MainLayoutFooter />
    </RenderCacheable>
  </div>
</template>