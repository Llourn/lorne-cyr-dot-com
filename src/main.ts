import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faTwitterSquare, faGithubSquare, faEnvelopeSquare);

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.component("font-awesome-icon", FontAwesomeIcon);
// app.component(`<font-awesome-icon icon="fa-solid fa-linkedin" />`, myLinkedin);

app.mount("#app");
