import Vue from 'vue/dist/vue.common.js'
import board from './board.vue'

console.log('loaded', board)

new Vue({
  el: '#app',
  mounted () {
    console.log('vue mounted')
  },
  components: {
    board
  }
})
