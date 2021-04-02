<template>
  <div class="list-img">
    <h2>{{ titulo }}</h2>
    <slot class="painel-image">
      <!-- o slot coloca as coisas dentro da tag, recebe o conteudo -->
    </slot>
  </div>
</template>

<script>
export default {
  props: ["titulo"]
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
</style>
