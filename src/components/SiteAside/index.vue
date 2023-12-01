<template>
  <div class="siteaside-container">
    <template v-if="data">
      <Avatar :url="data.avatar"></Avatar>
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>

    <Menu></Menu>
    <Contact v-if="data"></Contact>
    <p v-if="data" class="footer">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Avatar from "@/components/Avatar";
import Contact from "@/components/Contact";
import { mapState } from "vuex";

export default {
  components: {
    Menu,
    Avatar,
    Contact,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.siteaside-container {
  padding: 20px 0;
  width: 100%;
  height: 100%;
  background: @dark;
  overflow-x: hidden;
  overflow-y: auto;
  .footer {
    font-size: 12px;
    text-align: center;
  }
  .title {
    font-size: 1.2em;
    color: #fff;
    text-align: center;
  }
}
</style>