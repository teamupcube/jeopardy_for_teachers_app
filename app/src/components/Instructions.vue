<template>
  <div class="next">
    <div class="rules">
    <h1>Classroom Rules for Jeopardy:</h1>
    <p>Teams take turns choosing and answering questions</p><br>
       <p> Scoring:<br>
       <p>If you get a question right, your team gains points</p>
       <p>If you get a question wrong, your team looses points</p>
       <p>If you choose not to answer, you neither loose nor gain points</p><br>
    <p>There is no double jeopardy or final jeopardy</p>
    </div>
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

.rules {
  text-align: center;
  margin-bottom: 30px;
}

.next{
  text-align: center;
}

</style>
