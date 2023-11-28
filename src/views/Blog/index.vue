<template>
  <Layout>
    <template slot="main">
      <BlogList></BlogList>
    </template>
    <template slot="right">
        <BlogCategory></BlogCategory>
    </template>
  </Layout>
</template>

<script>
import BlogCategory from "./components/BlogCategory.vue"
import BlogList from "./components/BlogList.vue";
import Layout from "@/components/Layout";
import * as blogApi from "@/api/blog";
export default {
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            {
              name: "c-2",
              isSelect: false,
              children: [
                { name: "c-2-1", isSelect: false },
                { name: "c-2-2", isSelect: false },
                { name: "c-2-3", isSelect: false },
                { name: "c-2-4", isSelect: false },
              ],
            },
            { name: "c-3", isSelect: false },
            { name: "c-4", isSelect: false },
          ],
        },
        { name: "d", isSelect: false },
      ],
    };
  },
  async created() {
    // let res = await blogApi.getBlogInfo()
    // console.log('博客')
    // console.log(res)
    // let blogtype = await blogApi.getBlogsType()
    // console.log('博客分类')
    // console.log(blogtype)
  },
  components: {
    BlogList,
    Layout,
    BlogCategory,
  },
  methods: {
    // handleSelect(item) {
    //   console.log(item);
    // },
  },
};
</script>

<style lang="less" scoped>

</style>