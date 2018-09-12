<template>
  <div v-if="user">
    <h1>Dashboard</h1>
    <br>
    <router-link to="/play">Play Game</router-link>
    <router-link to="/make-game">Make New Game</router-link>
    <RouterView></RouterView>
  </div>
</template>

<script>

import { getBoards } from '../services/api';

export default {
  props: {
    user: Object,
    handleNext: Function
  },
};
</script>

<style scoped>

</style>
