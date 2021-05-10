<template>
  <div class="test-information">
    <swipe
      :title="title"
      :swipes="tabList"
      :tab-index="tabIndex"
      :url="url"
      @swipe-click="handleTab"
    ></swipe>
    <div class="content">
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
      <div class="more">
        <div class="has-more" v-if="list && list.length && hasMore" @click="getList">查看更多</div>
        <div v-if="list && list.length && !hasMore" class="no-more">没有更多了</div>
      </div>
      <seo-bottom></seo-bottom>
    </div>
  </div>
</template>

<script>
/**
 * 检测资讯 2021年4月27日 xyy
 */
import {getNewsType, getNewsList} from "@/api/info";
import {List, Toast} from 'vant';
const url = require('../static/zixun.png')
export default {
  name:"testInformation",
  components: {
    [List.name]: List
  },
  head() {
    return {
      title: '检测资讯|检测技术|测试方法-百检网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '百检网-专业的检测电商平台，专业为您提供各类检测服务及技术支持，提供行业前沿的检测资讯，测试新闻，检测行业资讯等,同时也通过检测技术，检测方法，测试方法，测试标准，检测流程，检测内容，检测试验等技术指导。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '检测资讯，测试新闻，检测行业资讯,检测技术，检测方法，测试方法，测试标准，检测流程，检测内容，检测试验'
        }
      ]
    }
  },
  data() {
    return {
      hasMore: false,
      url,
      list: [],
      tabList: [],
      title: '检测资讯',
      tabIndex: 0,
      queryList: {
        secondaryClassId: '',
        page: 1,
        pageSize: 10,
      },
      loading: false,
      finished: false,
    }
  },
  created() {
    this.getType()
  },
  methods: {
    getCardInfo(item) {
      return {
        title: item.newTitle,
        img: item.newImg,
        date: item.createTime
      }
    },
    handleCardClick(item) {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      });
      this.$router.push({
        name: 'informationDetail',
        query: {
          pid: item.secondaryClassId,
          newId: item.newId,
        }
      })
    },
    getType() {
      getNewsType({newClassType: 2}).then((res) => {
        console.log(res);
        const resData = res.data;
        this.tabList = resData;
        const pid = Number(this.$route.query.pid) || 0
        const index = this.tabList.findIndex(x => x.classId === pid)
        if (index > -1) {
          this.tabIndex = index
        }
        this.queryList.secondaryClassId = pid || resData[0].classId;
        getNewsList(this.queryList).then(res => {
          this.queryList.page = 2
          const resData = res.data;
          if (resData.records.length < this.queryList.pageSize){
            this.hasMore = false
          } else {
            this.hasMore = true
          }
          this.list = resData.records
        });
      });
    },
    getList(loadMore = true) {
      console.log(loadMore, '111')
      if (this.queryList.secondaryClassId) {
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
        });
        getNewsList(this.queryList).then(res => {
          Toast.clear()
          this.queryList.page++
          const resData = res.data;
          if (resData.records.length < this.queryList.pageSize){
            this.hasMore = false
          } else {
            this.hasMore = true
          }
          this.list = this.list.concat(resData.records)
        }).catch(err => {
          console.log(err)
          Toast.clear()
        });
      }
    },
    handleTab(item, index) {
      this.tabIndex = index;
      this.queryList.secondaryClassId = item.classId
      this.queryList.page = 1
      getNewsList(this.queryList).then(res => {
        this.queryList.page = 2
        const resData = res.data;
        if (resData.records.length < this.queryList.pageSize){
          this.hasMore = false
        } else {
          this.hasMore = true
        }
        this.list = resData.records
      });
    },
  }
};
</script>

<style lang="scss" scope>
.test-information{
  .content{
    overflow:auto;
    max-height: 40rem;
    padding-left: 1rem;
    padding-right: 1rem;
    .more{
      width: 100%;
      display: flex;
      justify-content: center;
      .has-more{
        margin-top: 1rem;
        width: 6.25rem;
        height: 2.5rem;
        border: 1px solid #e90001;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        color: #e90001;
      }
      .no-more{
        padding-top: 1rem;
        text-align: center;
        color: grey;
      }
    }
  }
}
</style>
