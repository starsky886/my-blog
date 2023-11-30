<template>
    <div class="pager-container" v-if="pageNumber > 1">
      <a @click="handleClick(1)" :class="{ disable: current === 1 }">|&lt;&lt;</a>
      <a @click="handleClick(current - 1)" :class="{ disable: current === 1 }">&lt;&lt;</a>
      <a @click="handleClick(n)" :class="{ active: current === n }" v-for="(n, i) in numbers" :key="i">{{
        n
      }}</a>
      <a @click="handleClick(current + 1)" :class="{ disable: current === pageNumber }">&gt;&gt;</a>
      <a @click="handleClick(pageNumber)" :class="{ disable: current === pageNumber }">&gt;&gt;|</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      //当前页码
      current: {
        type: Number,
        default: 1,
      },
      //总数据量
      total: {
        type: Number,
        default: 0,
      },
      //页容量
      limit: {
        type: Number,
        default: 10,
      },
      //可见页码数
      visibleNumber: {
        type: Number,
        default: 10,
      },
    },
    computed: {
      //页码数量
      pageNumber() {
        return Math.ceil(this.total / this.limit);
      },
      numbers() {
          let number = []
          for(let i = this.visibleMin; i<=this.visibleMax ;i++ ) {
             number.push(i)
          }
          return number;
      },
      //得到显示的最小数字
      visibleMin() {
        let min = this.current - Math.floor(this.visibleNumber / 2);
        if (min < 1) {
          min = 1;
        }
        return min;
      },
      //得到显示的最大数字
      visibleMax() {
        let max = this.visibleMin + this.visibleNumber -1 ;
        if (max > this.pageNumber) {
          max = this.pageNumber
        }
        return max
      },
    },
    methods:{
      handleClick(n) {
          this.$emit('pageChange',n)
      }
    }
  };
  </script>
  
  <style lang="less" scoped>
  @import "~@/styles/var.less";
  .pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
      color: @primary;
      margin: 0 6px;
      cursor: pointer;
      &.disable {
        color: @lightWords;
        cursor: not-allowed;
      }
      &.active {
        color: @words;
        cursor: text;
      }
    }
  }
  </style>