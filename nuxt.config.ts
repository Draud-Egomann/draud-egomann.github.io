import Aura from '@primeuix/themes/aura';
import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // https://tailwindcss.com/docs/guides/nuxtjs
  css: ["~/assets/css/main.css", "primeicons/primeicons.css"],

  // https://nuxt.com/docs/guide/directory-structure/composables
  imports: {
    dirs: ["composables/**"],
  },

  // https://nuxt.com/docs/guide/concepts/modules
  modules: [
    "@vesp/nuxt-fontawesome",
    "@pinia/nuxt", "nuxt-aos",
    "@nuxtjs/i18n",
    'nuxt-particles',
    'nuxt-multi-cache',
    '@primevue/nuxt-module'
  ],

  // https://nuxt-multi-cache.dulnan.net/overview/configuration
  multiCache: {
    component: {
      enabled: true,
    },

    data: {
      enabled: true,
    },

    // Route cache is disabled. But because the `route` property is set the
    // useRouteCache composable is still added to the build, it just doesn't
    // cache.
    route: {
      enabled: false,
    },

    // Log detailled debugging messages, e.g. when items are cached or returned from cache.
    debug: true
  },

  // https://i18n.nuxtjs.org/
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'de', file: 'de.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: resolve('./translations')
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  // https://nuxt.com/modules/nuxt-fontawesome
  fontawesome: {
    // https://github.com/bezumkin/nuxt-fontawesome/tree/main
    component: "fa",
    suffix: true,
    icons: {
      solid: [
        "bars",
        "times",
        "arrow-right",
        "arrow-down",
        "book",
        "copyright",
        "hand-pointer",
        "arrow-up",
        "external-link-square-alt",
        "copy",
        "link",
      ],
      regular: ["user"],
    },
  },

  // https://tailwindcss.com/docs/guides/nuxtjs
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // https://primevue.org/configuration/#theme
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.darkMode',
          cssLayer: false
        }
      }
    }
  }
});