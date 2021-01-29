<template>
  <div id="app">
    <Header />
    <Footer />

    <CustomerServer />
  </div>
</template>

<script>
import { members } from './assets/js/data'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomerServer from './components/CustomerServer'

export default {
  name: 'app',

  components: {
    Header,
    Footer,
    CustomerServer,
  },

  data() {
    return {
      myLevel: 0,
      memberList: [],
    }
  },

  created() {
    this.getData()
  },

  methods: {
    getData() {
      this.memberList = members
    },
  },
}
</script>

<style lang="scss">
  #app {
    width: 375px;
    height: 734px;
    overflow: auto;
    position: relative;
    font-family: Microsoft JhengHei;
  }
</style>

