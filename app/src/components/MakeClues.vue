<template>
  <div>
    <div v-if="previousClue">
      <p>Your previous clue, answer, and point value were saved as:</p>
      <ul>
        <li>Clue: {{ previousClue.clue }}</li>
        <li>Answer: {{ previousClue.answer }}</li>
        <li>Value: {{ previousClue.value }}</li>
      </ul>
    </div>

    <form @submit.prevent="handleSubmitClues" v-if="category">
      <div>Clue: 
        <input 
        type="text" 
        name="clue" 
        placeholder="Clue"
        value=100
        v-model="clue" 
        required>
      </div>
      <div>Answer: 
        <input 
        type="text" 
        name="answer" 
        placeholder="Answer"
        v-model="answer" 
        required>
      <label>Select point value: 
        <select 
        name="value"
        placeholder="Please choose a point value"
        v-model="value"
        required>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
      </select>
      </label>
      </div>
      <button>Submit</button>
    </form>
    <Search :onAdd="handleAdd" :historicClues="clues" :onSearch="handleSearch"/>
  </div>

  
</template>

<script>
import Search from './Search.vue';
import { getData, addClue } from '../services/api';

export default {
  data() {
    return {
      clues: null,
      clue: null,
      keywords: '',
      clueNumber: null,
      previousClue: null
    };
  },
  created() {
    this.category = this.$route.params.id;
  },
  components: {
    Search
  },
  methods: {
    handleSearch(keywords) {
      this.keywords = keywords;
      this.searchData();
    },
    searchData() {
      getData(this.keywords)
        .then(clues => {
          this.clues = clues;
          return this.clues;
        });
    },
    handleSubmitClues() {
      console.log('make category route', this.$route.params.boardId);
      this.clueNumber++;
      this.board = this.$route.params.boardId;
      this.category = this.$route.params.categoryId;
      return addClue(this.clue, this.answer, this.value, this.category)
        .then(saved => {
          this.previousClue = saved;
          this.clue = '';
          this.answer = '';
          this.value = null;
          console.log('prev clue', this.previousClue);
          if(this.clueNumber < 6) {
            this.$router.push(`/board/${this.board}/categories/${this.category}`);
          }
        });

    }
    // handleAdd(historicClue) {
    //   return addHistoricClue(historicClue)
    //     .then(saved => {

    //     });
    // }
    
  }
};

</script>

<style scoped>

</style>
