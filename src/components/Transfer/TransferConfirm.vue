<template>
  <div id="app" style="padding-bottom:100px">
    <md-field class="block">
      <md-cell-item title="收款人姓名" align="right" :addon="trsInfo.payeeName"/>
      <md-cell-item title="收款人行号" align="right" :addon="trsInfo.payeeNo"/>
    </md-field>
    <md-field class="block">
      <md-cell-item title="付款人姓名" align="right" :addon="payerName"/>
      <md-cell-item title="付款人行号" align="right" :addon="trsInfo.pickerValue1"/>
    </md-field>
    <md-field class="block">
      <span class="describe">￥{{trsInfo.money}}</span>
      <md-cell-item>
        <p style="font-size:0.24rem;color:#858B9C;">手续费：免手续费</p>
        <p style="font-size:0.24rem;color:#858B9C;">到账方式：{{trsInfo.pickerValue2}}</p>
      </md-cell-item>
    </md-field>
    <md-field class="block">
      <md-input-item title="交易密码" type="password"></md-input-item>
      <md-input-item
        type="digit"
        title="短信验证码"
        :brief="'已向您'+trsInfo.phone+'发送验证码，2分钟内有效'"
        is-amount
      ></md-input-item>
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
  Picker,
  DatePicker,
  CellItem,
  Amount,
  NumberKeyboard
} from "mand-mobile";
export default {
  name: "app",

  components: {
    [Amount.name]: Amount,
    [ActionBar.name]: ActionBar,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [Picker.name]: Picker,
    [DatePicker.name]: DatePicker,
    [CellItem.name]: CellItem,
    [NumberKeyboard.name]: NumberKeyboard
  },
  computed: {
    trsInfo: function() {
      return this.$route.params.trsInfo;
    }
  },
  data() {
    return {
      payerName: "王五",
      actionBarData: [
        {
          text: "提交",
          onClick: this.handleSubmit
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({ path: "/TransferResult" });
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