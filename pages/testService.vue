<template>
  <div class="test-service">
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
 * 检测服务 2021年4月27日 xyy
 */
import {getNewsType, getNewsList} from "@/api/info";
import {List, Toast} from 'vant';

const url = require('../static/service.png')
export default {
  name: "testService",
  components: {
    [List.name]: List
  },
  head() {
    return {
      title: "检测服务|检测报告|第三方检测-百检网",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "百检网是一家专业的第三方检测机构服务电商平台，平台拥有众多的检测机构，为用户提供全方位的检测服务,包涵：纺织品检测，箱包检测，玩具检测，皮革鞋材检测，食品检测，材料分析检测，环境检测，电子电器检测，医药检测，水质检测等，让检测变得更简单。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "纺织品检测，箱包检测，玩具检测，皮革鞋材检测，食品检测，材料分析检测，环境检测，电子电器检测，医药检测，水质检测",
        },
      ],
    };
  },
  data() {
    return {
      hasMore: false,
      url,
      list: [],
      tabList: [],
      tabIndex: 0,
      title: '检测服务',
      queryList: {
        secondaryClassId: '',
        page: 1,
        pageSize: 10,
      },
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
        duration: 0,
        message: '加载中...',
        forbidClick: true,
      });
      this.$router.push({
        name: 'serviceDetail',
        query: {
          pid: item.secondaryClassId,
          newId: item.newId,
        }
      })
    },
    getType() {
      getNewsType({newClassType: 1}).then((res) => {
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
    getList() {
      if (this.queryList.secondaryClassId){
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
          console.log(err, 'err')
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
.test-service {
  .content {
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
