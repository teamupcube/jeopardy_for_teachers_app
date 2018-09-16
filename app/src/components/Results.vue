<template>
  <div>
    <h1>Results</h1>
  </div>
</template>

<script>

import { getResults } from '../services/api';

export default {
  data() {
    return {
      results: null
    };
  },
  created() {
    getResults()
      .then(results => {
        this.results = results;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>

</style>
