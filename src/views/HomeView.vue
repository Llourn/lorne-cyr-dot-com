<template>
  <section class="container">
    <aside>
      <img :src="portrait" alt="Portrait" />
    </aside>
    <main>
      <div class="top">
        <div class="image">
          <img :src="portrait" alt="Portrait" />
        </div>
        <div class="blurb">
          <p>{{ mode }}</p>
          <p>{{ media }}</p>
          <p>Hi, I'm Lorne.</p>
          <p>
            I'm a self-taught developer. I appreciate motivation, but prefer
            discipline when it comes to learning and building projects. I love
            building things with code. My career in development started in
            gameplay programming, building games/applications for several
            studios throughout the maritimes. I’ve since moved into web
            development, building online courses for the
            <el-link
              :icon="Connection"
              type="primary"
              href="https://ufred.ca/"
              target="_blank"
              >University of Fredericton</el-link
            >
            and Vue apps for
            <el-link
              :icon="Connection"
              type="primary"
              href="https://play.battlesnake.com/"
              target="_blank"
              >Battlesnake Inc.</el-link
            >
            In my spare time I like to build projects related to other interests
            of mine, like learning Japanese. I also value work/life balance and
            know when to step away from the computer and recharge.
          </p>
        </div>
      </div>
      <div class="bottom">
        <p>
          Technologies I've used
          <span class="professional">professionally</span> and
          <span class="recreational">recreationally</span>:
        </p>
        <div class="skills">
          <span
            v-for="(skill, index) in skills.professional"
            :key="index"
            class="professional"
          >
            {{ skill }}
          </span>
          <span
            v-for="(skill, index) in skills.recreational"
            :key="index"
            class="recreational"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      <my-contacts />
    </main>
  </section>
</template>

<script setup lang="ts">
  import portrait from "../assets/portrait.png";
  import skillData from "../assets/data/skills.json";
  import { Connection } from "@element-plus/icons-vue";
  import MyContacts from "../components/MyContacts.vue";
  import { ref } from "vue";

  const skills = skillData.skills as {
    professional: string[];
    recreational: string[];
  };

  const mode = ref(import.meta.env.MODE);
  const media = ref(import.meta.env.VITE_MEDIA_URL);
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");

  main {
    padding: var(--description-padding);
  }

  .content-container {
    position: relative;
  }

  img {
    border-radius: var(--standard-border-radius);
  }

  aside {
    padding: var(--description-padding);
    padding-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-width: 300px;
    }
  }

  .top {
    .image {
      display: none;

      img {
        width: 100%;
      }
    }
  }

  .el-aside {
    overflow: none !important;
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-content: space-around;
  }

  .professional {
    color: var(--primary-color);
  }
  .recreational {
    color: var(--secondary-color);
  }

  @media only screen and (min-width: 600px) {
    aside img {
      display: none;
    }
    .skills {
      grid-template-columns: repeat(4, 1fr);
    }
    .top {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
      .image {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
    aside img {
      display: block;
      max-width: 100%;
    }

    .top {
      display: block;
      .image {
        display: none;
      }
    }
  }
</style>
