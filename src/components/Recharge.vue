<template>
  <div class="recharge">
    <div class="recharge__item">
      <div>
        <h3>提示</h3>
        <p>確定花費{{ checkRechargeItem.money }}元</p>
        <p>成為12個月的{{ checkRechargeItem.name }}嗎?</p>
      </div>
      <div class="button">
        <button class="button__cancel" @click="cancel()">取消</button>
        <button class="button__confirm" @click="confirm(checkRechargeItem.level)">確定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recharge',

  computed: {
    checkRechargeItem() {
      return this.$store.state.checkRechargeItem
    },
  },

  methods: {
    cancel() {
      this.$store.commit('CHECK_RECHERGE', { visible: false, item: {} })
    },

    confirm(level) {
      this.$store.commit('SET_MY_LEVEL', level)
      this.cancel()
    }
  }
}
</script>

<style lang="scss" scoped>
  .recharge {
    width: 375px;
    height: 734px;
    position: absolute;
    z-index: 101;
    background-color: #000;

    &__item {
      box-sizing: border-box;
      width: 327px;
      height: 205px;
      background-color: #FEFCFF;
      border-radius: 20px 20px 0px 80px;
      margin: 50% auto 0 auto;
      padding: 30px 30px;

      h3 {
        font-size: 26px;
        margin-bottom: 10px;
      }

      p {
        color: #998FA2;
        font-size: 14px;
      }
    }

    .button {
      text-align: right;
      margin-top: 1.5rem;
      
      button {
        width: 94px;
        height: 44px;
        border-radius: 52px;
        letter-spacing: 0.06px;
        color: #FFFFFF;
        font-size: 16px;
        margin: 0 5px;
      }

      &__confirm {
        background-color: #8A56AC;
      }
      &__cancel {
        background-color:#9599B3;
      }
    }
  }
</style>