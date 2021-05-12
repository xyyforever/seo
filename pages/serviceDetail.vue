<template>
  <div class="service-detail">
    <swipe
      :title="title"
      :swipes="tabList"
      :tab-index="tabIndex"
      :url="url"
      @swipe-click="handleTab"
    ></swipe>
    <div class="card-info">
      <card :card-info="getCardInfo(info)"></card>
    </div>

    <div class="content" v-html="info.newDesc"></div>
    <img class="zixun1" src="/zixun1.png" @click="handleGoPage">
    <div v-if="list && list.length" class="xiangguan">
      <span class="title1">相关服务</span>
      <template v-for="(item,index) in list">
        <picture-card
          v-if="item.newImg"
          :key="index"
          :card-info="getCardInfo(item)"
          @click="handleCardClick(item)"
        ></picture-card>
        <card
          v-else
          :key="index"
          :card-info="getCardInfo(item)"
          @click="handleCardClick(item)"
        ></card>
      </template>
    </div>
    <seo-bottom></seo-bottom>
  </div>
</template>

<script>
/**
 * 服务详情 2021年4月27日 xyy
 */
import {getNewsDetail, getNewsRelated, getNewsType} from "~/api/info"
import {Toast} from "vant";
const url = require('../static/service.png')
export default {
  name:"serviceDetail",
  watchQuery: ['newId'],
  data() {
    const query = this.$route.query
    return {
      url,
      title: '检测服务',
      tabIndex: 0,
      tabList: [],
      list: [],
      info: {},
      pid: query.pid,
      newId: query.newId,
    }
  },
  async asyncData({query, $axios}) {
    console.log(query, $axios, 'envkkkkk')
    let [listA, listB] = await Promise.all([
      $axios.get('/mall-service/userService/news/getNewsDetail?news_id=' + query.newId || 0),
    ])
    Toast.clear()
    let obj = Object.assign({}, listA.data)
    return {
      info: obj,
    }
  },
  head() {
    return {
      title: this.info.newTitle + '-百检网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description

        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.info.keywords
        }
      ]
    }
  },
  created() {
    Toast.clear()
  },
  mounted() {
    this._initPage()
  },
  methods: {
    _initPage() {
      this.getType()
      // this.getNewsDetail()
      this.getNewsRelated()
    },
    getCardInfo(item) {
      return {
        title: item.newTitle,
        img: item.newImg || '',
        date: item.createTime
      }
    },
    handleCardClick(item) {
      Toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true,
      });
      this.$router.push({
        path: 'serviceDetail',
        query: {
          newId: item.newId,
        }
      })
      location.replace()
    },
    getNewsDetail() {
      getNewsDetail({news_id: this.newId}).then(res => {
        const resData = res.data
        this.info = resData
        console.log(resData, 'res')
      })
    },
    getNewsRelated() {
      getNewsRelated({
        secondaryClassId: this.pid,
        newId: this.newId
      }).then(res => {
        const resData = res.data
        this.list = resData.records
        console.log(res, 11111)
      })
    },
    getType() {
      getNewsType({newClassType: 1}).then((res) => {
        const resData = res.data;
        this.tabList = resData;
        const index = this.tabList.findIndex(x => x.classId === Number(this.pid))
        if (index > -1) {
          this.tabIndex = index
        }
      });
    },
    handleTab(item) {
      this.$router.push({
        path: 'testService',
        query: {pid: item.classId}
      })
    },
    handleGoPage() {
      this.$router.push({
        name: 'quotedPrice'
      })
    }
  }
};
</script>

<style lang="scss" scope>
.service-detail{
  .card-info{
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .content{
    padding: 1rem 0;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    margin: 0 1rem;
    border-bottom: 1px solid #e0e0e0;
    img{
      max-width: 100%;
      height: auto;
    }
  }
  .xiangguan{
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 3.5rem;
    position: relative;
    .title1{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 1rem;
      font-size: 1.5rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #333333;
      line-height: 1.875rem;
    }
  }
  .zixun1{
    width: 100%;
  }
}
</style>
