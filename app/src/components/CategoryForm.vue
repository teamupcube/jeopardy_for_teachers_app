<template>
  <div>
    <form class="category-form">
      <div>Catergory Name: 
        <input class="category-text" type="text" 
          name="category-name" placeholder="Category" required>
      </div>
      <div>100 Point Clue: 
        <input class="category-text" type="text" 
          name="category-name" placeholder="Category" required>
      </div>
      <div>100 Point Answer: 
        <input class="category-text" type="text" 
          :name="`category${categoryNumber}-name`" placeholder="Category" required>
      </div>
    </form>

  </div>

  
</template>

<script>
export default {

  methods: {
  
  }

};
</script>

<style scoped>

  .category-form {
    font-family: sans-serif;
  }

  .category-text {
    width: 200px;
    height: 30px;
    font-size: .9em;
  }

</style>
