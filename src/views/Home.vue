<template>
  <div class="home">
    <h1>Adopt a new best friend</h1>
    <p>Cats:  {{ getAllCats.length }}</p>
    <p>Total Animals: {{animalCount}}</p>
    <button @click="togglePetForm" class="btn btn-primary my-1">Add new Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm" class="text-justify p-3">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Pet's Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.breed"
          placeholder="Enter breed"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.gender"
          :options="['male', 'female']"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cat', 'dog']"
          required
        ></b-form-select>
      </b-form-group>

     <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Color:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.color"
          :options="['black', 'white', 'orange/white', 'black/white', 'brown']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Weight:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.weight"
          placeholder="Enter weight"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Location:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.location"
          placeholder="Enter location"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="notes:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.notes"
          placeholder="Additional Notes"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null,
        breed: null,
        gender: null,
        location: '',
        weight: 0,
        color: null,
        notes: '',
      },
    };
  },
  computed: {
    ...mapGetters([
      'animalCount',
      'getAllCats',
    ]),
  },
  methods: {
    ...mapActions([
      'addPet',
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const {
        species, age, name, breed, gender, location, weight, color, notes,
      } = this.formData;

      const payload = {
        species,
        pet: {
          name,
          age,
          species,
          breed,
          gender,
          location,
          weight,
          color,
          notes,
        },
      };
      this.addPet(payload);

      // reset form
      this.formData = {
        name: '',
        age: 0,
        species: null,
        breed: null,
        gender: null,
        location: '',
        weight: 0,
        color: null,
        notes: '',
      };
    },
  },
};
</script>

<style scoped>

</style>
