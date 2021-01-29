<template>
  <div
    class="level appMember"
    :style="{
      'background-color': setBgColor,
      'background-image': `url(${require(`@/assets/images/會員底圖-${item.level}.png`)})`,
      'z-index': ListLength - index,
      'margin-top': marginTop,
    }"
    @click="actRecharge(item.level)"
  >
    <img
      class="appMember__icon"
      :src="require(`@/assets/images/level${item.level}.svg`)"
    >
    <div class="level__content">
      <div class="detail">
        <h3 class="appMember__text">{{ item.name }}</h3>
        <p class="appMember__text">每日可領取{{ item.count }}次任務</p>
      </div>
      <div class="money">
        <p class="appMember__text">￥{{ item.money}}.00</p>
        <div v-show="isRecagrge">
          <button class="recharge-btn">充值</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Level',

  props: {
    item: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
    ListLength: {
      type: Number,
      default: 0,
    },
    isRecagrge: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    setBgColor() {
      const index = this.index
      const oddColor = '#241332'
      const evenColor = '#352641'
      return (index % 2 === 0) ? evenColor : oddColor
    },

    marginTop() {
      const isRecagrge = this.isRecagrge
      return isRecagrge ? '-30px' : '-60px'
    }
  },

  methods: {
    actRecharge(level) {
      this.$emit('recharge', level)
    },
  }
}
</script>

<style lang="scss" scoped>
  .level {
    position: relative;
    transition: all .3s;
  }

  .level__content {
    padding-top: 5.5rem;
    display: flex;
    justify-content: space-around;

    .detail {
      h3 {
        font-size: 24px;
        margin-bottom: 5px;
      }

      p {
        font-size: 14px;
      }
    }

    .money {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      p {
        font-size: 20px;
      }

      div {
        animation: fade-in;
        animation-duration: .9s;
      }

      .recharge-btn {
        width: 100px;
        height: 40px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 40px;
        opacity: 1;
        color: #8A56AC;
        font-size: 20px;
      }
    }
  }

@keyframes fade-in {  
  0% {opacity: 0;}
  40% {opacity: 0;}
  100% {opacity: 1;}  
}  
</style>