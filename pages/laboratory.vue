<template>
  <div class="laboratory">
    <div class="swipe-info">
      <span class="swipe-title1">邀您共享</span>
      <span class="swipe-title2">高效、便捷的互联网+检测服务生态盛宴</span>
<!--      <div class="swipe-button">入驻咨询</div>-->
    </div>
    <div class="first-content">
      <span class="title">百检网能带来什么？</span>
      <div class="first">
        <img src="/order.png" alt="">
        <span class="title2">覆盖全网 海量订单</span>
        <div class="textarea">
          百检网拥有专业的推广人员，全网线上推广，线下市场联动，入驻百检，依托平台，获取最新、最多、最对口订单，迅速找到汇集全网中小微企业及个人
          用户，让机构和检测订单火速连线。
        </div>
      </div>
      <div class="first">
        <img src="/jishu.png" alt="">
        <span class="title2">技术支持 专业指导</span>
        <div class="textarea">
          百检网将大数据、云计算、人工智能等技术运用于检测服务、数据建设，为第三方检测机构、实验室提供最新行业新动向，检测新领域，及时做出战略调整。
          同时，依托大数据、AI和海量项目数据优势，整合资源，实现检测服务全面优化。
        </div>
      </div>
      <div class="first">
        <img src="/lianhe.png" alt="">
        <span class="title2">平台推广 快人一步</span>
        <div class="textarea">
          专业的营销团队，和全国各大媒体、电台、节目、行业、平台门户网站、检测论坛、自媒体深度合作，全方位推广，迅速帮助入驻机构扩大知名度，树立品
          牌形象，获取跟多客源，为检测服务提供坚实的营销保障。
        </div>
      </div>
      <div class="first">
        <img src="/lianhe144.png" alt="">
        <span class="title2">专注检测 节省开资</span>
        <div class="textarea">
          机构在入驻百检网之后，无需多余管理，即可获得海量订单。省心省力的同时，为第三方检测机构、实验室节省大量开支和人员管理，让检测机构专注检测
          服务，提升检测质量，从同行脱颖而出。依托平台，从接受订单到完成项目，百检网全程保驾护航。
        </div>
      </div>
    </div>
    <div class="second-content">
      <span class="span1">平台入驻资质</span>
      <span class="span2">入驻百检检测平台的实验室、</span>
      <span class="span2">第三方检测机构必须拥有CMA或CNAS认证</span>
      <div class="cma-img">
        <img src="/ma.png" alt="">
      </div>
      <div class="cma-info">
        <span class="cma-text1">中国计量认证简称“CMA”，是China Inspection Body andLaboratory Mandatory Approval（中国计量认证/
          认可）的英文缩写。是根据中华人民共和国计量法的规定，由省级以上人民政府计量行政部门对检测机构的检测能力及可靠性进行的一种全面的认证及评价。
        </span>
        <span>这种认证对象是所有对社会出具公 正数据的产品质量监督检验机构及其它各类实验室；如各种产品质量监督检验站、环境检测站、疾病预防控制中心
          等等。取得计量认证合格证书的检测机构，允许其在检验报告上使用CMA标记；有CMA标记的
        </span>
      </div>
      <div class="cnas-img">
        <img src="/cnas.png">
      </div>
      <div class="cnas-info">
        <span class="cnas-text">
          CNAS认证是由国家认证认可监督管理委员会批准设立并授权的国家认可机构，统一负责对认证机构、实验室和检查机构等相关机构的认可工作。
        </span>
        <span class="cnas-text">
          CNAS和国际、国内权威认可组织互认。这些认可组织包括：国际认可论坛（IAF）、国际实验室认可合作组织(ILAC)实验合作组织、中国CNAS认证与区域
          组织、太平洋认可合作组织(PAC)、亚太实验室认可合作组织（APLAC）。
        </span>
        <span>
          拥有CNAS认证表明具备了按相应认可准则开展检测和校准服务的技术能力，赢得政府部门、社会各界的信任；获得签署互认协议方国家和地区认可机构的承
          认；有机会参与国际间合格评定机构认可双边、多边合作交流；可在认可的范围内使用CNAS国家实验室认可标志和ILAC国际互认联合标志；列入获准认可机
          构名录，提高知名度。
        </span>
      </div>
