<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
    :ellipsis="false"
    router
  >
    <div class="logo"><span>Lorne Cyr</span></div>
    <div class="flex-grow"></div>
    <el-menu-item index="/" default>Home</el-menu-item>
    <el-menu-item index="/projects">Projects</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const activeIndex = ref("/");
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
</script>

<style lang="scss" scoped>
  .flex-grow {
    flex-grow: 1;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    text-transform: uppercase;
  }
</style>
