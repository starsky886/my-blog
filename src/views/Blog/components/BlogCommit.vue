<template>
  <div class="blog-commit-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    ></MessageArea>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { getComments, postComment } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      limit: 10,
      page: 1,
    };
  },
  created() {
    window.fetchMore = this.fetchMore;
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async handleScroll(dom) {
      if (this.isLoading || !dom) {
        return
      }
      //设定一个范围值
      const range = 100
      const top = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
      if (top < range) {
        //到底部了
         this.fetchMore()
      }
    },
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    //加载下一页
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const rep = await this.fetchData();
      this.data.total = rep.total;
      this.data.rows = this.data.rows.concat(rep.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
    },
  },
};
</script>

<style lang="less" scoped>
</style>