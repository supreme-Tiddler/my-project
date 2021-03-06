<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  <!-- 子路由页面 -->
  <!-- <router-view/> -->
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LayoutIndex"
});
</script>
<style lang="scss">
.el-container {
    min-height: 100vh;
    min-width: 980px;
}
.el-aside {
    background: #d3dce6;
}
.el-header {
    background: #fff;
}
.el-main {
    background: #e9eef3;
}
</style>