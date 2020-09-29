<template>
  <div>
    <div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <van-tabbar v-model="active" @change="changeTabbar(active)">
      <van-tabbar-item icon="shop">{{ $t("bottomTab.home") }}</van-tabbar-item>
      <van-tabbar-item icon="records">{{ $t("bottomTab.wallet") }}</van-tabbar-item>
      <van-tabbar-item icon="cart">{{ $t("bottomTab.deal") }}</van-tabbar-item>
      <van-tabbar-item icon="cart">{{ $t("bottomTab.team") }}</van-tabbar-item>
      <van-tabbar-item icon="contact">{{ $t("bottomTab.my") }}</van-tabbar-item>
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