import myWebsite from "../assets/my-website.png";
import cyriouslyInJapan from "../assets/cij.png";
import dungonsAndDrageons from "../assets/dungons-and-drageons.png";
import recipeApp from "../assets/recipe-app.png";
import slimeGame from "../assets/slime-game.png";
import spaceLazors from "../assets/space-lazors.png";
import type { Project } from "@/models/ProjectModel";

export const projects = [
  {
    image: myWebsite,
    title: "This website",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/Llourn/lorne-cyr-dot-com",
      },
    ],
    description:
      "<p>I rebuilt my personal site using Vue.js, SASS, and Element Plus</p>",
  },
  {
    image: cyriouslyInJapan,
    title: "Cyriously In Japan",
    links: [
      {
        title: "CyriouslyInJapan.com",
        url: "https://cyriouslyinjapan.com/",
      },
    ],
    description:
      "<p>I built this app to help me prepare for a trip to Japan using Next.js, Firebase auth/firestore/storage/hosting, and google maps. <br /> There are three main features in this app. <ul><li>Language translation Japanese &lt;-&gt; English: Look up phrases              in either English or Japanese and get the corresponding              translation. Keep a history of terms and pin the ones you want to              keep for quick reference.            </li>            <li>              Kana Match. A game used to test your knowledge of Japanese Kana.              Choose which kana you want to include and review your results              after.            </li>            <li>              Places to visit. Make a list of places you want to visit with photos, GPS co-ordinates, and notes to describe why you think it would be cool to visit!</li></ul></p>",
  },
  {
    image: dungonsAndDrageons,
    title: "Dungons and Drageons",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/Llourn/dungons-and-drageons",
      },
    ],
    description:
      "<p>During lockdown, a group of my friends and I took our Dungeon and Dragon adventures online. After sampling a few applications on themarket I was inspired to build this MERN stack app to better suit our needs. This is still a work in progress.</p>",
  },
  {
    image: recipeApp,
    title: "Recipe App",
    links: [
      {
        title: "GitHub: Client",
        url: "https://github.com/Llourn/recipe-app-client",
      },
      {
        title: "Github: Server",
        url: "https://github.com/Llourn/recipe-app-server",
      },
    ],
    description:
      "<p>This recipe app was created to simplify meal planning for our familywith an app that stores recipes and generates grocery lists based onour weekly meal plan.</p>",
  },
  {
    image: slimeGame,
    title: "Slime Game",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/Llourn/slime-game",
      },
      {
        title: "YouTube Demo",
        url: "https://youtu.be/pJo47Cxs6d4",
      },
    ],
    description:
      "<p>Slime game is just a fun little idea I wanted to bring to life,inspired by movies like The Blob. Built using C# and the Unity3D gameengine. I also did some 3D modelling for this project.</p>",
  },
  {
    image: spaceLazors,
    title: "Space Lazors",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/Llourn/Endless-Space",
      },
      {
        title: "YouTube Demo",
        url: "https://www.youtube.com/watch?v=lt8lp_f4Izk",
      },
      {
        title: "Play",
        url: "https://forlorne-games.itch.io/space-lazors",
      },
    ],
    description:
      "<p>Space Lazors is a never ending shoot'em up game made for mobile. Builtusing C# and the Unity3D game engine.</p>",
  },
] as Project[];
