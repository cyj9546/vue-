<template>
  <header class="header flex" >
    <slot name="left" class="left"></slot>
    <div class="header_title">
     {{ title }}
    </div>
    <slot name="right" class="right"></slot>
  </header>
</template>
<script>
export default {
  name: "HeaderTop",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/base.scss";
.header {
  background-color: $baseColor;
  height: 5vh;
  width: 100%;
  .header_title {
    line-height: 5vh;
    font-size: 0.4rem;
    margin: 0 auto;
    color: #fff;
  }
}
</style>


