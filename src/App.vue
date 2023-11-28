<template>
  <div id="app" class="app-container">
    <!-- <Avatar url="https://seopic.699pic.com/photo/40252/3598.jpg_wh1200.jpg"  :size="50"/>
   <Icon type="add"></Icon> -->
    <!-- <Pager :current="current" :total="302" @pageChange="handlePageChange"/> -->
    <!-- <div class="empty-box"> 
    <Empty text="哈哈哈"></Empty>
   </div> -->
    <!-- <div class="imageLoader-box">
      <ImageLoader
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        :duration="500"
        @load="laodHandle"
      />
    </div> -->

    <!-- <Pager :current="3" :total="102"/>
   <Pager :current="10" :total="202"/>
   <Pager :current="3" :total="300" :limit="5" :visibleNumber="20"/> -->

    <!-- <Contact></Contact>
     -->
    <!-- <SiteAside></SiteAside> -->
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template #main>
        <router-view></router-view>
      </template>
    </Layout>
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
import Icon from "./components/Icon";
import Pager from "./components/Pager";
import Empty from "./components/Empty";
import ImageLoader from "./components/ImageLoader";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import SiteAside from "./components/SiteAside";
import Layout from "./components/Layout";

export default {
  name: "App",
  data() {
    return {
      current: 1,
    };
  },
  components: {
    Avatar,
    Icon,
    Pager,
    Empty,
    ImageLoader,
    Contact,
    Menu,
    SiteAside,
    Layout,
  },
  methods: {
    handlePageChange(n) {
      this.current = n;
    },
    laodHandle() {
      console.log("加载完成");
    },
  },
};
</script>

<style lang="less" scoped>
.app-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .left {
    width: 250px;
    height: 100%;
  }
}

// .empty-box {
//   position: relative;
//   width: 500px;
//   height: 500px;
//   border: 1px solid gray;
// }
// .imageLoader-box {
//   position: relative;
//   width: 800px;
//   height: 500px;
// }
// .contact-box {
//   width: 250px;
//   height: 600px;
//   /* background: black; */
//   /* border: 2px solid red; */
//   margin: 0 auto;
// }
</style>
