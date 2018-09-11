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
      v-if="historicClues"
      v-for="(historicClue) in historicClues"
      :key="historicClue.id">
      <div>
        <h4>Results</h4>
        <p>Category: {{historicClue.category}}</p>
        <p>Clue: {{historicClue.historicClue}}</p>
        <p>Answer: {{historicClue.answer}}</p>
        <p>Historic Point Value: {{historicClue.value}}</p>
        <form @submit.prevent="handleAdd">
          <label><input type="checkbox" name="selected" value=true>Use this clue</label><br/>
          <label>Select point value
            <select name="value">
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
          </select>
          </label>
          <button>Add to game board</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onSearch: Function,
    historicClues: Array,
    onAdd: Function
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
