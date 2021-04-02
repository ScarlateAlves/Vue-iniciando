<template>
  <div class="body">
    <heade :routes="routes" />
    <transition name="painel-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";
import Header from "./components/header/Header";
export default {
  components: {
    heade: Header
  },
  data() {
    return {
      routes
    };
  }
};
</script>
<style>
.body {
  width: 96%;
  margin: 0 auto;
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
