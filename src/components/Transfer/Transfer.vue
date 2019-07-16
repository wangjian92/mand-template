<template>
  <div id="app" style="padding-bottom:100px">
    <md-field class="block">
      <md-input-item
        title="收款姓名"
        placeholder="请输入收款人姓名"
        align="right"
        v-validate="'required|numeric'"
        data-vv-validate-on="input"
        :error="errors.first('number')"
        clearable
        v-model="trsFormInfo.payeeName"
      ></md-input-item>
      <!-- <input-validate
        title="Email"
        name="email"
        placeholder="Email Validate On Blur"
        v-validate="'required|email'"
        data-vv-value-path="innerValue"
        data-vv-validate-on="blur"
        :error="errors.first('email')"
      >
      </input-validate>-->
      <md-input-item
        title="收款账户"
        v-model="trsFormInfo.payeeNo"
        placeholder="请输入收款人账号"
        align="right"
        clearable
      ></md-input-item>

      <md-field-item
        title="收款银行"
        arrow="arrow-right"
        :addon="trsFormInfo.pickerValue0"
        @click="isPickerShow0 = true"
      ></md-field-item>
      <md-picker
        ref="picker0"
        v-model="isPickerShow0"
        :data="pickerData0"
        @confirm="onPickerConfirm(0)"
        title="收款银行"
      ></md-picker>
    </md-field>

    <md-field class="block">
      <md-field-item
        title="汇款卡号"
        arrow="arrow-right"
        :addon="trsFormInfo.pickerValue1"
        @click="isPickerShow1 = true"
      ></md-field-item>
      <md-picker
        ref="picker1"
        v-model="isPickerShow1"
        :data="pickerData1"
        @confirm="onPickerConfirm(1)"
        title="汇款卡号"
      ></md-picker>

      <md-cell-item title="余额" v-model="trsFormInfo.balance" align="right" addon="￥8000.34"/>

      <md-input-item
        title="汇款金额"
        v-model="trsFormInfo.money"
        type="money"
        placeholder="手续费免费"
        align="right"
        clearable
      ></md-input-item>

      <md-field-item
        title="汇款方式"
        arrow="arrow-right"
        :addon="trsFormInfo.pickerValue2"
        @click="isPickerShow2 = true"
      ></md-field-item>
      <md-picker
        ref="picker2"
        v-model="isPickerShow2"
        :data="pickerData2"
        @confirm="onPickerConfirm(2)"
        title="汇款方式"
      ></md-picker>
    </md-field>

    <md-field class="block">
      <md-field-item
        title="汇款用途"
        arrow="arrow-right"
        :addon="trsFormInfo.pickerValue3"
        @click="isPickerShow3 = true"
      ></md-field-item>
      <md-picker
        ref="picker3"
        v-model="isPickerShow3"
        :data="pickerData3"
        @confirm="onPickerConfirm(3)"
        title="汇款用途"
      ></md-picker>

      <md-input-item
        title="短信通知"
        v-model="trsFormInfo.phone"
        type="phone"
        placeholder="请输入接收人手机号码"
        align="right"
        clearable
      ></md-input-item>

      <md-cell-item title="保存收款人">
        <md-switch slot="right" v-model="trsFormInfo.open"/>
      </md-cell-item>
    </md-field>
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
  DatePicker,
  CellItem,
  Switch
} from "mand-mobile";
// import inputValidate from "./input-validate";
// import { Validator } from "vee-validate";
// Validator.extend("phone", {
//   getMessage: field => `${field} value do not meet right format`,
//   validate: value => /^1[34578][0-9]{9}$/.test(value)
// });
export default {
  name: "app",

  components: {
    // inputValidate,
    [Agree.name]: Agree,
    [ActionBar.name]: ActionBar,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [Picker.name]: Picker,
    [DatePicker.name]: DatePicker,
    [CellItem.name]: CellItem,
    [Switch.name]: Switch
  },

  data() {
    return {
      trsFormInfo: {
        pickerValue0: "",
        pickerValue1: "",
        pickerValue2: "",
        pickerValue3: "",
        open: true
      },
      relation: "本人",
      isPickerShow: false,
      actionBarData: [
        {
          text: "提交",
          onClick: this.handleSubmit
        }
      ],
      pickerData0: [
        [
          { text: "云南农信社" },
          { text: "建设银行" },
          { text: "招商银行" },
          { text: "工商银行" }
        ]
      ],
      isPickerShow0: false,
      isPickerShow1: false,
      isPickerShow2: false,
      isPickerShow3: false,
      pickerData1: [
        [{ text: "789789789" }, { text: "123123123" }, { text: "456456456" }]
      ],
      pickerData2: [
        [{ text: "实时到账" }, { text: "普通到账" }, { text: "次日到账" }]
      ],
      pickerData3: [
        [
          { text: "工资" },
          { text: "还款" },
          { text: "交房贷" },
          { text: "自定义" }
        ]
      ],
      currentDate: new Date(),
      isDatePickerShow: false,
      datePickerValue: "",
      checked: false
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        name: "TransferConfirm",
        params: { trsInfo: this.trsFormInfo }
      });
    },
    onPickerConfirm(index) {
      const values = this.$refs[`picker${index}`].getColumnValues();

      let res = "";
      values.forEach(value => {
        value && (res += `${value.text || value.label} `);
      });
      this.trsFormInfo[`pickerValue${index}`] = res;
    },
    textRender() {
      const args = Array.prototype.slice.call(arguments);
      const typeFormat = args[0]; // 类型
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
      // TODO
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
.md-field-item.is-solid .md-field-item-title,
.md-cell-item-title {
  text-align: left;
}
</style>