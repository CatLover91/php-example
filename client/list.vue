<template>
  <div class="side-wrap">
    <div class="list">
      <div class="list-item" v-for="item in list" :key="item">{{ item }}</div>
    </div>
    <div class="clear" @click="clear()">clear</div>
  </div>
</template>
<script>
export default {
  name: 'list',
  props: ['list', 'clear']
}
</script>
<style lang="scss" scoped>
$bg: #e5e5e5;
.side-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  .list {
    position: relative;
    width:100%;
    height:100%;
    overflow-y: auto;
    padding: 10px 0 34px;
    background: $bg;
    &-item {
      padding: 10px;
      + .list-item {
        border-top: 1px solid darken($bg, 15%);
      }
    }
  }
  .clear {
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 10px;
    left: 0;
    bottom: 0;
    cursor: pointer;
    transition: 350ms ease all;
    background: $bg;
    &:hover {
      background: darken($bg, 15%);
      color: white;
    }
  }
}

</style>
