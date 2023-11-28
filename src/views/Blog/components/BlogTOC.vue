<template>
    <div class="blog-toc-container">
      <h2>目录</h2>
      <RightList :list="toc" @select="handleSelect" />
    </div>
  </template>
  
  <script>
  import RightList from "./RightList";
  export default {
    components: {
      RightList,
    },
    props: {
      toc: {
        type: Array,
      },
    },
    computed:{
      tocWithIsSelect() {
        const toc = () =>{
          this.toc.map((t)=>{
            return {
              ...t,
              isSelect: 1
            }
          })
        }
        return toc
      }
    },
    methods: {
      handleSelect(item) {
        location.hash = item.anchor;
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
  