<template>
  <div id="app" style="padding-bottom:100px">
    <md-field class="block">
      <md-cell-item title="交易时间" align="right" :addon="detailInfo.date"/>
      <md-cell-item title="交易金额" align="right" :addon="detailInfo.money"/>
      <md-cell-item title="转账类别" align="right" :addon="detailInfo.type"/>
      <md-cell-item title="转账用途" align="right" :addon="detailInfo.use"/>
    </md-field>
    <md-field class="block" title="收款方">
      <md-cell-item title="户名" align="right" addon="张三"/>
      <md-cell-item title="账号" align="right" addon="66666666"/>
      <md-cell-item title="银行" align="right" addon="招商银行"/>
    </md-field>
    <md-field class="block">
      <md-cell-item title="户名" align="right" addon="李四"/>
      <md-cell-item title="账号" align="right" addon="888888888"/>
    </md-field>

    <md-action-bar :actions="actionBarData"></md-action-bar>
  </div>
</template>

<script>
import {
  ActionBar,
  Field,
  FieldItem,
  InputItem,
  CellItem,
  Switch,
  NumberKeyboard
} from "mand-mobile";
export default {
  name: "app",

  components: {
    [ActionBar.name]: ActionBar,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [CellItem.name]: CellItem,
    [Switch.name]: Switch,
    [NumberKeyboard.name]: NumberKeyboard
  },
  computed: {
    detailInfo: function() {
      return this.$route.params.detailInfoParam;
    }
  },
  data() {
    return {
      payerName: "王五",
      actionBarData: [
        {
          text: "再次转账",
          onClick: this.handleSubmit
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({ path: "/Transfer" });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #f0f0f0;
}
.detail {
  background: #fff;
  font-size: 0.24rem;
}
.block {
  margin-top: 0.32rem;
}
.agree {
  padding: 0.32rem;
  font-size: 0.24rem;
  color: #666;
}
.md-field-item.is-solid .md-field-item-title,
.md-cell-item-title {
  text-align: left;
}
</style>