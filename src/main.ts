import { createApp } from "vue";
import App from "./App.vue";
// import ProjectRegister from "@/pages/HomePage.vue";
import router from "./router";
//Import bootstrap-vue
import bootstrap from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/styles/base.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App);

library.add(faUserSecret)

app.use(router);
app.use(bootstrap);
app.component('fa',FontAwesomeIcon)
app.mount("#app");
