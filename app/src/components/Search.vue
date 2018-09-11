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
    <div 
      v-if="clues"
      v-for="(clue) in clues"
      :key="clue.id">
      <div>
        <h4>Results</h4>
        <p>Category: {{clues[0].category}}</p>
        <p>Clue: {{clues[0].clue}}</p>
        <p>Answer: {{clues[0].answer}}</p>
        <p>Historic Point Value: {{clues[0].value}}</p>
       <label><input type="checkbox" name="selected" value=true>Add to your game board</label><br/>
        <label>Select point value
          <select name="value">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
        </select>
        </label>
      </div>
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
