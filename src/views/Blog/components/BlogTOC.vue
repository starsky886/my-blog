<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithIsSelect" @select="handleSelect" />
  </div>
</template>
  
  <script>
import RightList from "./RightList";
import debounds from '@/utils/debounds'
export default {
  components: {
    RightList,
  },
  data() {
    return {
      isActive: "",
    };
  },
  props: {
    toc: {
      type: Array,
    },
  },
  computed: {
    //根据toc和isActive得到含有isSelect的数组
    tocWithIsSelect() {
      const tocFc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: this.isActive === t.anchor ? true : false,
          children: tocFc(t.children),
        }));
      };
      return tocFc(this.toc);
    },
    //根据toc得到他们对应的元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc = []) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length > 0) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.$bus.$on('mainScroll', debounds(this.setActive, 50))
  },
  destroyed() {
    this.$bus.$off('mainScroll', debounds(this.setActive, 50))
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    //设置active为正确的值
    setActive(dom) {
      if(!dom) {
        return
      }
      //开始之前得先清空
      this.isActive = "";
      //设置一个限制值
      const range = 200;
      for (const dom of this.doms) {
        //先判断纯不纯在
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          //在规定的范围内
          this.isActive = dom.id;
          return;
        } else if (top > range) {
          //在规定的范围下方
          return;
        } else {
          //在规定的范围上方
          this.isActive = dom.id;
        }
      }
    },
  },
};
</script>
  
  <style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
  