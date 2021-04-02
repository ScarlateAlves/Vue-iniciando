import Home from "./components/home/Home.vue";
import Cadastro from "./components/cadastro/Cadastro.vue";

export const routes = [
  //adicionado a propriedade titulo das rotas
  { path: "", component: Home, titulo: "Home" },
  { path: "/cadastro", component: Cadastro, titulo: "Cadastro" }
];
