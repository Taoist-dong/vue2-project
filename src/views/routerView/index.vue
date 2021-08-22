<template>
  <div>
    <title-bar :title="title" @goBack="goback"></title-bar>
    <router-view></router-view>
    <BottomBar
     @handleMsg='handleMsg'
     @lookContact='lookContact'
     @readDynamic='readDynamic'
    ></BottomBar>
  </div>
</template>
<script>
import TitleBar from "@/components/TitleBar";
import BottomBar from "@/components/BottomBar";
export default {
  name: "",
  components: {
    TitleBar,
    BottomBar
  },
  data() {
    return {
      title: "路由视图",
    };
  },
  methods: {
    // 返回方法
    goback() {
      // this.$emit("GoBack");
    },
    handleMsg() {
      this.$router.push({path: '/messagePage'})
    },
    lookContact() {
      this.$router.push({path: '/contactPage'})
    },
    readDynamic() {
      this.$router.push({path: '/dynamicPage'})
    }
  }
};
</script>
<style scoped>
#page-title {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
}
.backImg {
  width: 20px;
}
</style>
