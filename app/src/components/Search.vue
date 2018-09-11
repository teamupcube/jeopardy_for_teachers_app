<template>
  <div>
    <h3>Find Inspiration for your game board</h3>
    <h4>Search the jeopardy database by keyword(s)</h4>
    <form @submit.prevent="handleSubmit">
      <div>Keywords
        <input
          type="text" 
          name="keywords" 
          placeholder="Enter your keywords" 
          v-model="keywords"
          required>
      </div>
      <button>Search</button>
    </form>
    <div v-if="clues">
      <h4>Results</h4>
      <p>Category: {{clues[0].category}}</p>
      <p>Clue: {{clues[0].clue}}</p>
      <p>Answer: {{clues[0].answer}}</p>
      <p>Historic Point Value: {{clues[0].value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onSearch: Function,
    clues: Array
  },
  data() {
    return {
      keywords: ''
    };
  },
  methods: {
    handleSubmit() {
      this.onSearch(this.keywords);
    }
  }

};
</script>

<style>

</style>
