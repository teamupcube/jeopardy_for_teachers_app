<template>
  <div>
    <h3>Find Inspiration for your game board</h3>
    <h4>Search the jeopardy database by keyword(s)</h4>
    <form @submit.prevent="handleSubmit">
      <div>Keywords
        <input
          type="text" 
          name="searcg" 
          placeholder="Enter your keywords" 
          v-model="search"
          required>
      </div>
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      search: ''
    };
  },
  methods: {
    handleSubmit() {
      this.onSearch(this.search);
    }
  }

};
</script>

<style>

</style>
