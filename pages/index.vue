<template>
  <div class="home">
<!--    <div class="swipe-info">-->
<!--      <span class="swipe-title1">做检测，上百检，多快好省</span>-->
<!--      <div class="swipe-title2">-->
<!--        <span>检测领域全覆盖，一键下单，即刻体验一站式检测服务</span>-->
<!--        <span>资深专家1V1服务支持，尊享最优检测方案</span>-->
<!--      </div>-->
<!--    </div>-->
    <div class="header-swipe">
      <van-swipe class="header-swipe-swipe" :autoplay="3000" indicator-color="#e90001">
        <van-swipe-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.bannerImg">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="marquee-box">
      <ul class="marquee-list" :class="{ 'animate-up': animateUp }">
        <li v-for="(item, index) in listData" :key="index">
          <span class="icon iconfont" style="padding-right: 5px">&#xe7ca;</span>百检用户{{ item }}刚刚咨询了产品的检测报价
        </li>
      </ul>
    </div>
    <div class="service-swipe">
      <span class="title">检测服务</span>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#e90001">
        <van-swipe-item v-for="(item,index) in serverList" :key="index">
          <div class="swipe-picture">
            <img :src="item.newImg" @click="handleGoPage('serviceDetail', item.newId)">
          </div>
          <span>{{ item.newTitle }}</span>
        </van-swipe-item>
      </van-swipe>
      <div class="see-more" @click="handleGoPage('testService')">
        查看更多
      </div>
    </div>
    <div class="service-flow">
      <span>服务流程</span>
      <img src="/flow.png" alt="">
    </div>
    <div class="info-box">
      <span class="title">检测资讯</span>
      <div class="wraper">
        <div v-for="(item, index) in newsList" @click="selectStyle(index)">
          <div
            :key="index"
            class="select"
            v-if="index === infoIndex"
            :class="{ mask: index === infoIndex }"
          >
            <img :src="item.img_hover" style="height: 9.375rem; width: 100%">
            <span class="item-name">{{ item.name }}</span>
            <div class="item-content">
              <div v-for="(item1, index) in item.newsEntityList" :key="index">
                <div v-if="index === 0">
                  <img :src="item1.newImg" @click="handleGoPage('informationDetail', item1.newId)"/>
                  <span class="span1">{{ item1.newTitle }}</span>
                </div>
                <div v-else class="newDescribe" @click="handleGoPage('informationDetail', item1.newId)">
                  <span class="span2" >{{ item1.newTitle }}</span>
                  <img src="/right.png">
                </div>
              </div>
              <div class="see-more" @click="handleGoPage('testInformation')">
                查看更多
              </div>
            </div>
          </div>
          <div class="no-select" v-else>
            <img :src="item.img" alt="">
            <div class="no-select-text">
              <span v-if="index === 0">行业新闻</span>
              <span v-if="index === 1">检测知识</span>
              <span v-if="index === 2">机构百科</span>
              <span v-if="index === 3">检测标准</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <seo-bottom></seo-bottom>
    <div class="contact-bj">
      <div class="contact" @click="handleGoPage('quotedPrice')">
        <img src="/tubiao2.png" alt="">
        <span>咨询报价</span>
      </div>
      <div class="contact" @click="handleCall">
        <img src="/tubiao3.png" alt="">
        <a href="tel:400-101-7153"><span>拨打电话</span></a>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 首页 2021年4月27日 xyy
 */
import {NoticeBar, Swipe, SwipeItem} from 'vant';
import SeoBottom from "../components/seoBottom";
import {getList, getRollList, getBanners} from "../api/home";

