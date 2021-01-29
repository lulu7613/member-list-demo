<template>
  <div
    class="myLevel appMember"
    :style="{ 
      'background-image': `url(${require(`@/assets/images/會員底圖-${item.level}.png`)})`,
      'z-index': zIndex,
    }"
  >
    <img
      class="appMember__icon"
      :src="require(`@/assets/images/level${item.level}.svg`)"
    >
    <div class="myLevel__content">
      <img src="~@/assets/images/member.svg">
      <h3>{{ item.name }}</h3>
      <p class="appMember__text">每日可領取{{ item.count }}次任務</p>
      <p class="appMember__text">{{ item.dateline }}止</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLevel',

  props: {
    item: {
      type: Object,
      default: () => {},
    },
    zIndex: {
      type: Number,
      default: 0,
    },
  }
}
</script>

<style lang="scss" scoped>
  .myLevel {
    background-color: #8A56AC;

    &__content {
      text-align: center;
      padding-top: 20px;
      line-height: 1.6rem;

      h3 {
        font-size: 24px;
        margin: 5px 0;
      }

      p {
        font-size: 14px;
      }

      p:last-child {
        font-size: 16px;
      }
    }
  }
</style>