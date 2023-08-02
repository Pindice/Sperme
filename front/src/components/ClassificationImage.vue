<template>
  <div>
    <h1>Classification d'Images</h1>
    <input type="file" ref="imageInput" @change="uploadImage" accept="image/*">
    <div v-if="imagePreview">
      <br>
      <img :src="imagePreview" alt="Image preview">
    </div>
    <br>
    <div v-if="predictions">
      <h2>Résultats de classification :</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Étiquette</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(score, label) in predictions" :key="label">
            <td>{{ label }}</td>
            <td>{{ (score * 100).toFixed(2) }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export default {
  setup() {
    const predictions = ref(null);
    const imagePreview = ref(null);

    async function uploadImage(event) {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      // Afficher la prévisualisation de l'image sans la sauvegarder dans une base de données
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.value = e.target.result;
      };
      reader.readAsDataURL(file);

      // Effectuer la classification d'image en envoyant le fichier au serveur
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('api/classification/', formData);
        predictions.value = response.data;
      } catch (error) {
        console.error(error);
      }
    }

    return {
      predictions,
      uploadImage,
      imagePreview,
    };
  },
};
</script>
