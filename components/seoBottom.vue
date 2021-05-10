<template>
  <div class="seo-bottom">
    <div class="contact">
      <img src="/logo.png" alt="">
      <div class="info">
        <span class="text phone">客服热线</span>
        <span class="text phone-num">400-101-7153</span>
        <span class="text service-num">专属服务：156 0190 2607</span>
        <span class="text service-num">企业邮箱： service@baijiantest.com</span>
      </div>
    </div>
    <div>
      <van-cell title="关于我们" is-link @click="handleGoPage('about')"/>
      <van-cell title="检测服务" is-link @click="handleGoPage('testService')"/>
      <van-cell title="检测资讯" is-link @click="handleGoPage('testInformation')"/>
      <van-cell title="实验室入驻" is-link @click="handleGoPage('laboratory')" />
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
    <div class="partner">
      <span class="text">合作伙伴</span>
      <span class="partners" @click="hangGoBaiJian">百检检测</span>
    </div>
    <div class="comTag">
      <span class="text">百检（上海)信息科技有限公司</span>
      <span class="text">ICP备19010749号经营许可证编号:沪B2-20190666</span>
      <span class="text">Copyright@2019 www.bajiantest.com All Rights Reserved</span>

    </div>
  </div>
</template>
<script>
/**
 * 底部公共组件
 */
export default {
  name: "seoBottom",
  methods: {
    handleGoPage(url) {
      this.$router.push({
        name: url
      })
    },
    hangGoBaiJian(){
      location.href = 'http://www.bjwpt.cn'
    }
  }
};
</script>

<style lang="scss" scoped>
.seo-bottom{
  .contact{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      width: 6.56rem;
      height: 2.5rem;
    }
    .info{
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
      .text{
        color: #333333;
      }
      .phone{
        font-size: 0.875rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Bold;
        font-weight: 700;
        margin-bottom: 0.625rem
      }
      .phone-num{
        font-size: 1rem;
        font-family: Arial, Arial-Bold;
        font-weight: 700;
        margin-bottom: 0.625rem
      }
      .service-num{
        font-size: 0.75rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        margin-bottom: 0.625rem
      }
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
  .partner{
    padding: 1rem;
    .text{
      font-size: 1rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Bold;
      font-weight: 700;
      color: #333333;
      display: block;
      margin-bottom: 0.75rem;
    }
    .partners{
      font-size: 0.875rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #333333;
    }
  }
  .comTag{
    padding: 0.625rem 1.375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span{
      font-size: 0.75rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      text-align: center;
      color: #b2b2b2;
    }
  }
}
</style>
