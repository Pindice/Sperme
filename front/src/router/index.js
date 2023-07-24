import Vue from 'vue'; // Assurez-vous d'importer Vue
import VueRouter from 'vue-router'; // Assurez-vous d'importer VueRouter
import MainPage from '../views/MainPage.vue';
import ClassificationImage from '../components/ClassificationImage.vue';

Vue.use(VueRouter); // Assurez-vous d'utiliser VueRouter avec Vue

const routes = [
  { path: '/', component: MainPage },
  { path: '/classif', component: ClassificationImage },
];

const myRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default myRouter;
