<template>
  <div id="app">
    <Header />
    <div class="main">
      <MyLevel
        :item="memberList.find(item => item.level === myLevel)"
        :zIndex="filterMemberList.length + 1"
      />
      <Level
        v-for="(item, k) in filterMemberList"
        :key="item.level"
        :index="k"
        :ListLength="filterMemberList.length"
        :item="item"
        :isRecagrge="rechargeLevel === item.level"
        @recharge="getRecharge"
      />
    </div>
    <Footer />

    <CustomerServer />
  </div>
</template>

<script>
import { members } from './assets/js/data'
import Header from './components/Header'
import Footer from './components/Footer'
import MyLevel from './components/MyLevel'
import Level from './components/Level'
import CustomerServer from './components/CustomerServer'

export default {
  name: 'app',

  components: {
    Header,
    Footer,
    MyLevel,
    Level,
    CustomerServer,
  },

  data() {
    return {
      myLevel: 0,
      rechargeLevel: null,
      memberList: [],
    }
  },

  computed: {
    filterMemberList() {
      const myLevel = this.myLevel
      return this.memberList.filter(item => item.level !== myLevel)
    },
  },

  created() {
    this.getData()
  },

  methods: {
    getData() {
      this.memberList = members
    },

    getRecharge(level) {
      this.rechargeLevel = level
    }
  },
}
</script>

<style lang="scss">
  @import '~@/assets/styles/app.scss';

  #app {
    width: 375px;
    height: 734px;
    overflow: hidden;
    position: relative;
    font-family: Microsoft JhengHei;
    background-color: #352641;
  }

  .main {
    position: relative;
    height: 626px;
    overflow-y: auto;
  }
</style>

