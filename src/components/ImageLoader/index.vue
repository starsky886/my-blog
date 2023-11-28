<template>
  <div class="imageloader-container">
    <img v-if="everythingNone" :src="placeholder" class="placeholder"/>
    <img 
    :src="src" 
    class="origin" 
    @load="handleLoad"
    :style="{opacity:opacityOrigin, transition: `${duration}ms`}"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
        loader: false,
        everythingNone: true
    }
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  mounted() {
    // this.init()
  },
  computed: {
    opacityOrigin() {
        return this.loader ? 1: 0
    }
  },
  methods: {
    handleLoad() {
        this.loader = true
        setTimeout(()=>{
            this.everythingNone= false
        },this.duration)
        this.$emit('load')
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/mixins.less';
.imageloader-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    left: 0;
    top: 0;
    .self-middle();
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .origin {
    opacity: 0;
  }
  .placeholder{
    filter: blur(2vw)
  }
}
</style>