export default {
  name: "home",
  async asyncData({$axios}) {
    // console.log(info,'envkkkkk')
    let [listA, listB, listC] = await Promise.all([
      $axios.get('/mall-service/userService/news/queryIndexPageNews'),
      $axios.get('/mall-service/userService/consultQuote/queryConsultQuotePage'),
      $axios.get('/mall-service/userService/standardBanner/getIndexPageBanner?page=1&pageSize=5&bannerRange=2&bannerPois=1'),
    ])
    let resData = listA.data
    const info = [{
      img: require("/assets/images/news.png"),
      img_hover: require("/assets/images/newshover.png"),
    },
      {
        img: require("/assets/images/zhishi.png"),
        img_hover: require("/assets/images/zhishihover.png"),
      },
      {
        img: require("/assets/images/baike.png"),
        img_hover: require("/assets/images/baikehover.png"),
      },
      {
        img: require("/assets/images/biaozhun.png"),
        img_hover: require("/assets/images/biaozhunhover.png"),
      }];
    let arr = [];
    info.forEach((item, index) => {
      resData.informatioinServerNews.forEach((data, i) => {
        if (index === i) {
          arr.push({
            img: item.img,
            img_hover: item.img_hover,
            id: data.classId,
            name: data.className,
            newsEntityList: data.newsEntityList,
          });
        }
      });
    });
    return {
      newsList: arr,
      listData: listB.data.slice(0, 10),
      listData1: listB.data.slice(10, 20),
      listData2: listB.data.slice(20, 30),
      imgList: listC.data.records,
      serverList: resData.testServerNews
    }
  },
  data() {
    return {
      infoIndex: 0,
      info: [],
      imgList: [],
      newsList: [],
      serverList: [],
      listData: [],
      animateUp: false,
      timer: null,
    }
  },
  components: {
    SeoBottom,
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  mounted() {
    this._initPage()
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    _initPage() {
      this.timer = setInterval(this.scrollAnimate, 1500);
      // this.getBanners()
      // this.getList()
      // this.getRollList()
    },
    handleGoPage(url, newId) {
      if (newId) {
        this.$router.push({
          path: url,
          query: {
            newId
          },
        })
      } else {
        this.$router.push({
          name: url
        })
      }
    },
    handleCall() {
      return
    },
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.listData.push(this.listData[0]);
        this.listData.shift();
        this.animateUp = false;
      }, 500);
    },
    selectStyle(index) {
      this.infoIndex = index;
    },
    getList() {
      getList().then((res) => {
        // console.log(res, "111111");
        const resData = res.data;
        let arr = [];
        this.info.forEach((item, index) => {
          resData.informatioinServerNews.forEach((data, i) => {
            if (index === i) {
              arr.push({
                img: item.img,
                img_hover: item.img_hover,
                id: data.classId,
                name: data.className,
                newsEntityList: data.newsEntityList,
              });
            }
          });
        });
        this.newsList = arr;
        // console.log(arr, "000000000");
        this.serverList = resData.testServerNews;
      });
    },
    getRollList() {
      getRollList({
        page: 1,
        pageSize: 30
      }).then(res => {
        const resData = res.data
        this.listData = resData
        console.log(resData, 111111111)
      })
    },
    getBanners() {
      getBanners({
        page: 1,
        pageSize: 5,
        bannerRange: 2,
        bannerPois: 1
      }).then(res => {
        console.log(res, 'opopopop')
        if (res.data) {
          const resData = res.data.records
          this.imgList = resData
        }
      })
    },
  }
};
</script>

