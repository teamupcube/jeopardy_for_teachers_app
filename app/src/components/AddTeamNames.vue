<template>
  <div class="teams">
    <form>
      <div class="team-list">
        
        <div>
          <h2>Add Teams</h2>
          <label>
            Team Name: <input type="text"> 
          </label>
          <button @click="handleAddTeam">Add</button>
        </div>
        
        <div>
          <h2>Your Teams</h2>
          <ul> 
            <li>LISTTTT</li>
          </ul>
        </div> 
           
      </div>
      <button @click="handleNext">Done</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleNext() {
      this.$router.push('instructions');
    },
    handleAddTeam() {
      console.log('add team');
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
