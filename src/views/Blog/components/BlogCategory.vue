<template>
  <div class="blog-caregory-container">
    <h1>文章分类</h1>
    <RightList :list="list" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlogsType } from "@/api/blog.js";

export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce((a, b) => {
        return a + b.articleCount
      }, 0);
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      //   console.log('result===',result)
      return result.map((it) => ({
        ...it,
        isSelect: this.categoryId === it.id,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  mounted() {
  },
  methods: {
    async fetchData() {
      return await getBlogsType();
    },
    handleSelect(item) {
        
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-caregory-container {
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
}
</style>