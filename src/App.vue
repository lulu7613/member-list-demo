<template>
  <div id="app">
    <Footer />
  </div>
</template>

<script>
import { members } from './assets/js/data'
import Footer from './components/Footer'

export default {
  name: 'app',

  components: {
    Footer,
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

