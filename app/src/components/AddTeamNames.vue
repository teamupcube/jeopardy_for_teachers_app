<template>
  <div class="teams">
    <form @submit.prevent="handleSubmit">
      <div class="team-list">
        <h2 v-if="game">Game Name: {{ game.class_name }} {{ game.id }}</h2>
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

export default {
  data() {
    return {
      teamName: ''
    };
  },
  props: {
    team: Object,
    onAddTeam: Function,
    game: Object
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
      const team = {
        teamName: this.teamName,
        gameId: this.game.id
      };
      console.log('team', team);
      return this.onAddTeam(team);
      // console.log(teamName);
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
