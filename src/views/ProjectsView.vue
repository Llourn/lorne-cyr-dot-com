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
  import { projects } from "@/data/projects-data";
  import ProjectCard from "@/components/ProjectCard.vue";
</script>

<style lang="scss" scoped>
  .projects-container {
    padding: var(--description-padding);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;

    // max-height: 1200px;
    max-width: 100%;
    overflow-x: hidden;

    position: relative;
    > * {
      // width: 33%;
      flex-basis: content;
    }
  }

  @media only screen and (min-width: 720px) {
    .projects-container {
      max-height: 1600px;
      > * {
        width: 50%;
      }
    }
  }

  @media only screen and (min-width: 1300px) {
    .projects-container {
      max-height: 1200px;
      > * {
        width: 33%;
      }
    }
  }
</style>
