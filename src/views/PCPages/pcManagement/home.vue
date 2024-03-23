<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>
          <label class="siyuan">零星可比炽日华，字若珠玑句无瑕</label>
          <br />
          <label class="kaiti">我是楷体</label>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import Vue from "vue";
import { Button, Container, Header, Aside, Main, Footer } from "element-ui";
Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Header);

export default {};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.nom {
  display: -moz-box;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
}
.siyuan {
  font-family: "SourceHanSansCN", sans-serif;
  color: red;
}
.kaiti {
  font-family: "KaiTi", sans-serif;
  color: green;
}
</style>
