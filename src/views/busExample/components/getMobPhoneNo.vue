<template>
  <div>
    <div class="inputItem">
      <div>{{ itemName }}</div>
      <div>
        <label>{{ mobNo }}</label>
        <!-- <input type="text" readonly v-model="{{ mobNo|hideMobNo}}" /> -->
      </div>
    </div>
    <d-line></d-line>
  </div>
</template>
<script>
import DLine from "@/components/DLine";
import Bus from "@/util/bus";

export default {
  //输入信息组件
  name: "inputItem",
  components: {
    DLine
  },
  props: {
    itemName: {
      // 列表名称
      type: String,
      default: "手机号码"
    }
  },
  data() {
    return {
      mobNo: "13312048956"
    };
  },
  created() {
    this.setTelNo();
    // Bus.$on("mobNo", telNo => {
    //   // 输出兄弟组件传递的内容
    //   console.log(telNo);
    //   // this.telNo = telNo;
    // });
  },
  computed: {
    hideMobNo(value) {
      value = value.toString();
      if (null == value) {
        return "";
      } else if (value.length < 11) {
        return value;
      } else {
        const result = value.substring(0, 3) + "****" + value.substring(10, -4);
        //   let result = ``
        return result;
      }
    }
  },
  methods: {
    setTelNo() {
      Bus.$emit("mobNo", this.mobNo);
    }
  }
};
</script>
<style lang="scss" scoped>
.inputItem {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  border: none;
  background-color: #fff;
  border-top: 1px solid rgb(194, 194, 194);
  div {
    line-height: 20px;
    font-size: 16px;
  }
  input {
    border: none;
    height: 20px;
    line-height: 25px;
    vertical-align: middle;
    width: 100px;
    font-size: 16px;
    text-align: right;
    outline: none;
  }
}
</style>
