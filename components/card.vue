<template>
  <div class="card">
    <div class="title">{{ cardInfo.title }}</div>
    <div class="info">
      <span class="source">百检网</span>
      <span class="date">{{ cardInfo.date.substring(0, 10) }}</span>
    </div>
  </div>
</template>
<script>
/**
 * 无图产品卡片
 */
export default {
  name: "card",
  props:{
    cardInfo: {
      type: Object,
      default: () => {
        return {
          title: '',
          date: ''
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.card{
  height: 4rem;
  margin-top: 1rem;
  border-bottom: 1px solid #e0e0e0;
  .title{
    font-size: 1rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    color: #333333;
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    margin-bottom: 1rem;
  }
  .info{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
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
</style>
