<template>
  <div class="quote-price">
    <swipe title="资讯报价" :url="url" ></swipe>
    <div class="content">
      <span class="xuqiu-text">您的需求</span>
      <div class="item">
        <span>样品描述:</span>
        <textarea class="textarea" v-model="sampleDesc" placeholder="简要描述您要检测的样品"></textarea>
      </div>
      <div class="item">
        <span>测试用途:</span>
        <textarea class="textarea" v-model="testPurpose" placeholder="简要描述测试用途"></textarea>
      </div>
      <div class="item">
        <span>区域:</span>
        <van-cell is-link :title="areaText" @click="showArea = !showArea"></van-cell>
        <van-popup v-model="showArea" position="bottom">
          <van-area
            title="地址"
            :area-list="areaList"
            :columns-num="2"
            @cancel="showArea = false"
            @confirm="handleSelectArea"
          />
        </van-popup>
      </div>
      <div class="item">
        <span>希望多久获得报告:</span>
        <van-cell is-link :title="baoGao"  @click="showAction = !showAction"/>
        <van-action-sheet
          v-model="showAction"
          :actions="timeList"
          cancel-text="取消"
          close-on-click-action
          @select="handleTimeSelect"
        ></van-action-sheet>
      </div>

      <div class="item">
        <span>补充内容:</span>
        <textarea class="textarea" v-model="bcContent" placeholder="简要描述您要检测的样品"></textarea>
      </div>
      <span class="xuqiu-text">您的需求</span>
      <div class="item">
        <span>姓名:</span>
        <input class="input" v-model="name" placeholder="请输入姓名"/>
      </div>
      <div class="item">
        <span>手机号:</span>
        <input class="input" v-model="phone" placeholder="请输入手机号"/>
      </div>
      <div class="submit" @click="addConsult">
        <span>提交</span>
      </div>
    </div>
    <seo-bottom></seo-bottom>
  </div>
</template>

<script>
/**
 * 请求报价 2021年4月27日 xyy
 */
import { areaList } from '@vant/area-data';
import {Toast} from "vant";
const url = require('../static/quote.png')
export default {
  name:"quotePrice",
  data() {
    return {
      areaList,
      showAction: false,
      sampleDesc: '',
      testPurpose: '',
      baoGao: '请选择',
      baoGaoValue: 0,
      areaText: '请选择',
      areaValue: [],
      bcContent: '',
      url,
      name: '',
      phone: '',
      showArea: false,
      timeList: [
        {
          value: 0,
          name: '一天内'
        },
        {
          value: 1,
          name: '一周内'
        },
        {
          value: 2,
          name: '10-15天'
        },{
          value: 3,
          name: '一个月内'
        }
      ],
    }
  },
  mounted() {
    console.log('qwe', this.$router)
  },
  methods: {
    handleSelectArea(item) {
      console.log(item, 'item')
      this.areaValue = item
      this.areaText = item[0].name + '/' + item[1].name
      this.showArea = false;
    },
    handleTimeSelect(item) {
      this.baoGaoValue = item.value
      this.baoGao = item.name
      console.log(item, 'item')
    },
    //新增咨询报价
    async addConsult(){
      if (!this.name) {
        Toast('请输入姓名')
        return
      }
      if (!this.phone) {
        Toast('请输入手机号')
        return
      }
      if (!this.isPhone(this.phone)){
        Toast('请填写正确的手机号')
        return
      }
      const params = {
        sampleDesc: this.sampleDesc || '',
        purpose: this.testPurpose || '',
        city: this.areaValue[0]?.name || '',
        province: this.areaValue[1]?.name || '',
        reportTime: this.baoGaoValue || '',
        name: this.name,
        mobile: this.phone,
        source: 'H5'
      }
      let res = await this.$axios.post('/mall-service/userService/consultQuote/insertConsultQuote',params);
      // insertConsultQuote(params).then(res => {
      //   Toast('提交成功')
      //   location.replace()
      // })
      console.log(res)
      if(res.code == 200){
        Toast('提交成功')
        this.$router.push('/')
      } else {
        Toast('提交失败')
        this.$router.push('/')
      }
    },

    isPhone (item) {
      const phoneReg = /0?(13|14|15|17|18|16|19)\d{9}$/
      return phoneReg.test(item.trim())
    },
  }
};
</script>

<style lang="scss" scope>
.quote-price{
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    border-bottom: 1px solid #e0e0e0;
    .xuqiu-text{
      font-size: 1.5rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #333333;
      padding: 1.5rem;
    }
    .submit{
      width: 6.25rem;
      height: 2.5rem;
      opacity: 1;
      background: #e90001;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      span{
        font-size: 0.875rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .item{
      width: 100%;
      margin-bottom: 0.5rem;
      span{
        display: block;
        font-size: 0.875rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        margin-bottom: 0.625rem;
        color: #333333;
      }
      .input{
        width: 100%;
        height: 2rem;
        font-size: 0.8125rem;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        padding-left: 0.625rem;
      }
      .textarea{
        padding-left: 0.625rem;
        width: 100%;
        height: 4.25rem;
        font-size: 0.8125rem;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
      }
    }
  }
  .swipe{
    position: relative!important;
    top: 0!important;
  }
  .swipe-box{
    padding-top: 0!important;
  }
}

</style>
