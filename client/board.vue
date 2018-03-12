<template>
  <div class="board">

  </div>
</template>
<script>
export default {
  name: 'Board',
  props: ['data'],
  mounted() {
    console.log('board mounted', this.data)
  }
}
</script>
<style lang="scss">
* { box-sizing: border-box; }

.board {
  position: relative;
}
</style>
