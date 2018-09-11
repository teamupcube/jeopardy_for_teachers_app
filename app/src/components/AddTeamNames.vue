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

export default {
  data() {
    return {
      teamName: ''
    };
  },
  props: {
    team: Object,
    onAddTeam: Function
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
        teamName: this.teamName
      };
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