<!--      <div class="consult">-->
<!--        <div class="button">入驻咨询</div>-->
<!--      </div>-->
    </div>
    <seo-bottom></seo-bottom>
  </div>
</template>

<script>
import SeoBottom from "../components/seoBottom";
/**
 * 入驻实验室 2021年4月27日 xyy
 */
export default {
  name: "laboratory",
  components: {SeoBottom},
  head() {
    return {
      title: '检测实验室机构加盟|招商|入驻-百检网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '百检网|知名B2B检测电商平台，平台汇聚国内外众多的检测机构，为用户提供全方面的检测服务，欢迎各优势的检测实验室加盟入驻.百检网本着互利共赢的原则为经营理念，为广大的第三方检测机构提供更优质的服务。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '检测实验室加盟，检测实验室招商，第三方检测机构入驻，第三方检测单位合作，检测中心加盟，测试公司入驻'
        }
      ]
    }
  },
  data() {
    return {}
  }
};
</script>

<style lang="scss" scope>
.laboratory {
  .swipe-info {
    background-image: url("/zixun.png");
    background-size: cover;
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    line-height: 5px;

    .swipe-title1 {
      padding-top: 1.3rem;
      padding-left: 2.3rem;
      font-size: 1.5rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Bold;
      font-weight: 700;
      letter-spacing: 1.5rem;
      text-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
    }

    .swipe-title2 {
      font-size: 0.75rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      letter-spacing: 6px;
    }

    .swipe-button {
      width: 6.25rem;
      height: 1.875rem;
      opacity: 1;
      background: #ffffff;
      color: red;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .first-content {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      font-size: 1.5rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #333333;
      line-height: 1.5rem;
    }

    .first {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 1.5625rem 0;

      img {
        width: 5rem;
        height: 5rem;
        margin-bottom: 1.875rem;
      }

      .title2 {
        font-size: 1rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Bold;
        font-weight: 700;
        color: #333333;
        line-height: 1.75rem;
        margin-bottom: 1.3125rem;
      }

      .textarea {
        font-size: 0.875rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        color: #707070;
        line-height: 1.75rem;
      }
    }
  }

  .second-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .span1 {
      font-size: 1.5rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #333333;
      line-height: 1.75rem;
      margin-top: 1.5625rem;
      margin-bottom: 0.625rem;
    }

    .span2 {
      font-size: 0.75rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #b2b2b2;
      line-height: 1.125rem;
    }

    .cma-img {
      margin-top: 1.5625rem;
      height: 15.625rem;
      width: 100%;
      opacity: 1;
      background: #f0f0f0;
      position: relative;

      img {
        position: absolute;
        width: 9.75rem;
        height: 5.4375rem;
        top: 3.125rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .cma-info {
      position: relative;
      margin-top: -6rem;
      opacity: 1;
      background: #ffffff;
      box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
      font-size: 0.75rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #707070;
      line-height: 1.125rem;
      padding: 1rem;
      margin-right: 1rem;
      margin-left: 1rem;

      .cma-text1 {
        display: block;
        margin-bottom: 1rem;
      }
    }

    .cnas-img {
      margin-top: 1.5625rem;
      height: 15.625rem;
      width: 100%;
      opacity: 1;
      background: #f0f0f0;
      position: relative;

      img {
        position: absolute;
        width: 9.6875rem;
        height: 7.375rem;
        top: 3.125rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .cnas-info {
      position: relative;
      margin-top: -4rem;
      opacity: 1;
      background: #ffffff;
      box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
      font-size: 0.75rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #707070;
      line-height: 1.125rem;
      padding: 1rem;
      margin-right: 1rem;
      margin-left: 1rem;

      .cnas-text {
        display: block;
        margin-bottom: 1rem;
      }
    }

    .consult{
      background-image: url("/bg-zixun.png");
      background-size: cover;
      width: 100%;
      height: 3.75rem;
      opacity: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .button{
        width: 6.25rem;
        height: 1.875rem;
        background: #ffffff;
        font-size: 0.875rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        color: #e90001;
        line-height: 1.75rem;
        text-align: center;
      }
    }
  }
}
</style>
