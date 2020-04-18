const bodyParser = require('body-parser')
const axios = require('axios')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet' , href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://my-nuxt-blog-9b5f5.firebaseio.com',
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /**
   * Ejemplo de uso de env para variables de entorno
   */
  env: {
    baseUrl: process.env.BASE_URL || 'https://my-nuxt-blog-9b5f5.firebaseio.com',
    fbAPIKey: 'AIzaSyCbPK7i1i3ga85loIcDb35pWOmcEfZCk0Q'
  },
  /**
   * Ejemplo de uso de transición entre páginas
   */
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  // router: {
  //   middleware: 'log'
  // },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  generate: {
    routes: function() {
      // Ejemplo de generación estática de rutas dinámicas.
      return axios.get('https://my-nuxt-blog-9b5f5.firebaseio.com/posts.json')
        .then(res => {
          const routes = []
          for (let key in res.data) {
            // Esta configuración genera múltiples llamadas a la api (la general
            // donde se obtienen las claves y luego una por cada key a ser
            // generada). Para limitar esto se puede utilizar la configuración
            // que genera la ruta y un payload que evita llamadas adicionales
            // al servidor
            //routes.push('/posts/' + key)
            routes.push({
              route: '/posts/' + key,
              payload: {postData: res.data[key]}
            })
          }
          return routes
        })
    }
  }
}
