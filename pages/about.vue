<template>
  <div class="about">
    <swipe title="关于百检" :url="url"></swipe>
    <div class="content">
      做检测，就上百检网。百检是大型综合检测电商服务平台，成立于2018年，总部位于上海，为第三方检测机构以及中小微企业及个人用户搭建互联网+检测电商服务平台，检测服务（包括食品、环境、医疗、建材、电子、化工、汽车、家居、母婴、玩具、箱包、水质、化妆品、纺织品、日化品、农产品等多项领域检测服务）。
      <br>
      <br>
      一个创新模式“互联网+检测电商”，主营业务是检验检测商品服务，百检寓意“百“所有的、众多的，”检“表明行业属性—检测检验；一个创新模式的检验检测服务网站，专注于为第三方检测机构以及中小微企业及个人用户搭建互联网+检测电商服务业务。
      <br>
      <br>
      百检网，不仅能帮助企业用户在线匹配适合的检测机构，促进产品质量提升，还能还能帮助优秀的检测机构提升品牌美誉度、获取检测订单，轻松实现互联网营销。
      <br>
      <br>
      百检网秉承“客户至上，服务为先，精诚合作，以人为本”的经营理念，我们为各行业有实力的检测机构提供终端用户在线自动选择下单的交易化平台，足不出户，即可与需求用户无缝对接。我们为终端检测用户群体，提供“一站购物式”的新奇检测体验，打开网站，像挑选商品一样简单，方便。
      <br>
      <br>
      百检网致力于为企业及个人提供便捷、高效的检测服务，简化检测流程，提升检测服务效率，利用互联网+检测电商，为客户提供多样化选择,从根本上降低检测成本提升时间效率，打破行业局限和行业瓶颈，打造出行业创新的检测平台。
      <br>
      <br>
      百检网打造检验检测行业的头部社交媒体是我们的宗旨，让检测人、质量人每天即可获取到行业的最新政策、改革、标准和法规、机构动态、商机等信息，减少信息差，实现信息对等。
      <br>
      <br>
      百检网收录了几万条特色检测项目库，以检测领域及检测项目、检测标准为检索线，并紧密对接检测机构会员的检测项目，并做排行分类，经过大数据统计，排出领域、地域机构排行榜，以方便用户更快、更准找到需要的检测服务。精准化营销，帮助检测机构快速获客。
      <br>
      <br>
      百检网入驻的检测机构业务覆盖全检测行业。在线一对一服务。检测报告按时按质送到手，坐享报告配送服务：在百检平台上，客户从订购服务到提交委托信息到最后支付检测费用全都可以在线完成,不用出门就可以完成报检流程。报告按时按质送到手。百检平台致力于为企业及个人提供检测服务，利用互联网+检测电商，为客户提供多样化检测服务。
    </div>
    <div class="com-env">
      <span>公司环境</span>
      <img src="/env1.png" alt="">
      <img src="/env2.png" alt="">
      <img src="/env3.png" alt="">
      <img src="/env4.png" alt="">
    </div>
    <seo-bottom></seo-bottom>
  </div>
</template>

<script>
/**
 * 关于百检 2021年4月27日 xyy
 */
import Swipe from "../components/swipe";
import SeoBottom from "../components/seoBottom";
const url = require('../static/about.png')
export default {
  name:"about",
  components: {SeoBottom, Swipe},
  head() {
    return {
      title: '百检网|百检检测|百检集团|百检平台-百检网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '百检网是国内知名的检测B2B电商平台，百检网汇聚国内外众多优质的检测机构为消费者通过优质的检测服务，本着"让天下没有难做的检测"的目标，以科技助力检测服务，推动第三方检测服务转型升级。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '百检网、百检检测、百检公司，百检集团、百检平台，百检电话，百检地址'
        }
      ]
    }
  },
  data() {
    return{
      url
    }
  }
};
</script>

<style lang="scss" scope>
.about{
  .content{
    position: relative;
    z-index: 99;
    margin-left: 1.3rem;
    margin-right: 1.3rem;
    margin-top: -6rem;
    padding: 1rem;
    background: #ffffff;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.20);
    font-size: 0.75rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    color: #333333;
    line-height: 1.5rem;
  }
  .com-env{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding: 1rem;
    span{
      font-size: 1.5rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #333333;
      line-height: 1.75rem;
      padding: 1rem 0;
    }
    img{
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .swipe{
    position: relative;
    top: 0;
    .swipe-img{
      height: 13rem;
    }
  }
  .swipe-box{
    padding-top: 0!important;
  }
}
</style>
