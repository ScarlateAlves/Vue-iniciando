<template>
  <div>
    <h1 class="title">{{ titulo }}</h1>
    <input
      type="search"
      class="filtro"
      placeholder="Digite aqui"
      @input="filtro = $event.target.value"
    />
    <ul class="list">
      <!-- chama a api que esta guarda no array de fotos e direcionada para funcao fotoComFiltro -->
      <li class="list-im" v-for="foto of fotoComFiltros">
        <!-- titulo e o nome da props que sera guardada o valor -->
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
          <!-- @click chamando um evento metodo e passando parametro -->
          <botao
            nome="REMOVER"
            type="button"
            :confirmacao="true"
            @botaoAtivado="remove(foto)"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
//importando componets
import Painel from "../shared/painel/Painel.vue";
import ImagemResposiva from "../shared/imagem-resposiva/imagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
export default {
  //dando nome a componets
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResposiva,
    botao: Botao
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

  methods: {
    remove(foto) {
      alert("removida" + foto.titulo);
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

.filtro {
  border: solid 1px rgb(16, 94, 139);
  width: 50%;
  height: 30px;
  margin-left: 40px;
  border-radius: 10px;
}
</style>
