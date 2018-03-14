<template>
  <div class="tile" :class="[tile, selected ? 'selected' : '']" @click="select(outputStr, ridx, cidx)">
    <div class="piece" :class="color">{{ pieceType | toUnicode(color) }}</div>
  </div>
</template>
<script>
export default {
  props: ['piecestr', 'ridx', 'cidx', 'select', 'selected'],
  computed: {
    tile() {
      return (this.ridx % 2 === 0 && this.cidx % 2 === 0) || (this.ridx % 2 !== 0 && this.cidx % 2 !== 0) ? 'white' : 'black'
    },
    color() {
      return this.piecestr.split('')[0] === 'w' ? 'white' : 'black'
    },
    pieceType() {
      return this.piecestr.length > 1 ? this.piecestr.split('')[1] : ''
    },
    outputStr() {
      let y = 8 - this.ridx
      let x = ''
      switch(this.cidx) {
        case 0:
          x = 'a'
          break
        case 1:
          x = 'b'
          break
        case 2:
          x = 'c'
          break
        case 3:
          x = 'd'
          break
        case 4:
          x = 'e'
          break
        case 5:
          x = 'f'
          break
        case 6:
          x = 'g'
          break
        case 7:
          x = 'h'
          break
      }
      return this.pieceType + x + y
    }
  },
  filters: {
    toUnicode(str, color) {
      switch(str) {
        case 'K':
          return color === 'white' ? '♔' : '♚'
        case 'Q':
          return color === 'white' ? '♕' : '♛'
        case 'R':
          return color === 'white' ? '♖' : '♜'
        case 'B':
          return color === 'white' ? '♗' : '♝'
        case 'N':
          return color === 'white' ? '♘' : '♞'
        case 'P': 
          return color === 'white' ? '♙' : '♟'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tile {
  position: relative;
  width: 12.5%;
  padding-bottom: 12.5%;
  transition: 350ms ease all;
  &.white {
    background: #ccc;
    &.selected {
      background: #fcf8a9;
    }
  }
  &.black {
    background: #666;
    &.selected {
      background: #f4eb42;
    }
  }
  .piece {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 700;
    &.white {
      color: white;
      text-shadow: 0 0 2px #000;
    }
  }
}
</style>
