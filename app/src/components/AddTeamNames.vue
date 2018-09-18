<template>
  <div class="teams">
    <form v-if="teams.length < 4" @submit.prevent="handleSubmit">
      <div class="team-list">
        <div>
          <h2>Add Teams</h2>
          <label>
            Team Name: <input type="text" v-model="teamName"> 
          </label>
          <button>Add</button>
        </div>
      </div>
    </form>
    <h3>Teams:</h3>
    <ul>
      <li v-for="team in teams" 
        :key="team.id">
        {{ team.team }}
      </li>
    </ul>
    <RouterLink v-if="teams.length > 1" :to="`/game/${this.gameId}/instructions`">Next</RouterLink>
  </div>

</template>

<script>

import { addTeam, addTeamGame, getTeams } from '../services/api';

export default {
  data() {
    return {
      teamName: '',
      teams: [],
      gameId: this.$route.params.id
    };
  },
  created() {
    getTeams(this.gameId) 
      .then(teams => {
        this.teams = teams;
      });
  },
  methods: {
   
    handleSubmit() {
      // This needs to happen in ONE server call
      return addTeam(this.teamName)
        .then(saved => {
          this.teams.push(saved);
          addTeamGame(saved.teamId, this.gameId);
        });
    },
  },
};

</script>

<style scoped>

  .team-list {
    display: flex;
    justify-content: space-around;
    padding-top: 5%;
  }

  .team-list h2 {
    padding-bottom: 3%;
  }

  .teams {
    text-align: center;
  }

</style>
