import { createRouter, createWebHistory } from 'vue-router'; // Assurez-vous d'importer les bonnes fonctions depuis vue-router
import MainPage from '../views/MainPage.vue';
import ClassificationImage from '../components/ClassificationImage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/classif', component: ClassificationImage },
];

const myRouter = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default myRouter;
