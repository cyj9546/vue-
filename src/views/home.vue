<template>
  <div>
    <div class="carousel">
      <swiper :options="swiperOption" class="swiper stop-swiping">
        <swiperSlide class="swiperItem" v-for="(item,index) in bannerimg" :key="index">
          <img :src="item.thumb" alt />
        </swiperSlide>
        <img src="../assets/logo.png" alt />
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      bannerimg: [
        { thumb: require("../assets/logo.png") },
        { thumb: require("../assets/logo.png") },
        { thumb: require("../assets/logo.png") }
      ],
      swiperOption: {
        speed: 2000, //切换速度
        watchOverflow: true, //当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等。默认不开启这个功能。
        loop: false, //开启循环模式
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: true,
        preventClicksPropagation: true, //阻止click冒泡。拖动Swiper时阻止click事件。
        simulateTouch: false, //鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
.carousel{
  border: solid 1px #c1c1c1;
}
</style>