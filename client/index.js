import Vue from 'vue/dist/vue.common.js'
import app from './app.vue'
import 'normalize.css'

new Vue({
  el: '#app',
  mounted () {
    console.log('vue mounted')
  },
  components: {
    app
  }
})
