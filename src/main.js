import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "@/components/Global/globalComponents.js";

const app = createApp(App);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faComment, faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus,faMinus, faComment,faCheck)
app.component('fa', FontAwesomeIcon)

globalComponents.forEach(component => {
  app.component(component.name, component)
});

app.use(store).use(router).mount("#app");
