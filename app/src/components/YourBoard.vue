<template>
  <main>
    <h2>Your Board</h2>
    <p v-if="message">{{ message }}</p>
    <p>Board: {{ boardId }}</p>
    <div class="container">
      <div v-if="categories" 
        v-for="(category) in categories" 
        :key="category.id" 
        class="column">
        <div class="box-cat">{{ category.category }}</div>
        <div v-for="clue in clues" 
          :key="clue.id">
          <button v-if="category.category===clue.category" class="box-clue" id="show-modal" @click="($event) => handleClick(clue, $event)" :value="clue"> {{ clue.value }}</button>
        </div>
      </div>
      <BoardModal v-if="showModal" @close="showModal = false; showAnswer = false">
          <h3 slot="header"></h3>
          <h2 slot="body">Clue: {{ selectedClue.clue }} 
            <div>Answer: {{ selectedClue.answer }}</div>
          </h2>
      </BoardModal>
    </div>
    
  </main>
</template>

<script>

import BoardModal from './BoardModal';
import { getBoardClues, getBoardCategories } from '../services/api';

export default {
  props: {
    message: String
  },
  components: {
    BoardModal,
  },
  data() {
    return {
      showModal: false,
      categories: null,
      clues: null,
      showAnswer: false,
      boardId: null
    };
  },
  methods: {
    handleClick(clue, event) {
      this.showModal = true;
      this.selectedClue = clue;
      event.target.disabled = true;
      event.target.className = 'clicked-button';
    }   
  },
  created() {
    this.boardId = this.$route.params.id;
    getBoardClues(this.boardId) 
      .then(saved => {
        this.clues = saved;
      });
    getBoardCategories(this.boardId)
      .then(saved => {
        this.categories = saved;
      });
  }
};

</script>

<style>

  .clicked-button {
    background-color: rgb(59, 59, 117);
    color: white;
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
    text-align: center;
    padding: 10px 0px;

  }

  .container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-column-gap: 1vw;
  }

  .box-cat {
    background-color: rgb(48, 48, 162);
    color: white;
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
    text-align: center;
    padding: 15px 0px;
  }

  .box-clue {
    background-color: rgb(48, 48, 162);
    color: white;
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
    text-align: center;
    padding: 10px 0px;
  }

  .leaderboard {
    display: flex;
    justify-content: space-around
  }

</style>
