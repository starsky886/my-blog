<template>
  <div class="siteaside-container">
    <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" ></Avatar>
    <Menu></Menu>
    <Contact></Contact>
    <div class="footer">黑ICP备17001719号</div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Avatar from '@/components/Avatar'
import Contact from '@/components/Contact'

export default {
  components: {
    Menu,
    Avatar,
    Contact
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
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
}
</style>