import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myLevel: 0,
    checkRechargeVisible: false,
    checkRechargeItem: {},
  },
  mutations: {
    SET_MY_LEVEL(state, level) {
      state.myLevel = level
    },
    CHECK_RECHERGE(state, data) {
      state.checkRechargeVisible = data.visible
      state.checkRechargeItem = data.item
    }
  },
  actions: {

  }
})
