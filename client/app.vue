<template>
  <div class="container">
    <div class="container__board">
      <board :data="board" :select="select"></board>
    </div>
    <div class="container__nav">
      <nav :list="list" :clear="clear"></nav>
    </div>
  </div>
</template>
<script>
import nav from './nav.vue'
import board from './board.vue'

export default {
  name: 'app',
  props: ['board'],
  data() {
    return {
      list: []
    }
  },
  methods: {
    clear() {
      this.list = []
    },
    select(str) {
      this.list.push(str)
    }
  },
  components: {
    nav,
    board
  }
}
</script>
<style lang="scss" scoped>

</style>
