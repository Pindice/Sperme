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
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const predictions = ref(null);

    async function uploadImage(event) {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('/classification/', formData);
        predictions.value = response.data;
      } catch (error) {
        console.error(error);
      }
    }

    return {
      predictions,
      uploadImage,
    };
  },
};
</script>
