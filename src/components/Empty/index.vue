<template>
  <div class="empty-container">
    <icon type="add"></icon>
    <div>{{text}}</div>
  </div>
</template>

<script>
import Icon from '../Icon'
export default {
  components: { Icon },
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  }
}
</script>

<style scoped lang="less">
 @import '~@/styles/mixins.less' ;
 .empty-container{
   .self-middle();
   text-align: center;
 }
 .icon-container {
  font-size: 72px;
 }
</style>