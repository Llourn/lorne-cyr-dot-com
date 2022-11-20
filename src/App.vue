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

<style lang="scss" scoped>
  .main {
    max-width: var(--max-page-width);
    margin: auto;
    box-shadow: var(--el-box-shadow-light);
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
    background-color: white;
  }
</style>
