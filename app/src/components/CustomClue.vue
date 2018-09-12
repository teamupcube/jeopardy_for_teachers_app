<template>
  <div>
    <div v-if="previousClue">
      <p>Your previous clue, answer, and point value were saved as:</p>
      <ul>
        <li>Clue: {{ previousClue.clue }}</li>
        <li>Answer: {{ previousClue.answer }}</li>
        <li>Value: {{ previousClue.value }}</li>
      </ul>
    </div>

    <form @submit.prevent="handleCustomClue" v-if="category">
      <div>Clue: 
        <input 
        type="text" 
        name="clue" 
        placeholder="Clue"
        value=100
        v-model="clue" 
        required>
      </div>
      <div>Answer: 
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
  data() {
    return {
      clue: null,
    };
  },

  methods: {
    
  }
};

</script>

<style scoped>

</style>
