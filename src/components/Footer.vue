<template>
  <div class="footer">
    <div
      v-for="(item, k) in footerList"
      :key="k"
      class="item"
    >
      <img
        class="item__icon"
        :src="require(`@/assets/images/footer/${item.icon}`)"
      >
      <div
        class="item__title"
        :class="{'item__title--active': item.title === 'VIP'}"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { footer } from '../assets/js/data'

export default {
  name: 'Footer',

  data() {
    return {
      footerList: []
    }
  },

  created() {
    this.getData()
  },

  methods: {
    getData() {
      this.footerList = footer
    },
  },
}
</script>

<style lang="scss" scoped>
  .footer {
    width: 375px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .item {
    width: 93px;
    height: 64px;
    padding-top: 21px;
    box-sizing: border-box;
    text-align: center;

    &__icon {
      width: 22px;
      height: 20px;
    }

    &__title {
      color: #717171;
      font-size: 12px;

      &--active {
        color: #8A56AC;
      }
    }
  }
</style>