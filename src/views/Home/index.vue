<template>
  <div v-loading="isLoading" class="home-container" ref="container">
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
    >
      <li v-for="item in banners" :key="item.id">
        <CarousItem  :carousel="item"></CarousItem>
      </li>
    </ul>
    <ul class="left-position">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        :class="{ active: i === index }"
        @click="switchTo(i)"
      ></li>
    </ul>
    <div v-show="index > 0" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp"></Icon>
    </div>
    <div
      v-show="index < banners.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown"></Icon>
    </div>
  </div>
  <!-- <Loading v-else></Loading> -->
</template>
  
<script>
import CarousItem from "./CarousItem.vue";
import Icon from "@/components/Icon";
import { getBanner } from "@/api/banner";
import Loading from "@/components/Loading";

export default {
  data() {
    return {
      banners: [],
      index: 0,
      containerHeight: 0, //容器高度
      // wheeling: false, //是否正在滚动
      isLoading: true,
    };
  },
  async created() {
    this.banners = await getBanner();
    this.isLoading = false
    //  console.log
  },
  components: {
    CarousItem,
    Icon,
    Loading,
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    switchTo(index) {
      this.index = index;
    },
    // handleWheel(e) {
    //   if (this.wheeling) {
    //     return
    //   }

    //   if (e.daltaY < -5 && this.index >0) {
    //   console.log('hahas',e)

    //       this.index--
    //   } else if (e.dalteY > 5 && this.index < this.banners.length -1) {
    //     this.index++
    //   }
    // },
 
  },
};
</script>
  
<style lang="less" scoped>
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
.home-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .carousel-container {
    transition: 500ms;
    list-style: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    cursor: pointer;
    .self-center();
    color: @gray;
    font-size: 30px;
    &.icon-up {
      top: 25px;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: 25px;
      animation: jump-down 2s infinite;
    }
    @keyframes jump-up {
      0% {
        transform: translate(50%, 15px);
      }
      50% {
        transform: translate(50%, -15px);
      }
      100% {
        transform: translate(50%, 15px);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(50%, -15px);
      }
      50% {
        transform: translate(50%, 15px);
      }
      100% {
        transform: translate(50%, -15px);
      }
    }
  }
  .left-position {
    list-style: none;
    .self-center();
    transform: translateY(-50%);
    right: 20px;
    left: auto;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>