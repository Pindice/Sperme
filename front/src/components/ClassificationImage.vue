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
import axios from 'axios';

export default {
  data() {
    return {
      predictions: null,
    };
  },
  methods: {
    async uploadImage() {
      const formData = new FormData();
      formData.append('image', this.$refs.imageInput.files[0]);

      try {
        const response = await axios.post('/api/classification/', formData);
        this.predictions = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
