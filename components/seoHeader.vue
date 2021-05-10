<template>
  <div>
    <div class="header" :style="showNavBar? 'height: 100%' : ''">
      <div class="header-top">
        <img src="/logo.png" class="logo" @click="handleGoPage('')">
        <div class="right">
          <a href="tel:400-101-7153"><img src="/phone.png" class="phone"></a>
          <img v-if="!showNavBar" src="/liebiao.png" class="liebiao" @click="showNavBar = true">
          <img v-else src="/close.png" class="liebiao" @click="showNavBar = false">
        </div>
      </div>
      <div v-if="showNavBar" class="header-nav-bar">
        <div class="nav-bar">
          <span @click="handleGoPage('')">首页</span>
          <span @click="handleGoPage('testService')">检测服务</span>
          <span @click="handleGoPage('testInformation')">检测资讯</span>
          <span @click="handleGoPage('laboratory')">实验室入驻</span>
          <span @click="handleGoPage('about')">关于我们</span>
        </div>
        <div class="qr-code">
          <span class="text">扫一扫关注</span>
          <div class="code">
            <div class="code-item">
              <img src="/qrcode1.png" class="code1">
              <span class="span1">微信公众号</span>
            </div>
            <div class="code-item">
              <img src="/qrcode2.png" class="code2">
              <span class="span2">官方微博</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="showSuspension">
      <div v-if="openSuspension" class="suspension-open">
        <img src="/info.png" @click="handleGoPage('quotedPrice')">
        <img src="/qqred.png" @click="showQQ = true">
        <img src="/wechat.png" @click="showWx = true">
        <img src="/closeRed.png" @click="openSuspension = false">
      </div>
      <div v-else class="suspension-close">
        <img src="/tubiao1.png" @click="openSuspension = true">
      </div>
    </template>
    <div class="header-box" style="padding-top: 3.75rem"></div>

    <van-popup v-model="showQQ" class="showWx">
      <span>百检QQ客服</span>
      <img class="lx" src="/lxqq.jpg">
    </van-popup>
    <van-popup v-model="showWx" class="showWx">
      <span>百检微信客服</span>
      <img class="lx" src="/lxwx.jpg">
    </van-popup>
  </div>
</template>

<script>
/**
 * 头部
 */
export default {
  name: "seoHeader",
  data() {
    return {
      showQQ: false,
      showWx: false,
      showNavBar: false, // 显示导航信息
      showSuspension: true, // 显示悬浮框
      openSuspension: false // 展开悬浮框
    }
  },
  methods: {
    handleGoPage(url) {
      if (!url) {
        this.$router.push('/')
      } else {
        this.$router.push({
          name: url
        })
      }
      this.openSuspension = false
      this.showNavBar = false
    }
  }
};
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background: #ffffff;
  .header-top{
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
      width: 5.56rem;
      height: 2.125rem;
      opacity: 1;
      margin-left: 1rem;
    }
    .right{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 1rem;
      .phone{
        width: 2rem;
        height: 2rem;
        opacity: 1;
        margin-right: 1rem;
      }
      .liebiao{
        width: 1.5rem;
        height: 1.5rem;
        opacity: 1;
      }
    }
  }
  .header-nav-bar{
    width: 100%;
    height: 100%;
    padding: 3.125rem 0;
    .nav-bar{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      font-size: 1rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Bold;
      font-weight: 700;
      color: #000000;
      line-height: 1.5rem;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 3.1875rem;
      span{
        margin-bottom: 1.5rem;
      }
    }
    .qr-code{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 2rem;
      .text{
        font-size: 1rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        color: #000000;
        margin-bottom: 1.875rem;
      }
      .code{
        display: flex;
        width: 100%;
        justify-content: space-around;
        .code-item{
          position: relative;
        }
        .code1, code2{
          width: 7.5rem;
          height: 7.5rem;
        }
        .span1{
          position: absolute;
          height: 0.1rem;
          bottom: -0.5rem;
          left: 1.3rem;
        }
        .span2{
          position: absolute;
          height: 0.1rem;
          bottom: -0.5rem;
          left: 1.7rem;
        }
      }
    }
  }

}
.suspension-open{
  position: fixed;
  bottom: 2.5rem;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  img{
    width: 4rem;
    height: 4rem;
  }
}
.suspension-close{
  position: fixed;
  bottom: 2.5rem;
  right: 0;
  z-index: 99;
  img{
    width: 4rem;
    height: 4rem;
  }
}
.tels{
  width: 12rem;
  height: 7rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

::v-deep .van-popup{
  border-radius: 5px;
}
.showWx{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  span{
    padding-top: 0.5rem;
  }
  .lx{
    width: 8rem;
    padding: 1rem;
  }
}
</style>
