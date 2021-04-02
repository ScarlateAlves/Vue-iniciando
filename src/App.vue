<template>
  <div class="body">
    <h1 class="title">{{ titulo }}</h1>
    <input
      type="search"
      class="filtro"
      placeholder="Digite aqui"
      v-on:input="filtro = $event.target.value"
    />

    <ul class="list">
      <li class="list-im" v-for="foto of fotoComFiltros">
        <!-- titulo e o nome da props que sera guardada o valor -->
        <meu-painel :titulo="foto.titulo">
          <img class="image" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel.vue";
export default {
  //dando none a componets
  components: {
    "meu-painel": Painel
  },
  data() {
    return {
      titulo: "Primeiro projeto com Vue",
      fotos: [],
      filtro: ""
    };
  },

  computed: {
    fotoComFiltros() {
      if (this.filtro) {
        // filtra lista quando digitar algo
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos") //faço uma promisses
      .then(res => res.json()) //mando tudo pro json
      .then(
        fotos => (this.fotos = fotos),
        error => console.log(error)
      ); //jogo tudo dentro do array de fotos ou se nao peco pra mostra os erros
  }
};
</script>

<style>
.body {
  width: 96%;
  margin: 0 auto;
}

.title {
  text-align: center;
}

.list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: stretch;
  gap: 1rem;
}

.list-im {
  width: 30%;
  display: flex;
}

.image {
  width: 100%;
}

.filtro {
  border: solid 1px rgb(16, 94, 139);
  width: 50%;
  height: 30px;
  margin-left: 40px;
  border-radius: 10px;
}
</style>
