<template>
  <el-card :body-style="{ padding: '0px' }">
    <img :src="imageWithPath" class="image" />
    <div style="padding: 14px">
      <span>{{ props.project.title }}</span>
      <div class="bottom">
        <el-button text class="button">Operating</el-button>
        <div class="description" v-html="props.project.description"></div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
  import type { Project } from "@/models/ProjectModel";
  import { computed } from "vue";

  export interface ProjectCardProps {
    project: Project;
  }

  const props = defineProps<ProjectCardProps>();

  const imageWithPath = computed(() => {
    return `src/assets/${props.project.image}`;
  });
</script>

<style lang="scss">
  .image {
    width: 100%;
    display: block;
  }
</style>
