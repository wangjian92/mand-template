<template>
  <div class="form-example">
    <!-- Agree 勾选按钮 -->
    <md-agree v-model="agreeConf.checked" :disabled="agreeConf.disabled" :size="agreeConf.size">
      本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
      <a>《投保须知》</a>,
      <a>《保险条款》</a>
    </md-agree>

    <!-- Check 复选项 -->
    <md-check-group v-model="favorites">
      <md-check name="watermelon" label="西瓜"/>
      <md-check name="apple" label="苹果"/>
      <md-check name="banana" label="香蕉"/>
      <md-check name="orange" label="橙子"/>
      <md-check name="tomato" label="西红柿" disabled/>
    </md-check-group>

    <!-- CodeBox 验证码输入框 -->
    <md-codebox v-model="code" :maxlength="4" autofocus/>

    <!-- DropMenu 下拉菜单 -->
    <md-field>
      <md-field-item title="普通模式" :content="selectorValue" @click="showSelector" arrow solid/>
    </md-field>
    <md-selector
      v-model="isSelectorShow"
      default-value="2"
      :data="data[0]"
      max-height="320px"
      title="普通模式"
      @choose="onSelectorChoose"
    ></md-selector>

    <!-- InputItem 输入框 -->
    <md-input-item ref="input0" title="普通文本" placeholder="普通文本" is-amount :maxlength="5"></md-input-item>

    <!-- Radio 单选框 -->
    <md-radio name="0" v-model="checked" label="单选项1"/>
    <md-radio name="1" v-model="checked" label="单选项2"/>

    <!-- Switch 开关 -->
    <md-switch v-model="isActive"></md-switch>
  </div>
</template>

<script>
import {
  Agree,
  Check,
  CheckGroup,
  Codebox,
  DropMenu,
  Selector,
  Field,
  FieldItem,
  InputItem,
  Radio,
  Switch
} from "mand-mobile";

export default {
  name: "component-template",
  title: "component",
  components: {
    [Agree.name]: Agree,
    [Check.name]: Check,
    [CheckGroup.name]: CheckGroup,
    [Codebox.name]: Codebox,
    [DropMenu.name]: DropMenu,
    [Selector.name]: Selector,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [Radio.name]: Radio,
    [Switch.name]: Switch
  },
  data() {
    return {
      // 勾选按钮数据
      agreeConf: {
        checked: true,
        name: "agree0",
        size: "md",
        disabled: false,
        introduction: "选中状态"
      },

      // 复选框选中数据
      favorites: ["apple"],

      // 验证码数据
      code: "",

      // 下拉菜单数据
      isSelectorShow: false,
      data: [
        [
          {
            value: "1",
            text: "选项一"
          },
          {
            value: "2",
            text: "选项二"
          },
          {
            value: "3",
            text: "选项三"
          },
          {
            value: "4",
            text: "选项四"
          },
          {
            value: "5",
            text: "选项五"
          },
          {
            value: "6",
            text: "选项六"
          },
          {
            value: "7",
            text: "选项七"
          },
          {
            value: "8",
            text: "选项八"
          },
          {
            value: "9",
            text: "选项九"
          },
          {
            value: "10",
            text: "选项十"
          }
        ]
      ],
      selectorValue: "选项二",

      // 单选框数据
      checked: "0",

      // 开关数据
      isActive: true
    };
  },
  methods: {
    // 下拉菜单方法
    showSelector() {
      this.isSelectorShow = true;
    },
    onSelectorChoose({ text }) {
      this.selectorValue = text;
    }
  }
};
</script>
<style>
.form-example {
  font-size: 18px;
}
</style>
