import colors from 'vuetify/es5/util/colors'
// import '@mdi/font/css/materialdesignicons.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-test',
    title: 'nuxt-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      { src: '~/plugins/vuetify-mask.js' },
    // 'plugins/vuetify.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
  // Equivalent to { path: '~/components' }
    { path: '~/components' },
    { path: '~/components/portfolio', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/eslint-module', { fix: true }],
    '@nuxtjs/vuetify',
  ],

    // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  authURL: 'http://127.0.0.1:8000/auth/',

  auth: {
  redirect: {
     login: '/',
     logout: '/login',
     callback: '/login',
     home: '/'
   },
   strategies: {
     local: {
       token: {
         property: 'access_token',
         global: true,
         // type: 'Bearer'
     },
       endpoints: {
         login: { url: 'http://127.0.0.1:8000/auth/login', method: 'post', propertyName: 'access_token' },
         user: { url:  'http://127.0.0.1:8000/auth/user', method: 'get', propertyName: 'user' },
         logout: { url: 'http://127.0.0.1:8000/auth/logout' , method: 'delete'  }
       },
       tokenType: ''
     }
   }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    baseURL: 'http://127.0.0.1:8000/auth',
    browserBaseURL:  'http://127.0.0.1:8001/api',
   // Your other configurations
  },

  proxy: {
    '/auth/': { target: 'http://127.0.0.2:8000', pathRewrite: {'^/auth/': ''} }
  },


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add exception
  transpile: [
    "vee-notifications"
  ],
  }
}
