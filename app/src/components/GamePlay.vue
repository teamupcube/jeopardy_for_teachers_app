<template>
  <main>
    <div>
      <h3 v-if="turn">It is Team {{ turn[0].turn }}'s turn</h3>
      <form v-if="!turn" @submit.prevent="handleSelectTurn">
        <h3>Who's wants to start first?</h3>
        <select v-model="selected">
          <option :selected="team.team" v-for="team in teams" :key="team.id">{{ team.team }}</option>
        </select>
        <button>Select</button>
      </form>
    </div>
    <div v-if="turn" class="container">
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
            <div class="answer" v-if="showAnswer===true">{{ selectedClue.answer }}</div>
            <button class="modal-default-button" @click="showAnswer = true">
                Show Answer
            </button>
            <br>
              <button class="modal-default-button" @click="showAnswer = true">
                Incorrect
            </button>
            <button class="modal-default-button" @click="showAnswer = true">
               Incorrect
            </button>
          </h2>
      </Modal>
    </div>
    <div v-if="turn" class="leaderboard">
      <div>
        <h3>Scoreboard</h3>
        <ul v-for="score in scores" :key="score.id">
          <p>Team {{ score.team }} has {{ score.score }} points</p>
        </ul>
      </div>
    </div>
  
  
  </main>
</template>

<script>
import Modal from './Modal';
import { getClues, getCategories, getScores, getTeams, getTurn, setTurn } from '../services/api';

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
      turn: null,
      selected: null
    };
  },
  methods: {
    handleClick(clue, event) {
      this.showModal = true;
      this.selectedClue = clue;
      event.target.disabled = true;
      event.target.className = 'clicked-button';

      let changeTurn = function(turn, teams) {
        let teamLength = teams.length;
        for(let i = 0; i <= teamLength - 1; i = i + 1) {
          if(i === teamLength - 1) {
            turn[0].turn = teams[0].team;
            return turn;
          }
          if(turn[0].turn === teams[i].team) {
            turn[0].turn = teams[i + 1].team;
            return turn;
          }
        }
        return turn;
      };      
    

      changeTurn(this.turn, this.teams);
      setTurn(this.gameId, this.turn[0].turn);
    },
    handleSelectTurn() {
      this.turn = this.selected;
      this.gameId = this.$route.params.id;
      setTurn(this.gameId, this.turn)
        .then(saved => {
          this.turn = saved;
        });
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
        // console.log(this.teams)
      });
    getTurn(this.gameId)
      .then(saved => {
        if(saved.length > 0) {
          this.turn = saved;
        }
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
  font-size: 1.5em;

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
  font-size: 1.5em;
}

.box-clue {
  background-color: rgb(48, 48, 162);
  color: white;
  font-family: 'Courier New', Courier, monospace;
  width: 100%;
  text-align: center;
  padding: 10px 0px;
  font-size: 1.5em;
  margin: 2px 0;
}

.leaderboard {
  display: flex;
  justify-content: space-around
}

.answer {
  margin: 20px;
}
</style>
