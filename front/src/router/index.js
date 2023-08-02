import { createRouter, createWebHistory } from 'vue-router'; // Assurez-vous d'importer les bonnes fonctions depuis vue-router
import MainPage from '../views/MainPage.vue';
import ClassificationImage from '../components/ClassificationImage.vue';
import FormulaireClinique from '../components/FormulaireClinique.vue';
import ListePatients from '../components/ListePatients.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/classif', component: ClassificationImage },
  { path: '/form', component: FormulaireClinique},
  { path: '/liste', component: ListePatients },
];

const myRouter = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default myRouter;
