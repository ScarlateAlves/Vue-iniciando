import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import { routes } from "./routes";
//utilizando o resouce para requisicoes
Vue.use(VueResource);
//utilizado para rotas
Vue.use(VueRouter);
//cria instancia utilizado para passar as rotas da aplicaçao, quando propriedade tem mesmo nome pode se omitir
const router = new VueRouter({
  routes,
  //tirar o # do caminho
  mode: "history"
});
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
