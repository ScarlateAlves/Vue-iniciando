<template>
  <header class="b">
    <nav>
      <!-- chamando as rotas -->
      <div v-for="route in routes">
        <router-link :to="route.path ? route.path : '/'">
          {{ route.titulo }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
};
</script>
<style></style>
