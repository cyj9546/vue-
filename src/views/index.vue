<template>
  <div>
    <div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <van-tabbar v-model="active" @change="changeTabbar(active)" active-color="#28A6FA">
      <van-tabbar-item icon="shop">
        {{ $t("bottomTab.home") }}
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="shop">
        {{ $t("bottomTab.record") }}
        <template #icon="props">
          <img :src="props.active ? icon.active1 : icon.inactive1" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="contact">
        {{ $t("bottomTab.my") }}
        <template #icon="props">
          <img :src="props.active ? icon.active2 : icon.inactive2" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      nowPath: "",
      icon: {
        active: require("../assets/image/home_a.png"),
        inactive: require("../assets/image/home.png"),
        active1: require("../assets/image/record_a.png"),
        inactive1: require("../assets/image/record.png"),
        active2: require("../assets/image/me_a.png"),
        inactive2: require("../assets/image/me.png"),
      }
    };
  },
  created() {
    this.changeTabBarActive();
  },
  methods: {
    changeTabBarActive() {
      this.nowPath = this.$route.path;
      // console.log( this.nowPath);
      // if (this.nowPath == "/") {
      //   this.active = 0;
      // }
      // if (this.nowPath == "/wallet") {
      //   this.active = 1;
      // }
      // if (this.nowPath == "/trading") {
      //   this.active = 2;
      // }
      // if (this.nowPath == "/team") {
      //   this.active = 3;
      // }
      // if (this.nowPath == "/me") {
      //   this.active = 4;
      // }

      if (this.nowPath == "/") {
        this.active = 0;
      }
      if (this.nowPath == "/record") {
        this.active = 1;
      }
      if (this.nowPath == "/me") {
        this.active = 2;
      }
      //  console.log( this.nowPath);
    },
    changeTabbar(active) {
      switch (active) {
        case 0:
          this.$router.push({ name: "home" });
          break;
        case 1:
          this.$router.push({ name: "record" });
          break;
        case 2:
          this.$router.push({ name: "me" });
          break;
      }
    }
  }
};
</script>

<style >
</style>