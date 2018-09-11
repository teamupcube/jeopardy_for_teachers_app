<template>
  <div>
    <h2>Add Teams</h2>
    <form>
      <label>
        Team Name: <input type="text"> 
      </label>
      <div class="team-list">
        <button @click="handleAddTeam">Add</button>
        <ul>
          <li>LISTTTT</li>
        </ul>    
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

<style>

</style>
