<template>
  <div>
    <div class="flex-input">
      <div class="tx-lable">{{ itemName }}</div>
      <div class="tx-input" @click="areaChoose">
        <input
          type="text"
          :placeholder="phdText"
          v-model="chooseValue"
          readonly
        />
        <img src="@/assets/images/toRight.png" />
      </div>
    </div>
    <DLine v-show="showUnderline"></DLine>
    <van-popup v-model="showAddrPopup" position="bottom">
      <van-area
        title="选择地区"
        :area-list="areaList"
        @cancel="showAddrPopup = false"
        @confirm="confArea"
        @visible-item-count="itemCount"
      />
    </van-popup>
  </div>
</template>
<script>
import DLine from "@/components/DLine";
import AreaList from "@/assets/js/area.js";
import Vue from "vue";
import { Area, Popup } from "vant";
Vue.use(Area);
Vue.use(Popup);
export default {
  props: {
    itemName: {
      type: String, //按钮名称
      default: "地区"
    },
    phdText: {
      type: String, //按钮名称
      default: "请选择地区"
    },
    showUnderline: {
      type: Boolean,
      default: true
    }
  },
  components: {
    DLine
  },
  data() {
    return {
      areaList: {}, //省市区列表
      itemCount: 7,
      showAddrPopup: false, //弹出层展示
      chooseValue: ""
    };
  },
  created() {
    this.initParams();
  },
  methods: {
    clickhandle() {
      //使用emit，第一个参数为子组件组件方法，第二个参数为该方法传递的参数
      this.$emit("clickhandle", 5);
    },
    initParams() {
      this.areaList = AreaList;
    },
    areaChoose() {
      this.showAddrPopup = true;
    },
    confArea(data) {
      // this.chooseArea = data;
      for (let i = 0; i < data.length; i++) {
        this.chooseValue = data[i].name + this.chooseValue;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.flex-input {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  height: 56px;
  padding: 0 25px;
  div {
    font-size: 16px;
    color: #2e042c;
    letter-spacing: 0;
  }
}
.tx-lable {
  margin: 16px 0;
  height: 24px;
  line-height: 24px;
  vertical-align: -webkit-baseline-middle;
}
.tx-input {
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
  line-height: 24px;
  input {
    border: none;
    margin-right: 5px;
    text-align: right;
  }
  input::-moz-placeholder {
    color: #f6e9f7;
  }
  img {
    margin: 7px 5px;
    height: 12px;
    width: 12px;
  }
}
</style>
