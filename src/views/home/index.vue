<template>
  <div>
     <HeaderTop :title="this.$i18n.t('bottomTab.home')"></HeaderTop>
    <div class="carousel">
      <swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper">
        <swiper-slide v-for="(item,index) in bannerimg" :key="index">
          <img :src="item.thumb" alt />
        </swiper-slide>
        <!-- 常见的小圆点 -->
        <div
          class="swiper-pagination"
          v-for="(item,index) in bannerimg"
          :key="index"
          slot="pagination"
        ></div>
        <div></div>

      </swiper>
    </div>
    <button @click="switchLang">Zh/En</button>
  </div>
</template>

<script>    
import "swiper/dist/css/swiper.css";
import HeaderTop from "../../components/header";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    var that = this;
    return {
      bannerimg: [
        { thumb: require("../../assets/logo.png") },
        { thumb: require("../../assets/logo.png") },
        { thumb: require("../../assets/logo.png") }
      ],

      imgIndex: 1,
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: true
        },
        //滑动速度
        speed: 2500,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex = this.realIndex - 1;
          }
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    HeaderTop
  },
  mounted () {
    //   this.$log('',"")
  // console.log(this.$i18n.tc('bottomTab.home')) 
  },
  methods: {
    switchLang() {
    //   console.log("切换语言", "切换语言");
      let locale = this.$i18n.locale;

      locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
      this.$log('locale', this.$i18n.locale)
      this.$cookie.set("language", this.$i18n.locale);
    }
  }
};
</script>

<style>

.header_left{
  /* text-align: left; */
  line-height: 5vh;
  /* border: solid 1px  #000; */
}
.header_search{
  margin-top: 10px;
  text-align: left;
}
</style>