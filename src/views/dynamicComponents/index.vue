<template>
  <div>
    <title-bar :title="title" @goBack="goback"></title-bar>
    <component :is="showComponent"></component>
    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <keep-alive>
        <component
          :is="currentTabComponent"
          class="tab"
          :data="propsData"
          :dataA="propsDataA"
          :dataB="propsDataB"
        ></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import TitleBar from "@/components/TitleBar";
import comA from "./components/comA";
import comB from "./components/comB";
export default {
  name: "",
  components: {
    TitleBar,
    comA,
    comB
  },
  data() {
    return {
      title: "动态组件",
      showComponent: "",
      // currentTabComponent: ''
      currentTab: "comA",
      tabs: ["comA", "comB"],
      propsData: "send data",
      propsDataA: "comA send data",
      propsDataB: "comB send data"
    };
  },
  created() {
    setTimeout(() => {
      this.showComponent = "comA";
      this.changeCom();
    }, 1000);
  },
  computed: {
    currentTabComponent() {
      return this.currentTab;
      // return "tab-" + this.currentTab.toLowerCase();
    }
  },
  methods: {
    changeCom() {
      setTimeout(() => {
        this.showComponent = "comB";
      }, 2000);
    },
    // 返回方法
    goback() {
      // this.$emit("GoBack");
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
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.tab {
  margin: 20px auto;
}
</style>
