import { createRouter, createWebHistory } from 'vue-router'; // Assurez-vous d'importer les bonnes fonctions depuis vue-router
import MainPage from '../views/MainPage.vue';
import ClassificationImage from '../components/ClassificationImage.vue';
import FormulaireClinique from '../components/FormulaireClinique.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/classif', component: ClassificationImage },
  { path: '/form', component: FormulaireClinique}
];

const myRouter = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default myRouter;
