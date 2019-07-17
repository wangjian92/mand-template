<template>
  <div id="app">
    <!-- <div class="md-back" @click="goBack"> -->
    <md-button style="display:block;" type="link" icon="arrow-left" @click="goBack">返回</md-button>
    <!-- </div> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <Home msg="AI Version"/> -->
  </div>
</template>

<script>
import { Icon, Button } from 'mand-mobile'
// @ is an alias to /src
// import Home from "@/components/Home.vue";

// export default {
//   name: "app",
//   components: {
//     Home
//   }
// };
export default {
  name: 'app',
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
