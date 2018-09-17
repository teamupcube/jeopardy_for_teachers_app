<template>
  <div class="teams">
    <form @submit.prevent="handleSubmit">
      <div class="team-list">
        <div v-if="teams.length<4">
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
    <button @click="handleNext">Next</button>
  </div>

</template>

<script>

import { addTeam, addTeamGame, getTeams } from '../services/api';

export default {
  data() {
    return {
      teamName: '',
      teams: []
    };
  },
  created() {
    this.gameId = this.$route.params.id;
    getTeams(this.gameId) 
      .then(saved => {
        this.teams = saved;
      });
  },
  methods: {
    handleNext() {
      this.$router.push(`/game/${this.gameId}/instructions`);
    },
    handleSubmit() {
      this.gameId = this.$route.params.id;
      return addTeam(this.teamName)
        .then(saved => {
          this.teams.push(saved);
          this.team = saved;
          addTeamGame(this.team.teamId, this.gameId);
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
