<template>
  <div class="board">
    <div class="row" v-for="(row, ridx) in data">
      <piece v-for="(piece, cidx) in row"
             :key="cidx"
             :piecestr="piece" 
             :ridx="ridx" 
             :cidx="cidx"
             :select="select">
      </piece>
    </div>
  </div>
</template>
<script>
import piece from './piece.vue'

export default {
  name: 'board',
  props: ['data', 'select'],
  mounted() {
    console.log('board mounted', this.data)
  },
  components: {
    piece
  }
}
</script>
<style lang="scss">
.board .row {
  display:flex;
}
</style>
