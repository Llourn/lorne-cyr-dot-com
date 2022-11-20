<template>
  <hr />
  <div class="container">
    <div>
      <el-link
        type="primary"
        href="https://www.linkedin.com/in/lornecyr/"
        target="_blank"
      >
        <font-awesome-icon
          icon="fa-brands fa-linkedin"
        />&nbsp;LinkedIn</el-link
      >
    </div>
    <div>
      <el-link type="primary" href="https://twitter.com/Llourn" target="_blank">
        <font-awesome-icon
          icon="fa-brands fa-twitter-square"
        />&nbsp;Twitter</el-link
      >
    </div>
    <div>
      <el-link type="primary" href="https://github.com/Llourn" target="_blank">
        <font-awesome-icon
          icon="fa-brands fa-github-square"
        />&nbsp;Github</el-link
      >
    </div>
    <div>
      <el-link type="primary" href="mailto:Lorne.S.Cyr@gmail.com">
        <font-awesome-icon icon="fas fa-envelope-square" />&nbsp;Email</el-link
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
</style>
