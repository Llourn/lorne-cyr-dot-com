<template>
  <div class="projects-container">
    <project-card
      v-for="(project, index) in projects"
      :project="project"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import projectData from "../assets/data/projects.json";
  import ProjectCard from "@/components/ProjectCard.vue";

  const projects = ref(projectData.projects);
</script>

<style lang="scss" scoped>
  .projects-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
    > * {
      max-width: 400px;
    }
  }
</style>
