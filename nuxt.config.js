import { state } from './store/posts';
import { Store } from 'vuex';
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
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
      // { rel: 'javascript', type: 'text/javascript', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: ["@/plugins/bootstrap"],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
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
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    // '/blog-api': {
    //   target: 'https://producehaven-blog.herokuapp.com/api',
    //   pathRewrite: {
    //     '^/blog-api' : ''
    //     }
    //   }
  },

  generate: {
    routes: function() {
      return Object.keys(state).map(post => post.id);
      // return state.all.map(post => `posts/${post.id}`);
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
