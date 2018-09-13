<template>
  <div>
    <h1>Instructions</h1>
    <router-link :to="`/game/${this.gameId}/gameplay`">Next</router-link>
  </div>
</template>

<script>

import { addTeam, addTeamGame, getTeams, startGame } from '../services/api';


export default {
  created() {
    console.log(this.$route.params)
    this.gameId = this.$route.params.id;
  }
};
</script>

<style>

</style>
