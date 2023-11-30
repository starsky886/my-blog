<template>
  <div v-show="show" @click="handleClick" class="to-top-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleShow);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleShow);
  },
  methods: {
    handleShow(dom) {
      if (!dom) {
        this.show = false
        return
      }
      this.show = dom.scrollTop >= 1000; 
    },
    handleClick() {
        console.log('1234')
        this.$bus.$emit('setMainScroll',0)
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: @primary;
  color: #fff;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  z-index: 99;
}
</style>