<template>
  <div>
    <button :class="estiloDoBotao" type="tipo" @click="disparaBotao()">
      {{ nome }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["tipo", "nome", "confirmacao", "estilo"],

  //metodos do componete fica aqui se precisa de envento cria aqui para ser chamado no pai e receber coisas
  methods: {
    disparaBotao() {
      this.$emit("botaoAtivado");
    }
  },

  computed: {
    estiloDoBotao() {
      // se o valor é padrão ou não passou nada para estilo
      if (this.estilo == "padrao") return "botao botao-padrao";

      if (this.estilo == "perigo") return "botao botao-perigo";
    }
  }
};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
