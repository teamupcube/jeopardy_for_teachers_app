<template>
  <div v-if="user">
    <h1>Dashboard</h1>
    <br>
    <router-link to="/game">Play Game</router-link>
    <router-link @click="categoryCount" to="/board">Make New Game Board</router-link>
    <RouterView :categoryCount="categoryCount" :categoryNumber="categoryNumber"></RouterView>
    <ul>
      <li v-for="game in games" :key="game.id">
        {{ game.class_name }}
      </li>
    </ul>
  
  </div>
</template>

<script>

import { getGames } from '../services/api';

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
        console.log(games);
        this.games = games;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    categoryCount() {
      this.categoryNumber++;
    }
  }
};
</script>

<style scoped>

</style>
