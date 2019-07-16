<template>
  <div style="padding-bottom:100px">
    <md-field class="block">
      <md-input-item v-model="trsFormInfo.payeeNo" placeholder="请输入账号或户名关键字" clearable>
        <div class="input-operator" slot="right" @click="query">
          <md-icon name="search"></md-icon>
        </div>
      </md-input-item>
      <!-- <md-button type="primary" @click="query">查询</md-button> -->
    </md-field>
    <md-scroll-view ref="scrollView" :scrolling-x="false">
      <div
        v-for="(item,$index) in list"
        class="scroll-view-item"
        :key="$index"
      >
        <md-field>
          <md-detail-item :title="item.name" :content="item.bank"/>
          <md-detail-item :title="item.no"/>
        </md-field>
      </div>
    </md-scroll-view>
  </div>
</template>

<script>
import {
  Agree,
  ActionBar,
  Field,
  DetailItem,
  FieldItem,
  InputItem,
  Picker,
  DatePicker,
  CellItem,
  Switch,
  Button,
  ScrollView,
  Icon
} from "mand-mobile";

export default {
  name: "result-page-demo",
  components: {
    [Agree.name]: Agree,
    [ActionBar.name]: ActionBar,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [Picker.name]: Picker,
    [DatePicker.name]: DatePicker,
    [CellItem.name]: CellItem,
    [Switch.name]: Switch,
    [Button.name]: Button,
    [ScrollView.name]: ScrollView,
    [DetailItem.name]: DetailItem,
    [Icon.name]: Icon
  },
  data() {
    return {
      list: [],
      minDate: new Date("2013/9/9"),
      maxDate: new Date("2020/9/9"),
      currentDate: new Date(),
      isDatePickerShow: false,
      trsFormInfo: {
        pickerValue1: "",
        pickerValue2: ""
      },
      isPickerShow: false,
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
      pickerData1: [
        [{ text: "789789789" }, { text: "123123123" }, { text: "456456456" }]
      ],
      pickerData2: [
        [{ text: "实时到账" }, { text: "普通到账" }, { text: "次日到账" }]
      ],
      datePickerValue: "",
      checked: false
    };
  },
  mounted() {
    window.ScrollViewTrigger0 = () => {
      this.addItems();
    };
  },
  methods: {
    query() {
      this.list = [
        {
          name: "张三",
          no: "8881111111111",
          money: 60,
          date: "2019-04-09",
          state: "已汇出",
          type: "行内转账",
          use: "工资",
          bank: "中国银行"
        },
        {
          name: "李四",
          no: "888222222222",
          money: 60,
          date: "2019-04-09",
          state: "已汇出",
          type: "行内转账",
          use: "工资",
          bank: "招商银行"
        },
        {
          name: "王五",
          no: "8883333333333333",
          money: 60,
          date: "2019-04-09",
          state: "已汇出",
          type: "行内转账",
          use: "工资",
          bank: "工商银行"
        },
        {
          name: "张三",
          no: "8884444444444",
          money: 60,
          date: "2019-04-09",
          state: "已汇出",
          type: "行内转账",
          use: "工资",
          bank: "农业银行"
        },
        {
          name: "张三",
          no: "888555555555",
          money: 60,
          date: "2019-04-09",
          state: "已汇出",
          type: "行内转账",
          use: "工资",
          bank: "建设银行"
        }
      ];
    },
    goPage(path) {
      this.$router.push({ path: path });
    },
    onDatePickerInitialed() {},
    onPickerConfirm(index) {
      const values = this.$refs[`picker${index}`].getColumnValues();

      let res = "";
      values.forEach(value => {
        value && (res += `${value.text || value.label} `);
      });
      this.trsFormInfo[`pickerValue${index}`] = res;
    },
    onDatePickerConfirm() {
      this.datePickerValue = this.$refs.datePicker.getFormatDate("yyyy/MM/dd");
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
    $_onItemClick(item) {
      this.$router.push({
        name: "TransferDetail",
        params: { detailInfoParam: item }
      });
    },
    addItems() {
      this.list += 5;
      // 如果把autoReflow设置为false, 需调用reflowScroller
      this.$refs.scrollView.reflowScroller();
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