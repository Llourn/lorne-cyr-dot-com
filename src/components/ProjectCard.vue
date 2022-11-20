<template>
  <el-card :body-style="{ padding: '0px' }">
    <img :src="props.project.image" class="image" />
    <div style="padding: 14px">
      <h2>{{ props.project.title }}</h2>
      <div class="bottom">
        <el-button-group>
          <el-button
            type="primary"
            class="button"
            v-for="(link, index) in props.project.links"
            @click.prevent="loadPage(index)"
            :key="index"
            >{{ link.title }}</el-button
          >
        </el-button-group>
        <div class="description" v-html="props.project.description"></div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
  import type { Project } from "@/models/ProjectModel";

  export interface ProjectCardProps {
    project: Project;
  }

  const props = defineProps<ProjectCardProps>();

  const loadPage = (index: number) => {
    window.open(props.project.links[index].url, "_blank", "noreferrer");
  };
</script>

<style lang="scss" scoped>
  .image {
    width: 100%;
    display: block;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 14px;
  }
</style>
