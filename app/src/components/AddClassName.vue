<template>
  <div>
    <h2>Add Class Name</h2>
    <form @submit.prevent="handleSubmit">
      <label>
        Class Name: <input type="text"> 
      </label>
      <button @click="handleNext">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleNext() {
      this.$router.push('team-names');
    }
  },
  handleSubmit() {
  }
};
</script>

<style>

</style>
