<template>
  <ul class="contact-container" :style="{ listStyleType: 'none' }">
    <li class="contact-li">
      <a class="contact-icon" target="_blank" :href="data.github">
        <div class="icon">
          <icon type="github"></icon>
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li class="contact-li">
      <a class="contact-icon" :href="`mailto:${data.mail}`">
        <div class="icon">
          <icon type="mail"></icon>
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li class="contact-li">
      <a
        class="contact-icon"
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="icon">
          <icon type="qq"></icon>
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>
    <li class="contact-li">
      <a class="contact-icon" href="">
        <div class="icon">
          <icon type="weixin"></icon>
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "../Icon";
import { mapState } from "vuex";

export default {
  components: { Icon },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container {
  padding: 0px;
  margin: 40px 0;
  color: @gray;
  width: 100%;
  .contact-li {
    position: relative;
    height: 30px;
    line-height: 30px;
    margin: 20px 15px;
    font-size: 14px;
    &:hover {
      .pop {
        transform: scale(1);
      }
    }
    .pop {
      position: absolute;
      left: 0;
      bottom: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 10px 15px;
      transform: scale(0);
      transition: all 0.5s;
      transform-origin: center bottom;
      img {
        width: 100px;
        height: 100px;
      }
      &::after {
        position: absolute;
        content: "";
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        height: 8px;
        width: 8px;
        background: #fff;
        bottom: -4px;
      }
    }
  }
  .contact-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .icon-container {
    font-size: 26px;
  }
  .icon {
    width: 36px;
  }
}
</style>