<template>
  <div>
    <div class="flex-box">
      <div>{{ itemName }}</div>
      <div class="inputItem">
        <input
          :type="inputType"
          maxlength="6"
          :placeholder="phdText"
          v-model="inputValue"
        />
        <button @click="sendMobPwd">{{ btnText }}</button>
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
      type: String
    },
    inputType: {
      // 输入类型,默认为text
      type: String,
      default: "text"
    },
    btnText: {
      type: String,
      default: "立即获取"
    },
    // 占位文字
    phdText: {
      type: String,
      default: "请输入验证码"
    }
  },
  data() {
    return {
      inputValue: "",
      telNo: "1112"
    };
  },
  created() {
    console.log("111");
    // Bus.$on("on-message", telNo => {
    //   // 输出兄弟组件传递的内容
    //   console.log(telNo);
    //   // this.telNo = telNo;
    // });
  },
  mounted() {
    Bus.$on("mobNo", telNo => {
      // 输出兄弟组件传递的内容
      console.log(telNo);
      // this.telNo = telNo;
    });
  },
  methods: {
    sendMobPwd() {
      Bus.$emit("mobNo", this.telNo);
      // Bus.$on("mobNo", telNo => {
      //   // 输出兄弟组件传递的内容
      //   console.log(telNo);
      //   this.telNo = telNo;
      // });
      // console.log("bbb");
    }
  }
};
</script>
<style lang="scss" scoped>
.flex-box {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #fff;
}
.inputItem {
  display: flex;
  justify-content: space-between;
  border: none;
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
    margin-right: 10px;
  }
  input::placeholder {
    color: rgb(139, 139, 139);
    opacity: 0.5;
  }
  button {
    background-color: #fff;
    border: 1px solid rgb(37, 150, 3);
    border-radius: 3px;
    color: rgb(37, 150, 3);
  }
}
</style>
