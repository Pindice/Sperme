<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/classif">Classif</router-link>
      <router-link to="/form">Form</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