<style lang="scss" scope>
.home {
  padding-bottom: 3.0625rem;
  .header-swipe{
    height: 12.5rem;
    &-swipe{
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .swipe-info {
    background-image: url("/zixun.png");
    width: 100%;
    height: 12.5rem;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    line-height: 5px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;

    .swipe-title1 {
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
      line-height: 28px;
      position: relative;

      &:after {
        content: "";
        width: 2.5rem;
        height: 0.1rem;
        opacity: 1;
        background: #ffffff;
        position: absolute;
        top: 3rem;
        left: 7.5rem;
      }
    }

    .swipe-title2 {
      font-size: 0.875rem;
      font-weight: 400;
      color: #ffffff;
      line-height: 1.75rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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

  .marquee-box {
    width: 100%;
    background: #f0f0f0;
    height: 2rem;
    overflow: hidden;

    .marquee-list {
      li {
        width: 100%;
        height: 2rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        list-style: none;
        line-height: 2rem;
        text-align: center;
        color: #333333;
        font-size: 0.75rem;
        font-weight: 400;
      }
    }

    .animate-up {
      transition: all 0.5s ease-in-out;
      transform: translateY(-40px);
    }
  }

  .notice-swipe {
    height: 2.5rem;
    line-height: 2.5rem;
  }

  .service-swipe {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-bottom: 7rem;
    position: relative;

    .title {
      position: absolute;
      left: 50%;
      top: 2.5rem;
      transform: translate(-50%);
      font-size: 1.5rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      text-align: center;
      color: #333333;
      line-height: 1.75rem;
    }

    .my-swipe .van-swipe-item {
      margin-top: 6rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 2rem;

      .swipe-picture {
        width: 100%;
        height: 15rem;
        display: flex;
        justify-content: center;
        img{
          height: 100%;
          width: auto;
        }
      }

      span {
        font-size: 1rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Bold;
        font-weight: 700;
        color: #333333;
        line-height: 1.5rem;
      }
    }

    .see-more {
      position: absolute;
      left: 50%;
      bottom: 2.5rem;
      transform: translate(-50%);
      width: 6.25rem;
      height: 2.5rem;
      opacity: 1;
      background: #ffffff;
      border: 1px solid #e90001;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #e90001;
    }
  }

  .service-flow {
    width: 100%;
    opacity: 1;
    background: #f0f0f0;
    padding-top: 1.125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.125rem;

    img{
      max-width: 100%;
    }
    span {
      font-size: 1.5rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #333333;
      line-height: 1.75rem;
      margin-bottom: 1.5625rem;
    }
  }

  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.125rem 1rem 1.375rem 1rem;

    .title {
      font-size: 1.5rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      text-align: center;
      color: #333333;
      line-height: 1.75rem;
    }

    .wraper {
      display: flex;
      flex-direction: column;
      padding-top: 1.5625rem;

      .select {
        position: relative;

        .item-name {
          position: absolute;
          top: 4rem;
          left: 50%;
          transform: translatex(-50%);
          font-size: 1.5rem;
          font-family: Microsoft YaHei, Microsoft YaHei-Bold;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3125rem;
        }

        .item-content {
          margin-bottom: 5rem;
          position: relative;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          .span1 {
            font-size: 1rem;
            font-family: Microsoft YaHei, Microsoft YaHei-Bold;
            font-weight: 700;
            color: #333333;
            line-height: 1.5rem;
          }
          .newDescribe{
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            align-items: center;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #e0e0e0;
            img{
              width: 0.5rem;
              height: 0.8rem;
            }
            span{
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
            }
          }
          .span2 {
            font-size: 0.8125rem;
            font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            font-weight: 400;
            color: #333333;
            line-height: 1.3125rem;
            padding-left: 0.5rem;
            position: relative;

            &:before {
              content: "";
              border-radius: 50%;
              width: 0.25rem;
              height: 0.25rem;
              background: #e90001;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
            }
          }
          .see-more {
            position: absolute;
            left: 50%;
            bottom: -4rem;
            transform: translate(-50%);
            width: 6.25rem;
            height: 2.5rem;
            opacity: 1;
            background: #ffffff;
            border: 1px solid #e90001;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            font-weight: 400;
            color: #e90001;
          }
          img {
            width: 100%;
          }
        }
      }

      .no-select {
        position: relative;

        img {
          width: 100%;
          height: 5rem;
        }

        .no-select-text {
          width: 50%;
          height: 3.125rem;
          opacity: 0.9;
          background: #ffffff;
          position: absolute;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            padding-left: 0.75rem;
            font-size: 1.5rem;
            font-family: Microsoft YaHei, Microsoft YaHei-Bold;
            font-weight: 700;
            color: #333333;
            line-height: 3.75rem;
            letter-spacing: 0.75rem;
          }
        }
      }
    }
  }

  .contact-bj {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.0625rem;
    opacity: 1;
    background: #e90001;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .contact {
      display: flex;
      align-items: center;

      img {
        width: 1.5rem;
        height: 1.5rem;
      }

      span {
        margin-left: 0.3rem;
        font-size: 0.875rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        color: #ffffff;
        line-height: 1.3125rem;
      }
    }

    &:after {
      content: "";
      width: 0.15rem;
      height: 1.1875rem;
      position: absolute;
      left: 50%;
      top: 50%;
      background: #ffffff;
      transform: translate(-50%, -50%);
      z-index: 99;
    }
  }
}
</style>
