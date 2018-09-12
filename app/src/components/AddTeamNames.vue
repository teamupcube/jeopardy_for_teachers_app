<template>
  <div class="teams">
    <form @submit.prevent="handleSubmit">
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
        <div>
          <h2>Your Teams</h2>
          <ul> 
            <li>LISTTTT</li>
          </ul>
        </div>
      <button @click="handleNext">Done</button>
  </div>
</template>

<script>

import { addTeam } from '../services/api';

export default {
  data() {
    return {
      teamName: ''
    };
  },
  props: {
    // team: Object,
    // onAddTeam: Function,
    // game: Object
  },
  // created() {
  //   const team = this.team;
  //   this.teamName = team.teamName;
  // },
  methods: {
    handleNext() {
      this.$router.push('instructions');
    },
    handleSubmit() {
      this.gameId = this.$route.params.id;
      return addTeam(this.teamName, this.gameId)
        .then(saved => {
          this.team = saved;
          // this.$router.push(`/make-game/${this.category.boardId}/categories/${this.category.id}`);
        });
    }
  },

};
</script>

<style scoped>

.team-list {
  display: flex;
  justify-content: space-around;
}

.teams {
  text-align: center;
}

</style>
