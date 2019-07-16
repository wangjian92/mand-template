<template>
  <div id="app">
    <md-field class="block">
      <md-field-item
        title="绑定人民币账户"
        arrow="arrow-right"
        :addon="pickerValue0"
        @click="isPickerShow0 = true"
      ></md-field-item>
      <md-picker
        ref="picker0"
        v-model="isPickerShow0"
        :data="pickerData0"
        @confirm="onPickerConfirm(0)"
        title="绑定账户"
      ></md-picker>

      <md-input-item title="姓名" placeholder="请输入姓名" align="right" clearable></md-input-item>

      <md-field-item
        title="证件类型"
        arrow="arrow-right"
        :addon="pickerValue1"
        @click="isPickerShow1 = true"
      ></md-field-item>
      <md-picker
        ref="picker1"
        v-model="isPickerShow1"
        :data="pickerData1"
        @confirm="onPickerConfirm(1)"
        title="证件类型"
      ></md-picker>

      <md-input-item title="证件号码" placeholder="请输入证件号码" align="right" clearable></md-input-item>

      <md-field-item
        name="name"
        title="证件有效截止日期"
        arrow="arrow-right"
        align="right"
        :content="datePickerValue"
        @click.native="isDatePickerShow = true"
      ></md-field-item>
      <md-date-picker
        ref="datePicker"
        v-model="isDatePickerShow"
        type="custom"
        title="选择日期"
        :text-render="textRender"
        :custom-types="['yyyy', 'MM','dd', 'hh', 'mm']"
        :default-date="currentDate"
        @change="onDatePickerChange"
        @confirm="onDatePickerConfirm"
      ></md-date-picker>

      <md-input-item title="手机号码" placeholder="请输入手机号码" align="right" clearable></md-input-item>

      <md-field-item
        title="账户类型"
        arrow="arrow-right"
        :addon="pickerValue2"
        @click="isPickerShow2 = true"
      ></md-field-item>
      <md-picker
        ref="picker2"
        v-model="isPickerShow2"
        :data="pickerData2"
        @confirm="onPickerConfirm(2)"
        title="账户类型"
      ></md-picker>
    </md-field>
    <!-- <md-field class="block" title="被保人">
      <md-input-item title="被保人姓名" placeholder="请填写被保人姓名"></md-input-item>
      <md-input-item title="身份证号" placeholder="请填写被保人身份证号"></md-input-item>
      <md-input-item title="手机号" type="phone" placeholder="请填写被保人手机号"></md-input-item>
    </md-field>-->
    <md-agree v-model="checked" class="agree">我已认真阅读《协议》并同意遵守此协议。</md-agree>
    <md-action-bar :actions="actionBarData"></md-action-bar>
  </div>
</template>

<script>
import {
  Agree,
  ActionBar,
  Field,
  FieldItem,
  InputItem,
  Picker,
  DatePicker
} from "mand-mobile";

export default {
  name: "app",

  components: {
    [Agree.name]: Agree,
    [ActionBar.name]: ActionBar,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [Picker.name]: Picker,
    [DatePicker.name]: DatePicker
  },

  data() {
    return {
      relation: "本人",
      isPickerShow: false,
      actionBarData: [
        {
          text: "提交"
        }
      ],
      pickerData0: [
        [
          { text: "6231**7270" },
          { text: "6231**7271" },
          { text: "6231**7272" },
          { text: "6231**7273" }
        ]
      ],
      isPickerShow0: false,
      isPickerShow1: false,
      isPickerShow2: false,
      pickerData1: [
        [{ text: "身份证" }, { text: "护照" }, { text: "临时身份证" }]
      ],
      pickerData2: [[{ text: "II类虚拟账户" }, { text: "III类虚拟账户" }]],
      pickerValue0: "",
      pickerValue1: "",
      pickerValue2: "",
      currentDate: new Date(),
      isDatePickerShow: false,
      datePickerValue: "",
      checked: false
    };
  },
  methods: {
    onPickerConfirm(index) {
      const values = this.$refs[`picker${index}`].getColumnValues();

      let res = "";
      values.forEach(value => {
        value && (res += `${value.text || value.label} `);
      });
      this[`pickerValue${index}`] = res;
    },
    textRender() {
      const args = Array.prototype.slice.call(arguments);
      const typeFormat = args[0]; // 类型
      // const column0Value = args[1] // 第1列选中值
      // const column1Value = args[2] // 第2列选中值
      const column2Value = args[3]; // 第3列选中值
      if (typeFormat === "dd") {
        return `*${column2Value}日`;
      }
    },
    onDatePickerChange() {
      //   console.log(
      //     `[Mand Mobile] DatePicker Change\ncolumnIndex: ${columnIndex},\nitemIndex:${itemIndex},\nvalue: ${JSON.stringify(
      //       value
      //     )}`
      //   );
    },
    onDatePickerConfirm() {
      //   console.log(
      //     `[Mand Mobile] DatePicker Confirm\nvalue: ${JSON.stringify(
      //       columnsValue
      //     )}`
      //   );
      this.datePickerValue = this.$refs.datePicker.getFormatDate(
        "yyyy/MM/dd hh:mm"
      );
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
.md-field-item.is-solid .md-field-item-title {
    text-align: left
}
</style>