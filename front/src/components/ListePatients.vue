<template>
    <div>
      <h1>Liste des patients</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Season</th>
            <th>Age</th>
            <th>Childish Diseases</th>
            <th>Accident or Serious Trauma</th>
            <th>Surgical Intervention</th>
            <th>High Fevers Last Year</th>
            <th>Alcohol Consumption</th>
            <th>Smoking Habit</th>
            <th>Hours Sitting Per Day</th>
            <th>Diagnosis</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in patients" :key="patient.id">
            <td>{{ patient.id }}</td>
            <td>{{ patient.season }}</td>
            <td>{{ patient.age }}</td>
            <td>{{ patient.childish_diseases }}</td>
            <td>{{ patient.accident_or_serious_trauma }}</td>
            <td>{{ patient.surgical_intervention }}</td>
            <td>{{ patient.high_fevers_last_year }}</td>
            <td>{{ patient.alcohol_consumption }}</td>
            <td>{{ patient.smoking_habit }}</td>
            <td>{{ patient.hours_sitting_per_day }}</td>
            <td>{{ patient.diagnosis }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Importez axios depuis le package installé
  
  export default {
    data() {
      return {
        patients: [],
      };
    },
    mounted() {
      this.fetchPatients();
    },
    methods: {
      async fetchPatients() {
        try {
          const response = await axios.get('/api/patients/'); // Utilisez axios.get au lieu de fetch
          this.patients = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des patients :', error);
        }
      },
    },
  };
  </script>