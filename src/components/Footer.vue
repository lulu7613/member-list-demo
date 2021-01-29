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
    position: absolute;
    bottom: 0;
    display: flex;
    cursor: pointer;
  }

  .item {
    width: 93px;
    height: 64px;
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