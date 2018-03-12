import Vue from 'vue'
import board from './Board.vue'

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
