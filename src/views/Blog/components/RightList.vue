<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index" class="li-item">
      <div @click="handleClick(item)">
        <span :class="{ active: item.isSelect }">{{ item.name }}</span>
        <span
          class="aside"
          v-if="item.aside"
          :class="{ active: item.isSelect }"
          >{{ item.aside }}</span
        >
      </div>

      <rightlist :list="item.children" @select="handleClick"></rightlist>
    </li>
  </ul>
</template>

<script>
export default {
  name: "rightlist",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  overflow-y: auto;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>