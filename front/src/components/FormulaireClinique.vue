<template>
    <div class="container">
        <h1>Formulaire Clinique</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="season">Season:</label>
            <select v-model="formData.season" id="season">
                <option v-for="(value, label) in seasonChoices" :value="value" :key="value">{{ label }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="age">Age:</label>
            <input v-model.number="formData.age" type="number" id="age" min="0"/>
          </div>

          <div class="form-group">
            <label for="childish_diseases">Childish Diseases:</label>
            <select v-model="formData.childish_diseases" id="childish_diseases">
                <option v-for="(value, label) in yesNoChoices" :value="value" :key="value">{{ label }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="accident_or_serious_trauma">Accident or serious trauma:</label>
            <select v-model="formData.accident_or_serious_trauma" id="accident_or_serious_trauma">
                <option v-for="(value, label) in yesNoChoices" :value="value" :key="value">{{ label }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="surgical_intervention">Surgical intervention:</label>
            <select v-model="formData.surgical_intervention" id="surgical_intervention">
                <option v-for="(value, label) in yesNoChoices" :value="value" :key="value">{{ label }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="high_fevers_last_year">High fevers last year:</label>
            <select v-model="formData.high_fevers_last_year" id="high_fevers_last_year">
                <option v-for="(value, label) in highFeversChoices" :value="value" :key="value">{{ label }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="alcohol_consumption">Alcohol consumption:</label>
            <select v-model="formData.alcohol_consumption" id="alcohol_consumption">
                <option v-for="(value, label) in alcoholChoices" :value="value" :key="value">{{ label }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="smoking_habit">Smoking habit:</label>
            <select v-model="formData.smoking_habit" id="smoking_habit">
                <option v-for="(value, label) in smokingHabitChoices" :value="value" :key="value">{{ label }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="hours_sitting_per_day">Hours sitting per day:</label>
            <input v-model.number="formData.hours_sitting_per_day" type="number" id="hours_sitting_per_day" min="0" max="24"/>
          </div>

          <div class="form-group">
            <label for="diagnosis">Diagnosis:</label>
            <input v-model="formData.diagnosis" type="text" id="diagnosis" />
          </div>

          <br>
            <button type="submit">Soumettre</button>
        </form>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const formData = ref({
      season: '',
      age: null,
      childish_diseases: '',
      accident_or_serious_trauma: '',
      surgical_intervention: '',
      high_fevers_last_year: '',
      alcohol_consumption: '',
      smoking_habit: '',
      hours_sitting_per_day: null,
      diagnosis: '',
    });

    async function submitForm() {
      try {
        await axios.post('/api/patients/', formData.value);
        alert('Le formulaire a été soumis avec succès !');
      } catch (error) {
        console.error(error);
        alert("Une erreur s'est produite lors de la soumission du formulaire.");
      }
    }

    const seasonChoices = {
      'Spring' : 'spring',
      'Summer' : 'summer',
      'Autumn' : 'autumn',
      'Winter' : 'winter',
    };

    const yesNoChoices = {
      'Yes' : 'yes',
      'No' : 'no',
    };

    const highFeversChoices = {
      'More than 3 months ago' : 'more_than_3_months_ago',
      'Less than 3 months ago': 'less_than_3_months_ago',
      'No' : 'no',
    };

    const alcoholChoices = {
      'Once a week': 'once_a_week',
      'Hardly ever or never': 'hardly_ever_or_never',
      'Several times a week': 'several_times_a_week',
      'Several times a day': 'several_times_a_day',
      'Every day': 'every_day',
    };

    const smokingHabitChoices = {
      'Occasional': 'occasional',
      'Daily': 'daily',
      'Never': 'never',
    };

    return {
      formData,
      seasonChoices,
      yesNoChoices,
      highFeversChoices,
      alcoholChoices,
      smokingHabitChoices,
      submitForm,
    };
  },
};
</script>
  