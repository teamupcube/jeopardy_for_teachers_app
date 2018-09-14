<template>
  <div class="next">
    <h1>Classroom Rules for Jeopardy:</h1>
    <p>Teams take turns choosing and answering questions<br>
       Scoring:<br>
       If you get a question right, your team gains points<br>
       If you get a question wrong, your team looses points<br>
       If you choose not to answer, you neither loose nor gain points<br>
       There is no double jeopardy or final jeopardy<br>
    </p>
    <router-link :to="`/game/${this.gameId}/gameplay`">Next</router-link>
  </div>
</template>

<script>

// import { addTeam, addTeamGame, getTeams, startGame } from '../services/api';


export default {
  created() {
    console.log(this.$route.params);
    this.gameId = this.$route.params.id;
  }
};
</script>

<style>
.next {
  text-align: center;
}
</style>
