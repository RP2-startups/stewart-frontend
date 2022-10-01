import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//Import bootstrap-vue
import bootstrap from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import "./assets/main.css";


const app = createApp(App);

app.use(router);
app.use(bootstrap)

app.mount("#app");
