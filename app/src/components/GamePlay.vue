<template>
  <main>
    <form v-if="!turn" @submit.prevent="handleSelectTurn">
      <h3>Who wants to start first?</h3>
      <select v-model="selected">
        <!-- don't you want the team id as the value? -->
        <option v-for="team in teams"
          :key="team.id"
          :value="team.id">
          {{ team.team }}
        </option>
      </select>
      <button>Select</button>
    </form>
    <div v-else>
      <div>
        <h3>It is Team {{ turn[0].turn }}'s turn</h3>
      </div>
      <div class="container">
        <div v-if="categories" 
          v-for="(category) in categories" 
          :key="category.id" 
          class="column">
          <div class="box-cat">{{ category.category }}</div>
          <div v-for="clue in clues" 
            :key="clue.id">
            <button v-if="category.category===clue.category" 
              id="show-modal" 
              @click="($event) => handleClick(clue, $event)" 
              :value="clue"
              :disabled="clueAlreadyPlayed(clue.id)"
              :class="clueClass(clue.id)"> 
              {{ clue.value }}
            </button>
          </div>
        </div>
        <Modal v-if="showModal" @close="showModal = false; showAnswer = false">
            <h3 slot="header"></h3>
            <h2 slot="body">{{ selectedClue.clue }} 
              <div class="answer" v-if="showAnswer===true">{{ selectedClue.answer }}</div>
              <button v-if="!showAnswer" class="modal-default-button" @click="showAnswer = true">
                Show Answer
              </button>
              <br>
              <button v-if="showAnswer" class="modal-default-button" @click="handleRightAnswer">
                Correct
              </button>
              <button v-if="showAnswer" class="modal-default-button" @click="handleWrongAnswer">
                Incorrect
              </button>
              <button v-if="showAnswer" class="modal-default-button" @click="handleNoAnswer">
                No Answer
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
      </div>
    </div> 
  </main>
</template>

<script>

import Modal from './Modal';
import { 
  getClues, 
  getCategories, 
  getScores, 
  getTeams, 
  getTurn, 
  setTurn, 
  setScore, 
  setCluePlayed, 
  getCluesPlayed 
} from '../services/api';

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
      selected: null,
      cluesPlayed: []
    };
  },
  methods: {
    //Disables clue button if the clues has already been played
    clueAlreadyPlayed(clueId){
      for(let i = 0; i < this.cluesPlayed.length; i++) {
        if(clueId === this.cluesPlayed[i].clue_id) {
          return true;
        }
      }
    },
    //Applies the appropriate class to clue button depending on whether or not it has already been played. 
    clueClass(clueId) {
      return this.clueAlreadyPlayed ? 'clicked-button' : 'box-clue';
    },
    handleRightAnswer() {
      // don't create functions that only get called immediately
      // you _can_ delegate to additional methods

      //Update score and send new score to the DB
      const turn = this.turn[0].turn;
      const score = this.scores.find(score => score.team === turn);
      score.score += this.selectedClue.value;

      // ideally you tell the server the score and server would tell
      // you whose turn is next
      setScore(score.id, score.score);
    
      //Changes the turn to the next team
      const turn = this.turn;
      const teams = this.teams;
      let teamLength = teams.length;
      for(let i = 0; i <= teamLength - 1; i++) {
        if(i === teamLength - 1) {
          turn[0].turn = teams[0].team;
          return turn;
        }
        if(turn[0].turn === teams[i].team) {
          turn[0].turn = teams[i + 1].team;
          return turn;
        }
      }

      //PUT request to set new turn in DB
      setTurn(this.gameId, this.turn[0].turn);
    },
    // this is identical to prior method, just minus the value.
    // DRY - DON'T REPEAT YOURSELF
    handleWrongAnswer() {
      //Update score and send new score to the DB
      let changeScore = function(turn, scores, clueValue) {
        for(let i = 0;i < scores.length;i++){
          if(turn === scores[i].team){
            scores[i].score -= clueValue;
            setScore(scores[i].id, scores[i].score);
            return scores;
          }
        }
      };
      changeScore(this.turn[0].turn, this.scores, this.selectedClue.value);
      //Changes the turn to the next team
      let changeTurn = function(turn, teams) {
        let teamLength = teams.length;
        for(let i = 0; i <= teamLength - 1; i++) {
          if(i === teamLength - 1) {
            turn[0].turn = teams[0].team;
            return turn;
          }
          if(turn[0].turn === teams[i].team) {
            turn[0].turn = teams[i + 1].team;
            return turn;
          }
        }
      };          
      changeTurn(this.turn, this.teams);
      //PUT request to set new turn in DB
      setTurn(this.gameId, this.turn[0].turn);
    },
    // if you broke the actions into discrete methods, it would be easy to combine them
    handleNoAnswer() {
      //Changes the turn to the next team
      let changeTurn = function(turn, teams) {
        let teamLength = teams.length;
        for(let i = 0; i <= teamLength - 1; i++) {
          if(i === teamLength - 1) {
            turn[0].turn = teams[0].team;
            return turn;
          }
          if(turn[0].turn === teams[i].team) {
            turn[0].turn = teams[i + 1].team;
            return turn;
          }
        }
      };          
      changeTurn(this.turn, this.teams);
      //PUT request to set new turn in DB
      setTurn(this.gameId, this.turn[0].turn);
    },
    handleClick(clue, event) {
      this.showModal = true;
      this.selectedClue = clue;
      event.target.disabled = true;
      event.target.className = 'clicked-button';
      setCluePlayed(this.selectedClue.id, this.gameId);
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
      });
    getTurn(this.gameId)
      .then(saved => {
        if(saved.length > 0) {
          this.turn = saved;
        }
      });
    getCluesPlayed(this.gameId)
      .then(saved => {
        this.cluesPlayed = saved;
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
