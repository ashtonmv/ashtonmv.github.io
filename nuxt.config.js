export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 8000, // default: 3000
    host: 'localhost', // default: localhost,
    timing: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Michael Ashton',
    title: 'Michael Ashton',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/error.vue'),
      })
    },
//    base: '/michael-ashton/',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/textStyles.scss', '~assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxt/content'],

  styleResources: {
    scss: '~assets/scss/*.scss',
  },

  googleFonts: {
    families: {
      'Oldenburg': [400],
      'Fascinate': [400],
    },
    display: 'swap',
  },

  fontawesome: {
    icons: {
      solid: [
        'faHome',
        'faGraduationCap',
        'faAddressCard',
        'faTools',
        'faFileContract',
      ],
      brands: ['faGithubAlt'],
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~assets/variables.scss'],
    theme: { disable: true },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
