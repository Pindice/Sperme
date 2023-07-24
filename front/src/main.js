import Vue from 'vue';
import App from './App.vue';
import myRouter from './router';

new Vue({
  render: (h) => h(App),
  myRouter,
}).$mount('#app');
