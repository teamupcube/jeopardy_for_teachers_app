<template>
  <div>
    <h3>Find Inspiration for your game board</h3>
    <h4>Search the jeopardy database by keyword(s)</h4>
    <form @submit.prevent="handleSubmit">
      <div>Keywords
        <input
          type="text" 
          name="keywords" 
          placeholder="Enter your keywords" 
          v-model="keywords"
          required>
      </div>
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    onSearch: Function
  },
  data() {
    return {
      keywords: ''
    };
  },
  methods: {
    handleSubmit() {
      this.onSearch(this.keywords);
    }
  }

};
</script>

<style>

</style>
