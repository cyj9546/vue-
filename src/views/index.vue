<template>
  <div>
    <div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <van-tabbar v-model="active" @change="changeTabbar(active)">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="records">钱包</van-tabbar-item>
      <van-tabbar-item icon="cart">交易</van-tabbar-item>
      <van-tabbar-item icon="cart">团队</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      nowPath: ""
    };
  },
  created() {
    this.changeTabBarActive();
  },
  methods: {
    changeTabBarActive() {
      this.nowPath = this.$route.path;
      // console.log( this.nowPath);
      if (this.nowPath == "/") {
        this.active = 0;
      }
      if (this.nowPath == "/wallet") {
        this.active = 1;
      }
      if (this.nowPath == "/trading") {
        this.active = 2;
      }
      if (this.nowPath == "/team") {
        this.active = 3;
      }
      if (this.nowPath == "/me") {
        this.active = 4;
      }
      //  console.log( this.nowPath);
    },
    changeTabbar(active) {
      switch (active) {
        case 0:
          this.$router.push({ name: "home" });
          break;
        case 1:
          this.$router.push({ name: "wallet" });
          break;
        case 2:
          this.$router.push({ name: "trading" });
          break;
        case 3:
          this.$router.push({ name: "team" });
          break;
        case 4:
          this.$router.push({ name: "me" });
          break;
      }
    }
  }
};
</script>

<style >
</style>