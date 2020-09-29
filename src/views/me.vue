<template>
  <div>
    <HeaderTop :title="this.$i18n.t('bottomTab.my')"></HeaderTop>
  </div>
</template>

<script>
import HeaderTop from "../components/header";
export default {
    components: {
    HeaderTop
  },
};
</script>

<style>
</style>