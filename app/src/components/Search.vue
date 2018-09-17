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
        <button @click="handleSubmit">Search</button>
      </div>
    </form>
    <div 
      v-if="historicClues"
      v-for="historicClue in historicClues"
      :key="historicClue.id">
      <div id="search-results">
        <h4>Results</h4>
        <p>Clue: {{ historicClue.clue }}</p>
        <p>Answer: {{ historicClue.answer }}</p>
        <div class="select-points">
          <label>Select point value
            <select name="value" v-model="value">
            <option :value="100" >100</option>
            <option :value="200">200</option>
            <option :value="300">300</option>
            <option :value="400">400</option>
            <option :value="500">500</option>
            </select>
          </label>
          <button @click="handleAdd" :value="historicClue.id">Add this clue to your board</button>
        </div>
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
      keywords: '',
      selected: null,
      clue: null,
      value: null,
      search: null
    };
  },
  methods: {
    handleSubmit() {
      this.onSearch(this.keywords);
      console.log('search keywords', this.keywords);
    },
    handleAdd(event) {
      let clues = this.historicClues;
      this.view = 'search';
      for(let i = 0; i < clues.length; i++) {
        if(clues[i].id === parseInt(event.target.value)) {
          this.clue = clues[i].clue;
          this.answer = clues[i].answer;
        }
      }
      this.onAdd(this.clue, this.answer, this.value, this.view);
    }
  }
};
</script>

<style>

  #search-results {
    text-align: center;
    width: 50%;
    margin: 60px auto;
  }

  #search-results p {
    text-align: left;
  }

  .select-points {
    margin-top: 4%;
  }

  .select-points button {
    margin-left: 5%;
  }
  
</style>
