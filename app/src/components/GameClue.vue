<template>
  <div class="container1">
    <div v-for="category in categories" :key="category.id">
      <div v-if="category.category===clue.category">
        <div id="cat_one">
        <button class="box" id="show-modal" @click="showModal = true">{{ clue.value }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clue: Object,
    categories: Array
  }
}
</script>

<style scoped>
.container1 {
  display: grid;
  grid-template-columns: 15vw 15vw 15vw 15vw 15vw 15vw;
  grid-column-gap: 1vw;
}

#cat_one {
  display: grid;
  grid-template-rows: 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-row-gap: 1vw;
}


</style>
