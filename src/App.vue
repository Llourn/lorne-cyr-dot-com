<template>
  <div class="main">
    <TopBar class="top-bar" />
    <div class="content-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router";
  import TopBar from "./components/TopBar.vue";
</script>

<style lang="scss">
  :root {
    --max-page-width: 1380px;
    --description-padding: 20px;
  }

  html {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  body {
    margin: 0;
    box-sizing: border-box;
  }
</style>

<style lang="scss" scoped>
  .main {
    max-width: var(--max-page-width);
    margin: auto;
  }
  .top-bar {
    position: fixed;
    top: 0;
    width: 100%;
    max-width: var(--max-page-width);
  }

  .content-wrapper {
    padding-top: calc(var(--el-menu-item-height) + 3px);
    min-height: calc(100vh - var(--el-menu-item-height) - 3px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
