import { createApp } from 'vue'; // Importer createApp depuis vue
import App from './App.vue';
import myRouter from './router'; // Assurez-vous d'utiliser le nom correct ici
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App); // Créer l'instance de l'application Vue

app.use(myRouter); // Utiliser le routeur avec l'application Vue

app.mount('#app'); // Monter l'application Vue sur l'élément #app
