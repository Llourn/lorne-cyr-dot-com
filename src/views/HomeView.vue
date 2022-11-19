<template>
  <section class="container">
    <aside>
      <img :src="guy" alt="Portrait" />
    </aside>
    <main>
      <div class="text-container">
        <p>Hi, I'm Lorne.</p>
        <p>
          I'm a self-taught developer. I appreciate motivation, but prefer
          discipline when it comes to learning and building projects. I love
          building things with code. My career in development started in
          gameplay programming, building games/applications for several studios
          throughout the maritimes. I’ve since moved into web development,
          building online courses for the
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
      <div class="socials">
        <my-contacts />
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
  import guy from "../assets/guy.jpg";
  import skillData from "../assets/data/skills.json";
  import { Connection } from "@element-plus/icons-vue";
  import MyContacts from "../components/MyContacts.vue";

  const skills = skillData.skills as {
    professional: string[];
    recreational: string[];
  };
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");

  .container {
    main {
      padding: var(--description-padding);
    }
  }

  .text-container {
    position: relative;
  }

  .greeting {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 4rem;
    font-weight: bolder;
    position: absolute;
    top: -30px;
    left: 50px;
    text-overflow: clip;
    color: hsla(275, 100%, 14%, 0.269);
  }

  img {
    border-radius: 20px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
  }

  .el-aside {
    overflow: none !important;
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    justify-content: space-around;
  }

  .professional {
    color: var(--primary-color);
  }
  .recreational {
    color: var(--secondary-color);
  }

  @media only screen and (min-width: 960px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }
</style>
