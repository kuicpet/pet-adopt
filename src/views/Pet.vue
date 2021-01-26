<template>
    <div>
        <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
        <p>Breed: {{ animal.breed }}</p>
        <p>Bender: {{ animal.gender }}</p>
        <p>Age: {{ animal.age }} years old</p>
        <p>Color: {{ animal.color }}</p>
        <p>Weight: {{ animal.weight }}</p>
        <p>Location: {{ animal.location }}</p>
        <p>{{ animal.notes }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      animal: {},
    };
  },
  computed: {
    ...mapState([
      'cats',
      'dogs',
    ]),
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  },
};
</script>

<style>

</style>
