<template>
  <div class="list-img">
    <h2 @dblclick="visivel = !visivel">{{ titulo }}</h2>
    <!-- fazer animacoes com vur utilaza atag com name -->
    <transition name="painel-fade">
      <div class="painel-image" v-show="visivel">
        <slot>
          <!-- o slot coloca as coisas dentro da tag, recebe o conteudo -->
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titulo"],

  data() {
    return {
      visivel: true
    };
  }
};
</script>

<style scoped>
.list-img {
  display: flex;
  flex-direction: column;
  background: cadetblue;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}
.painel-image {
  width: 100%;
  height: 100%;
}

* {
  box-shadow: 3px 3px 3px rgb(0, 0, 0);
}

.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.4s;
}
</style>

painel-fade-enter // antes do elemento ser incluído ou removido, o estado atual
painel-fade-enter-active // quando o elemento esta sendo incluído
painel-fade-leave-active // quando o elemento esta sendo removido
