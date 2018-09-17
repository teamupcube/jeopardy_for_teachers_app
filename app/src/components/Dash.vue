<template>
  <div v-if="user">
    <h1>Dashboard</h1>
    <br>
    <div id="options">
      <router-link to="/game">Play Game</router-link>
      <router-link to="/board">Make New Game Board</router-link>
    </div>
    <RouterView></RouterView>
    <div id="game-box">
    <h3>In Progress Games:</h3>
      <ul>
        <li v-for="(game, i) in games" :key="game.id">
          {{ game.class_name }} 
          <button class="dash-button" id="continue-button" @click="sendToGame(game.id)">Continue</button>
          <button class="dash-button" id="delete-button" @click="handleDelete(i)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { getGames, deleteCluesPlayed, deleteTeamGame, deleteGame } from '../services/api';

export default {
  props: {
    user: Object,
    handleNext: Function
  },
  data() {
    return {
      games: null
    };
  },
  created() {
    getGames()
      .then(games => {
        this.games = games;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleDelete(i) {
      if(confirm(`Are you sure you want to remove game ${this.games[i].class_name}`)) {
        console.log('game', this.games[i].id);
        deleteCluesPlayed(this.games[i].id);
        deleteTeamGame(this.games[i].id);
        return deleteGame(this.games[i].id)
          .then(() => {
            getGames()
              .then(games => {
                this.games = games;
              })
              .catch(err => {
                this.error = err;
              });
          });
      }
    },
    sendToGame(id) {
      this.$router.push(`/game/${id}/gameplay`);
    }
  }
};

</script>

<style>

  #options {
    text-align: center;
  }

  #options a {
    margin: 0 2%;
  }

  h2, h3, h4 {
    text-align: center;
    margin: 5% 0 2% 0;
  }

  ul {
    text-align: center;
    list-style: inside;
    margin-left: -50px;
    padding-bottom: 1%;
    list-style-type: none;
  }

  li {
    margin: 7px;
  }

  #game-box {
    border: .2px solid black;
    width: 25%;
    margin: 7% auto;
    padding: 1% 0 2% 0;
  }

  form {
    text-align: center;
  }

  .dash-button {
    border-radius: 5px;
  }

  #continue-button:hover {
    background-color: rgb(89, 250, 89);
    
  }
  #delete-button:hover {
    background-color: rgb(253, 98, 98);
  }

</style>
