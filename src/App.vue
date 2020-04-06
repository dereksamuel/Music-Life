<template lang="pug">
  #app
    Header
    router-view
    Footer
</template>

<script>
import Buscador from "./components/Buscador.vue";
import Footer from "../src/components/layouts/Footer";
import Header from "../src/components/layouts/Header";

export default {
  name: "App",
  components: {
    Buscador,
    Footer,
    Header
  },
  data() {
    return {};
  }

  //created() {
  //alert('hello Derek');
  //}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.red {
  background-color: red;
  font-size: 45px;
  padding: 16px;
}

.green {
  background-color: green;
  font-size: 45px;
  padding: 16px;
}
</style>
