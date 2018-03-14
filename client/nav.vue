<template>
  <div class="list">
    <div v-for="item in list" :key="item">{{ item }}</div>
    <div class="clear" @click="clear">clear</div>
  </div>
</template>
<script>
export default {
  name: 'nav',
  props: ['list', 'clear']
}
</script>
<style lang="scss" scoped>
.list {
  position: relative;
  width:100%;
  height:100%;
  overflow-y: auto;
  padding: 20px;
  .clear {
    position: absolute;
    width: 100%;
    padding: 10px;
    left: 0;
    bottom: 0;
    cursor: pointer;
    transition: 350ms ease all;
    &:hover {
      background: rgba(0,0,0,0.4);
    }
  }
}
</style>
