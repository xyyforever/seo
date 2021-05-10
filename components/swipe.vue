<template>
  <div>
    <div class="swipe">
      <img :src="url" class="swipe-img">
      <span class="swipe-title">{{ title }}</span>
      <div class="swipe-bottom" v-if="swipes && swipes.length">
        <template v-for="(item, index) in swipes">
          <div class="swipe-item">
            <span :key="index" :class="index === tabIndex ? 'select-text' : 'text'" @click="handleSwipeClick(item, index)">{{item.className}}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="swipe-box" style="padding-top: 8rem"></div>
  </div>

</template>
<script>
const url = require('./img/logo.png')
/**
 * 轮播部分
 */
export default {
  name: "swipe",
  props:{
    url: {
      default: () => {
        return {}
      }
    },
    swipes: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: "检测资讯"
    },
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleSwipeClick(item, index) {
      this.$emit('swipe-click', item, index)
    }
  }
};
</script>

<style lang="scss" scoped>
.swipe{
  position: fixed;
  top: 3.75rem;
  z-index: 98;
  width: 100%;
  .swipe-img{
    width: 100%;
    height: 8rem;
    background: #000000;
  }
  .swipe-title{
    position: absolute;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 8rem;
    height: 3rem;
    opacity: 1;
    font-size: 2rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: left;
    color: #ffffff;
    line-height: 2rem;
    text-shadow: 0rem 0rem 1rem 0rem rgba(0,0,0,0.10);
    &:after{
      content: "";
      width: 3rem;
      height: 0.1rem;
      opacity: 1;
      background: #ffffff;
      position: absolute;
      bottom: 0;
      left: 2.5rem;
    }
  }
  .swipe-bottom{
    width: 100%;
    height: 3rem;
    opacity: 0.5;
    background: #000000;
    position: absolute;
    bottom: 0.25rem;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    box-sizing: border-box;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
    .swipe-item{
      position: relative;
      .text, .select-text{
        height: 1rem;
        opacity: 1;
        font-size: 1rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 1rem;
      }
      .select-text{
        &:after{
          content: "";
          width: 100%;
          height: 0.1rem;
          opacity: 1;
          background: #ffffff;
          position: absolute;
          bottom: -4px;
          left: 0;
        }
      }
    }
    .swipe-item{
      margin-right: 1.25rem;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
