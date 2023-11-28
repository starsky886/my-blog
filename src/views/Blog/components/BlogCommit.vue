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
import { getComments,postComment } from "@/api/blog";
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
  methods: {
    async fetchData() {
      return  await getComments(
        this.$route.params.id,
        this.page,
        this.limit
      );
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