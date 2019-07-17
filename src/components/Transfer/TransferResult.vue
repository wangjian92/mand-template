<template>
  <div class="md-example-child md-example-child-result-page md-example-child-result-page-2" style="margin-top:0.64rem;">
    <md-result-page text="转账成功"></md-result-page>
    <md-button
      type="primary"
      @click="goPage('/TransferRecord')"
      style="width:50%;display:inline"
    >转账记录</md-button>
    <md-button type="default" @click="goPage('/Transfer')" style="width:50%;display:inline">继续转账</md-button>
  </div>
</template>

<script>
import { ResultPage, Button } from "mand-mobile";

export default {
  name: "result-page-demo",
  components: {
    [ResultPage.name]: ResultPage,
    [Button.name]: Button
  },
  data() {
    return {};
  },
  methods: {
    goPage(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style>
.md-example-child-result-page-2 {
  background: #fff;
}
</style>