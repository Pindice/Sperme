<template>
  <div>
    <h1>Page de Classification d'Images</h1>
    <input type="file" ref="imageInput" @change="uploadImage" accept="image/*">
    <div v-if="predictions">
      <h2>Résultats de classification :</h2>
      <table>
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
import { ref } from 'vue'; // Importer ref depuis vue
import axios from 'axios'; // Importer axios pour les requêtes HTTP

export default {
  setup() {
    const predictions = ref(null); // Utiliser ref pour gérer les données réactives

    async function uploadImage() {
      const formData = new FormData();
      formData.append('image', this.$refs.imageInput.files[0]);

      try {
        const response = await axios.post('/api/classification/', formData);
        predictions.value = response.data; // Utiliser predictions.value pour mettre à jour les données réactives
      } catch (error) {
        console.error(error);
      }
    }

    // Retourner les propriétés et méthodes que vous utilisez
    return {
      predictions,
      uploadImage,
    };
  },
};
</script>
