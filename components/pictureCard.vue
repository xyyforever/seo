<template>
  <div class="pictureCard" @click="handleCardClick">
    <div class="picture">
      <img :src="cardInfo.img">
    </div>
    <div class="cont">
      <div class="title">{{ cardInfo.title }}</div>
      <div class="info">
        <span class="source">百检网</span>
        <span class="date">{{ cardInfo.date.substring(0, 10) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 有图产品卡片
 */
export default {
  name: "pictureCard",
  props:{
    cardInfo: {
      type: Object,
      default: () => {}
    }
  },
  methods:{
    handleCardClick() {
      this.$emit('click', this.cardInfo)
    }
  }
};
</script>

<style lang="scss" scoped>
.pictureCard{
  height: 7rem;
  margin-top: 1rem;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  .picture{
    width: 9rem;
    height: 6rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #f5f4f3;
    img{
      height: 90%;
      max-width: 90%;
    }
  }
  .cont{
    width: 11.2rem;
    height: 6rem;
    padding-left: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .title{
      font-size: 1rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Bold;
      font-weight: 700;
      color: #333333;
      -webkit-box-orient: vertical;
      margin-bottom: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
    }
    .info{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .source{
        font-size: 1rem;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        color: #b2b2b2;
      }
      .date{
        font-size: 1rem;
        font-family: Arial, Arial-Regular;
        font-weight: 400;
        color: #b2b2b2;
      }
    }
  }


}
</style>
