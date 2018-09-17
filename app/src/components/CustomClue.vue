<template>
  <div class="clue-form">
    <form @submit.prevent="handleSubmit" v-if="category">
      <div class="clue-input">Clue: 
        <input 
        type="text" 
        name="clue" 
        placeholder="Clue"
        value=100
        v-model="clue" 
        required>
      </div>
      <div class="clue-input">Answer: 
        <input 
        type="text" 
        name="answer" 
        placeholder="Answer"
        v-model="answer" 
        required>
        <label>Select point value: 
          <select 
          name="value"
          placeholder="Please choose a point value"
          v-model="value"
          required>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          </select>
        </label>
      </div>
      <button>Submit</button>
    </form>
  </div>

</template>

<script>

export default {
  props: {
    category: String,
    addCustomClue: Function
  },
  data() {
    return {
      clue: '',
      answer: '',
      value: null,
      search: null
    };
  },
  methods: {
    handleSubmit() {
      this.view = 'custom-clue';
      this.addCustomClue(this.clue, this.answer, this.value, this.view);
    }
  }
};

</script>

<style scoped>

  .clue-input {
    margin: 10px;
  }

  .clue-form {
    margin-top: 3%;
  }

</style>
