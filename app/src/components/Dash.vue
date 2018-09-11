<template>
  <div v-if="user">
    <h1>Dashboard</h1>
    <p v-for="board in boards" :key="board.id">{{ board.name }}</p>
    <router-link to="/play">Play Game</router-link>
    <router-link to="/new">Make New Game</router-link>
    <RouterView></RouterView>
  </div>
</template>

<script>

import { getBoards } from '../services/api';

export default {
  props: {
    user: Object
  },
  data() {
    return {
      boards: null
    };
  },
  created() {
    getBoards()
      .then(boards => {
        console.log('boards', boards);
        this.boards = boards;
        console.log('this.boards', this.boards);
      })
      .catch(err => {
        this.error = err;
      });
  }

};
</script>

<style>

</style>
