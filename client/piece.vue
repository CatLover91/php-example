<template>
  <div class="tile" :class="tile">
    <div class="piece" :class="color">{{ pieceType }}</div>
  </div>
</template>
<script>
export default {
  props: ['piecestr', 'ridx', 'cidx'],
  computed: {
    tile() {
      return (this.ridx % 2 === 0 && this.cidx % 2 === 0) || (this.ridx % 2 !== 0 && this.cidx % 2 !== 0) ? 'white' : 'black'
    },
    color() {
      return this.piecestr.split('')[0] === 'w' ? 'white' : 'black'
    },
    pieceType() {
      return this.piecestr.split('')[1]
    }
  }
}
</script>
<style lang="scss" scoped>
.tile {
  position: relative;
  width: 12.5%;
  padding-bottom: 12.5%;
  &.white {
    background: rgba(0,0,0,0.2);
  }
  &.black {
    background: rgba(0,0,0,0.6);
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
