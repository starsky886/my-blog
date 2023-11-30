<template>
  <Layout>
    <template #main>
      <div ref="detailBox" class="blog-detail-box" v-loading="isLoading">
        <BlogDetail v-if="data" :blog="data"  />
        <BlogCommit v-if="!isLoading"/>
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import BlogDetail from "./components/BlogDetail.vue";
import BlogCommit from "./components/BlogCommit.vue";
import BlogTOC from "./components/BlogTOC.vue";
import Layout from "@/components/Layout";
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";

export default {
  mixins: [fetchData(null)],
  components: {
    BlogDetail,
    BlogTOC,
    Layout,
    BlogCommit,
  },
  methods: {
    async fetchData() {
        return await getBlog(this.$route.params.id)
    },
    handleScroll() {
      this.$bus.$emit('mainScroll',this.$refs.detailBox)
    },
    handleMainScroll(height) {
      // console.log('111=',height)
      this.$refs.detailBox.scrollTop = 0
    }
  },
  created() {
    this.$bus.$on('setMainScroll', this.handleMainScroll)
  },
  mounted() {
    this.$refs.detailBox.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    this.$bus.$emit('mainScroll')
    this.$refs.detailBox.removeEventListener('scroll', this.handleScroll)
    this.$bus.$off('setMainScroll', this.handleMainScroll)
  },
  updated() {
    const hash = location.hash
    location.hash = ""
    console.log("hash===", hash)
    setTimeout(()=>{
      location.hash = hash
    },50)
  }
};
</script>

<style scoped lang="less">
.blog-detail-box {
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>