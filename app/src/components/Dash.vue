<template>
  <div v-if="user">
    <h1>Dashboard</h1>
    <br>
    <router-link to="/game">Play Game</router-link>
    <router-link @click="categoryCount" to="/board">Make New Game Board</router-link>
    <RouterView :categoryCount="categoryCount" :categoryNumber="categoryNumber"></RouterView>
    <h3>Your Games:</h3>
    <ul>
      <li v-for="(game, i) in games" :key="game.id">
        {{ game.class_name }}
        <button @click="handleDelete(i)">Delete</button>
      </li>
    </ul>
  
  </div>
</template>

<script>

import { getGames, deleteGames } from '../services/api';

export default {
  props: {
    user: Object,
    handleNext: Function
  },
  data() {
    return {
      games: null,
      categoryNumber: null
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
    categoryCount() {
      this.categoryNumber++;
    },
    handleDelete(i) {
      if(!confirm(`Are you sure you want to remove game ${this.games[i].class_name}`)) {
        return
      }
      deleteGames(this.games[i].id)

    }


    //     handleDelete() {
    //   if(!confirm(`Are you sure you want to remove ${this.country.name} from your travel log?`)) {
    //     return;
    //   }

    //   return api.deleteCountry(this.country.id)
    //     .then(() => {
    //       this.$router.push('/countries');
    //     });
    // },
  }
};
</script>

<style scoped>

</style>
