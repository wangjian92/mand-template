<template>
  <div class="hello">
    <h1>
      <span>{{ msg }}</span>
    </h1>
    <p>VUE mand-mobile 模板</p>
    <!-- <md-button @click="greet">Click Me</md-button> -->
    <!-- <md-button @click="goPage('/AccountOpen')">账户开户</md-button> -->
    <md-button @click="goPage('/Transfer')">转账</md-button>
    <md-button @click="goPage('/TransferRecord')">转账记录</md-button>
    <md-button @click="goPage('/PayeeMaintain')">常用收款人维护</md-button>
    <md-button @click="goPage('/FormComponent')">表单组件</md-button>
  </div>
</template>

<script>
import { Button, Toast } from "mand-mobile";

export default {
  name: "Welcome",
  components: {
    "md-button": Button
  },
  props: {
    msg: String
  },
  methods: {
    greet() {
      Toast.info("I'm Batman!");
    },
    goPage(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style scoped>
.hello {
  text-align: center;
  padding: 20px;
  font-size: 32px;
  color: #666;
  line-height: 56px;
}

.hello h1 {
  color: #333;
  line-height: 1.15;
  font-size: 64px;
  margin-bottom: 32px;
}

.hello h1 span {
  position: relative;
}

.hello h1 span::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 8px;
  width: 100%;
  height: 20px;
  background: #ecf6ff;
}
</style>
