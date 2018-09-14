<template>
  <main>
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
    

      <Modal v-if="showModal" @close="showModal = false; showAnswer = false">
          <h3 slot="header"></h3>
          <h2 slot="body">{{ selectedClue.clue }} 
            <div v-if="showAnswer===true">{{ selectedClue.answer }}</div>
            <button class="modal-default-button" @click="showAnswer = true">
                Show Answer
            </button>
          </h2>
      </Modal>
    </div>
    <div class="leaderboard">
      <div>
        <h3>Scoreboard</h3>
        <ul v-for="score in scores" :key="score.id">
          <p>Team {{ score.team }} has {{ score.score }} points</p>
        </ul>
      </div>

      <!-- <h3 :turn="turn">It is Team {{ turn[0].team }}'s turn</h3> -->
    </div>
  
  </main>
</template>

<script>
import Modal from './Modal';
import { getClues, getCategories, getScores, getTeams, getTurn } from '../services/api';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      categories: null,
      clues: null,
      scores: null,
      showAnswer: false,
      teams: [],
      turn: null
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
    this.gameId = this.$route.params.id;
    getClues(this.gameId) 
      .then(saved => {
        this.clues = saved;
      });
    getCategories(this.gameId)
      .then(saved => {
        this.categories = saved;
      });
    getScores(this.gameId)
      .then(saved => {
        this.scores = saved;
      });
    getTeams(this.gameId) 
      .then(saved => {
        this.teams = saved;
      });
    getTurn(this.gameId)
      .then(saved => {
        this.turn = saved;
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
  grid-template-columns: 15vw 15vw 15vw 15vw 15vw 15vw;
  grid-column-gap: 1vw;
  margin: 3%;
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
