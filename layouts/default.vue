<template>
  <div class="app">
    <seo-header></seo-header>
    <nuxt keep-alive :keep-alive-props="{ include: ['home', 'about', 'laboratory', 'quotePrice', 'testInformation', 'testService'] }"></nuxt>
  </div>
</template>

<script>

export default {
  // methods: {
  //   isMobile() {
  //     let flag = navigator.userAgent.match(
  //       /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  //     );
  //     return flag;
  //   },
  // },
  // mounted() {
  //   let mobileOrigin = process.env.PC_URL;
  //   if (this.isMobile()) {
  //     console.log("手机端");
  //
  //   } else {
  //     console.log("pc端");
  //     location.replace(mobileOrigin);
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.app{
  max-width: 46.875rem;
  overflow: hidden;
}
</style>
