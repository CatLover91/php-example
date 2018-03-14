<template>
  <div class="container">
    <div class="container__board">
      <board :data="board" :select="selectFunc"></board>
    </div>
    <div class="container__list">
      <list :list="list" :clear="clearFunc"></list>
    </div>
  </div>
</template>
<script>
import list from './list.vue'
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
    clearFunc() {
      this.list = []
      console.log('list cleared')
    },
    selectFunc(str) {
      this.list.push(str)
      console.log('list item added', str)
    }
  },
  components: {
    list,
    board
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
  &__list {
    height: 200px;
  }
}
@media (min-width: 600px) {
  .container {
    flex-direction: row;
    &__list {
      position: absolute;
      right: 10px;
      bottom: 10px;
      top: 10px;
      height: auto;
      width: 30%;
    }
    &__board {
      width: 70%;
    }
  }
}
</style>
